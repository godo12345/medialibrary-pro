import { MediaLibrary as MediaLibraryClass } from '@spatie/media-library-pro-core';
import { MediaLibrary } from '@spatie/media-library-pro-core/dist/types';
import {
    HiddenFields,
    Icon,
    Icons,
    ItemErrors,
    ListErrors,
    Thumb,
    Uploader,
    useMediaLibrary,
} from '@spatie/media-library-pro-react';
import * as React from 'react';
import { ItemInterface, ReactSortable } from 'react-sortablejs';

type Props = {
    name: string;
    initialValue?: MediaLibrary.Options['initialValue'];
    routePrefix?: string;
    translations?: MediaLibrary.Options['translations'];
    validationRules?: Partial<MediaLibraryClass['config']['validationRules']>;
    validationErrors?: { [key: string]: Array<string> } | Array<never>;
    sortable?: boolean;
    maxItems?: number;
    maxSizeForPreviewInBytes?: number;
    vapor?: MediaLibrary.Config['vapor'];
    vaporSignedStorageUrl?: MediaLibrary.Config['vaporSignedStorageUrl'];
    uploadDomain?: MediaLibrary.Config['uploadDomain'];
    withCredentials?: MediaLibrary.Config['withCredentials'];
    headers?: MediaLibrary.Config['headers'];
    fileTypeHelpText?: string;
    setMediaLibrary?: (mediaLibrary: MediaLibraryClass) => void;
    beforeUpload?: MediaLibraryClass['config']['beforeUpload'];
    afterUpload?: MediaLibraryClass['config']['afterUpload'];
    onChange?: (media: { [uuid: string]: MediaLibrary.MediaAttributes }) => void;
    onIsReadyToSubmitChange?: (isReadyToSubmit: boolean) => void;
    propertiesView?: (helpers: { object: MediaLibrary.MediaObject }) => React.ReactNode;
    fieldsView?: (helpers: {
        object: MediaLibrary.MediaObject;
        getCustomPropertyInputProps: (
            propertyName: string
        ) => { value: any; onChange: (event: React.ChangeEvent<HTMLInputElement>) => void };
        getCustomPropertyInputErrors: (
            propertyName: string
        ) => ReturnType<MediaLibraryClass['getCustomPropertyInputErrors']>;

        getNameInputProps: () => {
            value: any;
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        };
        getNameInputErrors: () => Array<string>;
    }) => React.ReactNode;
};

