import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class FaceCaptureException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): FaceCaptureException | undefined;
}
export declare class InitException {
    errorCode?: number;
    underlyingException?: LicenseException;
    message?: string;
    static fromJson(jsonObject?: any): InitException | undefined;
}
export declare class LicenseException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): LicenseException | undefined;
}
export declare class LivenessErrorException {
    errorCode?: number;
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
    errorCode?: number;
    message?: string;
    detailedErrorMessage?: string;
    static fromJson(jsonObject?: any): MatchFacesException | undefined;
}
export declare class DetectFacesErrorException {
    errorCode?: number;
    underlyingException?: DetectFacesBackendException;
    message?: string;
    static fromJson(jsonObject?: any): DetectFacesErrorException | undefined;
}
export declare class DetectFacesBackendException {
    errorCode?: number;
    message?: string;
    static fromJson(jsonObject?: any): DetectFacesBackendException | undefined;
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
    estimatedAge?: number;
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
    tag?: string;
    outputImageParams?: OutputImageParams;
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
    rotationAngle?: number;
    landmarks?: Point[];
    faceRect?: Rect;
    originalRect?: Rect;
    crop?: string;
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
export declare class Font {
    name?: string;
    style?: number;
    size?: number;
    static fromJson(jsonObject?: any): Font | undefined;
}
export declare class Person {
    name?: string;
    groups?: string[];
    updatedAt?: string;
    id?: string;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): Person | undefined;
}
export declare class PersonGroup {
    name?: string;
    id?: string;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): PersonGroup | undefined;
}
export declare class PersonImage {
    path?: string;
    url?: string;
    contentType?: string;
    id?: string;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): PersonImage | undefined;
}
export declare class ImageUpload {
    imageData?: string;
    imageUrl?: string;
    static fromJson(jsonObject?: any): ImageUpload | undefined;
}
export declare class EditGroupPersonsRequest {
    personIdsToAdd?: string[];
    personIdsToRemove?: string[];
    static fromJson(jsonObject?: any): EditGroupPersonsRequest | undefined;
}
export declare class SearchPersonRequest {
    outputImageParams?: OutputImageParams;
    groupIdsForSearch?: string[];
    threshold?: number;
    limit?: number;
    imageUpload?: ImageUpload;
    detectAll?: boolean;
    static fromJson(jsonObject?: any): SearchPersonRequest | undefined;
}
export declare class SearchPerson {
    detection?: SearchPersonDetection;
    images?: SearchPersonImage[];
    name?: string;
    groups?: string[];
    updatedAt?: string;
    id?: string;
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
    id?: string;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): SearchPersonImage | undefined;
}
export declare class SearchPersonDetection {
    landmarks?: Point[];
    rect?: Rect;
    cropImage?: string;
    rotationAngle?: number;
    static fromJson(jsonObject?: any): SearchPersonDetection | undefined;
}
export declare class LivenessNotification {
    status?: string;
    response?: LivenessResponse;
    static fromJson(jsonObject?: any): LivenessNotification | undefined;
}
export declare class VideoEncoderCompletion {
    success?: boolean;
    transactionId?: string;
    static fromJson(jsonObject?: any): VideoEncoderCompletion | undefined;
}
export declare class InitializationConfiguration {
    license?: string;
    licenseUpdate?: boolean;
    static fromJson(jsonObject?: any): InitializationConfiguration | undefined;
}
export declare class InitResponse {
    success?: boolean;
    error?: InitException;
    static fromJson(jsonObject?: any): InitResponse | undefined;
}
export declare const FontStyle: {
    NORMAL: number;
    BOLD: number;
    ITALIC: number;
    BOLD_ITALIC: number;
};
export declare const CustomizationColor: {
    ONBOARDING_SCREEN_START_BUTTON_BACKGROUND: string;
    ONBOARDING_SCREEN_START_BUTTON_TITLE: string;
    ONBOARDING_SCREEN_BACKGROUND: string;
    ONBOARDING_SCREEN_TITLE_LABEL_TEXT: string;
    ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT: string;
    ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT: string;
    CAMERA_SCREEN_STROKE_NORMAL: string;
    CAMERA_SCREEN_STROKE_ACTIVE: string;
    CAMERA_SCREEN_SECTOR_TARGET: string;
    CAMERA_SCREEN_SECTOR_ACTIVE: string;
    CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND: string;
    CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT: string;
    CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND: string;
    CAMERA_SCREEN_BACK_HINT_LABEL_TEXT: string;
    CAMERA_SCREEN_LIGHT_TOOLBAR_TINT: string;
    CAMERA_SCREEN_DARK_TOOLBAR_TINT: string;
    RETRY_SCREEN_BACKGROUND: string;
    RETRY_SCREEN_RETRY_BUTTON_BACKGROUND: string;
    RETRY_SCREEN_RETRY_BUTTON_TITLE: string;
    RETRY_SCREEN_TITLE_LABEL_TEXT: string;
    RETRY_SCREEN_SUBTITLE_LABEL_TEXT: string;
    RETRY_SCREEN_HINT_LABELS_TEXT: string;
    PROCESSING_SCREEN_BACKGROUND: string;
    PROCESSING_SCREEN_PROGRESS: string;
    PROCESSING_SCREEN_TITLE: string;
    SUCCESS_SCREEN_BACKGROUND: string;
};
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
export declare const LicensingResultCode: {
    OK: number;
    LICENSE_CORRUPTED: number;
    INVALID_DATE: number;
    INVALID_VERSION: number;
    INVALID_DEVICE_ID: number;
    INVALID_SYSTEM_OR_APP_ID: number;
    NO_CAPABILITIES: number;
    NO_AUTHENTICITY: number;
    LICENSE_ABSENT: number;
    NO_INTERNET: number;
    NO_DATABASE: number;
    DATABASE_INCORRECT: number;
};
export declare const DetectFacesErrorCode: {
    IMAGE_EMPTY: number;
    FR_FACE_NOT_DETECTED: number;
    FACER_NO_LICENSE: number;
    FACER_IS_NOT_INITIALIZED: number;
    FACER_COMMAND_IS_NOT_SUPPORTED: number;
    FACER_COMMAND_PARAMS_READ_ERROR: number;
    PROCESSING_FAILED: number;
    REQUEST_FAILED: number;
    API_CALL_FAILED: number;
};
export declare const InitErrorCode: {
    IN_PROGRESS_ALREADY: number;
    MISSING_CORE: number;
    INTERNAL_CORE_ERROR: number;
    BAD_LICENSE: number;
    UNAVAILABLE: number;
    CONTEXT_IS_NULL: number;
    RESOURCE_DAT_ABSENT: number;
    LICENSE_IS_NULL: number;
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
    NOT_INITIALIZED: number;
    NO_LICENSE: number;
    API_CALL_FAILED: number;
    SESSION_START_FAILED: number;
    CANCELLED: number;
    PROCESSING_TIMEOUT: number;
    PROCESSING_FAILED: number;
    PROCESSING_FRAME_FAILED: number;
    APPLICATION_INACTIVE: number;
    CONTEXT_IS_NULL: number;
    IN_PROGRESS_ALREADY: number;
    ZOOM_NOT_SUPPORTED: number;
    CAMERA_NO_PERMISSION: number;
    CAMERA_NOT_AVAILABLE: number;
};
export declare const RecordingProcess: {
    ASYNCHRONOUS_UPLOAD: string;
    SYNCHRONOUS_UPLOAD: string;
    NOT_UPLOAD: string;
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
    IMAGE_EMPTY: number;
    FACE_NOT_DETECTED: number;
    LANDMARKS_NOT_DETECTED: number;
    FACE_ALIGNER_FAILED: number;
    DESCRIPTOR_EXTRACTOR_ERROR: number;
    IMAGES_COUNT_LIMIT_EXCEEDED: number;
    API_CALL_FAILED: number;
    PROCESSING_FAILED: number;
    NO_LICENSE: number;
};
export declare const ImageQualityCharacteristicName: {
    IMAGE_WIDTH: string;
    IMAGE_HEIGHT: string;
    IMAGE_WIDTH_TO_HEIGHT: string;
    IMAGE_CHANNELS_NUMBER: string;
    ART_FACE: string;
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
export declare const ScreenOrientation: {
    PORTRAIT: number;
    LANDSCAPE: number;
};
export declare const ButtonTag: {
    CLOSE: number;
    TORCH: number;
    CAMERA_SWITCH: number;
};
export declare const CustomizationFont: {
    ONBOARDING_SCREEN_START_BUTTON: string;
    ONBOARDING_SCREEN_TITLE_LABEL: string;
    ONBOARDING_SCREEN_SUBTITLE_LABEL: string;
    ONBOARDING_SCREEN_MESSAGE_LABELS: string;
    CAMERA_SCREEN_HINT_LABEL: string;
    RETRY_SCREEN_RETRY_BUTTON: string;
    RETRY_SCREEN_TITLE_LABEL: string;
    RETRY_SCREEN_SUBTITLE_LABEL: string;
    RETRY_SCREEN_HINT_LABELS: string;
    PROCESSING_SCREEN: string;
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
export declare const LivenessProcessStatus: {
    START: string;
    PREPARING: string;
    NEW_SESSION: string;
    NEXT_STAGE: string;
    SECTOR_CHANGED: string;
    PROGRESS: string;
    LOW_BRIGHTNESS: string;
    FIT_FACE: string;
    MOVE_AWAY: string;
    MOVE_CLOSER: string;
    TURN_HEAD: string;
    PROCESSING: string;
    FAILED: string;
    RETRY: string;
    SUCCESS: string;
};
export declare const OutputImageCropAspectRatio: {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: number;
};
export declare const LivenessType: {
    ACTIVE: string;
    PASSIVE: string;
};
export declare const LivenessSkipStep: {
    ONBOARDING_STEP: number;
    SUCCESS_STEP: number;
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
    BARCODE: number;
};
export declare const FaceCaptureErrorCode: {
    CANCEL: number;
    TIMEOUT: number;
    NOT_INITIALIZED: number;
    SESSION_START_FAILED: number;
    CAMERA_NOT_AVAILABLE: number;
    CAMERA_NO_PERMISSION: number;
    IN_PROGRESS_ALREADY: number;
    CONTEXT_IS_NULL: number;
};
export declare const LivenessBackendErrorCode: {
    UNDEFINED: number;
    NO_LICENSE: number;
    LOW_QUALITY: number;
    TRACK_BREAK: number;
    CLOSED_EYES_DETECTED: number;
    HIGH_ASYMMETRY: number;
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
export declare const ProcessingMode: {
    ONLINE: string;
    OFFLINE: string;
};
export declare const CustomizationImage: {
    ONBOARDING_SCREEN_CLOSE_BUTTON: string;
    ONBOARDING_SCREEN_ILLUMINATION: string;
    ONBOARDING_SCREEN_ACCESSORIES: string;
    ONBOARDING_SCREEN_CAMERA_LEVEL: string;
    CAMERA_SCREEN_CLOSE_BUTTON: string;
    CAMERA_SCREEN_LIGHT_ON_BUTTON: string;
    CAMERA_SCREEN_LIGHT_OFF_BUTTON: string;
    CAMERA_SCREEN_SWITCH_BUTTON: string;
    RETRY_SCREEN_CLOSE_BUTTON: string;
    RETRY_SCREEN_HINT_ENVIRONMENT: string;
    RETRY_SCREEN_HINT_SUBJECT: string;
    PROCESSING_SCREEN_CLOSE_BUTTON: string;
    SUCCESS_SCREEN_IMAGE: string;
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
    FontStyle: {
        NORMAL: number;
        BOLD: number;
        ITALIC: number;
        BOLD_ITALIC: number;
    };
    CustomizationColor: {
        ONBOARDING_SCREEN_START_BUTTON_BACKGROUND: string;
        ONBOARDING_SCREEN_START_BUTTON_TITLE: string;
        ONBOARDING_SCREEN_BACKGROUND: string;
        ONBOARDING_SCREEN_TITLE_LABEL_TEXT: string;
        ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT: string;
        ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT: string;
        CAMERA_SCREEN_STROKE_NORMAL: string;
        CAMERA_SCREEN_STROKE_ACTIVE: string;
        CAMERA_SCREEN_SECTOR_TARGET: string;
        CAMERA_SCREEN_SECTOR_ACTIVE: string;
        CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND: string;
        CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT: string;
        CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND: string;
        CAMERA_SCREEN_BACK_HINT_LABEL_TEXT: string;
        CAMERA_SCREEN_LIGHT_TOOLBAR_TINT: string;
        CAMERA_SCREEN_DARK_TOOLBAR_TINT: string;
        RETRY_SCREEN_BACKGROUND: string;
        RETRY_SCREEN_RETRY_BUTTON_BACKGROUND: string;
        RETRY_SCREEN_RETRY_BUTTON_TITLE: string;
        RETRY_SCREEN_TITLE_LABEL_TEXT: string;
        RETRY_SCREEN_SUBTITLE_LABEL_TEXT: string;
        RETRY_SCREEN_HINT_LABELS_TEXT: string;
        PROCESSING_SCREEN_BACKGROUND: string;
        PROCESSING_SCREEN_PROGRESS: string;
        PROCESSING_SCREEN_TITLE: string;
        SUCCESS_SCREEN_BACKGROUND: string;
    };
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
    LicensingResultCode: {
        OK: number;
        LICENSE_CORRUPTED: number;
        INVALID_DATE: number;
        INVALID_VERSION: number;
        INVALID_DEVICE_ID: number;
        INVALID_SYSTEM_OR_APP_ID: number;
        NO_CAPABILITIES: number;
        NO_AUTHENTICITY: number;
        LICENSE_ABSENT: number;
        NO_INTERNET: number;
        NO_DATABASE: number;
        DATABASE_INCORRECT: number;
    };
    DetectFacesErrorCode: {
        IMAGE_EMPTY: number;
        FR_FACE_NOT_DETECTED: number;
        FACER_NO_LICENSE: number;
        FACER_IS_NOT_INITIALIZED: number;
        FACER_COMMAND_IS_NOT_SUPPORTED: number;
        FACER_COMMAND_PARAMS_READ_ERROR: number;
        PROCESSING_FAILED: number;
        REQUEST_FAILED: number;
        API_CALL_FAILED: number;
    };
    InitErrorCode: {
        IN_PROGRESS_ALREADY: number;
        MISSING_CORE: number;
        INTERNAL_CORE_ERROR: number;
        BAD_LICENSE: number;
        UNAVAILABLE: number;
        CONTEXT_IS_NULL: number;
        RESOURCE_DAT_ABSENT: number;
        LICENSE_IS_NULL: number;
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
        NOT_INITIALIZED: number;
        NO_LICENSE: number;
        API_CALL_FAILED: number;
        SESSION_START_FAILED: number;
        CANCELLED: number;
        PROCESSING_TIMEOUT: number;
        PROCESSING_FAILED: number;
        PROCESSING_FRAME_FAILED: number;
        APPLICATION_INACTIVE: number;
        CONTEXT_IS_NULL: number;
        IN_PROGRESS_ALREADY: number;
        ZOOM_NOT_SUPPORTED: number;
        CAMERA_NO_PERMISSION: number;
        CAMERA_NOT_AVAILABLE: number;
    };
    RecordingProcess: {
        ASYNCHRONOUS_UPLOAD: string;
        SYNCHRONOUS_UPLOAD: string;
        NOT_UPLOAD: string;
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
        IMAGE_EMPTY: number;
        FACE_NOT_DETECTED: number;
        LANDMARKS_NOT_DETECTED: number;
        FACE_ALIGNER_FAILED: number;
        DESCRIPTOR_EXTRACTOR_ERROR: number;
        IMAGES_COUNT_LIMIT_EXCEEDED: number;
        API_CALL_FAILED: number;
        PROCESSING_FAILED: number;
        NO_LICENSE: number;
    };
    ImageQualityCharacteristicName: {
        IMAGE_WIDTH: string;
        IMAGE_HEIGHT: string;
        IMAGE_WIDTH_TO_HEIGHT: string;
        IMAGE_CHANNELS_NUMBER: string;
        ART_FACE: string;
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
    ScreenOrientation: {
        PORTRAIT: number;
        LANDSCAPE: number;
    };
    ButtonTag: {
        CLOSE: number;
        TORCH: number;
        CAMERA_SWITCH: number;
    };
    CustomizationFont: {
        ONBOARDING_SCREEN_START_BUTTON: string;
        ONBOARDING_SCREEN_TITLE_LABEL: string;
        ONBOARDING_SCREEN_SUBTITLE_LABEL: string;
        ONBOARDING_SCREEN_MESSAGE_LABELS: string;
        CAMERA_SCREEN_HINT_LABEL: string;
        RETRY_SCREEN_RETRY_BUTTON: string;
        RETRY_SCREEN_TITLE_LABEL: string;
        RETRY_SCREEN_SUBTITLE_LABEL: string;
        RETRY_SCREEN_HINT_LABELS: string;
        PROCESSING_SCREEN: string;
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
    LivenessProcessStatus: {
        START: string;
        PREPARING: string;
        NEW_SESSION: string;
        NEXT_STAGE: string;
        SECTOR_CHANGED: string;
        PROGRESS: string;
        LOW_BRIGHTNESS: string;
        FIT_FACE: string;
        MOVE_AWAY: string;
        MOVE_CLOSER: string;
        TURN_HEAD: string;
        PROCESSING: string;
        FAILED: string;
        RETRY: string;
        SUCCESS: string;
    };
    OutputImageCropAspectRatio: {
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: number;
    };
    LivenessType: {
        ACTIVE: string;
        PASSIVE: string;
    };
    LivenessSkipStep: {
        ONBOARDING_STEP: number;
        SUCCESS_STEP: number;
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
        BARCODE: number;
    };
    FaceCaptureErrorCode: {
        CANCEL: number;
        TIMEOUT: number;
        NOT_INITIALIZED: number;
        SESSION_START_FAILED: number;
        CAMERA_NOT_AVAILABLE: number;
        CAMERA_NO_PERMISSION: number;
        IN_PROGRESS_ALREADY: number;
        CONTEXT_IS_NULL: number;
    };
    LivenessBackendErrorCode: {
        UNDEFINED: number;
        NO_LICENSE: number;
        LOW_QUALITY: number;
        TRACK_BREAK: number;
        CLOSED_EYES_DETECTED: number;
        HIGH_ASYMMETRY: number;
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
    ProcessingMode: {
        ONLINE: string;
        OFFLINE: string;
    };
    CustomizationImage: {
        ONBOARDING_SCREEN_CLOSE_BUTTON: string;
        ONBOARDING_SCREEN_ILLUMINATION: string;
        ONBOARDING_SCREEN_ACCESSORIES: string;
        ONBOARDING_SCREEN_CAMERA_LEVEL: string;
        CAMERA_SCREEN_CLOSE_BUTTON: string;
        CAMERA_SCREEN_LIGHT_ON_BUTTON: string;
        CAMERA_SCREEN_LIGHT_OFF_BUTTON: string;
        CAMERA_SCREEN_SWITCH_BUTTON: string;
        RETRY_SCREEN_CLOSE_BUTTON: string;
        RETRY_SCREEN_HINT_ENVIRONMENT: string;
        RETRY_SCREEN_HINT_SUBJECT: string;
        PROCESSING_SCREEN_CLOSE_BUTTON: string;
        SUCCESS_SCREEN_IMAGE: string;
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
    /**
     * @deprecated
     */
    init(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    initialize(): Promise<any>;
    /**
     *  description
     *
     * @param {object} config String license - license base64
     *  boolean licenseUpdate
     * @return {Promise<any>} Returns a promise
     */
    initializeWithConfig(config: any): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    /**
     * @deprecated
     */
    deinit(): Promise<any>;
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    deinitialize(): Promise<any>;
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
     * @param {MatchFacesRequest} request description
     * @param {object} config ProcessingMode processingMode
     * @return {Promise<any>} Returns a promise
     */
    matchFacesWithConfig(request: any, config: any): Promise<any>;
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
     * @param {boolean} isEnable description
     * @return {Promise<any>} Returns a promise
     */
    setLogs(isEnable: any): Promise<any>;
    /**
     *  description
     *
     * @param {boolean} isSaveLog description
     * @return {Promise<any>} Returns a promise
     */
    setSaveLogs(isSaveLog: any): Promise<any>;
    /**
     *  description
     *
     * @param {boolean} path description
     * @return {Promise<any>} Returns a promise
     */
    setLogsFolder(path: any): Promise<any>;
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
     *  Use this method to set UICustomizationLayer
     *
     * @param {object} json custom UI layer JSON
     * @return {Promise<any>} Returns a promise
     */
    setUiCustomizationLayer(json: any): Promise<any>;
    /**
     *  Use this method to set UiConfiguration
     *
     * @param {object} config UiConfiguration JSON
     * @return {Promise<any>} Returns a promise
     */
    setUiConfiguration(config: any): Promise<any>;
    /**
     *  description
     *
     * @param {object} dictionary description
     * @return {Promise<any>} Returns a promise
     */
    setLocalizationDictionary(dictionary: any): Promise<any>;
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
     * @param {string} personId description
     * @return {Promise<any>} Returns a promise
     */
    getPerson(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} name description
     * @param {array} groupIds description
     * @param {object} metadata description
     * @return {Promise<any>} Returns a promise
     */
    createPerson(name: any, groupIds: any, metadata: any): Promise<any>;
    /**
     *  description
     *
     * @param {Person} person description
     * @return {Promise<any>} Returns a promise
     */
    updatePerson(person: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
     * @return {Promise<any>} Returns a promise
     */
    deletePerson(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonImages(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getPersonImagesForPage(personId: any, page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
     * @param {ImageUpload} image description
     * @return {Promise<any>} Returns a promise
     */
    addPersonImage(personId: any, image: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
     * @param {string} imageId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonImage(personId: any, imageId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
     * @param {string} imageId description
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
     * @param {string} personId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonGroups(personId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} personId description
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
     * @param {string} groupId description
     * @return {Promise<any>} Returns a promise
     */
    getGroup(groupId: any): Promise<any>;
    /**
     *  description
     *
     * @param {PersonGroup} group description
     * @return {Promise<any>} Returns a promise
     */
    updateGroup(group: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} groupId description
     * @param {EditGroupPersonsRequest} editGroupPersonsRequest description
     * @return {Promise<any>} Returns a promise
     */
    editPersonsInGroup(groupId: any, editGroupPersonsRequest: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} groupId description
     * @return {Promise<any>} Returns a promise
     */
    getPersonsInGroup(groupId: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} groupId description
     * @param {number} page description
     * @param {number} size description
     * @return {Promise<any>} Returns a promise
     */
    getPersonsInGroupForPage(groupId: any, page: any, size: any): Promise<any>;
    /**
     *  description
     *
     * @param {string} groupId description
     * @return {Promise<any>} Returns a promise
     */
    deleteGroup(groupId: any): Promise<any>;
    /**
     *  description
     *
     * @param {object} searchPersonRequest description
     * @return {Promise<any>} Returns a promise
     */
    searchPerson(searchPersonRequest: any): Promise<any>;
}

export declare const FaceSDK: FaceSDKOriginal;