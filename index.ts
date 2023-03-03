import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

export class FaceCaptureException {
    errorCode?: string
    message?: string

    static fromJson(jsonObject?: any): FaceCaptureException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new FaceCaptureException

        result.errorCode = jsonObject["errorCode"]
        result.message = jsonObject["message"]

        return result
    }
}

export class LivenessErrorException {
    errorCode?: string
    underlyingException?: LivenessBackendException
    message?: string

    static fromJson(jsonObject?: any): LivenessErrorException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new LivenessErrorException

        result.errorCode = jsonObject["errorCode"]
        result.underlyingException = LivenessBackendException.fromJson(jsonObject["underlyingException"])
        result.message = jsonObject["message"]

        return result
    }
}

export class LivenessBackendException {
    errorCode?: number
    message?: string

    static fromJson(jsonObject?: any): LivenessBackendException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new LivenessBackendException

        result.errorCode = jsonObject["errorCode"]
        result.message = jsonObject["message"]

        return result
    }
}

export class MatchFacesException {
    errorCode?: string
    message?: string

    static fromJson(jsonObject?: any): MatchFacesException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesException

        result.errorCode = jsonObject["errorCode"]
        result.message = jsonObject["message"]

        return result
    }
}

export class FaceCaptureResponse {
    exception?: FaceCaptureException
    image?: Image

    static fromJson(jsonObject?: any): FaceCaptureResponse | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new FaceCaptureResponse

        result.exception = FaceCaptureException.fromJson(jsonObject["exception"])
        result.image = Image.fromJson(jsonObject["image"])

        return result
    }
}

export class LivenessResponse {
    bitmap?: string
    liveness?: string
    guid?: string
    exception?: LivenessErrorException

    static fromJson(jsonObject?: any): LivenessResponse | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new LivenessResponse

        result.bitmap = jsonObject["bitmap"]
        result.liveness = jsonObject["liveness"]
        result.guid = jsonObject["guid"]
        result.exception = LivenessErrorException.fromJson(jsonObject["exception"])

        return result
    }
}

export class MatchFacesResponse {
    exception?: MatchFacesException
    detections?: MatchFacesDetection[]
    results?: MatchFacesComparedFacesPair[]

    static fromJson(jsonObject?: any): MatchFacesResponse | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesResponse

        result.exception = MatchFacesException.fromJson(jsonObject["exception"])
        result.detections = []
        if (jsonObject["detections"] != null) {
            for (const i in jsonObject["detections"]) {
                const item = MatchFacesDetection.fromJson(jsonObject["detections"][i])
                if (item != undefined)
                    result.detections.push(item)
            }
        }
        result.results = []
        if (jsonObject["results"] != null) {
            for (const i in jsonObject["results"]) {
                const item = MatchFacesComparedFacesPair.fromJson(jsonObject["results"][i])
                if (item != undefined)
                    result.results.push(item)
            }
        }

        return result
    }
}

export class Image {
    imageType?: number
    bitmap?: string
    tag?: string
    imageData?: any[]

    static fromJson(jsonObject?: any): Image | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Image

        result.imageType = jsonObject["imageType"]
        result.bitmap = jsonObject["bitmap"]
        result.tag = jsonObject["tag"]
        result.imageData = []
        if (jsonObject["imageData"] != null) {
            for (const i in jsonObject["imageData"]) {
                result.imageData.push(jsonObject["imageData"][i])
            }
        }

        return result
    }
}

export class MatchFacesRequest {
    images?: MatchFacesImage[]
    customMetadata?: any
    thumbnails?: boolean

    static fromJson(jsonObject?: any): MatchFacesRequest | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesRequest

        result.images = []
        if (jsonObject["images"] != null) {
            for (const i in jsonObject["images"]) {
                const item = MatchFacesImage.fromJson(jsonObject["images"][i])
                if (item != undefined)
                    result.images.push(item)
            }
        }
        result.customMetadata = jsonObject["customMetadata"]
        result.thumbnails = jsonObject["thumbnails"]

