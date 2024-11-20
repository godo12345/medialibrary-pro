import { AxiosProgressEvent, CancelTokenSource } from 'axios';
import { MediaLibrary } from '.';
export declare function getCancelTokenSource(): CancelTokenSource;
export declare const api: import("axios").AxiosInstance;
type UploadFileProps = {
    routePrefix: string;
    file: File;
    uuid: string;
    cancelTokenSource: CancelTokenSource;
    vapor: MediaLibrary['config']['vapor'];
    vaporSignedStorageUrl: MediaLibrary['config']['vaporSignedStorageUrl'];
    uploadDomain: string;
    withCredentials: boolean;
    headers: Record<string, string>;
    onUploadProgress: (progress: AxiosProgressEvent) => void;
};
export declare function uploadFile({ routePrefix, file, uuid, cancelTokenSource, vapor, vaporSignedStorageUrl, uploadDomain, withCredentials, headers, onUploadProgress, }: UploadFileProps): Promise<import("axios").AxiosResponse<any, any>>;
export {};
