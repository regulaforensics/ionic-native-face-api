import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare class Customization {
    colors?: Record<number, number>;
    fonts?: Record<number, Font>;
    images?: Record<number, string>;
    uiCustomizationLayer?: Record<string, any>;
    static fromJson(jsonObject?: any): Customization | undefined;
}
export declare class Font {
    name?: string;
    style?: number;
    size?: number;
    static fromJson(jsonObject?: any): Font | undefined;
}
export declare class DetectFaceResult {
    quality?: ImageQualityResult[];
    attributes?: DetectFacesAttributeResult[];
    crop?: string;
    faceRect?: Rect;
    originalRect?: Rect;
    landmarks?: Point[];
    isQualityCompliant?: boolean;
    static fromJson(jsonObject?: any): DetectFaceResult | undefined;
}
export declare class DetectFacesAttributeResult {
    attribute?: string;
    value?: string;
    range?: ImageQualityRange;
    confidence?: number;
    static fromJson(jsonObject?: any): DetectFacesAttributeResult | undefined;
}
export declare class DetectFacesConfig {
    attributes?: string[];
    customQuality?: ImageQualityCharacteristic[];
    outputImageParams?: OutputImageParams;
    onlyCentralFace?: boolean;
    static fromJson(jsonObject?: any): DetectFacesConfig | undefined;
}
export declare class UnderlyingException {
    code?: number;
    message?: string;
    static fromJson(jsonObject?: any): UnderlyingException | undefined;
}
export declare class DetectFacesException {
    code?: number;
    message?: string;
    underlyingError?: UnderlyingException;
    static fromJson(jsonObject?: any): DetectFacesException | undefined;
}
export declare class DetectFacesRequest {
    tag?: string;
    scenario?: string;
    image?: string;
    configuration?: DetectFacesConfig;
    static fromJson(jsonObject?: any): DetectFacesRequest | undefined;
}
export declare class DetectFacesResponse {
    detection?: DetectFaceResult;
    scenario?: string;
    error?: DetectFacesException;
    allDetections?: DetectFaceResult[];
    static fromJson(jsonObject?: any): DetectFacesResponse | undefined;
}
export declare class FaceCaptureConfig {
    copyright?: boolean;
    cameraSwitchEnabled?: boolean;
    closeButtonEnabled?: boolean;
    torchButtonEnabled?: boolean;
    vibrateOnSteps?: boolean;
    detectOcclusion?: boolean;
    cameraPositionAndroid?: number;
    cameraPositionIOS?: number;
    screenOrientation?: number[];
    timeout?: number;
    holdStillDuration?: number;
    static fromJson(jsonObject?: any): FaceCaptureConfig | undefined;
}
export declare class FaceCaptureException {
    code?: number;
    message?: string;
    static fromJson(jsonObject?: any): FaceCaptureException | undefined;
}
export declare class FaceCaptureImage {
    imageType?: number;
    image?: string;
    tag?: string;
    static fromJson(jsonObject?: any): FaceCaptureImage | undefined;
}
export declare class FaceCaptureResponse {
    error?: FaceCaptureException;
    image?: FaceCaptureImage;
    static fromJson(jsonObject?: any): FaceCaptureResponse | undefined;
}
export declare class OutputImageCrop {
    type?: number;
    size?: Size;
    padColor?: number;
    returnOriginalRect?: boolean;
    static fromJson(jsonObject?: any): OutputImageCrop | undefined;
}
export declare class OutputImageParams {
    backgroundColor?: number;
    crop?: OutputImageCrop;
    static fromJson(jsonObject?: any): OutputImageParams | undefined;
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
export declare class Size {
    width?: number;
    height?: number;
    static fromJson(jsonObject?: any): Size | undefined;
}
export declare class ImageQualityCharacteristic {
    characteristicName?: string;
    color?: number;
    recommendedRange?: ImageQualityRange;
    customRange?: ImageQualityRange;
    static fromJson(jsonObject?: any): ImageQualityCharacteristic | undefined;
}
export declare class ImageQualityRange {
    min?: number;
    max?: number;
    static fromJson(jsonObject?: any): ImageQualityRange | undefined;
}
export declare class ImageQualityResult {
    name?: string;
    group?: number;
    status?: number;
    range?: ImageQualityRange;
    value?: number;
    static fromJson(jsonObject?: any): ImageQualityResult | undefined;
}
export declare class FaceSDKVersion {
    api?: string;
    core?: string;
    coreMode?: string;
    static fromJson(jsonObject?: any): FaceSDKVersion | undefined;
}
export declare class InitConfig {
    license?: string;
    licenseUpdate?: boolean;
    static fromJson(jsonObject?: any): InitConfig | undefined;
}
export declare class InitException {
    code?: number;
    message?: string;
    underlyingError?: UnderlyingException;
    static fromJson(jsonObject?: any): InitException | undefined;
}
export declare class LivenessConfig {
    copyright?: boolean;
    cameraSwitchEnabled?: boolean;
    closeButtonEnabled?: boolean;
    torchButtonEnabled?: boolean;
    vibrateOnSteps?: boolean;
    cameraPositionAndroid?: number;
    cameraPositionIOS?: number;
    screenOrientation?: number[];
    locationTrackingEnabled?: boolean;
    attemptsCount?: number;
    recordingProcess?: number;
    livenessType?: number;
    tag?: string;
    skipStep?: number[];
    metadata?: any;
    static fromJson(jsonObject?: any): LivenessConfig | undefined;
}
export declare class LivenessException {
    code?: number;
    message?: string;
    underlyingError?: UnderlyingException;
    static fromJson(jsonObject?: any): LivenessException | undefined;
}
export declare class LivenessNotification {
    status?: number;
    response?: LivenessResponse;
    static fromJson(jsonObject?: any): LivenessNotification | undefined;
}
export declare class LivenessResponse {
    image?: string;
    liveness?: number;
    tag?: string;
    transactionId?: string;
    estimatedAge?: number;
    error?: LivenessException;
    static fromJson(jsonObject?: any): LivenessResponse | undefined;
}
export declare class ComparedFace {
    imageIndex?: number;
    image?: MatchFacesImage;
    faceIndex?: number;
    face?: MatchFacesDetectionFace;
    static fromJson(jsonObject?: any): ComparedFace | undefined;
}
export declare class ComparedFacesPair {
    first?: ComparedFace;
    second?: ComparedFace;
    similarity?: number;
    score?: number;
    error?: MatchFacesException;
    static fromJson(jsonObject?: any): ComparedFacesPair | undefined;
}
export declare class ComparedFacesSplit {
    matchedFaces?: ComparedFacesPair[];
    unmatchedFaces?: ComparedFacesPair[];
    static fromJson(jsonObject?: any): ComparedFacesSplit | undefined;
}
export declare class MatchFacesConfig {
    processingMode?: number;
    locationTrackingEnabled?: boolean;
    static fromJson(jsonObject?: any): MatchFacesConfig | undefined;
}
export declare class MatchFacesDetection {
    imageIndex?: number;
    image?: MatchFacesImage;
    faces?: MatchFacesDetectionFace[];
    error?: MatchFacesException;
    static fromJson(jsonObject?: any): MatchFacesDetection | undefined;
}
export declare class MatchFacesDetectionFace {
    faceIndex?: number;
    landmarks?: Point[];
    faceRect?: Rect;
    rotationAngle?: number;
    originalRect?: Rect;
    crop?: string;
    static fromJson(jsonObject?: any): MatchFacesDetectionFace | undefined;
}
export declare class MatchFacesException {
    code?: number;
    message?: string;
    underlyingError?: UnderlyingException;
    static fromJson(jsonObject?: any): MatchFacesException | undefined;
}
export declare class MatchFacesImage {
    image?: string;
    imageType?: number;
    detectAll?: boolean;
    identifier?: string;
    static fromJson(jsonObject?: any): MatchFacesImage | undefined;
}
export declare class MatchFacesRequest {
    images?: MatchFacesImage[];
    outputImageParams?: OutputImageParams;
    tag?: string;
    metadata?: any;
    static fromJson(jsonObject?: any): MatchFacesRequest | undefined;
}
export declare class MatchFacesResponse {
    results?: ComparedFacesPair[];
    detections?: MatchFacesDetection[];
    tag?: string;
    error?: MatchFacesException;
    static fromJson(jsonObject?: any): MatchFacesResponse | undefined;
}
export declare class EditGroupPersonsRequest {
    personIdsToAdd?: string[];
    personIdsToRemove?: string[];
    static fromJson(jsonObject?: any): EditGroupPersonsRequest | undefined;
}
export declare class ImageUpload {
    imageData?: string;
    imageUrl?: string;
    static fromJson(jsonObject?: any): ImageUpload | undefined;
}
export declare class PageableItemList {
    items?: any[];
    page?: number;
    totalPages?: number;
    static fromJson(jsonObject?: any): PageableItemList | undefined;
}
export declare class Person {
    name?: string;
    updatedAt?: string;
    groups?: string[];
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
export declare class SearchPerson {
    images?: SearchPersonImage[];
    detection?: SearchPersonDetection;
    name?: string;
    updatedAt?: string;
    groups?: string[];
    id?: string;
    metadata?: any;
    createdAt?: string;
    static fromJson(jsonObject?: any): SearchPerson | undefined;
}
export declare class SearchPersonDetection {
    landmarks?: Point[];
    rect?: Rect;
    crop?: string;
    rotationAngle?: number;
    static fromJson(jsonObject?: any): SearchPersonDetection | undefined;
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
export declare class SearchPersonRequest {
    imageUpload?: ImageUpload;
    groupIdsForSearch?: string[];
    threshold?: number;
    limit?: number;
    detectAll?: boolean;
    outputImageParams?: OutputImageParams;
    static fromJson(jsonObject?: any): SearchPersonRequest | undefined;
}
export declare class InitResponse {
    success?: boolean;
    error?: InitException;
    static fromJson(jsonObject?: any): InitResponse | undefined;
}
export declare class VideoEncoderCompletion {
    success?: boolean;
    transactionId?: string;
    static fromJson(jsonObject?: any): VideoEncoderCompletion | undefined;
}
export declare class PersonDBResponse {
    data?: any;
    error?: string;
    static fromJson(jsonObject?: any): PersonDBResponse | undefined;
}
export declare const FontStyle: {
    NORMAL: number;
    BOLD: number;
    ITALIC: number;
    BOLD_ITALIC: number;
};
export declare const CustomizationColor: {
    ONBOARDING_SCREEN_START_BUTTON_BACKGROUND: number;
    ONBOARDING_SCREEN_START_BUTTON_TITLE: number;
    ONBOARDING_SCREEN_BACKGROUND: number;
    ONBOARDING_SCREEN_TITLE_LABEL_TEXT: number;
    ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT: number;
    ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT: number;
    CAMERA_SCREEN_STROKE_NORMAL: number;
    CAMERA_SCREEN_STROKE_ACTIVE: number;
    CAMERA_SCREEN_SECTOR_TARGET: number;
    CAMERA_SCREEN_SECTOR_ACTIVE: number;
    CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND: number;
    CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT: number;
    CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND: number;
    CAMERA_SCREEN_BACK_HINT_LABEL_TEXT: number;
    CAMERA_SCREEN_LIGHT_TOOLBAR_TINT: number;
    CAMERA_SCREEN_DARK_TOOLBAR_TINT: number;
    RETRY_SCREEN_BACKGROUND: number;
    RETRY_SCREEN_RETRY_BUTTON_BACKGROUND: number;
    RETRY_SCREEN_RETRY_BUTTON_TITLE: number;
    RETRY_SCREEN_TITLE_LABEL_TEXT: number;
    RETRY_SCREEN_SUBTITLE_LABEL_TEXT: number;
    RETRY_SCREEN_HINT_LABELS_TEXT: number;
    PROCESSING_SCREEN_BACKGROUND: number;
    PROCESSING_SCREEN_PROGRESS: number;
    PROCESSING_SCREEN_TITLE: number;
    SUCCESS_SCREEN_BACKGROUND: number;
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
export declare const CameraPosition: {
    FRONT: number;
    BACK: number;
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
    PASSED: number;
    UNKNOWN: number;
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
    ASYNCHRONOUS_UPLOAD: number;
    SYNCHRONOUS_UPLOAD: number;
    NOT_UPLOAD: number;
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
export declare const CustomizationFont: {
    ONBOARDING_SCREEN_START_BUTTON: number;
    ONBOARDING_SCREEN_TITLE_LABEL: number;
    ONBOARDING_SCREEN_SUBTITLE_LABEL: number;
    ONBOARDING_SCREEN_MESSAGE_LABELS: number;
    CAMERA_SCREEN_HINT_LABEL: number;
    RETRY_SCREEN_RETRY_BUTTON: number;
    RETRY_SCREEN_TITLE_LABEL: number;
    RETRY_SCREEN_SUBTITLE_LABEL: number;
    RETRY_SCREEN_HINT_LABELS: number;
    PROCESSING_SCREEN: number;
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
    START: number;
    PREPARING: number;
    NEW_SESSION: number;
    NEXT_STAGE: number;
    SECTOR_CHANGED: number;
    PROGRESS: number;
    LOW_BRIGHTNESS: number;
    FIT_FACE: number;
    MOVE_AWAY: number;
    MOVE_CLOSER: number;
    TURN_HEAD: number;
    PROCESSING: number;
    FAILED: number;
    RETRY: number;
    SUCCESS: number;
};
export declare const OutputImageCropAspectRatio: {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: number;
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: number;
};
export declare const LivenessType: {
    ACTIVE: number;
    PASSIVE: number;
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
    NOT_INITIALIZED: number;
    COMMAND_IS_NOT_SUPPORTED: number;
    PARAMS_READ_ERROR: number;
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
    ONLINE: number;
    OFFLINE: number;
};
export declare const CustomizationImage: {
    ONBOARDING_SCREEN_CLOSE_BUTTON: number;
    ONBOARDING_SCREEN_ILLUMINATION: number;
    ONBOARDING_SCREEN_ACCESSORIES: number;
    ONBOARDING_SCREEN_CAMERA_LEVEL: number;
    CAMERA_SCREEN_CLOSE_BUTTON: number;
    CAMERA_SCREEN_LIGHT_ON_BUTTON: number;
    CAMERA_SCREEN_LIGHT_OFF_BUTTON: number;
    CAMERA_SCREEN_SWITCH_BUTTON: number;
    RETRY_SCREEN_CLOSE_BUTTON: number;
    RETRY_SCREEN_HINT_ENVIRONMENT: number;
    RETRY_SCREEN_HINT_SUBJECT: number;
    PROCESSING_SCREEN_CLOSE_BUTTON: number;
    SUCCESS_SCREEN_IMAGE: number;
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
        ONBOARDING_SCREEN_START_BUTTON_BACKGROUND: number;
        ONBOARDING_SCREEN_START_BUTTON_TITLE: number;
        ONBOARDING_SCREEN_BACKGROUND: number;
        ONBOARDING_SCREEN_TITLE_LABEL_TEXT: number;
        ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT: number;
        ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT: number;
        CAMERA_SCREEN_STROKE_NORMAL: number;
        CAMERA_SCREEN_STROKE_ACTIVE: number;
        CAMERA_SCREEN_SECTOR_TARGET: number;
        CAMERA_SCREEN_SECTOR_ACTIVE: number;
        CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND: number;
        CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT: number;
        CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND: number;
        CAMERA_SCREEN_BACK_HINT_LABEL_TEXT: number;
        CAMERA_SCREEN_LIGHT_TOOLBAR_TINT: number;
        CAMERA_SCREEN_DARK_TOOLBAR_TINT: number;
        RETRY_SCREEN_BACKGROUND: number;
        RETRY_SCREEN_RETRY_BUTTON_BACKGROUND: number;
        RETRY_SCREEN_RETRY_BUTTON_TITLE: number;
        RETRY_SCREEN_TITLE_LABEL_TEXT: number;
        RETRY_SCREEN_SUBTITLE_LABEL_TEXT: number;
        RETRY_SCREEN_HINT_LABELS_TEXT: number;
        PROCESSING_SCREEN_BACKGROUND: number;
        PROCESSING_SCREEN_PROGRESS: number;
        PROCESSING_SCREEN_TITLE: number;
        SUCCESS_SCREEN_BACKGROUND: number;
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
    CameraPosition: {
        FRONT: number;
        BACK: number;
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
        PASSED: number;
        UNKNOWN: number;
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
        ASYNCHRONOUS_UPLOAD: number;
        SYNCHRONOUS_UPLOAD: number;
        NOT_UPLOAD: number;
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
    CustomizationFont: {
        ONBOARDING_SCREEN_START_BUTTON: number;
        ONBOARDING_SCREEN_TITLE_LABEL: number;
        ONBOARDING_SCREEN_SUBTITLE_LABEL: number;
        ONBOARDING_SCREEN_MESSAGE_LABELS: number;
        CAMERA_SCREEN_HINT_LABEL: number;
        RETRY_SCREEN_RETRY_BUTTON: number;
        RETRY_SCREEN_TITLE_LABEL: number;
        RETRY_SCREEN_SUBTITLE_LABEL: number;
        RETRY_SCREEN_HINT_LABELS: number;
        PROCESSING_SCREEN: number;
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
        START: number;
        PREPARING: number;
        NEW_SESSION: number;
        NEXT_STAGE: number;
        SECTOR_CHANGED: number;
        PROGRESS: number;
        LOW_BRIGHTNESS: number;
        FIT_FACE: number;
        MOVE_AWAY: number;
        MOVE_CLOSER: number;
        TURN_HEAD: number;
        PROCESSING: number;
        FAILED: number;
        RETRY: number;
        SUCCESS: number;
    };
    OutputImageCropAspectRatio: {
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: number;
        OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: number;
    };
    LivenessType: {
        ACTIVE: number;
        PASSIVE: number;
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
        NOT_INITIALIZED: number;
        COMMAND_IS_NOT_SUPPORTED: number;
        PARAMS_READ_ERROR: number;
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
        ONLINE: number;
        OFFLINE: number;
    };
    CustomizationImage: {
        ONBOARDING_SCREEN_CLOSE_BUTTON: number;
        ONBOARDING_SCREEN_ILLUMINATION: number;
        ONBOARDING_SCREEN_ACCESSORIES: number;
        ONBOARDING_SCREEN_CAMERA_LEVEL: number;
        CAMERA_SCREEN_CLOSE_BUTTON: number;
        CAMERA_SCREEN_LIGHT_ON_BUTTON: number;
        CAMERA_SCREEN_LIGHT_OFF_BUTTON: number;
        CAMERA_SCREEN_SWITCH_BUTTON: number;
        RETRY_SCREEN_CLOSE_BUTTON: number;
        RETRY_SCREEN_HINT_ENVIRONMENT: number;
        RETRY_SCREEN_HINT_SUBJECT: number;
        PROCESSING_SCREEN_CLOSE_BUTTON: number;
        SUCCESS_SCREEN_IMAGE: number;
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
export declare class FaceSDK extends AwesomeCordovaNativePlugin {
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getVersion(): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getServiceUrl(): Promise<any>;
    /**
     *
     *
     * @param {string} url
     * @return {Promise<any>} Returns a promise
     */
    setServiceUrl(url: string | null): Promise<any>;
    /**
     *
     *
     * @param {Record<string, string>} dictionary
     * @return {Promise<any>} Returns a promise
     */
    setLocalizationDictionary(dictionary: Record<string, string>): Promise<any>;
    /**
     *  sets headers for http request
     *
     * @param {Record<string, string>} headers
     * @return {Promise<any>} Returns a promise
     */
    setRequestHeaders(headers: Record<string, string>): Promise<any>;
    /**
     *  Use this method to set UiConfiguration
     *
     * @param {Customization} config
     * @return {Promise<any>} Returns a promise
     */
    setCustomization(config: Customization): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    isInitialized(): Promise<any>;
    /**
     *
     *
     * @param {InitConfig} config
     * @return {Promise<any>} Returns a promise
     */
    initialize(config: InitConfig | null): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    deinitialize(): Promise<any>;
    /**
     *
     *
     * @param {FaceCaptureConfig} config
     * @return {Promise<any>} Returns a promise
     */
    startFaceCapture(config: FaceCaptureConfig | null): Observable<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    stopFaceCapture(): Promise<any>;
    /**
     *
     *
     * @param {LivenessConfig} config
     * @return {Promise<any>} Returns a promise
     */
    startLiveness(config: LivenessConfig | null): Observable<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    stopLiveness(): Promise<any>;
    /**
     *
     *
     * @param {MatchFacesRequest} request
     * @param {MatchFacesConfig} config
     * @return {Promise<any>} Returns a promise
     */
    matchFaces(request: MatchFacesRequest, config: MatchFacesConfig | null): Promise<any>;
    /**
     *
     *
     * @param {ComparedFacesPair[]} facesPairs
     * @param {number} similarityThreshold
     * @return {Promise<any>} Returns a promise
     */
    splitComparedFaces(facesPairs: ComparedFacesPair[], similarityThreshold: number): Promise<any>;
    /**
     *
     *
     * @param {DetectFacesRequest} request
     * @return {Promise<any>} Returns a promise
     */
    detectFaces(request: DetectFacesRequest): Promise<any>;
    /**
     *
     *
     * @param {string} name
     * @param {string[]} groupIds
     * @param {Record<string, any>} metadata
     * @return {Promise<any>} Returns a promise
     */
    createPerson(name: string, groupIds: string[] | null, metadata: Record<string, any> | null): Promise<any>;
    /**
     *
     *
     * @param {Person} person
     * @return {Promise<any>} Returns a promise
     */
    updatePerson(person: Person): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @return {Promise<any>} Returns a promise
     */
    deletePerson(personId: string): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @return {Promise<any>} Returns a promise
     */
    getPerson(personId: string): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @param {ImageUpload} image
     * @return {Promise<any>} Returns a promise
     */
    addPersonImage(personId: string, image: ImageUpload): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @param {string} imageId
     * @return {Promise<any>} Returns a promise
     */
    deletePersonImage(personId: string, imageId: string): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @param {string} imageId
     * @return {Promise<any>} Returns a promise
     */
    getPersonImage(personId: string, imageId: string): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @return {Promise<any>} Returns a promise
     */
    getPersonImages(personId: string): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @param {number} page
     * @param {number} size
     * @return {Promise<any>} Returns a promise
     */
    getPersonImagesForPage(personId: string, page: number, size: number): Promise<any>;
    /**
     *
     *
     * @param {string} name
     * @param {Record<string, any>} metadata
     * @return {Promise<any>} Returns a promise
     */
    createGroup(name: string, metadata: Record<string, any> | null): Promise<any>;
    /**
     *
     *
     * @param {PersonGroup} group
     * @return {Promise<any>} Returns a promise
     */
    updateGroup(group: PersonGroup): Promise<any>;
    /**
     *
     *
     * @param {string} groupId
     * @param {EditGroupPersonsRequest} editGroupPersonsRequest
     * @return {Promise<any>} Returns a promise
     */
    editPersonsInGroup(groupId: string, editGroupPersonsRequest: EditGroupPersonsRequest): Promise<any>;
    /**
     *
     *
     * @param {string} groupId
     * @return {Promise<any>} Returns a promise
     */
    deleteGroup(groupId: string): Promise<any>;
    /**
     *
     *
     * @param {string} groupId
     * @return {Promise<any>} Returns a promise
     */
    getGroup(groupId: string): Promise<any>;
    /**
     *
     *
     * @return {Promise<any>} Returns a promise
     */
    getGroups(): Promise<any>;
    /**
     *
     *
     * @param {number} page
     * @param {number} size
     * @return {Promise<any>} Returns a promise
     */
    getGroupsForPage(page: number, size: number): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @return {Promise<any>} Returns a promise
     */
    getPersonGroups(personId: string): Promise<any>;
    /**
     *
     *
     * @param {string} personId
     * @param {number} page
     * @param {number} size
     * @return {Promise<any>} Returns a promise
     */
    getPersonGroupsForPage(personId: string, page: number, size: number): Promise<any>;
    /**
     *
     *
     * @param {string} groupId
     * @return {Promise<any>} Returns a promise
     */
    getPersonsInGroup(groupId: string): Promise<any>;
    /**
     *
     *
     * @param {string} groupId
     * @param {number} page
     * @param {number} size
     * @return {Promise<any>} Returns a promise
     */
    getPersonsInGroupForPage(groupId: string, page: number, size: number): Promise<any>;
    /**
     *
     *
     * @param {SearchPersonRequest} searchPersonRequest
     * @return {Promise<any>} Returns a promise
     */
    searchPerson(searchPersonRequest: SearchPersonRequest): Promise<any>;
}