        return result
    }
}

export class MatchFacesImage {
    imageType?: number
    detectAll?: boolean
    bitmap?: string
    identifier?: string

    static fromJson(jsonObject?: any): MatchFacesImage | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesImage

        result.imageType = jsonObject["imageType"]
        result.detectAll = jsonObject["detectAll"]
        result.bitmap = jsonObject["bitmap"]
        result.identifier = jsonObject["identifier"]

        return result
    }
}

export class MatchFacesComparedFacesPair {
    first?: MatchFacesComparedFace
    second?: MatchFacesComparedFace
    similarity?: number
    score?: number
    exception?: MatchFacesException

    static fromJson(jsonObject?: any): MatchFacesComparedFacesPair | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesComparedFacesPair

        result.first = MatchFacesComparedFace.fromJson(jsonObject["first"])
        result.second = MatchFacesComparedFace.fromJson(jsonObject["second"])
        result.similarity = jsonObject["similarity"]
        result.score = jsonObject["score"]
        result.exception = MatchFacesException.fromJson(jsonObject["exception"])

        return result
    }
}

export class MatchFacesComparedFace {
    face?: MatchFacesDetectionFace
    image?: MatchFacesImage
    faceIndex?: number
    imageIndex?: number

    static fromJson(jsonObject?: any): MatchFacesComparedFace | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesComparedFace

        result.face = MatchFacesDetectionFace.fromJson(jsonObject["face"])
        result.image = MatchFacesImage.fromJson(jsonObject["image"])
        result.faceIndex = jsonObject["faceIndex"]
        result.imageIndex = jsonObject["imageIndex"]

        return result
    }
}

export class MatchFacesDetectionFace {
    faceIndex?: number
    landmarks?: Point[]
    faceRect?: Rect
    rotationAngle?: number
    thumbnail?: string

    static fromJson(jsonObject?: any): MatchFacesDetectionFace | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesDetectionFace

        result.faceIndex = jsonObject["faceIndex"]
        result.landmarks = []
        if (jsonObject["landmarks"] != null) {
            for (const i in jsonObject["landmarks"]) {
                const item = Point.fromJson(jsonObject["landmarks"][i])
                if (item != undefined)
                    result.landmarks.push(item)
            }
        }
        result.faceRect = Rect.fromJson(jsonObject["faceRect"])
        result.rotationAngle = jsonObject["rotationAngle"]
        result.thumbnail = jsonObject["thumbnail"]

        return result
    }
}

export class MatchFacesDetection {
    image?: MatchFacesImage
    imageIndex?: number
    faces?: MatchFacesDetectionFace[]
    exception?: MatchFacesException

    static fromJson(jsonObject?: any): MatchFacesDetection | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesDetection

        result.image = MatchFacesImage.fromJson(jsonObject["image"])
        result.imageIndex = jsonObject["imageIndex"]
        result.faces = []
        if (jsonObject["faces"] != null) {
            for (const i in jsonObject["faces"]) {
                const item = MatchFacesDetectionFace.fromJson(jsonObject["faces"][i])
                if (item != undefined)
                    result.faces.push(item)
            }
        }
        result.exception = MatchFacesException.fromJson(jsonObject["exception"])

        return result
    }
}

export class Point {
    x?: number
    y?: number

    static fromJson(jsonObject?: any): Point | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Point

        result.x = jsonObject["x"]
        result.y = jsonObject["y"]

        return result
    }
}

export class Rect {
    bottom?: number
    top?: number
    left?: number
    right?: number

    static fromJson(jsonObject?: any): Rect | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Rect

        result.bottom = jsonObject["bottom"]
        result.top = jsonObject["top"]
        result.left = jsonObject["left"]
        result.right = jsonObject["right"]

        return result
    }
}

