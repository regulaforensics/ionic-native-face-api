import { IonicNativePlugin } from '@ionic-native/core';
export declare class FaceCaptureError {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): FaceCaptureError;
}
export declare class FaceProcessorError {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): FaceProcessorError;
}
export declare class LivenessError {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): LivenessError;
}
export declare class MatchFacesError {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): MatchFacesError;
}
export declare class ComparedFace {
    tag?: string;
    imageType?: number;
    position?: number;
    static fromJson(jsonObject?: any): ComparedFace;
}
export declare class ComparedFacesPair {
    first?: ComparedFace;
    second?: ComparedFace;
    similarity?: number;
    error?: MatchFacesError;
    static fromJson(jsonObject?: any): ComparedFacesPair;
}
export declare class FaceCaptureResponse {
    error?: FaceCaptureError;
    image?: Image;
    static fromJson(jsonObject?: any): FaceCaptureResponse;
}
export declare class LivenessResponse {
    bitmap?: string;
    liveness?: number;
    error?: LivenessError;
    static fromJson(jsonObject?: any): LivenessResponse;
}
export declare class MatchFacesResponse {
    error?: FaceProcessorError;
    matchedFaces?: ComparedFacesPair[];
    unmatchedFaces?: ComparedFacesPair[];
    static fromJson(jsonObject?: any): MatchFacesResponse;
}
export declare class Image {
    imageType?: number;
    tag?: string;
    bitmap?: string;
    static fromJson(jsonObject?: any): Image;
}
export declare class LivenessRequest {
    normalImageData?: any[];
    scaledImageData?: any[];
    requestBody?: any[];
    guid?: string;
    static fromJson(jsonObject?: any): LivenessRequest;
}
export declare class MatchFacesRequest {
    similarityThreshold?: number;
    images?: Image[];
    customMetadata?: any;
    static fromJson(jsonObject?: any): MatchFacesRequest;
}
export declare const eFaceRProcessorErrorCodes: {
    FR_IMAGE_EMPTY: number;
    FR_FACE_NOT_DETECTED: number;
    FR_LANDMARKS_NOT_DETECTED: number;
    FR_FACE_ALIGHNER_FAILED: number;
    FR_DESCRIPTOR_EXTRACTOR_ERROR: number;
    SERVER_RESPONSE_IS_EMPTY: number;
    NO_LICENSE: number;
    NOT_INITIALIZED: number;
    COMMAND_IS_NOT_SUPPORTED: number;
    COMMAND_PARAMS_READ_ERROR: number;
};
export declare const eInputFaceType: {
    ift_DocumentPrinted: number;
    ift_DocumentRFID: number;
    ift_Live: number;
    ift_LiveWithDoc: number;
};
export declare const FaceCaptureResultCodes: {
    CANCEL: number;
    CAMERA_NOT_AVAILABLE: number;
    CAMERA_NO_PERMISSION: number;
    IN_PROGRESS_ALREADY: number;
};
export declare const LivenessErrorCode: {
    INTERNAL_ERROR: number;
    SERVER_ERROR: number;
    ZOOM_NOT_SUPPORTED: number;
    NO_LICENSE: number;
    CANCELLED: number;
    PROCESSING_TIMEOUT: number;
    SERVER_RESPONSE_IS_EMPTY: number;
    PROCESSING_FAILED: number;
    PROCESSING_ATTEMPT_ENDED: number;
};
export declare const LivenessStatus: {
    PASSED: number;
    UNKNOWN: number;
};
export declare const Enum: {
    eFaceRProcessorErrorCodes: {
        FR_IMAGE_EMPTY: number;
        FR_FACE_NOT_DETECTED: number;
        FR_LANDMARKS_NOT_DETECTED: number;
        FR_FACE_ALIGHNER_FAILED: number;
        FR_DESCRIPTOR_EXTRACTOR_ERROR: number;
        SERVER_RESPONSE_IS_EMPTY: number;
        NO_LICENSE: number;
        NOT_INITIALIZED: number;
        COMMAND_IS_NOT_SUPPORTED: number;
        COMMAND_PARAMS_READ_ERROR: number;
    };
    eInputFaceType: {
        ift_DocumentPrinted: number;
        ift_DocumentRFID: number;
        ift_Live: number;
        ift_LiveWithDoc: number;
    };
    FaceCaptureResultCodes: {
        CANCEL: number;
        CAMERA_NOT_AVAILABLE: number;
        CAMERA_NO_PERMISSION: number;
        IN_PROGRESS_ALREADY: number;
    };
    LivenessErrorCode: {
        INTERNAL_ERROR: number;
        SERVER_ERROR: number;
        ZOOM_NOT_SUPPORTED: number;
        NO_LICENSE: number;
        CANCELLED: number;
        PROCESSING_TIMEOUT: number;
        SERVER_RESPONSE_IS_EMPTY: number;
        PROCESSING_FAILED: number;
        PROCESSING_ATTEMPT_ENDED: number;
    };
    LivenessStatus: {
        PASSED: number;
        UNKNOWN: number;
    };
};
/**
 * @name FaceSDK
 * @description
 * This is a wrapper cordova plugin for Regula`s Face SDK.
 *
 * @usage
 * ```typescript
 * import { FaceSDK } from '@ionic-native/face-api/ngx';
 *
 *
 * constructor(public FaceSDK: FaceSDK) { }
 *
 * ...
 *
 *
 * ```
 */
export declare class FaceSDK extends IonicNativePlugin {
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    getServiceUrl(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    startLiveness(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    getFaceSdkVersion(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    presentFaceCaptureActivity(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    stopFaceCaptureActivity(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    stopLivenessProcessing(): Promise<any>;
    /**
     *  description
     *
     * @param {number} cameraId description
     * @return {Promise<any>} Returns a promise
     */
    presentFaceCaptureActivityByCameraId(cameraId: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} cameraId description
     * @return {Promise<any>} Returns a promise
     */
    startLivenessByCameraId(cameraId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} url description
     * @return {Promise<any>} Returns a promise
     */
    setServiceUrl(url: any): Promise<any>;
    /**
     *  description
     *
     * @param {MatchFacesRequest} request description
     * @return {Promise<any>} Returns a promise
     */
    matchFaces(request: any): Promise<any>;
}
