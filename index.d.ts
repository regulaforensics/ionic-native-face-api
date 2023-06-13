import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare class FaceCaptureException {
    errorCode?: string;
    message?: string;
    static fromJson(jsonObject?: any): FaceCaptureException | undefined;
}
export declare class InitException {
    errorCode?: string;
    message?: string;
    static fromJson(jsonObject?: any): InitException | undefined;
}
export declare class LivenessErrorException {
    errorCode?: string;
    underlyingException?: LivenessBackendException;
    message?: string;
    static fromJson(jsonObject?: any): LivenessErrorException | undefined;
}
export declare class LivenessBackendException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): LivenessBackendException | undefined;
}
export declare class MatchFacesException {
    errorCode?: string;
    message?: string;
    static fromJson(jsonObject?: any): MatchFacesException | undefined;
}
export declare class FaceCaptureResponse {
    exception?: FaceCaptureException;
    image?: Image;
    static fromJson(jsonObject?: any): FaceCaptureResponse | undefined;
}
export declare class LivenessResponse {
    bitmap?: string;
    liveness?: string;
    tag?: string;
    transactionId?: string;
    exception?: LivenessErrorException;
    static fromJson(jsonObject?: any): LivenessResponse | undefined;
}
export declare class MatchFacesResponse {
    tag?: string;
    exception?: MatchFacesException;
    detections?: MatchFacesDetection[];
    results?: MatchFacesComparedFacesPair[];
    static fromJson(jsonObject?: any): MatchFacesResponse | undefined;
}
export declare class Image {
    imageType?: number;
    bitmap?: string;
    tag?: string;
    imageData?: string;
    static fromJson(jsonObject?: any): Image | undefined;
}
export declare class MatchFacesRequest {
    images?: MatchFacesImage[];
    customMetadata?: any;
    thumbnails?: boolean;
    tag?: string;
    static fromJson(jsonObject?: any): MatchFacesRequest | undefined;
}
export declare class MatchFacesImage {
    imageType?: number;
    detectAll?: boolean;
    bitmap?: string;
    identifier?: string;
    static fromJson(jsonObject?: any): MatchFacesImage | undefined;
}
export declare class MatchFacesComparedFacesPair {
    first?: MatchFacesComparedFace;
    second?: MatchFacesComparedFace;
    similarity?: number;
    score?: number;
    exception?: MatchFacesException;
    static fromJson(jsonObject?: any): MatchFacesComparedFacesPair | undefined;
}
export declare class MatchFacesComparedFace {
    face?: MatchFacesDetectionFace;
    image?: MatchFacesImage;
    faceIndex?: number;
    imageIndex?: number;
    static fromJson(jsonObject?: any): MatchFacesComparedFace | undefined;
}
export declare class MatchFacesDetectionFace {
    faceIndex?: number;
    landmarks?: Point[];
    faceRect?: Rect;
    rotationAngle?: number;
    thumbnail?: string;
    static fromJson(jsonObject?: any): MatchFacesDetectionFace | undefined;
}
export declare class MatchFacesDetection {
    image?: MatchFacesImage;
    imageIndex?: number;
    faces?: MatchFacesDetectionFace[];
    exception?: MatchFacesException;
    static fromJson(jsonObject?: any): MatchFacesDetection | undefined;
}
export declare class Point {
    x?: number;
    y?: number;
    static fromJson(jsonObject?: any): Point | undefined;
}
export declare class Rect {
    bottom?: number;
    top?: number;
    left?: number;
    right?: number;
    static fromJson(jsonObject?: any): Rect | undefined;
}
export declare class MatchFacesSimilarityThresholdSplit {
    matchedFaces?: MatchFacesComparedFacesPair[];
    unmatchedFaces?: MatchFacesComparedFacesPair[];
    static fromJson(jsonObject?: any): MatchFacesSimilarityThresholdSplit | undefined;
}
export declare class DetectFacesRequest {
    tag?: string;
    scenario?: string;
    image?: string;
    configuration?: DetectFacesConfiguration;
    static fromJson(jsonObject?: any): DetectFacesRequest | undefined;
}
export declare class DetectFacesConfiguration {
    attributes?: string[];
    customQuality?: ImageQualityCharacteristic[];
    outputImageParams?: OutputImageParams;
    onlyCentralFace?: boolean;
    static fromJson(jsonObject?: any): DetectFacesConfiguration | undefined;
}
export declare class OutputImageParams {
    backgroundColor?: string;
    crop?: OutputImageCrop;
    static fromJson(jsonObject?: any): OutputImageParams | undefined;
}
export declare class OutputImageCrop {
    type?: number;
    size?: Size;
    padColor?: string;
    returnOriginalRect?: boolean;
    static fromJson(jsonObject?: any): OutputImageCrop | undefined;
}
export declare class ImageQualityCharacteristic {
    characteristicName?: string;
    imageQualityGroup?: number;
    recommendedRange?: ImageQualityRange;
    customRange?: ImageQualityRange;
    static fromJson(jsonObject?: any): ImageQualityCharacteristic | undefined;
}
export declare class ImageQualityRange {
    min?: number;
    max?: number;
    static fromJson(jsonObject?: any): ImageQualityRange | undefined;
}
export declare class Size {
    width?: number;
    height?: number;
    static fromJson(jsonObject?: any): Size | undefined;
}
export declare class DetectFacesResponse {
    detection?: DetectFaceResult;
    scenario?: string;
    error?: DetectFacesErrorException;
    allDetections?: DetectFaceResult[];
    static fromJson(jsonObject?: any): DetectFacesResponse | undefined;
}
export declare class DetectFacesErrorException {
    errorCode?: string;
    underlyingException?: DetectFacesBackendException;
    message?: string;
    static fromJson(jsonObject?: any): DetectFacesErrorException | undefined;
}
export declare class DetectFacesBackendException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): DetectFacesBackendException | undefined;
}
export declare class DetectFaceResult {
    quality?: ImageQualityResult[];
    attributes?: DetectFacesAttributeResult[];
    landmarks?: Point[];
    crop?: string;
    faceRect?: Rect;
    originalRect?: Rect;
    isQualityCompliant?: boolean;
    static fromJson(jsonObject?: any): DetectFaceResult | undefined;
}
export declare class ImageQualityResult {
    name?: string;
    group?: number;
    status?: number;
    range?: ImageQualityRange;
    value?: number;
    static fromJson(jsonObject?: any): ImageQualityResult | undefined;
}
export declare class DetectFacesAttributeResult {
    attribute?: string;
    value?: string;
    range?: ImageQualityRange;
    confidence?: number;
    static fromJson(jsonObject?: any): DetectFacesAttributeResult | undefined;
}
export declare class Person {
    name?: string;
    updatedAt?: string;
    id?: number;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): Person | undefined;
}
export declare class PersonGroup {
    name?: string;
    id?: number;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): PersonGroup | undefined;
}
export declare class PersonImage {
    path?: string;
    url?: string;
    contentType?: string;
    id?: number;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): PersonImage | undefined;
}
export declare class ImageUpload {
    imageData?: string;
    static fromJson(jsonObject?: any): ImageUpload | undefined;
}
export declare class EditGroupPersonsRequest {
    personIdsToAdd?: number[];
    personIdsToRemove?: number[];
    static fromJson(jsonObject?: any): EditGroupPersonsRequest | undefined;
}
export declare class SearchPersonRequest {
    groupIdsForSearch?: number[];
    threshold?: number;
    limit?: number;
    imageUpload?: ImageUpload;
    static fromJson(jsonObject?: any): SearchPersonRequest | undefined;
}
export declare class SearchPerson {
    images?: SearchPersonImage[];
    name?: string;
    updatedAt?: string;
    id?: number;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): SearchPerson | undefined;
}
export declare class SearchPersonImage {
    similarity?: number;
    distance?: number;
    path?: string;
    url?: string;
    contentType?: string;
    id?: number;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): SearchPersonImage | undefined;
}
export declare const ImageQualityGroupName: {
    IMAGE_CHARACTERISTICS: number;
    HEAD_SIZE_AND_POSITION: number;
    FACE_QUALITY: number;
    EYES_CHARACTERISTICS: number;
    SHADOWS_AND_LIGHTNING: number;
    POSE_AND_EXPRESSION: number;
    HEAD_OCCLUSION: number;
    BACKGROUND: number;
    UNKNOWN: number;
};
export declare const DetectFacesErrorCode: {
    IMAGE_EMPTY: string;
    FR_FACE_NOT_DETECTED: string;
    FACER_NO_LICENSE: string;
    FACER_IS_NOT_INITIALIZED: string;
    FACER_COMMAND_IS_NOT_SUPPORTED: string;
    FACER_COMMAND_PARAMS_READ_ERROR: string;
    PROCESSING_FAILED: string;
    REQUEST_FAILED: string;
    API_CALL_FAILED: string;
};
export declare const InitErrorCode: {
    IN_PROGRESS_ALREADY: string;
    CONTEXT_IS_NULL: string;
    MISSING_CORE: string;
    INTERNAL_CORE_ERROR: string;
};
export declare const LivenessStatus: {
    PASSED: string;
    UNKNOWN: string;
};
export declare const CameraErrorCode: {
    CAMERA_NOT_AVAILABLE: string;
    CAMERA_NO_PERMISSION: string;
};
export declare const LivenessErrorCode: {
    CONTEXT_IS_NULL: string;
    IN_PROGRESS_ALREADY: string;
    ZOOM_NOT_SUPPORTED: string;
    NO_LICENSE: string;
    CANCELLED: string;
    PROCESSING_TIMEOUT: string;
    API_CALL_FAILED: string;
    PROCESSING_FAILED: string;
    NOT_INITIALIZED: string;
    CAMERA_NO_PERMISSION: string;
    CAMERA_NOT_AVAILABLE: string;
    PROCESSING_FRAME_FAILED: string;
};
export declare const DetectFacesBackendErrorCode: {
    FR_FACE_NOT_DETECTED: number;
    FACER_NO_LICENSE: number;
    FACER_IS_NOT_INITIALIZED: number;
    FACER_COMMAND_IS_NOT_SUPPORTED: number;
    FACER_COMMAND_PARAMS_READ_ERROR: number;
    UNDEFINED: number;
};
export declare const MatchFacesErrorCode: {
    IMAGE_EMPTY: string;
    FACE_NOT_DETECTED: string;
    LANDMARKS_NOT_DETECTED: string;
    FACE_ALIGNER_FAILED: string;
    DESCRIPTOR_EXTRACTOR_ERROR: string;
    NO_LICENSE: string;
    IMAGES_COUNT_LIMIT_EXCEEDED: string;
    API_CALL_FAILED: string;
    PROCESSING_FAILED: string;
};
export declare const ImageQualityCharacteristicName: {
    IMAGE_WIDTH: string;
    IMAGE_HEIGHT: string;
    IMAGE_WIDTH_TO_HEIGHT: string;
    IMAGE_CHANNELS_NUMBER: string;
    PADDING_RATIO: string;
    FACE_MID_POINT_HORIZONTAL_POSITION: string;
    FACE_MID_POINT_VERTICAL_POSITION: string;
    HEAD_WIDTH_RATIO: string;
    HEAD_HEIGHT_RATIO: string;
    EYES_DISTANCE: string;
    YAW: string;
    PITCH: string;
    ROLL: string;
    BLUR_LEVEL: string;
    NOISE_LEVEL: string;
    UNNATURAL_SKIN_TONE: string;
    FACE_DYNAMIC_RANGE: string;
    EYE_RIGHT_CLOSED: string;
    EYE_LEFT_CLOSED: string;
    EYE_RIGHT_OCCLUDED: string;
    EYE_LEFT_OCCLUDED: string;
    EYES_RED: string;
    EYE_RIGHT_COVERED_WITH_HAIR: string;
    EYE_LEFT_COVERED_WITH_HAIR: string;
    OFF_GAZE: string;
    TOO_DARK: string;
    TOO_LIGHT: string;
    FACE_GLARE: string;
    SHADOWS_ON_FACE: string;
    SHOULDERS_POSE: string;
    EXPRESSION_LEVEL: string;
    MOUTH_OPEN: string;
    SMILE: string;
    DARK_GLASSES: string;
    REFLECTION_ON_GLASSES: string;
    FRAMES_TOO_HEAVY: string;
    FACE_OCCLUDED: string;
    HEAD_COVERING: string;
    FOREHEAD_COVERING: string;
    STRONG_MAKEUP: string;
    HEAD_PHONES: string;
    MEDICAL_MASK: string;
    BACKGROUND_UNIFORMITY: string;
    SHADOWS_ON_BACKGROUND: string;
    OTHER_FACES: string;
    BACKGROUND_COLOR_MATCH: string;
    UNKNOWN: string;
    IMAGE_CHARACTERISTIC_ALL_RECOMMENDED: string;
    HEAD_SIZE_AND_POSITION_ALL_RECOMMENDED: string;
    FACE_IMAGE_QUALITY_ALL_RECOMMENDED: string;
    EYES_CHARACTERISTICS_ALL_RECOMMENDED: string;
    SHADOW_AND_LIGHTING_ALL_RECOMMENDED: string;
    POSE_AND_EXPRESSION_ALL_RECOMMENDED: string;
    HEAD_OCCLUSION_ALL_RECOMMENDED: string;
    QUALITY_BACKGROUND_ALL_RECOMMENDED: string;
};
export declare const DetectFacesScenario: {
    CROP_CENTRAL_FACE: string;
    CROP_ALL_FACES: string;
    THUMBNAIL: string;
    ATTRIBUTES_ALL: string;
    QUALITY_FULL: string;
    QUALITY_ICAO: string;
    QUALITY_VISA_SCHENGEN: string;
    QUALITY_VISA_USA: string;
};
export declare const OutputImageCropAspectRatio: {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: number;
};
export declare const LivenessSkipStep: {
    NONE: number;
    START_STEP: number;
    DONE_STEP: number;
};
export declare const ImageQualityResultStatus: {
    IMAGE_QUALITY_RESULT_STATUS_FALSE: number;
    IMAGE_QUALITY_RESULT_STATUS_TRUE: number;
    IMAGE_QUALITY_RESULT_STATUS_UNDETERMINED: number;
};
export declare const ImageType: {
    PRINTED: number;
    RFID: number;
    LIVE: number;
    DOCUMENT_WITH_LIVE: number;
    EXTERNAL: number;
    GHOST_PORTRAIT: number;
};
export declare const FaceCaptureErrorCode: {
    CANCEL: string;
    CAMERA_NOT_AVAILABLE: string;
    CAMERA_NO_PERMISSION: string;
    IN_PROGRESS_ALREADY: string;
    CONTEXT_IS_NULL: string;
    TIMEOUT: string;
    NOT_INITIALIZED: string;
};
export declare const LivenessBackendErrorCode: {
    UNDEFINED: number;
    NO_LICENSE: number;
    LOW_QUALITY: number;
    HIGH_ASYMMETRY: number;
    TRACK_BREAK: number;
    CLOSED_EYES_DETECTED: number;
    FACE_OVER_EMOTIONAL: number;
    SUNGLASSES_DETECTED: number;
    SMALL_AGE: number;
    HEADDRESS_DETECTED: number;
    MEDICINE_MASK_DETECTED: number;
    OCCLUSION_DETECTED: number;
    FOREHEAD_GLASSES_DETECTED: number;
    MOUTH_OPENED: number;
    ART_MASK_DETECTED: number;
    NOT_MATCHED: number;
    IMAGES_COUNT_LIMIT_EXCEEDED: number;
    ELECTRONIC_DEVICE_DETECTED: number;
    WRONG_GEO: number;
    WRONG_OF: number;
    WRONG_VIEW: number;
};
export declare const DetectFacesAttribute: {
    AGE: string;
    EYE_RIGHT: string;
    EYE_LEFT: string;
    EMOTION: string;
    SMILE: string;
    GLASSES: string;
    HEAD_COVERING: string;
    FOREHEAD_COVERING: string;
    MOUTH: string;
    MEDICAL_MASK: string;
    OCCLUSION: string;
    STRONG_MAKEUP: string;
    HEADPHONES: string;
};
export declare const Enum: {
    ImageQualityGroupName: {
        IMAGE_CHARACTERISTICS: number;
        HEAD_SIZE_AND_POSITION: number;
        FACE_QUALITY: number;
        EYES_CHARACTERISTICS: number;
        SHADOWS_AND_LIGHTNING: number;
        POSE_AND_EXPRESSION: number;
        HEAD_OCCLUSION: number;
        BACKGROUND: number;
        UNKNOWN: number;
    };
    DetectFacesErrorCode: {
        IMAGE_EMPTY: string;
        FR_FACE_NOT_DETECTED: string;
        FACER_NO_LICENSE: string;
        FACER_IS_NOT_INITIALIZED: string;
        FACER_COMMAND_IS_NOT_SUPPORTED: string;
        FACER_COMMAND_PARAMS_READ_ERROR: string;
        PROCESSING_FAILED: string;
        REQUEST_FAILED: string;
        API_CALL_FAILED: string;
    };
    InitErrorCode: {
        IN_PROGRESS_ALREADY: string;
        CONTEXT_IS_NULL: string;
        MISSING_CORE: string;
        INTERNAL_CORE_ERROR: string;
    };
    LivenessStatus: {
        PASSED: string;
        UNKNOWN: string;
    };
    CameraErrorCode: {
        CAMERA_NOT_AVAILABLE: string;
        CAMERA_NO_PERMISSION: string;
    };
    LivenessErrorCode: {
        CONTEXT_IS_NULL: string;
        IN_PROGRESS_ALREADY: string;
        ZOOM_NOT_SUPPORTED: string;
        NO_LICENSE: string;
        CANCELLED: string;
        PROCESSING_TIMEOUT: string;
        API_CALL_FAILED: string;
        PROCESSING_FAILED: string;
        NOT_INITIALIZED: string;
        CAMERA_NO_PERMISSION: string;
        CAMERA_NOT_AVAILABLE: string;
        PROCESSING_FRAME_FAILED: string;
    };
    DetectFacesBackendErrorCode: {
        FR_FACE_NOT_DETECTED: number;
        FACER_NO_LICENSE: number;
        FACER_IS_NOT_INITIALIZED: number;
        FACER_COMMAND_IS_NOT_SUPPORTED: number;
        FACER_COMMAND_PARAMS_READ_ERROR: number;
        UNDEFINED: number;
    };
    MatchFacesErrorCode: {
        IMAGE_EMPTY: string;
        FACE_NOT_DETECTED: string;
        LANDMARKS_NOT_DETECTED: string;
        FACE_ALIGNER_FAILED: string;
        DESCRIPTOR_EXTRACTOR_ERROR: string;
        NO_LICENSE: string;
        IMAGES_COUNT_LIMIT_EXCEEDED: string;
        API_CALL_FAILED: string;
        PROCESSING_FAILED: string;
    };
    ImageQualityCharacteristicName: {
        IMAGE_WIDTH: string;
        IMAGE_HEIGHT: string;
        IMAGE_WIDTH_TO_HEIGHT: string;
        IMAGE_CHANNELS_NUMBER: string;
        PADDING_RATIO: string;
        FACE_MID_POINT_HORIZONTAL_POSITION: string;
        FACE_MID_POINT_VERTICAL_POSITION: string;
        HEAD_WIDTH_RATIO: string;
        HEAD_HEIGHT_RATIO: string;
        EYES_DISTANCE: string;
        YAW: string;
        PITCH: string;
        ROLL: string;
        BLUR_LEVEL: string;
        NOISE_LEVEL: string;
        UNNATURAL_SKIN_TONE: string;
        FACE_DYNAMIC_RANGE: string;
        EYE_RIGHT_CLOSED: string;
        EYE_LEFT_CLOSED: string;
        EYE_RIGHT_OCCLUDED: string;
        EYE_LEFT_OCCLUDED: string;
        EYES_RED: string;
        EYE_RIGHT_COVERED_WITH_HAIR: string;
        EYE_LEFT_COVERED_WITH_HAIR: string;
        OFF_GAZE: string;
        TOO_DARK: string;
        TOO_LIGHT: string;
        FACE_GLARE: string;
        SHADOWS_ON_FACE: string;
        SHOULDERS_POSE: string;
        EXPRESSION_LEVEL: string;
        MOUTH_OPEN: string;
        SMILE: string;
        DARK_GLASSES: string;
        REFLECTION_ON_GLASSES: string;
        FRAMES_TOO_HEAVY: string;
        FACE_OCCLUDED: string;
        HEAD_COVERING: string;
        FOREHEAD_COVERING: string;
        STRONG_MAKEUP: string;
        HEAD_PHONES: string;
        MEDICAL_MASK: string;
        BACKGROUND_UNIFORMITY: string;
        SHADOWS_ON_BACKGROUND: string;
        OTHER_FACES: string;
        BACKGROUND_COLOR_MATCH: string;
        UNKNOWN: string;
        IMAGE_CHARACTERISTIC_ALL_RECOMMENDED: string;
        HEAD_SIZE_AND_POSITION_ALL_RECOMMENDED: string;
        FACE_IMAGE_QUALITY_ALL_RECOMMENDED: string;
        EYES_CHARACTERISTICS_ALL_RECOMMENDED: string;
        SHADOW_AND_LIGHTING_ALL_RECOMMENDED: string;
        POSE_AND_EXPRESSION_ALL_RECOMMENDED: string;
        HEAD_OCCLUSION_ALL_RECOMMENDED: string;
        QUALITY_BACKGROUND_ALL_RECOMMENDED: string;
    };
    DetectFacesScenario: {
        CROP_CENTRAL_FACE: string;
        CROP_ALL_FACES: string;
        THUMBNAIL: string;
        ATTRIBUTES_ALL: string;
        QUALITY_FULL: string;
        QUALITY_ICAO: string;
        QUALITY_VISA_SCHENGEN: string;
        QUALITY_VISA_USA: string;
    };
    OutputImageCropAspectRatio: {
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: number;
    };
    LivenessSkipStep: {
        NONE: number;
        START_STEP: number;
        DONE_STEP: number;
    };
    ImageQualityResultStatus: {
        IMAGE_QUALITY_RESULT_STATUS_FALSE: number;
        IMAGE_QUALITY_RESULT_STATUS_TRUE: number;
        IMAGE_QUALITY_RESULT_STATUS_UNDETERMINED: number;
    };
    ImageType: {
        PRINTED: number;
        RFID: number;
        LIVE: number;
        DOCUMENT_WITH_LIVE: number;
        EXTERNAL: number;
        GHOST_PORTRAIT: number;
    };
    FaceCaptureErrorCode: {
        CANCEL: string;
        CAMERA_NOT_AVAILABLE: string;
        CAMERA_NO_PERMISSION: string;
        IN_PROGRESS_ALREADY: string;
        CONTEXT_IS_NULL: string;
        TIMEOUT: string;
        NOT_INITIALIZED: string;
    };
    LivenessBackendErrorCode: {
        UNDEFINED: number;
        NO_LICENSE: number;
        LOW_QUALITY: number;
        HIGH_ASYMMETRY: number;
        TRACK_BREAK: number;
        CLOSED_EYES_DETECTED: number;
        FACE_OVER_EMOTIONAL: number;
        SUNGLASSES_DETECTED: number;
        SMALL_AGE: number;
        HEADDRESS_DETECTED: number;
        MEDICINE_MASK_DETECTED: number;
        OCCLUSION_DETECTED: number;
        FOREHEAD_GLASSES_DETECTED: number;
        MOUTH_OPENED: number;
        ART_MASK_DETECTED: number;
        NOT_MATCHED: number;
        IMAGES_COUNT_LIMIT_EXCEEDED: number;
        ELECTRONIC_DEVICE_DETECTED: number;
        WRONG_GEO: number;
        WRONG_OF: number;
        WRONG_VIEW: number;
    };
    DetectFacesAttribute: {
        AGE: string;
        EYE_RIGHT: string;
        EYE_LEFT: string;
        EMOTION: string;
        SMILE: string;
        GLASSES: string;
        HEAD_COVERING: string;
        FOREHEAD_COVERING: string;
        MOUTH: string;
        MEDICAL_MASK: string;
        OCCLUSION: string;
        STRONG_MAKEUP: string;
        HEADPHONES: string;
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
export declare class FaceSDKOriginal extends AwesomeCordovaNativePlugin {
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
    init(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    deinit(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    isInitialized(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    stopLivenessProcessing(): Promise<any>;
    /**
     *  sets headers for http request
     *
     * @param {map} headers key - header name
     *  value - header value
     * @return {Promise<any>} Returns a promise
     */
    setRequestHeaders(headers: any): Promise<any>;
    /**
     *  description
     *
     * @param {object} config int cameraId - set camera on Android
     *  CameraPosition cameraPositionIOS - set camera on iOS
     *  boolean cameraSwitchEnabled
     *  boolean showHelpTextAnimation
     *  boolean forceToUseHuaweiVision
     *  boolean closeButtonEnabled
     *  boolean torchButtonEnabled
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
     *  boolean forceToUseHuaweiVision
     *  boolean closeButtonEnabled
     *  boolean torchButtonEnabled
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
     * @param {DetectFacesRequest} request description
     * @return {Promise<any>} Returns a promise
     */
    detectFaces(request: any): Promise<any>;
    /**
     *  description
     *
     * @param {MatchFacesRequest} request description
     * @param {object} config boolean forceToUseHuaweiVision
     * @return {Promise<any>} Returns a promise
     */
    matchFacesWithConfig(request: any, config: any): Promise<any>;
    /**
     *  Use this method to set OnClickListener
     *  for buttons from UICustomizationLayer
     *
     * @return {Promise<any>} Returns a promise
     */
    setOnCustomButtonTappedListener(): Observable<any>;
    /**
     *  Use this method to set UICustomizationLayer
     *
     * @param {object} json custom UI layer JSON
     * @return {Promise<any>} Returns a promise
     */
    setUiCustomizationLayer(json: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} language description
     * @return {Promise<any>} Returns a promise
     */
    setLanguage(language: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} faces facesArray: MatchFacesComparedFacesPair[]
     *  faces = JSON.stringify(facesArray)
     * @param {number} similarity description
     * @return {Promise<any>} Returns a promise
     */
    matchFacesSimilarityThresholdSplit(faces: any, similarity: any): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    getPersons(): Promise<any>;
    /**
     *  description
     *
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getPersonsForPage(page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @return {Promise<any>} Returns a promise
     */
    getPerson(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} name description
     * @param {object} metadata description
     * @return {Promise<any>} Returns a promise
     */
    createPerson(name: any, metadata: any): Promise<any>;
    /**
     *  description
     *
     * @param {int} personId description
     * @param {string} name description
     * @param {object} metadata description
     * @return {Promise<any>} Returns a promise
     */
    updatePerson(personId: any, name: any, metadata: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @return {Promise<any>} Returns a promise
     */
    deletePerson(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonImages(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getPersonImagesForPage(personId: any, page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @param {ImageUpload} image description
     * @return {Promise<any>} Returns a promise
     */
    addPersonImage(personId: any, image: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @param {number} imageId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonImage(personId: any, imageId: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @param {number} imageId description
     * @return {Promise<any>} Returns a promise
     */
    deletePersonImage(personId: any, imageId: any): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    getGroups(): Promise<any>;
    /**
     *  description
     *
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getGroupsForPage(page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonGroups(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} personId description
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getPersonGroupsForPage(personId: any, page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} name description
     * @param {object} metadata description
     * @return {Promise<any>} Returns a promise
     */
    createGroup(name: any, metadata: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} groupId description
     * @return {Promise<any>} Returns a promise
     */
    getGroup(groupId: any): Promise<any>;
    /**
     *  description
     *
     * @param {int} groupId description
     * @param {string} name description
     * @param {object} metadata description
     * @return {Promise<any>} Returns a promise
     */
    updateGroup(groupId: any, name: any, metadata: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} groupId description
     * @param {EditGroupPersonsRequest} editGroupPersonsRequest description
     * @return {Promise<any>} Returns a promise
     */
    editPersonsInGroup(groupId: any, editGroupPersonsRequest: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} groupId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonsInGroup(groupId: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} groupId description
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getPersonsInGroupForPage(groupId: any, page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {number} groupId description
     * @return {Promise<any>} Returns a promise
     */
    deleteGroup(groupId: any): Promise<any>;
    /**
     *  description
     *
     * @param {SearchPersonRequest} searchPersonRequest description
     * @return {Promise<any>} Returns a promise
     */
    searchPerson(searchPersonRequest: any): Promise<any>;
}

export declare const FaceSDK: FaceSDKOriginal;