export class MatchFacesSimilarityThresholdSplit {
    matchedFaces?: MatchFacesComparedFacesPair[]
    unmatchedFaces?: MatchFacesComparedFacesPair[]

    static fromJson(jsonObject?: any): MatchFacesSimilarityThresholdSplit | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new MatchFacesSimilarityThresholdSplit

        result.matchedFaces = []
        if (jsonObject["matchedFaces"] != null) {
            for (const i in jsonObject["matchedFaces"]) {
                const item = MatchFacesComparedFacesPair.fromJson(jsonObject["matchedFaces"][i])
                if (item != undefined)
                    result.matchedFaces.push(item)
            }
        }
        result.unmatchedFaces = []
        if (jsonObject["unmatchedFaces"] != null) {
            for (const i in jsonObject["unmatchedFaces"]) {
                const item = MatchFacesComparedFacesPair.fromJson(jsonObject["unmatchedFaces"][i])
                if (item != undefined)
                    result.unmatchedFaces.push(item)
            }
        }

        return result
    }
}

export class DetectFacesRequest {
    scenario?: string
    image?: string
    configuration?: DetectFacesConfiguration

    static fromJson(jsonObject?: any): DetectFacesRequest | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFacesRequest

        result.scenario = jsonObject["scenario"]
        result.image = jsonObject["image"]
        result.configuration = DetectFacesConfiguration.fromJson(jsonObject["configuration"])

        return result
    }
}

export class DetectFacesConfiguration {
    attributes?: string[]
    customQuality?: ImageQualityCharacteristic[]
    outputImageParams?: OutputImageParams
    onlyCentralFace?: boolean

    static fromJson(jsonObject?: any): DetectFacesConfiguration | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFacesConfiguration

        result.attributes = []
        if (jsonObject["attributes"] != null) {
            for (const i in jsonObject["attributes"]) {
                result.attributes.push(jsonObject["attributes"][i])
            }
        }
        result.customQuality = []
        if (jsonObject["customQuality"] != null) {
            for (const i in jsonObject["customQuality"]) {
                const item = ImageQualityCharacteristic.fromJson(jsonObject["customQuality"][i])
                if (item != undefined)
                    result.customQuality.push(item)
            }
        }
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"])
        result.onlyCentralFace = jsonObject["onlyCentralFace"]

        return result
    }
}

export class OutputImageParams {
    backgroundColor?: string
    crop?: OutputImageCrop

    static fromJson(jsonObject?: any): OutputImageParams | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new OutputImageParams

        result.backgroundColor = jsonObject["backgroundColor"]
        result.crop = OutputImageCrop.fromJson(jsonObject["crop"])

        return result
    }
}

export class OutputImageCrop {
    type?: number
    size?: Size
    padColor?: string
    returnOriginalRect?: boolean

    static fromJson(jsonObject?: any): OutputImageCrop | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new OutputImageCrop

        result.type = jsonObject["type"]
        result.size = Size.fromJson(jsonObject["size"])
        result.padColor = jsonObject["padColor"]
        result.returnOriginalRect = jsonObject["returnOriginalRect"]

        return result
    }
}

export class ImageQualityCharacteristic {
    characteristicName?: string
    imageQualityGroup?: number
    recommendedRange?: ImageQualityRange
    customRange?: ImageQualityRange

    static fromJson(jsonObject?: any): ImageQualityCharacteristic | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageQualityCharacteristic

        result.characteristicName = jsonObject["characteristicName"]
        result.imageQualityGroup = jsonObject["imageQualityGroup"]
        result.recommendedRange = ImageQualityRange.fromJson(jsonObject["recommendedRange"])
        result.customRange = ImageQualityRange.fromJson(jsonObject["customRange"])

        return result
    }
}

export class ImageQualityRange {
    min?: number
    max?: number

    static fromJson(jsonObject?: any): ImageQualityRange | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageQualityRange

        result.min = jsonObject["min"]
        result.max = jsonObject["max"]