export default function MediaLibraryCollection({
    name,
    initialValue = [],
    translations = {},
    validationRules,
    validationErrors = {},
    routePrefix,
    sortable = true,
    maxItems,
    maxSizeForPreviewInBytes,
    vapor,
    vaporSignedStorageUrl,
    uploadDomain,
    withCredentials,
    headers,
    fileTypeHelpText,
    setMediaLibrary,
    propertiesView = DefaultPropertiesView,
    fieldsView = DefaultFieldsView,
    beforeUpload = () => {},
    afterUpload = () => {},
    onChange = () => {},
    onIsReadyToSubmitChange = () => {},
}: Props) {
    const {
        mediaLibrary,
        state,
        getImgProps,
        getNameInputProps,
        getNameInputErrors,
        getCustomPropertyInputProps,
        getCustomPropertyInputErrors,
        getFileInputProps,
        getDropZoneProps,
        setOrder,
        removeMedia,
        replaceMedia,
        getErrors,
        clearObjectErrors,
        clearInvalidMedia,
        isReadyToSubmit,
    } = useMediaLibrary({
        name,
        initialValue: initialValue,
        validationErrors: Array.isArray(validationErrors) ? {} : validationErrors,
        routePrefix,
        validationRules,
        translations,
        maxItems,
        maxSizeForPreviewInBytes,
        vapor,
        vaporSignedStorageUrl,
        uploadDomain,
        withCredentials,
        headers,
        beforeUpload,
        afterUpload,
        onChange,
    });

    React.useEffect(() => {
        onIsReadyToSubmitChange(isReadyToSubmit);
    }, [isReadyToSubmit]);

    React.useEffect(() => {
        if (setMediaLibrary && mediaLibrary) {
            setMediaLibrary(mediaLibrary);
        }
    }, [setMediaLibrary, mediaLibrary]);

    const dropZoneProps: any = getDropZoneProps();
    const fileInputProps: any = getFileInputProps();

    return (
        <>
            <Icons />
            <div
                className={`media-library media-library-multiple ${
                    state.media.length == 0 ? 'media-library-empty' : 'media-library-filled'
                } ${sortable && 'media-library-sortable'}`}
            >
                <ListErrors
                    invalidMedia={state.invalidMedia}
                    topLevelErrors={Array.isArray(validationErrors) ? undefined : validationErrors[name]}
                    onClear={clearInvalidMedia}
                />

                {state.media?.length > 0 && (
                    <div className="media-library-items">
                        {/* @ts-ignore */}
                        <ReactSortable
                            list={state.media.map(
                                (object): ItemInterface => {
                                    return { id: object.attributes.uuid, content: object };
                                }
                            )}
                            setList={(newState) => {
                                setOrder(
                                    Array.from(newState || []).map((element) => {
                                        return element.id as string;
                                    })
                                );
                            }}
                        >
                            {state.media.map((object) => {
                                const objectErrors = getErrors(object);

                                return (
                                    <div
                                        className="media-library-item media-library-item-row"
                                        key={object.attributes.uuid}
                                        data-media-library-uuid={object.attributes.uuid}
                                    >
                                        {sortable && (
                                            <div className="drag-handle media-library-row-drag">
                                                {sortable && <Icon icon="drag" />}
                                            </div>
                                        )}

                                        <Thumb
                                            uploadInfo={object.upload}
                                            validationRules={validationRules}
                                            imgProps={getImgProps(object)}
                                            onReplace={(file: File) => replaceMedia(object, file)}
                                        />

                                        {!!objectErrors.length ? (
                                            <ItemErrors
                                                objectErrors={objectErrors}
                                                onBack={() => clearObjectErrors(object)}
                                            />
                                        ) : (
                                            <>
                                                {propertiesView({ object })}

                                                {fieldsView({
                                                    object,
                                                    getCustomPropertyInputProps: (propertyName: string) =>
                                                        getCustomPropertyInputProps(object, propertyName),
                                                    getCustomPropertyInputErrors: (propertyName: string) =>
                                                        getCustomPropertyInputErrors(object, propertyName),
                                                    getNameInputProps: () => getNameInputProps(object),
                                                    getNameInputErrors: () => getNameInputErrors(object),
                                                })}
                                            </>
                                        )}

                                        <div
                                            className="media-library-row-remove"
                                            onClick={() => removeMedia(object)}
                                            {...{ dusk: 'remove' }}
                                        >
                                            <Icon icon="remove" />
                                        </div>
                                    </div>
                                );
                            })}
                        </ReactSortable>
                    </div>
                )}

                <HiddenFields name={name} mediaState={state.media} />

                <div
                    className={
                        !maxItems || state.media.length < maxItems ? 'media-library-uploader' : 'media-library-hidden'
                    }
                >
                    <Uploader {...dropZoneProps} {...fileInputProps} add multiple fileTypeHelpText={fileTypeHelpText} />
                </div>
            </div>
        </>
    );
}

type DefaultPropertiesViewProps = {
    object: MediaLibrary.MediaObject;
};

function DefaultPropertiesView({ object }: DefaultPropertiesViewProps) {
    return (
        <div className="media-library-properties media-library-properties-fixed">
            {object.attributes.extension && (
                <div className="media-library-property">{object.attributes.extension.toUpperCase()}</div>
            )}
            {object.attributes.size && (
                <div className="media-library-property">{(object.attributes.size / 1024).toFixed(2)} KB</div>
            )}
            {object.attributes.original_url && (
                <div className="media-library-property">
                    <a
                        href={object.attributes.original_url}
                        download
                        target="_blank"
                        className="media-library-text-link"
                    >
                        {window.mediaLibraryTranslations.download}
                    </a>
                </div>
            )}
        </div>
    );
}

type DefaultFieldsViewProps = {
    object: MediaLibrary.MediaObject;
    getNameInputProps: () => {
        value: any;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
    getNameInputErrors: () => Array<string>;
    getCustomPropertyInputProps: (
        propertyName: string
    ) => {
        value: any;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    };
    getCustomPropertyInputErrors: (propertyName: string) => Array<string>;
};

function DefaultFieldsView({ getNameInputProps, getNameInputErrors }: DefaultFieldsViewProps) {
    const nameInputProps: any = getNameInputProps();
    const duskProps: any = { dusk: 'media-library-field-name' };

    return (
        <div className="media-library-properties">
            <div className="media-library-field">
                <label className="media-library-label">{window.mediaLibraryTranslations.name}</label>
                <input className="media-library-input" {...nameInputProps} {...duskProps} />
                {getNameInputErrors().map((error) => (
                    <p key={error} className="media-library-field-error">
                        {error}
                    </p>
                ))}
            </div>
        </div>
    );
}
