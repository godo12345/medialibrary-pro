import { AxiosHeaders, AxiosProgressEvent, AxiosRequestConfig, CancelToken } from 'axios';
type Options = {
    signedStorageUrl: string;
    bucket?: string;
    contentType?: string;
    expires?: string;
    visibility?: string;
    baseURL?: string;
    headers?: AxiosHeaders;
    cancelToken?: CancelToken;
    options?: AxiosRequestConfig;
    withCredentials: boolean;
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};
/**
 * Store a file in S3 and return its UUID, key, and other information.
 */
export default function vaporUpload(file: File, options?: Options): Promise<any>;
export {};