        return result
    }
}

export class Size {
    width?: number
    height?: number

    static fromJson(jsonObject?: any): Size | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new Size

        result.width = jsonObject["width"]
        result.height = jsonObject["height"]

        return result
    }
}

export class DetectFacesResponse {
    detection?: DetectFaceResult
    scenario?: string
    error?: DetectFacesErrorException
    allDetections?: DetectFaceResult[]

    static fromJson(jsonObject?: any): DetectFacesResponse | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFacesResponse

        result.detection = DetectFaceResult.fromJson(jsonObject["detection"])
        result.scenario = jsonObject["scenario"]
        result.error = DetectFacesErrorException.fromJson(jsonObject["error"])
        result.allDetections = []
        if (jsonObject["allDetections"] != null) {
            for (const i in jsonObject["allDetections"]) {
                const item = DetectFaceResult.fromJson(jsonObject["allDetections"][i])
                if (item != undefined)
                    result.allDetections.push(item)
            }
        }

        return result
    }
}

export class DetectFacesErrorException {
    errorCode?: string
    underlyingException?: DetectFacesBackendException
    message?: string

    static fromJson(jsonObject?: any): DetectFacesErrorException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFacesErrorException

        result.errorCode = jsonObject["errorCode"]
        result.underlyingException = DetectFacesBackendException.fromJson(jsonObject["underlyingException"])
        result.message = jsonObject["message"]

        return result
    }
}

export class DetectFacesBackendException {
    errorCode?: number
    message?: string

    static fromJson(jsonObject?: any): DetectFacesBackendException | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFacesBackendException

        result.errorCode = jsonObject["errorCode"]
        result.message = jsonObject["message"]

        return result
    }
}

export class DetectFaceResult {
    quality?: ImageQualityResult[]
    attributes?: DetectFacesAttributeResult[]
    landmarks?: Point[]
    crop?: string
    faceRect?: Rect
    originalRect?: Rect
    isQualityCompliant?: boolean

    static fromJson(jsonObject?: any): DetectFaceResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFaceResult

        result.quality = []
        if (jsonObject["quality"] != null) {
            for (const i in jsonObject["quality"]) {
                const item = ImageQualityResult.fromJson(jsonObject["quality"][i])
                if (item != undefined)
                    result.quality.push(item)
            }
        }
        result.attributes = []
        if (jsonObject["attributes"] != null) {
            for (const i in jsonObject["attributes"]) {
                const item = DetectFacesAttributeResult.fromJson(jsonObject["attributes"][i])
                if (item != undefined)
                    result.attributes.push(item)
            }
        }
        result.landmarks = []
        if (jsonObject["landmarks"] != null) {
            for (const i in jsonObject["landmarks"]) {
                const item = Point.fromJson(jsonObject["landmarks"][i])
                if (item != undefined)
                    result.landmarks.push(item)
            }
        }
        result.crop = jsonObject["crop"]
        result.faceRect = Rect.fromJson(jsonObject["faceRect"])
        result.originalRect = Rect.fromJson(jsonObject["originalRect"])
        result.isQualityCompliant = jsonObject["isQualityCompliant"]

        return result
    }
}

export class ImageQualityResult {
    name?: string
    group?: number
    status?: number
    range?: ImageQualityRange
    value?: number

    static fromJson(jsonObject?: any): ImageQualityResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new ImageQualityResult

        result.name = jsonObject["name"]
        result.group = jsonObject["group"]
        result.status = jsonObject["status"]
        result.range = ImageQualityRange.fromJson(jsonObject["range"])
        result.value = jsonObject["value"]

        return result
    }
}

export class DetectFacesAttributeResult {
    attribute?: string
    value?: string
    range?: ImageQualityRange
    confidence?: number

