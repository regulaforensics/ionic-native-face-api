import { IonicNativePlugin } from '@ionic-native/core';
export declare class FaceCaptureException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): FaceCaptureException;
}
export declare class LivenessErrorException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): LivenessErrorException;
}
export declare class MatchFacesException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): MatchFacesException;
}
export declare class ComparedFacesPairException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): ComparedFacesPairException;
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
    exception?: ComparedFacesPairException;
    static fromJson(jsonObject?: any): ComparedFacesPair;
}
export declare class FaceCaptureResponse {
    exception?: FaceCaptureException;
    image?: Image;
    static fromJson(jsonObject?: any): FaceCaptureResponse;
}
export declare class LivenessResponse {
    bitmap?: string;
    liveness?: number;
    exception?: LivenessErrorException;
    static fromJson(jsonObject?: any): LivenessResponse;
}
export declare class MatchFacesResponse {
    exception?: MatchFacesException;
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
export declare class MatchFacesRequest {
    similarityThreshold?: number;
    images?: Image[];
    customMetadata?: any;
    static fromJson(jsonObject?: any): MatchFacesRequest;
}
export declare const ComparedFacesPairErrorCodes: {
    IMAGE_EMPTY: number;
    FACE_NOT_DETECTED: number;
    LANDMARKS_NOT_DETECTED: number;
    FACE_ALIGNER_FAILED: number;
    DESCRIPTOR_EXTRACTOR_ERROR: number;
    API_CALL_FAILED: number;
};
export declare const FaceCaptureResultCodes: {
    CANCEL: number;
    CAMERA_NOT_AVAILABLE: number;
    CAMERA_NO_PERMISSION: number;
    IN_PROGRESS_ALREADY: number;
    CONTEXT_IS_NULL: number;
};
export declare const ImageType: {
    IMAGE_TYPE_PRINTED: number;
    IMAGE_TYPE_RFID: number;
    IMAGE_TYPE_LIVE: number;
    IMAGE_TYPE_LIVE_WITH_DOC: number;
};
export declare const LivenessErrorCode: {
    CONTEXT_IS_NULL: number;
    IN_PROGRESS_ALREADY: number;
    ZOOM_NOT_SUPPORTED: number;
    NO_LICENSE: number;
    CANCELLED: number;
    PROCESSING_TIMEOUT: number;
    API_CALL_FAILED: number;
    PROCESSING_FAILED: number;
    PROCESSING_ATTEMPTS_ENDED: number;
};
export declare const LivenessStatus: {
    PASSED: number;
    UNKNOWN: number;
};
export declare const MatchFacesErrorCodes: {
    IMAGE_EMPTY: number;
    FACE_NOT_DETECTED: number;
    LANDMARKS_NOT_DETECTED: number;
    FACE_ALIGNER_FAILED: number;
    DESCRIPTOR_EXTRACTOR_ERROR: number;
    NO_LICENSE: number;
    NOT_INITIALIZED: number;
    COMMAND_IS_NOT_SUPPORTED: number;
    COMMAND_PARAMS_READ_ERROR: number;
    API_CALL_FAILED: number;
    PROCESSING_FAILED: number;
};
export declare const Enum: {
    ComparedFacesPairErrorCodes: {
        IMAGE_EMPTY: number;
        FACE_NOT_DETECTED: number;
        LANDMARKS_NOT_DETECTED: number;
        FACE_ALIGNER_FAILED: number;
        DESCRIPTOR_EXTRACTOR_ERROR: number;
        API_CALL_FAILED: number;
    };
    FaceCaptureResultCodes: {
        CANCEL: number;
        CAMERA_NOT_AVAILABLE: number;
        CAMERA_NO_PERMISSION: number;
        IN_PROGRESS_ALREADY: number;
        CONTEXT_IS_NULL: number;
    };
    ImageType: {
        IMAGE_TYPE_PRINTED: number;
        IMAGE_TYPE_RFID: number;
        IMAGE_TYPE_LIVE: number;
        IMAGE_TYPE_LIVE_WITH_DOC: number;
    };
    LivenessErrorCode: {
        CONTEXT_IS_NULL: number;
        IN_PROGRESS_ALREADY: number;
        ZOOM_NOT_SUPPORTED: number;
        NO_LICENSE: number;
        CANCELLED: number;
        PROCESSING_TIMEOUT: number;
        API_CALL_FAILED: number;
        PROCESSING_FAILED: number;
        PROCESSING_ATTEMPTS_ENDED: number;
    };
    LivenessStatus: {
        PASSED: number;
        UNKNOWN: number;
    };
    MatchFacesErrorCodes: {
        IMAGE_EMPTY: number;
        FACE_NOT_DETECTED: number;
        LANDMARKS_NOT_DETECTED: number;
        FACE_ALIGNER_FAILED: number;
        DESCRIPTOR_EXTRACTOR_ERROR: number;
        NO_LICENSE: number;
        NOT_INITIALIZED: number;
        COMMAND_IS_NOT_SUPPORTED: number;
        COMMAND_PARAMS_READ_ERROR: number;
        API_CALL_FAILED: number;
        PROCESSING_FAILED: number;
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
export declare class FaceSDKOriginal extends IonicNativePlugin {
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
     *        // add configuration
     *  description
     *
     * @param {number} cameraId description
     * @return {Promise<any>} Returns a promise
     */
    presentFaceCaptureActivityByCameraId(cameraId: any): Promise<any>;
    /**
     *             // add configuration
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

export declare const FaceSDK: FaceSDKOriginal;