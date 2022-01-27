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
export declare class FaceCaptureResponse {
    exception?: FaceCaptureException;
    image?: Image;
    static fromJson(jsonObject?: any): FaceCaptureResponse;
}
export declare class LivenessResponse {
    bitmap?: string;
    liveness?: number;
    guid?: string;
    exception?: LivenessErrorException;
    static fromJson(jsonObject?: any): LivenessResponse;
}
export declare class MatchFacesResponse {
    exception?: MatchFacesException;
    detections?: MatchFacesDetection[];
    results?: MatchFacesComparedFacesPair[];
    static fromJson(jsonObject?: any): MatchFacesResponse;
}
export declare class Image {
    imageType?: number;
    bitmap?: string;
    static fromJson(jsonObject?: any): Image;
}
export declare class MatchFacesRequest {
    images?: MatchFacesImage[];
    customMetadata?: any;
    thumbnails?: boolean;
    static fromJson(jsonObject?: any): MatchFacesRequest;
}
export declare class MatchFacesImage {
    imageType?: number;
    detectAll?: boolean;
    bitmap?: string;
    identifier?: string;
    static fromJson(jsonObject?: any): MatchFacesImage;
}
export declare class MatchFacesComparedFacesPair {
    first?: MatchFacesComparedFace;
    second?: MatchFacesComparedFace;
    similarity?: number;
    score?: number;
    exception?: MatchFacesException;
    static fromJson(jsonObject?: any): MatchFacesComparedFacesPair;
}
export declare class MatchFacesComparedFace {
    face?: MatchFacesDetectionFace;
    image?: MatchFacesImage;
    faceIndex?: number;
    imageIndex?: number;
    static fromJson(jsonObject?: any): MatchFacesComparedFace;
}
export declare class MatchFacesDetectionFace {
    faceIndex?: number;
    landmarks?: Point[];
    faceRect?: Rect;
    rotationAngle?: number;
    thumbnail?: string;
    static fromJson(jsonObject?: any): MatchFacesDetectionFace;
}
export declare class MatchFacesDetection {
    image?: MatchFacesImage;
    imageIndex?: number;
    faces?: MatchFacesDetectionFace[];
    exception?: MatchFacesException;
    static fromJson(jsonObject?: any): MatchFacesDetection;
}
export declare class Point {
    x?: number;
    y?: number;
    static fromJson(jsonObject?: any): Point;
}
export declare class Rect {
    bottom?: number;
    top?: number;
    left?: number;
    right?: number;
    static fromJson(jsonObject?: any): Rect;
}
export declare class MatchFacesSimilarityThresholdSplit {
    results?: MatchFacesComparedFacesPair[];
    threshold?: number;
    matchedFaces?: MatchFacesComparedFacesPair[];
    unmatchedFaces?: MatchFacesComparedFacesPair[];
    constructor(results: any, threshold: any);
    getFaces(matched: boolean): MatchFacesComparedFacesPair[];
}
export declare const CameraPosition: {
    CameraPositionBack: number;
    CameraPositionFront: number;
};
export declare const FaceCaptureResultCodes: {
    CANCEL: number;
    CAMERA_NOT_AVAILABLE: number;
    CAMERA_NO_PERMISSION: number;
    IN_PROGRESS_ALREADY: number;
    CONTEXT_IS_NULL: number;
};
export declare const ImageType: {
    PRINTED: number;
    RFID: number;
    LIVE: number;
    DOCUMENT_WITH_LIVE: number;
    EXTERNAL: number;
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
    COUNT_LIMIT_EXCEEDED: number;
    API_CALL_FAILED: number;
    PROCESSING_FAILED: number;
};
export declare const Enum: {
    CameraPosition: {
        CameraPositionBack: number;
        CameraPositionFront: number;
    };
    FaceCaptureResultCodes: {
        CANCEL: number;
        CAMERA_NOT_AVAILABLE: number;
        CAMERA_NO_PERMISSION: number;
        IN_PROGRESS_ALREADY: number;
        CONTEXT_IS_NULL: number;
    };
    ImageType: {
        PRINTED: number;
        RFID: number;
        LIVE: number;
        DOCUMENT_WITH_LIVE: number;
        EXTERNAL: number;
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
        COUNT_LIMIT_EXCEEDED: number;
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
     *  description
     *
     * @param {object} config int cameraId - set camera on Android
     *  CameraPosition cameraPositionIOS - set camera on iOS
     *  boolean cameraSwitchEnabled
     *  boolean showHelpTextAnimation
     * @return {Promise<any>} Returns a promise
     */
    presentFaceCaptureActivityWithConfig(config: any): Promise<any>;
    /**
     *  description
     *
     * @param {object} config int cameraId - set camera on Android
     *  CameraPosition cameraPositionIOS - set camera on iOS
     *  boolean cameraSwitchEnabled
     *  boolean showHelpTextAnimation
     *  boolean locationTrackingEnabled
     * @return {Promise<any>} Returns a promise
     */
    startLivenessWithConfig(config: any): Promise<any>;
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
    /**
     *  description
     *
     * @param {string} language description
     * @return {Promise<any>} Returns a promise
     */
    setLanguage(language: any): Promise<any>;
}

export declare const FaceSDK: FaceSDKOriginal;