    static fromJson(jsonObject?: any): DetectFacesAttributeResult | undefined {
        if (jsonObject == null || jsonObject == undefined) return undefined
        const result = new DetectFacesAttributeResult

        result.attribute = jsonObject["attribute"]
        result.value = jsonObject["value"]
        result.range = ImageQualityRange.fromJson(jsonObject["range"])
        result.confidence = jsonObject["confidence"]

        return result
    }
}

export const ImageQualityGroupName = {
    IMAGE_CHARACTERISTICS: 1,
    HEAD_SIZE_AND_POSITION: 2,
    FACE_QUALITY: 3,
    EYES_CHARACTERISTICS: 4,
    SHADOWS_AND_LIGHTNING: 5,
    POSE_AND_EXPRESSION: 6,
    HEAD_OCCLUSION: 7,
    BACKGROUND: 8,
    UNKNOWN: 9,
}

export const DetectFacesErrorCode = {
    IMAGE_EMPTY: "IMAGE_EMPTY",
    FR_FACE_NOT_DETECTED: "FR_FACE_NOT_DETECTED",
    FACER_NO_LICENSE: "FACER_NO_LICENSE",
    FACER_IS_NOT_INITIALIZED: "FACER_IS_NOT_INITIALIZED",
    FACER_COMMAND_IS_NOT_SUPPORTED: "FACER_COMMAND_IS_NOT_SUPPORTED",
    FACER_COMMAND_PARAMS_READ_ERROR: "FACER_COMMAND_PARAMS_READ_ERROR",
    PROCESSING_FAILED: "PROCESSING_FAILED",
    REQUEST_FAILED: "REQUEST_FAILED",
    API_CALL_FAILED: "API_CALL_FAILED",
}

export const LivenessStatus = {
    PASSED: "PASSED",
    UNKNOWN: "UNKNOWN",
}

export const LivenessErrorCode = {
    CONTEXT_IS_NULL: "CONTEXT_IS_NULL",
    IN_PROGRESS_ALREADY: "IN_PROGRESS_ALREADY",
    ZOOM_NOT_SUPPORTED: "ZOOM_NOT_SUPPORTED",
    NO_LICENSE: "NO_LICENSE",
    CANCELLED: "CANCELLED",
    PROCESSING_TIMEOUT: "PROCESSING_TIMEOUT",
    API_CALL_FAILED: "API_CALL_FAILED",
    PROCESSING_FAILED: "PROCESSING_FAILED",
}

export const DetectFacesBackendErrorCode = {
    FR_FACE_NOT_DETECTED: 2,
    FACER_NO_LICENSE: 200,
    FACER_IS_NOT_INITIALIZED: 201,
    FACER_COMMAND_IS_NOT_SUPPORTED: 202,
    FACER_COMMAND_PARAMS_READ_ERROR: 203,
    UNDEFINED: -1,
}

export const MatchFacesErrorCode = {
    IMAGE_EMPTY: "IMAGE_EMPTY",
    FACE_NOT_DETECTED: "FACE_NOT_DETECTED",
    LANDMARKS_NOT_DETECTED: "LANDMARKS_NOT_DETECTED",
    FACE_ALIGNER_FAILED: "FACE_ALIGNER_FAILED",
    DESCRIPTOR_EXTRACTOR_ERROR: "DESCRIPTOR_EXTRACTOR_ERROR",
    NO_LICENSE: "NO_LICENSE",
    IMAGES_COUNT_LIMIT_EXCEEDED: "IMAGES_COUNT_LIMIT_EXCEEDED",
    API_CALL_FAILED: "API_CALL_FAILED",
    PROCESSING_FAILED: "PROCESSING_FAILED",
}

export const ImageQualityCharacteristicName = {
    IMAGE_WIDTH: "ImageWidth",
    IMAGE_HEIGHT: "ImageHeight",
    IMAGE_WIDTH_TO_HEIGHT: "ImageWidthToHeight",
    IMAGE_CHANNELS_NUMBER: "ImageChannelsNumber",
    PADDING_RATIO: "PaddingRatio",
    FACE_MID_POINT_HORIZONTAL_POSITION: "FaceMidPointHorizontalPosition",
    FACE_MID_POINT_VERTICAL_POSITION: "FaceMidPointVerticalPosition",
    HEAD_WIDTH_RATIO: "HeadWidthRatio",
    HEAD_HEIGHT_RATIO: "HeadHeightRatio",
    EYES_DISTANCE: "EyesDistance",
    YAW: "Yaw",
    PITCH: "Pitch",
    ROLL: "Roll",
    BLUR_LEVEL: "BlurLevel",
    NOISE_LEVEL: "NoiseLevel",
    UNNATURAL_SKIN_TONE: "UnnaturalSkinTone",
    FACE_DYNAMIC_RANGE: "FaceDynamicRange",
    EYE_RIGHT_CLOSED: "EyeRightClosed",
    EYE_LEFT_CLOSED: "EyeLeftClosed",
    EYE_RIGHT_OCCLUDED: "EyeRightOccluded",
    EYE_LEFT_OCCLUDED: "EyeLeftOccluded",
    EYES_RED: "EyesRed",
    EYE_RIGHT_COVERED_WITH_HAIR: "EyeRightCoveredWithHair",
    EYE_LEFT_COVERED_WITH_HAIR: "EyeLeftCoveredWithHair",
    OFF_GAZE: "OffGaze",
    TOO_DARK: "TooDark",
    TOO_LIGHT: "TooLight",
    FACE_GLARE: "FaceGlare",
    SHADOWS_ON_FACE: "ShadowsOnFace",
    SHOULDERS_POSE: "ShouldersPose",
    EXPRESSION_LEVEL: "ExpressionLevel",
    MOUTH_OPEN: "MouthOpen",
    SMILE: "Smile",
    DARK_GLASSES: "DarkGlasses",
    REFLECTION_ON_GLASSES: "ReflectionOnGlasses",
    FRAMES_TOO_HEAVY: "FramesTooHeavy",
    FACE_OCCLUDED: "FaceOccluded",
    HEAD_COVERING: "HeadCovering",
    FOREHEAD_COVERING: "ForeheadCovering",
    STRONG_MAKEUP: "StrongMakeup",
    HEAD_PHONES: "Headphones",
    MEDICAL_MASK: "MedicalMask",
    BACKGROUND_UNIFORMITY: "BackgroundUniformity",
    SHADOWS_ON_BACKGROUND: "ShadowsOnBackground",
    OTHER_FACES: "OtherFaces",
    BACKGROUND_COLOR_MATCH: "BackgroundColorMatch",
    UNKNOWN: "Unknown",
}

export const OutputImageCropAspectRatio = {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: 0,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: 1,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: 2,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: 3,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: 4,
}

export const ImageQualityResultStatus = {
    IMAGE_QUALITY_RESULT_STATUS_FALSE: 0,
    IMAGE_QUALITY_RESULT_STATUS_TRUE: 1,
    IMAGE_QUALITY_RESULT_STATUS_UNDETERMINED: 2,
}

export const ImageType = {
    PRINTED: 1,
    RFID: 2,
    LIVE: 3,
    DOCUMENT_WITH_LIVE: 4,
    EXTERNAL: 5,
}

export const FaceCaptureErrorCode = {
    CANCEL: "CANCEL",
    CAMERA_NOT_AVAILABLE: "CAMERA_NOT_AVAILABLE",
    CAMERA_NO_PERMISSION: "CAMERA_NO_PERMISSION",
    IN_PROGRESS_ALREADY: "IN_PROGRESS_ALREADY",
    CONTEXT_IS_NULL: "CONTEXT_IS_NULL",
}

export const LivenessBackendErrorCode = {
    UNDEFINED: -1,
    NO_LICENSE: 200,
    LOW_QUALITY: 231,
    HIGH_ASYMMETRY: 232,
    TRACK_BREAK: 246,
    CLOSED_EYES_DETECTED: 230,
    FACE_OVER_EMOTIONAL: 233,
    SUNGLASSES_DETECTED: 234,
    SMALL_AGE: 235,
    HEADDRESS_DETECTED: 236,
    MEDICINE_MASK_DETECTED: 239,
    OCCLUSION_DETECTED: 240,
    FOREHEAD_GLASSES_DETECTED: 242,
    MOUTH_OPENED: 243,
    ART_MASK_DETECTED: 244,
    NOT_MATCHED: 237,
    IMAGES_COUNT_LIMIT_EXCEEDED: 238,
    ELECTRONIC_DEVICE_DETECTED: 245,
    WRONG_GEO: 247,
    WRONG_OF: 248,
    WRONG_VIEW: 249,
}

export const DetectFacesAttribute = {
    AGE: "Age",
    EYE_RIGHT: "EyeRight",
    EYE_LEFT: "EyeLeft",
    EMOTION: "Emotion",
    SMILE: "Smile",
    GLASSES: "Glasses",
    HEAD_COVERING: "HeadCovering",
    FOREHEAD_COVERING: "ForeheadCovering",
    MOUTH: "Mouth",
    MEDICAL_MASK: "MedicalMask",
    OCCLUSION: "Occlusion",
    STRONG_MAKEUP: "StrongMakeup",
    HEADPHONES: "Headphones",
}

export const Enum = {
   ImageQualityGroupName,
   DetectFacesErrorCode,
   LivenessStatus,
   LivenessErrorCode,
   DetectFacesBackendErrorCode,
   MatchFacesErrorCode,
   ImageQualityCharacteristicName,
   OutputImageCropAspectRatio,
   ImageQualityResultStatus,
   ImageType,
   FaceCaptureErrorCode,
   LivenessBackendErrorCode,
   DetectFacesAttribute,
}

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
@Plugin({
    pluginName: 'FaceSDK',
    plugin: 'cordova-plugin-face-api',
    pluginRef: 'FaceSDK',
    repo: 'https://github.com/regulaforensics/FaceApi-Cordova-Plugin',
    platforms: ['Android', 'iOS']
})
@Injectable()
export class FaceSDK extends AwesomeCordovaNativePlugin {
    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    getServiceUrl(): Promise<any> { return }

    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    startLiveness(): Promise<any> { return }

    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    getFaceSdkVersion(): Promise<any> { return }

    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    presentFaceCaptureActivity(): Promise<any> { return }

    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    stopFaceCaptureActivity(): Promise<any> { return }

    /**
     *  description
     *
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    stopLivenessProcessing(): Promise<any> { return }

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
    @Cordova()
    presentFaceCaptureActivityWithConfig(config: any): Promise<any> { return }

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
    @Cordova()
    startLivenessWithConfig(config: any): Promise<any> { return }

    /**
     *  description
     *
     * @param {string} url description
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    setServiceUrl(url: any): Promise<any> { return }

    /**
     *  description
     *
     * @param {MatchFacesRequest} request description
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    matchFaces(request: any): Promise<any> { return }

    /**
     *  description
     *
     * @param {DetectFacesRequest} request description
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    detectFaces(request: any): Promise<any> { return }

    /**
     *  description
     *
     * @param {MatchFacesRequest} request description
     * @param {object} config boolean forceToUseHuaweiVision
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    matchFacesWithConfig(request: any, config: any): Promise<any> { return }

    /**
     *  description
     *
     * @param {string} language description
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    setLanguage(language: any): Promise<any> { return }

    /**
     *  description
     *
     * @param {string} faces facesArray: MatchFacesComparedFacesPair[]
     *  faces = JSON.stringify(facesArray)
     * @param {number} similarity description
     * @return {Promise<any>} Returns a promise
     */
    @Cordova()
    matchFacesSimilarityThresholdSplit(faces: any, similarity: any): Promise<any> { return }
}