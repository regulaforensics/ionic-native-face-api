var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var FaceCaptureException = /** @class */ (function () {
    function FaceCaptureException() {
    }
    FaceCaptureException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceCaptureException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return FaceCaptureException;
}());
export { FaceCaptureException };
var InitException = /** @class */ (function () {
    function InitException() {
    }
    InitException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new InitException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return InitException;
}());
export { InitException };
var LivenessErrorException = /** @class */ (function () {
    function LivenessErrorException() {
    }
    LivenessErrorException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessErrorException;
        result.errorCode = jsonObject["errorCode"];
        result.underlyingException = LivenessBackendException.fromJson(jsonObject["underlyingException"]);
        result.message = jsonObject["message"];
        return result;
    };
    return LivenessErrorException;
}());
export { LivenessErrorException };
var LivenessBackendException = /** @class */ (function () {
    function LivenessBackendException() {
    }
    LivenessBackendException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessBackendException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return LivenessBackendException;
}());
export { LivenessBackendException };
var MatchFacesException = /** @class */ (function () {
    function MatchFacesException() {
    }
    MatchFacesException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return MatchFacesException;
}());
export { MatchFacesException };
var FaceCaptureResponse = /** @class */ (function () {
    function FaceCaptureResponse() {
    }
    FaceCaptureResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceCaptureResponse;
        result.exception = FaceCaptureException.fromJson(jsonObject["exception"]);
        result.image = Image.fromJson(jsonObject["image"]);
        return result;
    };
    return FaceCaptureResponse;
}());
export { FaceCaptureResponse };
var LivenessResponse = /** @class */ (function () {
    function LivenessResponse() {
    }
    LivenessResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessResponse;
        result.bitmap = jsonObject["bitmap"];
        result.liveness = jsonObject["liveness"];
        result.tag = jsonObject["tag"];
        result.transactionId = jsonObject["transactionId"];
        result.exception = LivenessErrorException.fromJson(jsonObject["exception"]);
        return result;
    };
    return LivenessResponse;
}());
export { LivenessResponse };
var MatchFacesResponse = /** @class */ (function () {
    function MatchFacesResponse() {
    }
    MatchFacesResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesResponse;
        result.tag = jsonObject["tag"];
        result.exception = MatchFacesException.fromJson(jsonObject["exception"]);
        result.detections = [];
        if (jsonObject["detections"] != null) {
            for (var i in jsonObject["detections"]) {
                var item = MatchFacesDetection.fromJson(jsonObject["detections"][i]);
                if (item != undefined)
                    result.detections.push(item);
            }
        }
        result.results = [];
        if (jsonObject["results"] != null) {
            for (var i in jsonObject["results"]) {
                var item = MatchFacesComparedFacesPair.fromJson(jsonObject["results"][i]);
                if (item != undefined)
                    result.results.push(item);
            }
        }
        return result;
    };
    return MatchFacesResponse;
}());
export { MatchFacesResponse };
var Image = /** @class */ (function () {
    function Image() {
    }
    Image.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Image;
        result.imageType = jsonObject["imageType"];
        result.bitmap = jsonObject["bitmap"];
        result.tag = jsonObject["tag"];
        result.imageData = jsonObject["imageData"];
        return result;
    };
    return Image;
}());
export { Image };
var MatchFacesRequest = /** @class */ (function () {
    function MatchFacesRequest() {
    }
    MatchFacesRequest.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesRequest;
        result.images = [];
        if (jsonObject["images"] != null) {
            for (var i in jsonObject["images"]) {
                var item = MatchFacesImage.fromJson(jsonObject["images"][i]);
                if (item != undefined)
                    result.images.push(item);
            }
        }
        result.customMetadata = jsonObject["customMetadata"];
        result.thumbnails = jsonObject["thumbnails"];
        result.tag = jsonObject["tag"];
        return result;
    };
    return MatchFacesRequest;
}());
export { MatchFacesRequest };
var MatchFacesImage = /** @class */ (function () {
    function MatchFacesImage() {
    }
    MatchFacesImage.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesImage;
        result.imageType = jsonObject["imageType"];
        result.detectAll = jsonObject["detectAll"];
        result.bitmap = jsonObject["bitmap"];
        result.identifier = jsonObject["identifier"];
        return result;
    };
    return MatchFacesImage;
}());
export { MatchFacesImage };
var MatchFacesComparedFacesPair = /** @class */ (function () {
    function MatchFacesComparedFacesPair() {
    }
    MatchFacesComparedFacesPair.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesComparedFacesPair;
        result.first = MatchFacesComparedFace.fromJson(jsonObject["first"]);
        result.second = MatchFacesComparedFace.fromJson(jsonObject["second"]);
        result.similarity = jsonObject["similarity"];
        result.score = jsonObject["score"];
        result.exception = MatchFacesException.fromJson(jsonObject["exception"]);
        return result;
    };
    return MatchFacesComparedFacesPair;
}());
export { MatchFacesComparedFacesPair };
var MatchFacesComparedFace = /** @class */ (function () {
    function MatchFacesComparedFace() {
    }
    MatchFacesComparedFace.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesComparedFace;
        result.face = MatchFacesDetectionFace.fromJson(jsonObject["face"]);
        result.image = MatchFacesImage.fromJson(jsonObject["image"]);
        result.faceIndex = jsonObject["faceIndex"];
        result.imageIndex = jsonObject["imageIndex"];
        return result;
    };
    return MatchFacesComparedFace;
}());
export { MatchFacesComparedFace };
var MatchFacesDetectionFace = /** @class */ (function () {
    function MatchFacesDetectionFace() {
    }
    MatchFacesDetectionFace.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesDetectionFace;
        result.faceIndex = jsonObject["faceIndex"];
        result.landmarks = [];
        if (jsonObject["landmarks"] != null) {
            for (var i in jsonObject["landmarks"]) {
                var item = Point.fromJson(jsonObject["landmarks"][i]);
                if (item != undefined)
                    result.landmarks.push(item);
            }
        }
        result.faceRect = Rect.fromJson(jsonObject["faceRect"]);
        result.rotationAngle = jsonObject["rotationAngle"];
        result.thumbnail = jsonObject["thumbnail"];
        return result;
    };
    return MatchFacesDetectionFace;
}());
export { MatchFacesDetectionFace };
var MatchFacesDetection = /** @class */ (function () {
    function MatchFacesDetection() {
    }
    MatchFacesDetection.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesDetection;
        result.image = MatchFacesImage.fromJson(jsonObject["image"]);
        result.imageIndex = jsonObject["imageIndex"];
        result.faces = [];
        if (jsonObject["faces"] != null) {
            for (var i in jsonObject["faces"]) {
                var item = MatchFacesDetectionFace.fromJson(jsonObject["faces"][i]);
                if (item != undefined)
                    result.faces.push(item);
            }
        }
        result.exception = MatchFacesException.fromJson(jsonObject["exception"]);
        return result;
    };
    return MatchFacesDetection;
}());
export { MatchFacesDetection };
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Point;
        result.x = jsonObject["x"];
        result.y = jsonObject["y"];
        return result;
    };
    return Point;
}());
export { Point };
var Rect = /** @class */ (function () {
    function Rect() {
    }
    Rect.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Rect;
        result.bottom = jsonObject["bottom"];
        result.top = jsonObject["top"];
        result.left = jsonObject["left"];
        result.right = jsonObject["right"];
        return result;
    };
    return Rect;
}());
export { Rect };
var MatchFacesSimilarityThresholdSplit = /** @class */ (function () {
    function MatchFacesSimilarityThresholdSplit() {
    }
    MatchFacesSimilarityThresholdSplit.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesSimilarityThresholdSplit;
        result.matchedFaces = [];
        if (jsonObject["matchedFaces"] != null) {
            for (var i in jsonObject["matchedFaces"]) {
                var item = MatchFacesComparedFacesPair.fromJson(jsonObject["matchedFaces"][i]);
                if (item != undefined)
                    result.matchedFaces.push(item);
            }
        }
        result.unmatchedFaces = [];
        if (jsonObject["unmatchedFaces"] != null) {
            for (var i in jsonObject["unmatchedFaces"]) {
                var item = MatchFacesComparedFacesPair.fromJson(jsonObject["unmatchedFaces"][i]);
                if (item != undefined)
                    result.unmatchedFaces.push(item);
            }
        }
        return result;
    };
    return MatchFacesSimilarityThresholdSplit;
}());
export { MatchFacesSimilarityThresholdSplit };
var DetectFacesRequest = /** @class */ (function () {
    function DetectFacesRequest() {
    }
    DetectFacesRequest.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesRequest;
        result.tag = jsonObject["tag"];
        result.scenario = jsonObject["scenario"];
        result.image = jsonObject["image"];
        result.configuration = DetectFacesConfiguration.fromJson(jsonObject["configuration"]);
        return result;
    };
    return DetectFacesRequest;
}());
export { DetectFacesRequest };
var DetectFacesConfiguration = /** @class */ (function () {
    function DetectFacesConfiguration() {
    }
    DetectFacesConfiguration.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesConfiguration;
        result.attributes = [];
        if (jsonObject["attributes"] != null) {
            for (var i in jsonObject["attributes"]) {
                result.attributes.push(jsonObject["attributes"][i]);
            }
        }
        result.customQuality = [];
        if (jsonObject["customQuality"] != null) {
            for (var i in jsonObject["customQuality"]) {
                var item = ImageQualityCharacteristic.fromJson(jsonObject["customQuality"][i]);
                if (item != undefined)
                    result.customQuality.push(item);
            }
        }
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"]);
        result.onlyCentralFace = jsonObject["onlyCentralFace"];
        return result;
    };
    return DetectFacesConfiguration;
}());
export { DetectFacesConfiguration };
var OutputImageParams = /** @class */ (function () {
    function OutputImageParams() {
    }
    OutputImageParams.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new OutputImageParams;
        result.backgroundColor = jsonObject["backgroundColor"];
        result.crop = OutputImageCrop.fromJson(jsonObject["crop"]);
        return result;
    };
    return OutputImageParams;
}());
export { OutputImageParams };
var OutputImageCrop = /** @class */ (function () {
    function OutputImageCrop() {
    }
    OutputImageCrop.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new OutputImageCrop;
        result.type = jsonObject["type"];
        result.size = Size.fromJson(jsonObject["size"]);
        result.padColor = jsonObject["padColor"];
        result.returnOriginalRect = jsonObject["returnOriginalRect"];
        return result;
    };
    return OutputImageCrop;
}());
export { OutputImageCrop };
var ImageQualityCharacteristic = /** @class */ (function () {
    function ImageQualityCharacteristic() {
    }
    ImageQualityCharacteristic.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQualityCharacteristic;
        result.characteristicName = jsonObject["characteristicName"];
        result.imageQualityGroup = jsonObject["imageQualityGroup"];
        result.recommendedRange = ImageQualityRange.fromJson(jsonObject["recommendedRange"]);
        result.customRange = ImageQualityRange.fromJson(jsonObject["customRange"]);
        return result;
    };
    return ImageQualityCharacteristic;
}());
export { ImageQualityCharacteristic };
var ImageQualityRange = /** @class */ (function () {
    function ImageQualityRange() {
    }
    ImageQualityRange.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQualityRange;
        result.min = jsonObject["min"];
        result.max = jsonObject["max"];
        return result;
    };
    return ImageQualityRange;
}());
export { ImageQualityRange };
var Size = /** @class */ (function () {
    function Size() {
    }
    Size.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Size;
        result.width = jsonObject["width"];
        result.height = jsonObject["height"];
        return result;
    };
    return Size;
}());
export { Size };
var DetectFacesResponse = /** @class */ (function () {
    function DetectFacesResponse() {
    }
    DetectFacesResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesResponse;
        result.detection = DetectFaceResult.fromJson(jsonObject["detection"]);
        result.scenario = jsonObject["scenario"];
        result.error = DetectFacesErrorException.fromJson(jsonObject["error"]);
        result.allDetections = [];
        if (jsonObject["allDetections"] != null) {
            for (var i in jsonObject["allDetections"]) {
                var item = DetectFaceResult.fromJson(jsonObject["allDetections"][i]);
                if (item != undefined)
                    result.allDetections.push(item);
            }
        }
        return result;
    };
    return DetectFacesResponse;
}());
export { DetectFacesResponse };
var DetectFacesErrorException = /** @class */ (function () {
    function DetectFacesErrorException() {
    }
    DetectFacesErrorException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesErrorException;
        result.errorCode = jsonObject["errorCode"];
        result.underlyingException = DetectFacesBackendException.fromJson(jsonObject["underlyingException"]);
        result.message = jsonObject["message"];
        return result;
    };
    return DetectFacesErrorException;
}());
export { DetectFacesErrorException };
var DetectFacesBackendException = /** @class */ (function () {
    function DetectFacesBackendException() {
    }
    DetectFacesBackendException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesBackendException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return DetectFacesBackendException;
}());
export { DetectFacesBackendException };
var DetectFaceResult = /** @class */ (function () {
    function DetectFaceResult() {
    }
    DetectFaceResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFaceResult;
        result.quality = [];
        if (jsonObject["quality"] != null) {
            for (var i in jsonObject["quality"]) {
                var item = ImageQualityResult.fromJson(jsonObject["quality"][i]);
                if (item != undefined)
                    result.quality.push(item);
            }
        }
        result.attributes = [];
        if (jsonObject["attributes"] != null) {
            for (var i in jsonObject["attributes"]) {
                var item = DetectFacesAttributeResult.fromJson(jsonObject["attributes"][i]);
                if (item != undefined)
                    result.attributes.push(item);
            }
        }
        result.landmarks = [];
        if (jsonObject["landmarks"] != null) {
            for (var i in jsonObject["landmarks"]) {
                var item = Point.fromJson(jsonObject["landmarks"][i]);
                if (item != undefined)
                    result.landmarks.push(item);
            }
        }
        result.crop = jsonObject["crop"];
        result.faceRect = Rect.fromJson(jsonObject["faceRect"]);
        result.originalRect = Rect.fromJson(jsonObject["originalRect"]);
        result.isQualityCompliant = jsonObject["isQualityCompliant"];
        return result;
    };
    return DetectFaceResult;
}());
export { DetectFaceResult };
var ImageQualityResult = /** @class */ (function () {
    function ImageQualityResult() {
    }
    ImageQualityResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQualityResult;
        result.name = jsonObject["name"];
        result.group = jsonObject["group"];
        result.status = jsonObject["status"];
        result.range = ImageQualityRange.fromJson(jsonObject["range"]);
        result.value = jsonObject["value"];
        return result;
    };
    return ImageQualityResult;
}());
export { ImageQualityResult };
var DetectFacesAttributeResult = /** @class */ (function () {
    function DetectFacesAttributeResult() {
    }
    DetectFacesAttributeResult.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesAttributeResult;
        result.attribute = jsonObject["attribute"];
        result.value = jsonObject["value"];
        result.range = ImageQualityRange.fromJson(jsonObject["range"]);
        result.confidence = jsonObject["confidence"];
        return result;
    };
    return DetectFacesAttributeResult;
}());
export { DetectFacesAttributeResult };
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Person;
        result.name = jsonObject["name"];
        result.updatedAt = jsonObject["updatedAt"];
        result.id = jsonObject["id"];
        result.metadata = jsonObject["metadata"];
        result.createdAt = jsonObject["createdAt"];
        return result;
    };
    return Person;
}());
export { Person };
var PersonGroup = /** @class */ (function () {
    function PersonGroup() {
    }
    PersonGroup.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PersonGroup;
        result.name = jsonObject["name"];
        result.id = jsonObject["id"];
        result.metadata = jsonObject["metadata"];
        result.createdAt = jsonObject["createdAt"];
        return result;
    };
    return PersonGroup;
}());
export { PersonGroup };
var PersonImage = /** @class */ (function () {
    function PersonImage() {
    }
    PersonImage.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PersonImage;
        result.path = jsonObject["path"];
        result.url = jsonObject["url"];
        result.contentType = jsonObject["contentType"];
        result.id = jsonObject["id"];
        result.metadata = jsonObject["metadata"];
        result.createdAt = jsonObject["createdAt"];
        return result;
    };
    return PersonImage;
}());
export { PersonImage };
var ImageUpload = /** @class */ (function () {
    function ImageUpload() {
    }
    ImageUpload.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageUpload;
        result.imageData = jsonObject["imageData"];
        return result;
    };
    return ImageUpload;
}());
export { ImageUpload };
var EditGroupPersonsRequest = /** @class */ (function () {
    function EditGroupPersonsRequest() {
    }
    EditGroupPersonsRequest.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new EditGroupPersonsRequest;
        result.personIdsToAdd = [];
        if (jsonObject["personIdsToAdd"] != null) {
            for (var i in jsonObject["personIdsToAdd"]) {
                result.personIdsToAdd.push(jsonObject["personIdsToAdd"][i]);
            }
        }
        result.personIdsToRemove = [];
        if (jsonObject["personIdsToRemove"] != null) {
            for (var i in jsonObject["personIdsToRemove"]) {
                result.personIdsToRemove.push(jsonObject["personIdsToRemove"][i]);
            }
        }
        return result;
    };
    return EditGroupPersonsRequest;
}());
export { EditGroupPersonsRequest };
var SearchPersonRequest = /** @class */ (function () {
    function SearchPersonRequest() {
    }
    SearchPersonRequest.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SearchPersonRequest;
        result.groupIdsForSearch = [];
        if (jsonObject["groupIdsForSearch"] != null) {
            for (var i in jsonObject["groupIdsForSearch"]) {
                result.groupIdsForSearch.push(jsonObject["groupIdsForSearch"][i]);
            }
        }
        result.threshold = jsonObject["threshold"];
        result.limit = jsonObject["limit"];
        result.imageUpload = ImageUpload.fromJson(jsonObject["imageUpload"]);
        return result;
    };
    return SearchPersonRequest;
}());
export { SearchPersonRequest };
var SearchPerson = /** @class */ (function () {
    function SearchPerson() {
    }
    SearchPerson.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SearchPerson;
        result.images = [];
        if (jsonObject["images"] != null) {
            for (var i in jsonObject["images"]) {
                var item = SearchPersonImage.fromJson(jsonObject["images"][i]);
                if (item != undefined)
                    result.images.push(item);
            }
        }
        result.name = jsonObject["name"];
        result.updatedAt = jsonObject["updatedAt"];
        result.id = jsonObject["id"];
        result.metadata = jsonObject["metadata"];
        result.createdAt = jsonObject["createdAt"];
        return result;
    };
    return SearchPerson;
}());
export { SearchPerson };
var SearchPersonImage = /** @class */ (function () {
    function SearchPersonImage() {
    }
    SearchPersonImage.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SearchPersonImage;
        result.similarity = jsonObject["similarity"];
        result.distance = jsonObject["distance"];
        result.path = jsonObject["path"];
        result.url = jsonObject["url"];
        result.contentType = jsonObject["contentType"];
        result.id = jsonObject["id"];
        result.metadata = jsonObject["metadata"];
        result.createdAt = jsonObject["createdAt"];
        return result;
    };
    return SearchPersonImage;
}());
export { SearchPersonImage };
export var ImageQualityGroupName = {
    IMAGE_CHARACTERISTICS: 1,
    HEAD_SIZE_AND_POSITION: 2,
    FACE_QUALITY: 3,
    EYES_CHARACTERISTICS: 4,
    SHADOWS_AND_LIGHTNING: 5,
    POSE_AND_EXPRESSION: 6,
    HEAD_OCCLUSION: 7,
    BACKGROUND: 8,
    UNKNOWN: 9,
};
export var DetectFacesErrorCode = {
    IMAGE_EMPTY: "IMAGE_EMPTY",
    FR_FACE_NOT_DETECTED: "FR_FACE_NOT_DETECTED",
    FACER_NO_LICENSE: "FACER_NO_LICENSE",
    FACER_IS_NOT_INITIALIZED: "FACER_IS_NOT_INITIALIZED",
    FACER_COMMAND_IS_NOT_SUPPORTED: "FACER_COMMAND_IS_NOT_SUPPORTED",
    FACER_COMMAND_PARAMS_READ_ERROR: "FACER_COMMAND_PARAMS_READ_ERROR",
    PROCESSING_FAILED: "PROCESSING_FAILED",
    REQUEST_FAILED: "REQUEST_FAILED",
    API_CALL_FAILED: "API_CALL_FAILED",
};
export var InitErrorCode = {
    IN_PROGRESS_ALREADY: "IN_PROGRESS_ALREADY",
    CONTEXT_IS_NULL: "CONTEXT_IS_NULL",
    MISSING_CORE: "MISSING_CORE",
    INTERNAL_CORE_ERROR: "INTERNAL_CORE_ERROR",
};
export var LivenessStatus = {
    PASSED: "PASSED",
    UNKNOWN: "UNKNOWN",
};
export var CameraErrorCode = {
    CAMERA_NOT_AVAILABLE: "CAMERA_NOT_AVAILABLE",
    CAMERA_NO_PERMISSION: "CAMERA_NO_PERMISSION",
};
export var LivenessErrorCode = {
    CONTEXT_IS_NULL: "CONTEXT_IS_NULL",
    IN_PROGRESS_ALREADY: "IN_PROGRESS_ALREADY",
    ZOOM_NOT_SUPPORTED: "ZOOM_NOT_SUPPORTED",
    NO_LICENSE: "NO_LICENSE",
    CANCELLED: "CANCELLED",
    PROCESSING_TIMEOUT: "PROCESSING_TIMEOUT",
    API_CALL_FAILED: "API_CALL_FAILED",
    PROCESSING_FAILED: "PROCESSING_FAILED",
    NOT_INITIALIZED: "NOT_INITIALIZED",
    CAMERA_NO_PERMISSION: "CAMERA_NO_PERMISSION",
    CAMERA_NOT_AVAILABLE: "CAMERA_NOT_AVAILABLE",
    PROCESSING_FRAME_FAILED: "PROCESSING_FRAME_FAILED",
};
export var DetectFacesBackendErrorCode = {
    FR_FACE_NOT_DETECTED: 2,
    FACER_NO_LICENSE: 200,
    FACER_IS_NOT_INITIALIZED: 201,
    FACER_COMMAND_IS_NOT_SUPPORTED: 202,
    FACER_COMMAND_PARAMS_READ_ERROR: 203,
    UNDEFINED: -1,
};
export var MatchFacesErrorCode = {
    IMAGE_EMPTY: "IMAGE_EMPTY",
    FACE_NOT_DETECTED: "FACE_NOT_DETECTED",
    LANDMARKS_NOT_DETECTED: "LANDMARKS_NOT_DETECTED",
    FACE_ALIGNER_FAILED: "FACE_ALIGNER_FAILED",
    DESCRIPTOR_EXTRACTOR_ERROR: "DESCRIPTOR_EXTRACTOR_ERROR",
    NO_LICENSE: "NO_LICENSE",
    IMAGES_COUNT_LIMIT_EXCEEDED: "IMAGES_COUNT_LIMIT_EXCEEDED",
    API_CALL_FAILED: "API_CALL_FAILED",
    PROCESSING_FAILED: "PROCESSING_FAILED",
};
export var ImageQualityCharacteristicName = {
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
    IMAGE_CHARACTERISTIC_ALL_RECOMMENDED: "ImageCharacteristic",
    HEAD_SIZE_AND_POSITION_ALL_RECOMMENDED: "HeadSizeAndPosition",
    FACE_IMAGE_QUALITY_ALL_RECOMMENDED: "FaceImageQuality",
    EYES_CHARACTERISTICS_ALL_RECOMMENDED: "EyesCharacteristics",
    SHADOW_AND_LIGHTING_ALL_RECOMMENDED: "ShadowsAndLightning",
    POSE_AND_EXPRESSION_ALL_RECOMMENDED: "PoseAndExpression",
    HEAD_OCCLUSION_ALL_RECOMMENDED: "HeadOcclusion",
    QUALITY_BACKGROUND_ALL_RECOMMENDED: "QualityBackground",
};
export var DetectFacesScenario = {
    CROP_CENTRAL_FACE: "CropCentralFace",
    CROP_ALL_FACES: "CropAllFaces",
    THUMBNAIL: "Thumbnail",
    ATTRIBUTES_ALL: "AttributesAll",
    QUALITY_FULL: "QualityFull",
    QUALITY_ICAO: "QualityICAO",
    QUALITY_VISA_SCHENGEN: "QualityVisaSchengen",
    QUALITY_VISA_USA: "QualityVisaUSA",
};
export var OutputImageCropAspectRatio = {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: 0,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: 1,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: 2,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: 3,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: 4,
};
export var LivenessSkipStep = {
    NONE: 0,
    START_STEP: 1,
    DONE_STEP: 2,
};
export var ImageQualityResultStatus = {
    IMAGE_QUALITY_RESULT_STATUS_FALSE: 0,
    IMAGE_QUALITY_RESULT_STATUS_TRUE: 1,
    IMAGE_QUALITY_RESULT_STATUS_UNDETERMINED: 2,
};
export var ImageType = {
    PRINTED: 1,
    RFID: 2,
    LIVE: 3,
    DOCUMENT_WITH_LIVE: 4,
    EXTERNAL: 5,
    GHOST_PORTRAIT: 6,
};
export var FaceCaptureErrorCode = {
    CANCEL: "CANCEL",
    CAMERA_NOT_AVAILABLE: "CAMERA_NOT_AVAILABLE",
    CAMERA_NO_PERMISSION: "CAMERA_NO_PERMISSION",
    IN_PROGRESS_ALREADY: "IN_PROGRESS_ALREADY",
    CONTEXT_IS_NULL: "CONTEXT_IS_NULL",
    TIMEOUT: "TIMEOUT",
    NOT_INITIALIZED: "NOT_INITIALIZED",
};
export var LivenessBackendErrorCode = {
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
};
export var DetectFacesAttribute = {
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
};
export var Enum = {
    ImageQualityGroupName: ImageQualityGroupName,
    DetectFacesErrorCode: DetectFacesErrorCode,
    InitErrorCode: InitErrorCode,
    LivenessStatus: LivenessStatus,
    CameraErrorCode: CameraErrorCode,
    LivenessErrorCode: LivenessErrorCode,
    DetectFacesBackendErrorCode: DetectFacesBackendErrorCode,
    MatchFacesErrorCode: MatchFacesErrorCode,
    ImageQualityCharacteristicName: ImageQualityCharacteristicName,
    DetectFacesScenario: DetectFacesScenario,
    OutputImageCropAspectRatio: OutputImageCropAspectRatio,
    LivenessSkipStep: LivenessSkipStep,
    ImageQualityResultStatus: ImageQualityResultStatus,
    ImageType: ImageType,
    FaceCaptureErrorCode: FaceCaptureErrorCode,
    LivenessBackendErrorCode: LivenessBackendErrorCode,
    DetectFacesAttribute: DetectFacesAttribute,
};
var FaceSDKOriginal = /** @class */ (function (_super) {
    __extends(FaceSDKOriginal, _super);
    function FaceSDKOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceSDKOriginal.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceSDKOriginal.prototype.startLiveness = function () { return cordova(this, "startLiveness", {}, arguments); };
    FaceSDKOriginal.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceSDKOriginal.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceSDKOriginal.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceSDKOriginal.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    FaceSDKOriginal.prototype.deinit = function () { return cordova(this, "deinit", {}, arguments); };
    FaceSDKOriginal.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    FaceSDKOriginal.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceSDKOriginal.prototype.setRequestHeaders = function (headers) { return cordova(this, "setRequestHeaders", {}, arguments); };
    FaceSDKOriginal.prototype.presentFaceCaptureActivityWithConfig = function (config) { return cordova(this, "presentFaceCaptureActivityWithConfig", {}, arguments); };
    FaceSDKOriginal.prototype.startLivenessWithConfig = function (config) { return cordova(this, "startLivenessWithConfig", {}, arguments); };
    FaceSDKOriginal.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDKOriginal.prototype.matchFaces = function (request) { return cordova(this, "matchFaces", {}, arguments); };
    FaceSDKOriginal.prototype.detectFaces = function (request) { return cordova(this, "detectFaces", {}, arguments); };
    FaceSDKOriginal.prototype.matchFacesWithConfig = function (request, config) { return cordova(this, "matchFacesWithConfig", {}, arguments); };
    FaceSDKOriginal.prototype.setOnCustomButtonTappedListener = function () { return cordova(this, "setOnCustomButtonTappedListener", { "observable": true }, arguments); };
    FaceSDKOriginal.prototype.setUiCustomizationLayer = function (json) { return cordova(this, "setUiCustomizationLayer", {}, arguments); };
    FaceSDKOriginal.prototype.setLanguage = function (language) { return cordova(this, "setLanguage", {}, arguments); };
    FaceSDKOriginal.prototype.matchFacesSimilarityThresholdSplit = function (faces, similarity) { return cordova(this, "matchFacesSimilarityThresholdSplit", {}, arguments); };
    FaceSDKOriginal.prototype.getPersons = function () { return cordova(this, "getPersons", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsForPage = function (page, size) { return cordova(this, "getPersonsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.getPerson = function (personId) { return cordova(this, "getPerson", {}, arguments); };
    FaceSDKOriginal.prototype.createPerson = function (name, metadata) { return cordova(this, "createPerson", {}, arguments); };
    FaceSDKOriginal.prototype.updatePerson = function (personId, name, metadata) { return cordova(this, "updatePerson", {}, arguments); };
    FaceSDKOriginal.prototype.deletePerson = function (personId) { return cordova(this, "deletePerson", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImages = function (personId) { return cordova(this, "getPersonImages", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImagesForPage = function (personId, page, size) { return cordova(this, "getPersonImagesForPage", {}, arguments); };
    FaceSDKOriginal.prototype.addPersonImage = function (personId, image) { return cordova(this, "addPersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImage = function (personId, imageId) { return cordova(this, "getPersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.deletePersonImage = function (personId, imageId) { return cordova(this, "deletePersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.getGroups = function () { return cordova(this, "getGroups", {}, arguments); };
    FaceSDKOriginal.prototype.getGroupsForPage = function (page, size) { return cordova(this, "getGroupsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonGroups = function (personId) { return cordova(this, "getPersonGroups", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonGroupsForPage = function (personId, page, size) { return cordova(this, "getPersonGroupsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.createGroup = function (name, metadata) { return cordova(this, "createGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getGroup = function (groupId) { return cordova(this, "getGroup", {}, arguments); };
    FaceSDKOriginal.prototype.updateGroup = function (groupId, name, metadata) { return cordova(this, "updateGroup", {}, arguments); };
    FaceSDKOriginal.prototype.editPersonsInGroup = function (groupId, editGroupPersonsRequest) { return cordova(this, "editPersonsInGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsInGroup = function (groupId) { return cordova(this, "getPersonsInGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsInGroupForPage = function (groupId, page, size) { return cordova(this, "getPersonsInGroupForPage", {}, arguments); };
    FaceSDKOriginal.prototype.deleteGroup = function (groupId) { return cordova(this, "deleteGroup", {}, arguments); };
    FaceSDKOriginal.prototype.searchPerson = function (searchPersonRequest) { return cordova(this, "searchPerson", {}, arguments); };
    FaceSDKOriginal.pluginName = "FaceSDK";
    FaceSDKOriginal.plugin = "cordova-plugin-face-api";
    FaceSDKOriginal.pluginRef = "FaceSDKPlugin.FaceSDK";
    FaceSDKOriginal.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceSDKOriginal.platforms = ["Android", "iOS"];
    return FaceSDKOriginal;
}(AwesomeCordovaNativePlugin));
var FaceSDK = new FaceSDKOriginal();
export { FaceSDK };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQU12Qiw2QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksb0JBQW9CLENBQUE7UUFFdkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzsrQkFoQkw7Ozs7OztJQXVCVyxzQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFBO1FBRWhDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7d0JBL0JMOzs7Ozs7SUF1Q1csK0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJ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QUFFLElBQVMsRUFBRSxRQUFhO0lBVWxELG9DQUFrQixhQUFDLE9BQVksRUFBRSx1QkFBNEI7SUFTN0QsbUNBQWlCLGFBQUMsT0FBWTtJQVc5QiwwQ0FBd0IsYUFBQyxPQUFZLEVBQUUsSUFBUyxFQUFFLElBQVM7SUFTM0QsNkJBQVcsYUFBQyxPQUFZO0lBU3hCLDhCQUFZLGFBQUMsbUJBQXdCOzs7Ozs7a0JBdCtDekM7RUE0a0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0RXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEluaXRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbml0RXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXhjZXB0aW9uPzogTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFcnJvckV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXhjZXB0aW9uID0gTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzQmFja2VuZEV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0V4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlUmVzcG9uc2Uge1xuICAgIGV4Y2VwdGlvbj86IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG4gICAgaW1hZ2U/OiBJbWFnZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZVJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBGYWNlQ2FwdHVyZUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUmVzcG9uc2Uge1xuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIGxpdmVuZXNzPzogc3RyaW5nXG4gICAgdGFnPzogc3RyaW5nXG4gICAgdHJhbnNhY3Rpb25JZD86IHN0cmluZ1xuICAgIGV4Y2VwdGlvbj86IExpdmVuZXNzRXJyb3JFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3MgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JZFwiXVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTGl2ZW5lc3NFcnJvckV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVzcG9uc2Uge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIGV4Y2VwdGlvbj86IE1hdGNoRmFjZXNFeGNlcHRpb25cbiAgICBkZXRlY3Rpb25zPzogTWF0Y2hGYWNlc0RldGVjdGlvbltdXG4gICAgcmVzdWx0cz86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRldGVjdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVzdWx0c1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0cy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2Uge1xuICAgIGltYWdlVHlwZT86IG51bWJlclxuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIHRhZz86IHN0cmluZ1xuICAgIGltYWdlRGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlRGF0YSA9IGpzb25PYmplY3RbXCJpbWFnZURhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1JlcXVlc3Qge1xuICAgIGltYWdlcz86IE1hdGNoRmFjZXNJbWFnZVtdXG4gICAgY3VzdG9tTWV0YWRhdGE/OiBhbnlcbiAgICB0aHVtYm5haWxzPzogYm9vbGVhblxuICAgIHRhZz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmN1c3RvbU1ldGFkYXRhID0ganNvbk9iamVjdFtcImN1c3RvbU1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC50aHVtYm5haWxzID0ganNvbk9iamVjdFtcInRodW1ibmFpbHNcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0ltYWdlIHtcbiAgICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgICBkZXRlY3RBbGw/OiBib29sZWFuXG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgaWRlbnRpZmllcj86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzSW1hZ2VcblxuICAgICAgICByZXN1bHQuaW1hZ2VUeXBlID0ganNvbk9iamVjdFtcImltYWdlVHlwZVwiXVxuICAgICAgICByZXN1bHQuZGV0ZWN0QWxsID0ganNvbk9iamVjdFtcImRldGVjdEFsbFwiXVxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQuaWRlbnRpZmllciA9IGpzb25PYmplY3RbXCJpZGVudGlmaWVyXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpciB7XG4gICAgZmlyc3Q/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlXG4gICAgc2Vjb25kPzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuICAgIHNpbWlsYXJpdHk/OiBudW1iZXJcbiAgICBzY29yZT86IG51bWJlclxuICAgIGV4Y2VwdGlvbj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyXG5cbiAgICAgICAgcmVzdWx0LmZpcnN0ID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlyc3RcIl0pXG4gICAgICAgIHJlc3VsdC5zZWNvbmQgPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWNvbmRcIl0pXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LnNjb3JlID0ganNvbk9iamVjdFtcInNjb3JlXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb21wYXJlZEZhY2Uge1xuICAgIGZhY2U/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVxuICAgIGltYWdlPzogTWF0Y2hGYWNlc0ltYWdlXG4gICAgZmFjZUluZGV4PzogbnVtYmVyXG4gICAgaW1hZ2VJbmRleD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuXG4gICAgICAgIHJlc3VsdC5mYWNlID0gTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VcIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlSW5kZXggPSBqc29uT2JqZWN0W1wiZmFjZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZUluZGV4ID0ganNvbk9iamVjdFtcImltYWdlSW5kZXhcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2Uge1xuICAgIGZhY2VJbmRleD86IG51bWJlclxuICAgIGxhbmRtYXJrcz86IFBvaW50W11cbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICByb3RhdGlvbkFuZ2xlPzogbnVtYmVyXG4gICAgdGh1bWJuYWlsPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcblxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5mYWNlUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VSZWN0XCJdKVxuICAgICAgICByZXN1bHQucm90YXRpb25BbmdsZSA9IGpzb25PYmplY3RbXCJyb3RhdGlvbkFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC50aHVtYm5haWwgPSBqc29uT2JqZWN0W1widGh1bWJuYWlsXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb24ge1xuICAgIGltYWdlPzogTWF0Y2hGYWNlc0ltYWdlXG4gICAgaW1hZ2VJbmRleD86IG51bWJlclxuICAgIGZhY2VzPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VbXVxuICAgIGV4Y2VwdGlvbj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0RldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNEZXRlY3Rpb25cblxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VJbmRleCA9IGpzb25PYmplY3RbXCJpbWFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5mYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQb2ludCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50XG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNTaW1pbGFyaXR5VGhyZXNob2xkU3BsaXQge1xuICAgIG1hdGNoZWRGYWNlcz86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgdW5tYXRjaGVkRmFjZXM/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzU2ltaWxhcml0eVRocmVzaG9sZFNwbGl0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1NpbWlsYXJpdHlUaHJlc2hvbGRTcGxpdFxuXG4gICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1JlcXVlc3Qge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBjb25maWd1cmF0aW9uPzogRGV0ZWN0RmFjZXNDb25maWd1cmF0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNvbmZpZ3VyYXRpb24gPSBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImNvbmZpZ3VyYXRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQ29uZmlndXJhdGlvbiB7XG4gICAgYXR0cmlidXRlcz86IHN0cmluZ1tdXG4gICAgY3VzdG9tUXVhbGl0eT86IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljW11cbiAgICBvdXRwdXRJbWFnZVBhcmFtcz86IE91dHB1dEltYWdlUGFyYW1zXG4gICAgb25seUNlbnRyYWxGYWNlPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb25cblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5vbmx5Q2VudHJhbEZhY2UgPSBqc29uT2JqZWN0W1wib25seUNlbnRyYWxGYWNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE91dHB1dEltYWdlUGFyYW1zIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmdcbiAgICBjcm9wPzogT3V0cHV0SW1hZ2VDcm9wXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE91dHB1dEltYWdlUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT3V0cHV0SW1hZ2VQYXJhbXNcblxuICAgICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcImJhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQuY3JvcCA9IE91dHB1dEltYWdlQ3JvcC5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3JvcFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0SW1hZ2VDcm9wIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc2l6ZT86IFNpemVcbiAgICBwYWRDb2xvcj86IHN0cmluZ1xuICAgIHJldHVybk9yaWdpbmFsUmVjdD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT3V0cHV0SW1hZ2VDcm9wIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT3V0cHV0SW1hZ2VDcm9wXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IFNpemUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpemVcIl0pXG4gICAgICAgIHJlc3VsdC5wYWRDb2xvciA9IGpzb25PYmplY3RbXCJwYWRDb2xvclwiXVxuICAgICAgICByZXN1bHQucmV0dXJuT3JpZ2luYWxSZWN0ID0ganNvbk9iamVjdFtcInJldHVybk9yaWdpbmFsUmVjdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYyB7XG4gICAgY2hhcmFjdGVyaXN0aWNOYW1lPzogc3RyaW5nXG4gICAgaW1hZ2VRdWFsaXR5R3JvdXA/OiBudW1iZXJcbiAgICByZWNvbW1lbmRlZFJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICBjdXN0b21SYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNcblxuICAgICAgICByZXN1bHQuY2hhcmFjdGVyaXN0aWNOYW1lID0ganNvbk9iamVjdFtcImNoYXJhY3RlcmlzdGljTmFtZVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5R3JvdXAgPSBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5R3JvdXBcIl1cbiAgICAgICAgcmVzdWx0LnJlY29tbWVuZGVkUmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjb21tZW5kZWRSYW5nZVwiXSlcbiAgICAgICAgcmVzdWx0LmN1c3RvbVJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImN1c3RvbVJhbmdlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlSYW5nZSB7XG4gICAgbWluPzogbnVtYmVyXG4gICAgbWF4PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eVJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5UmFuZ2VcblxuICAgICAgICByZXN1bHQubWluID0ganNvbk9iamVjdFtcIm1pblwiXVxuICAgICAgICByZXN1bHQubWF4ID0ganNvbk9iamVjdFtcIm1heFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaXplIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTaXplIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2l6ZVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1Jlc3BvbnNlIHtcbiAgICBkZXRlY3Rpb24/OiBEZXRlY3RGYWNlUmVzdWx0XG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBlcnJvcj86IERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb25cbiAgICBhbGxEZXRlY3Rpb25zPzogRGV0ZWN0RmFjZVJlc3VsdFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbiA9IERldGVjdEZhY2VSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgICAgICByZXN1bHQuYWxsRGV0ZWN0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFsbERldGVjdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRGV0ZWN0RmFjZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hbGxEZXRlY3Rpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXhjZXB0aW9uPzogRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNFcnJvckV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXhjZXB0aW9uID0gRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQmFja2VuZEV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VSZXN1bHQge1xuICAgIHF1YWxpdHk/OiBJbWFnZVF1YWxpdHlSZXN1bHRbXVxuICAgIGF0dHJpYnV0ZXM/OiBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFtdXG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGNyb3A/OiBzdHJpbmdcbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFJlY3Q/OiBSZWN0XG4gICAgaXNRdWFsaXR5Q29tcGxpYW50PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5xdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNyb3AgPSBqc29uT2JqZWN0W1wiY3JvcFwiXVxuICAgICAgICByZXN1bHQuZmFjZVJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm9yaWdpbmFsUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcIm9yaWdpbmFsUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmlzUXVhbGl0eUNvbXBsaWFudCA9IGpzb25PYmplY3RbXCJpc1F1YWxpdHlDb21wbGlhbnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5UmVzdWx0IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgZ3JvdXA/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICByYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5UmVzdWx0XG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuZ3JvdXAgPSBqc29uT2JqZWN0W1wiZ3JvdXBcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJhbmdlXCJdKVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQge1xuICAgIGF0dHJpYnV0ZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGNvbmZpZGVuY2U/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGUgPSBqc29uT2JqZWN0W1wiYXR0cmlidXRlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQucmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmFuZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5jb25maWRlbmNlID0ganNvbk9iamVjdFtcImNvbmZpZGVuY2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nXG4gICAgaWQ/OiBudW1iZXJcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25cblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC51cGRhdGVkQXQgPSBqc29uT2JqZWN0W1widXBkYXRlZEF0XCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uR3JvdXAge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBpZD86IG51bWJlclxuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbkdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGVyc29uR3JvdXBcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uSW1hZ2Uge1xuICAgIHBhdGg/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBjb250ZW50VHlwZT86IHN0cmluZ1xuICAgIGlkPzogbnVtYmVyXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25JbWFnZVxuXG4gICAgICAgIHJlc3VsdC5wYXRoID0ganNvbk9iamVjdFtcInBhdGhcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LmNvbnRlbnRUeXBlID0ganNvbk9iamVjdFtcImNvbnRlbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQge1xuICAgIGltYWdlRGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVVwbG9hZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlVXBsb2FkXG5cbiAgICAgICAgcmVzdWx0LmltYWdlRGF0YSA9IGpzb25PYmplY3RbXCJpbWFnZURhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWRpdEdyb3VwUGVyc29uc1JlcXVlc3Qge1xuICAgIHBlcnNvbklkc1RvQWRkPzogbnVtYmVyW11cbiAgICBwZXJzb25JZHNUb1JlbW92ZT86IG51bWJlcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRWRpdEdyb3VwUGVyc29uc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQucGVyc29uSWRzVG9BZGQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBlcnNvbklkc1RvQWRkXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGVyc29uSWRzVG9BZGQucHVzaChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvUmVtb3ZlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb1JlbW92ZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvUmVtb3ZlLnB1c2goanNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvblJlcXVlc3Qge1xuICAgIGdyb3VwSWRzRm9yU2VhcmNoPzogbnVtYmVyW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBsaW1pdD86IG51bWJlclxuICAgIGltYWdlVXBsb2FkPzogSW1hZ2VVcGxvYWRcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlYXJjaFBlcnNvblJlcXVlc3RcblxuICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2ggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2gucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmxpbWl0ID0ganNvbk9iamVjdFtcImxpbWl0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVVwbG9hZCA9IEltYWdlVXBsb2FkLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVVwbG9hZFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uIHtcbiAgICBpbWFnZXM/OiBTZWFyY2hQZXJzb25JbWFnZVtdXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHVwZGF0ZWRBdD86IHN0cmluZ1xuICAgIGlkPzogbnVtYmVyXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uXG5cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNlYXJjaFBlcnNvbkltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC51cGRhdGVkQXQgPSBqc29uT2JqZWN0W1widXBkYXRlZEF0XCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uSW1hZ2Uge1xuICAgIHNpbWlsYXJpdHk/OiBudW1iZXJcbiAgICBkaXN0YW5jZT86IG51bWJlclxuICAgIHBhdGg/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBjb250ZW50VHlwZT86IHN0cmluZ1xuICAgIGlkPzogbnVtYmVyXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25JbWFnZVxuXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmRpc3RhbmNlID0ganNvbk9iamVjdFtcImRpc3RhbmNlXCJdXG4gICAgICAgIHJlc3VsdC5wYXRoID0ganNvbk9iamVjdFtcInBhdGhcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LmNvbnRlbnRUeXBlID0ganNvbk9iamVjdFtcImNvbnRlbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5R3JvdXBOYW1lID0ge1xuICAgIElNQUdFX0NIQVJBQ1RFUklTVElDUzogMSxcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OOiAyLFxuICAgIEZBQ0VfUVVBTElUWTogMyxcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDUzogNCxcbiAgICBTSEFET1dTX0FORF9MSUdIVE5JTkc6IDUsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTjogNixcbiAgICBIRUFEX09DQ0xVU0lPTjogNyxcbiAgICBCQUNLR1JPVU5EOiA4LFxuICAgIFVOS05PV046IDksXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogXCJJTUFHRV9FTVBUWVwiLFxuICAgIEZSX0ZBQ0VfTk9UX0RFVEVDVEVEOiBcIkZSX0ZBQ0VfTk9UX0RFVEVDVEVEXCIsXG4gICAgRkFDRVJfTk9fTElDRU5TRTogXCJGQUNFUl9OT19MSUNFTlNFXCIsXG4gICAgRkFDRVJfSVNfTk9UX0lOSVRJQUxJWkVEOiBcIkZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRFwiLFxuICAgIEZBQ0VSX0NPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogXCJGQUNFUl9DT01NQU5EX0lTX05PVF9TVVBQT1JURURcIixcbiAgICBGQUNFUl9DT01NQU5EX1BBUkFNU19SRUFEX0VSUk9SOiBcIkZBQ0VSX0NPTU1BTkRfUEFSQU1TX1JFQURfRVJST1JcIixcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogXCJQUk9DRVNTSU5HX0ZBSUxFRFwiLFxuICAgIFJFUVVFU1RfRkFJTEVEOiBcIlJFUVVFU1RfRkFJTEVEXCIsXG4gICAgQVBJX0NBTExfRkFJTEVEOiBcIkFQSV9DQUxMX0ZBSUxFRFwiLFxufVxuXG5leHBvcnQgY29uc3QgSW5pdEVycm9yQ29kZSA9IHtcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiBcIklOX1BST0dSRVNTX0FMUkVBRFlcIixcbiAgICBDT05URVhUX0lTX05VTEw6IFwiQ09OVEVYVF9JU19OVUxMXCIsXG4gICAgTUlTU0lOR19DT1JFOiBcIk1JU1NJTkdfQ09SRVwiLFxuICAgIElOVEVSTkFMX0NPUkVfRVJST1I6IFwiSU5URVJOQUxfQ09SRV9FUlJPUlwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTdGF0dXMgPSB7XG4gICAgUEFTU0VEOiBcIlBBU1NFRFwiLFxuICAgIFVOS05PV046IFwiVU5LTk9XTlwiLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhRXJyb3JDb2RlID0ge1xuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiBcIkNBTUVSQV9OT1RfQVZBSUxBQkxFXCIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IFwiQ0FNRVJBX05PX1BFUk1JU1NJT05cIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzRXJyb3JDb2RlID0ge1xuICAgIENPTlRFWFRfSVNfTlVMTDogXCJDT05URVhUX0lTX05VTExcIixcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiBcIklOX1BST0dSRVNTX0FMUkVBRFlcIixcbiAgICBaT09NX05PVF9TVVBQT1JURUQ6IFwiWk9PTV9OT1RfU1VQUE9SVEVEXCIsXG4gICAgTk9fTElDRU5TRTogXCJOT19MSUNFTlNFXCIsXG4gICAgQ0FOQ0VMTEVEOiBcIkNBTkNFTExFRFwiLFxuICAgIFBST0NFU1NJTkdfVElNRU9VVDogXCJQUk9DRVNTSU5HX1RJTUVPVVRcIixcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IFwiQVBJX0NBTExfRkFJTEVEXCIsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IFwiUFJPQ0VTU0lOR19GQUlMRURcIixcbiAgICBOT1RfSU5JVElBTElaRUQ6IFwiTk9UX0lOSVRJQUxJWkVEXCIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IFwiQ0FNRVJBX05PX1BFUk1JU1NJT05cIixcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogXCJDQU1FUkFfTk9UX0FWQUlMQUJMRVwiLFxuICAgIFBST0NFU1NJTkdfRlJBTUVfRkFJTEVEOiBcIlBST0NFU1NJTkdfRlJBTUVfRkFJTEVEXCIsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUgPSB7XG4gICAgRlJfRkFDRV9OT1RfREVURUNURUQ6IDIsXG4gICAgRkFDRVJfTk9fTElDRU5TRTogMjAwLFxuICAgIEZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRDogMjAxLFxuICAgIEZBQ0VSX0NPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogMjAyLFxuICAgIEZBQ0VSX0NPTU1BTkRfUEFSQU1TX1JFQURfRVJST1I6IDIwMyxcbiAgICBVTkRFRklORUQ6IC0xLFxufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogXCJJTUFHRV9FTVBUWVwiLFxuICAgIEZBQ0VfTk9UX0RFVEVDVEVEOiBcIkZBQ0VfTk9UX0RFVEVDVEVEXCIsXG4gICAgTEFORE1BUktTX05PVF9ERVRFQ1RFRDogXCJMQU5ETUFSS1NfTk9UX0RFVEVDVEVEXCIsXG4gICAgRkFDRV9BTElHTkVSX0ZBSUxFRDogXCJGQUNFX0FMSUdORVJfRkFJTEVEXCIsXG4gICAgREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1I6IFwiREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1JcIixcbiAgICBOT19MSUNFTlNFOiBcIk5PX0xJQ0VOU0VcIixcbiAgICBJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERUQ6IFwiSU1BR0VTX0NPVU5UX0xJTUlUX0VYQ0VFREVEXCIsXG4gICAgQVBJX0NBTExfRkFJTEVEOiBcIkFQSV9DQUxMX0ZBSUxFRFwiLFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiBcIlBST0NFU1NJTkdfRkFJTEVEXCIsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY05hbWUgPSB7XG4gICAgSU1BR0VfV0lEVEg6IFwiSW1hZ2VXaWR0aFwiLFxuICAgIElNQUdFX0hFSUdIVDogXCJJbWFnZUhlaWdodFwiLFxuICAgIElNQUdFX1dJRFRIX1RPX0hFSUdIVDogXCJJbWFnZVdpZHRoVG9IZWlnaHRcIixcbiAgICBJTUFHRV9DSEFOTkVMU19OVU1CRVI6IFwiSW1hZ2VDaGFubmVsc051bWJlclwiLFxuICAgIFBBRERJTkdfUkFUSU86IFwiUGFkZGluZ1JhdGlvXCIsXG4gICAgRkFDRV9NSURfUE9JTlRfSE9SSVpPTlRBTF9QT1NJVElPTjogXCJGYWNlTWlkUG9pbnRIb3Jpem9udGFsUG9zaXRpb25cIixcbiAgICBGQUNFX01JRF9QT0lOVF9WRVJUSUNBTF9QT1NJVElPTjogXCJGYWNlTWlkUG9pbnRWZXJ0aWNhbFBvc2l0aW9uXCIsXG4gICAgSEVBRF9XSURUSF9SQVRJTzogXCJIZWFkV2lkdGhSYXRpb1wiLFxuICAgIEhFQURfSEVJR0hUX1JBVElPOiBcIkhlYWRIZWlnaHRSYXRpb1wiLFxuICAgIEVZRVNfRElTVEFOQ0U6IFwiRXllc0Rpc3RhbmNlXCIsXG4gICAgWUFXOiBcIllhd1wiLFxuICAgIFBJVENIOiBcIlBpdGNoXCIsXG4gICAgUk9MTDogXCJSb2xsXCIsXG4gICAgQkxVUl9MRVZFTDogXCJCbHVyTGV2ZWxcIixcbiAgICBOT0lTRV9MRVZFTDogXCJOb2lzZUxldmVsXCIsXG4gICAgVU5OQVRVUkFMX1NLSU5fVE9ORTogXCJVbm5hdHVyYWxTa2luVG9uZVwiLFxuICAgIEZBQ0VfRFlOQU1JQ19SQU5HRTogXCJGYWNlRHluYW1pY1JhbmdlXCIsXG4gICAgRVlFX1JJR0hUX0NMT1NFRDogXCJFeWVSaWdodENsb3NlZFwiLFxuICAgIEVZRV9MRUZUX0NMT1NFRDogXCJFeWVMZWZ0Q2xvc2VkXCIsXG4gICAgRVlFX1JJR0hUX09DQ0xVREVEOiBcIkV5ZVJpZ2h0T2NjbHVkZWRcIixcbiAgICBFWUVfTEVGVF9PQ0NMVURFRDogXCJFeWVMZWZ0T2NjbHVkZWRcIixcbiAgICBFWUVTX1JFRDogXCJFeWVzUmVkXCIsXG4gICAgRVlFX1JJR0hUX0NPVkVSRURfV0lUSF9IQUlSOiBcIkV5ZVJpZ2h0Q292ZXJlZFdpdGhIYWlyXCIsXG4gICAgRVlFX0xFRlRfQ09WRVJFRF9XSVRIX0hBSVI6IFwiRXllTGVmdENvdmVyZWRXaXRoSGFpclwiLFxuICAgIE9GRl9HQVpFOiBcIk9mZkdhemVcIixcbiAgICBUT09fREFSSzogXCJUb29EYXJrXCIsXG4gICAgVE9PX0xJR0hUOiBcIlRvb0xpZ2h0XCIsXG4gICAgRkFDRV9HTEFSRTogXCJGYWNlR2xhcmVcIixcbiAgICBTSEFET1dTX09OX0ZBQ0U6IFwiU2hhZG93c09uRmFjZVwiLFxuICAgIFNIT1VMREVSU19QT1NFOiBcIlNob3VsZGVyc1Bvc2VcIixcbiAgICBFWFBSRVNTSU9OX0xFVkVMOiBcIkV4cHJlc3Npb25MZXZlbFwiLFxuICAgIE1PVVRIX09QRU46IFwiTW91dGhPcGVuXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBEQVJLX0dMQVNTRVM6IFwiRGFya0dsYXNzZXNcIixcbiAgICBSRUZMRUNUSU9OX09OX0dMQVNTRVM6IFwiUmVmbGVjdGlvbk9uR2xhc3Nlc1wiLFxuICAgIEZSQU1FU19UT09fSEVBVlk6IFwiRnJhbWVzVG9vSGVhdnlcIixcbiAgICBGQUNFX09DQ0xVREVEOiBcIkZhY2VPY2NsdWRlZFwiLFxuICAgIEhFQURfQ09WRVJJTkc6IFwiSGVhZENvdmVyaW5nXCIsXG4gICAgRk9SRUhFQURfQ09WRVJJTkc6IFwiRm9yZWhlYWRDb3ZlcmluZ1wiLFxuICAgIFNUUk9OR19NQUtFVVA6IFwiU3Ryb25nTWFrZXVwXCIsXG4gICAgSEVBRF9QSE9ORVM6IFwiSGVhZHBob25lc1wiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIEJBQ0tHUk9VTkRfVU5JRk9STUlUWTogXCJCYWNrZ3JvdW5kVW5pZm9ybWl0eVwiLFxuICAgIFNIQURPV1NfT05fQkFDS0dST1VORDogXCJTaGFkb3dzT25CYWNrZ3JvdW5kXCIsXG4gICAgT1RIRVJfRkFDRVM6IFwiT3RoZXJGYWNlc1wiLFxuICAgIEJBQ0tHUk9VTkRfQ09MT1JfTUFUQ0g6IFwiQmFja2dyb3VuZENvbG9yTWF0Y2hcIixcbiAgICBVTktOT1dOOiBcIlVua25vd25cIixcbiAgICBJTUFHRV9DSEFSQUNURVJJU1RJQ19BTExfUkVDT01NRU5ERUQ6IFwiSW1hZ2VDaGFyYWN0ZXJpc3RpY1wiLFxuICAgIEhFQURfU0laRV9BTkRfUE9TSVRJT05fQUxMX1JFQ09NTUVOREVEOiBcIkhlYWRTaXplQW5kUG9zaXRpb25cIixcbiAgICBGQUNFX0lNQUdFX1FVQUxJVFlfQUxMX1JFQ09NTUVOREVEOiBcIkZhY2VJbWFnZVF1YWxpdHlcIixcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDU19BTExfUkVDT01NRU5ERUQ6IFwiRXllc0NoYXJhY3RlcmlzdGljc1wiLFxuICAgIFNIQURPV19BTkRfTElHSFRJTkdfQUxMX1JFQ09NTUVOREVEOiBcIlNoYWRvd3NBbmRMaWdodG5pbmdcIixcbiAgICBQT1NFX0FORF9FWFBSRVNTSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJQb3NlQW5kRXhwcmVzc2lvblwiLFxuICAgIEhFQURfT0NDTFVTSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJIZWFkT2NjbHVzaW9uXCIsXG4gICAgUVVBTElUWV9CQUNLR1JPVU5EX0FMTF9SRUNPTU1FTkRFRDogXCJRdWFsaXR5QmFja2dyb3VuZFwiLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNTY2VuYXJpbyA9IHtcbiAgICBDUk9QX0NFTlRSQUxfRkFDRTogXCJDcm9wQ2VudHJhbEZhY2VcIixcbiAgICBDUk9QX0FMTF9GQUNFUzogXCJDcm9wQWxsRmFjZXNcIixcbiAgICBUSFVNQk5BSUw6IFwiVGh1bWJuYWlsXCIsXG4gICAgQVRUUklCVVRFU19BTEw6IFwiQXR0cmlidXRlc0FsbFwiLFxuICAgIFFVQUxJVFlfRlVMTDogXCJRdWFsaXR5RnVsbFwiLFxuICAgIFFVQUxJVFlfSUNBTzogXCJRdWFsaXR5SUNBT1wiLFxuICAgIFFVQUxJVFlfVklTQV9TQ0hFTkdFTjogXCJRdWFsaXR5VmlzYVNjaGVuZ2VuXCIsXG4gICAgUVVBTElUWV9WSVNBX1VTQTogXCJRdWFsaXR5VmlzYVVTQVwiLFxufVxuXG5leHBvcnQgY29uc3QgT3V0cHV0SW1hZ2VDcm9wQXNwZWN0UmF0aW8gPSB7XG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzNYNDogMCxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fNFg1OiAxLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT18yWDM6IDIsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzFYMTogMyxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fN1g5OiA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTa2lwU3RlcCA9IHtcbiAgICBOT05FOiAwLFxuICAgIFNUQVJUX1NURVA6IDEsXG4gICAgRE9ORV9TVEVQOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzID0ge1xuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19GQUxTRTogMCxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVFJVRTogMSxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVU5ERVRFUk1JTkVEOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VUeXBlID0ge1xuICAgIFBSSU5URUQ6IDEsXG4gICAgUkZJRDogMixcbiAgICBMSVZFOiAzLFxuICAgIERPQ1VNRU5UX1dJVEhfTElWRTogNCxcbiAgICBFWFRFUk5BTDogNSxcbiAgICBHSE9TVF9QT1JUUkFJVDogNixcbn1cblxuZXhwb3J0IGNvbnN0IEZhY2VDYXB0dXJlRXJyb3JDb2RlID0ge1xuICAgIENBTkNFTDogXCJDQU5DRUxcIixcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogXCJDQU1FUkFfTk9UX0FWQUlMQUJMRVwiLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiBcIkNBTUVSQV9OT19QRVJNSVNTSU9OXCIsXG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogXCJJTl9QUk9HUkVTU19BTFJFQURZXCIsXG4gICAgQ09OVEVYVF9JU19OVUxMOiBcIkNPTlRFWFRfSVNfTlVMTFwiLFxuICAgIFRJTUVPVVQ6IFwiVElNRU9VVFwiLFxuICAgIE5PVF9JTklUSUFMSVpFRDogXCJOT1RfSU5JVElBTElaRURcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzQmFja2VuZEVycm9yQ29kZSA9IHtcbiAgICBVTkRFRklORUQ6IC0xLFxuICAgIE5PX0xJQ0VOU0U6IDIwMCxcbiAgICBMT1dfUVVBTElUWTogMjMxLFxuICAgIEhJR0hfQVNZTU1FVFJZOiAyMzIsXG4gICAgVFJBQ0tfQlJFQUs6IDI0NixcbiAgICBDTE9TRURfRVlFU19ERVRFQ1RFRDogMjMwLFxuICAgIEZBQ0VfT1ZFUl9FTU9USU9OQUw6IDIzMyxcbiAgICBTVU5HTEFTU0VTX0RFVEVDVEVEOiAyMzQsXG4gICAgU01BTExfQUdFOiAyMzUsXG4gICAgSEVBRERSRVNTX0RFVEVDVEVEOiAyMzYsXG4gICAgTUVESUNJTkVfTUFTS19ERVRFQ1RFRDogMjM5LFxuICAgIE9DQ0xVU0lPTl9ERVRFQ1RFRDogMjQwLFxuICAgIEZPUkVIRUFEX0dMQVNTRVNfREVURUNURUQ6IDI0MixcbiAgICBNT1VUSF9PUEVORUQ6IDI0MyxcbiAgICBBUlRfTUFTS19ERVRFQ1RFRDogMjQ0LFxuICAgIE5PVF9NQVRDSEVEOiAyMzcsXG4gICAgSU1BR0VTX0NPVU5UX0xJTUlUX0VYQ0VFREVEOiAyMzgsXG4gICAgRUxFQ1RST05JQ19ERVZJQ0VfREVURUNURUQ6IDI0NSxcbiAgICBXUk9OR19HRU86IDI0NyxcbiAgICBXUk9OR19PRjogMjQ4LFxuICAgIFdST05HX1ZJRVc6IDI0OSxcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQXR0cmlidXRlID0ge1xuICAgIEFHRTogXCJBZ2VcIixcbiAgICBFWUVfUklHSFQ6IFwiRXllUmlnaHRcIixcbiAgICBFWUVfTEVGVDogXCJFeWVMZWZ0XCIsXG4gICAgRU1PVElPTjogXCJFbW90aW9uXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBHTEFTU0VTOiBcIkdsYXNzZXNcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBNT1VUSDogXCJNb3V0aFwiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIE9DQ0xVU0lPTjogXCJPY2NsdXNpb25cIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURQSE9ORVM6IFwiSGVhZHBob25lc1wiLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEltYWdlUXVhbGl0eUdyb3VwTmFtZSxcbiAgIERldGVjdEZhY2VzRXJyb3JDb2RlLFxuICAgSW5pdEVycm9yQ29kZSxcbiAgIExpdmVuZXNzU3RhdHVzLFxuICAgQ2FtZXJhRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NFcnJvckNvZGUsXG4gICBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUsXG4gICBNYXRjaEZhY2VzRXJyb3JDb2RlLFxuICAgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNOYW1lLFxuICAgRGV0ZWN0RmFjZXNTY2VuYXJpbyxcbiAgIE91dHB1dEltYWdlQ3JvcEFzcGVjdFJhdGlvLFxuICAgTGl2ZW5lc3NTa2lwU3RlcCxcbiAgIEltYWdlUXVhbGl0eVJlc3VsdFN0YXR1cyxcbiAgIEltYWdlVHlwZSxcbiAgIEZhY2VDYXB0dXJlRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NCYWNrZW5kRXJyb3JDb2RlLFxuICAgRGV0ZWN0RmFjZXNBdHRyaWJ1dGUsXG59XG5cbi8qKlxuICogQG5hbWUgRmFjZVNES1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRmFjZSBTREsuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlU0RLIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRmFjZVNESzogRmFjZVNESykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRmFjZVNESycsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZS1hcGknLFxuICAgIHBsdWdpblJlZjogJ0ZhY2VTREtQbHVnaW4uRmFjZVNESycsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRmFjZUFwaS1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZVNESyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2VydmljZVVybCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRGYWNlU2RrVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcEZhY2VDYXB0dXJlQWN0aXZpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNJbml0aWFsaXplZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BMaXZlbmVzc1Byb2Nlc3NpbmcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBzZXRzIGhlYWRlcnMgZm9yIGh0dHAgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHttYXB9IGhlYWRlcnMga2V5IC0gaGVhZGVyIG5hbWVcbiAgICAgKiAgdmFsdWUgLSBoZWFkZXIgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJlcXVlc3RIZWFkZXJzKGhlYWRlcnM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgaW50IGNhbWVyYUlkIC0gc2V0IGNhbWVyYSBvbiBBbmRyb2lkXG4gICAgICogIENhbWVyYVBvc2l0aW9uIGNhbWVyYVBvc2l0aW9uSU9TIC0gc2V0IGNhbWVyYSBvbiBpT1NcbiAgICAgKiAgYm9vbGVhbiBjYW1lcmFTd2l0Y2hFbmFibGVkXG4gICAgICogIGJvb2xlYW4gc2hvd0hlbHBUZXh0QW5pbWF0aW9uXG4gICAgICogIGJvb2xlYW4gZm9yY2VUb1VzZUh1YXdlaVZpc2lvblxuICAgICAqICBib29sZWFuIGNsb3NlQnV0dG9uRW5hYmxlZFxuICAgICAqICBib29sZWFuIHRvcmNoQnV0dG9uRW5hYmxlZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJlc2VudEZhY2VDYXB0dXJlQWN0aXZpdHlXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBpbnQgY2FtZXJhSWQgLSBzZXQgY2FtZXJhIG9uIEFuZHJvaWRcbiAgICAgKiAgQ2FtZXJhUG9zaXRpb24gY2FtZXJhUG9zaXRpb25JT1MgLSBzZXQgY2FtZXJhIG9uIGlPU1xuICAgICAqICBib29sZWFuIGNhbWVyYVN3aXRjaEVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiBzaG93SGVscFRleHRBbmltYXRpb25cbiAgICAgKiAgYm9vbGVhbiBsb2NhdGlvblRyYWNraW5nRW5hYmxlZFxuICAgICAqICBib29sZWFuIGZvcmNlVG9Vc2VIdWF3ZWlWaXNpb25cbiAgICAgKiAgYm9vbGVhbiBjbG9zZUJ1dHRvbkVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiB0b3JjaEJ1dHRvbkVuYWJsZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3NXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0U2VydmljZVVybCh1cmw6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0Y2hGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIG1hdGNoRmFjZXMocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZXRlY3RGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRldGVjdEZhY2VzKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0Y2hGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIGJvb2xlYW4gZm9yY2VUb1VzZUh1YXdlaVZpc2lvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlc1dpdGhDb25maWcocmVxdWVzdDogYW55LCBjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBPbkNsaWNrTGlzdGVuZXJcbiAgICAgKiAgZm9yIGJ1dHRvbnMgZnJvbSBVSUN1c3RvbWl6YXRpb25MYXllclxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHNldE9uQ3VzdG9tQnV0dG9uVGFwcGVkTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IFVJQ3VzdG9taXphdGlvbkxheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0ganNvbiBjdXN0b20gVUkgbGF5ZXIgSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VWlDdXN0b21pemF0aW9uTGF5ZXIoanNvbjogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRMYW5ndWFnZShsYW5ndWFnZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZhY2VzIGZhY2VzQXJyYXk6IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgICogIGZhY2VzID0gSlNPTi5zdHJpbmdpZnkoZmFjZXNBcnJheSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2ltaWxhcml0eSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlc1NpbWlsYXJpdHlUaHJlc2hvbGRTcGxpdChmYWNlczogYW55LCBzaW1pbGFyaXR5OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbnMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uc0ZvclBhZ2UocGFnZTogYW55LCBzaXplOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbihwZXJzb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNyZWF0ZVBlcnNvbihuYW1lOiBhbnksIG1ldGFkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludH0gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlUGVyc29uKHBlcnNvbklkOiBhbnksIG5hbWU6IGFueSwgbWV0YWRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVsZXRlUGVyc29uKHBlcnNvbklkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlcyhwZXJzb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2VzRm9yUGFnZShwZXJzb25JZDogYW55LCBwYWdlOiBhbnksIHNpemU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7SW1hZ2VVcGxvYWR9IGltYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQZXJzb25JbWFnZShwZXJzb25JZDogYW55LCBpbWFnZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGltYWdlSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlKHBlcnNvbklkOiBhbnksIGltYWdlSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbWFnZUlkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWxldGVQZXJzb25JbWFnZShwZXJzb25JZDogYW55LCBpbWFnZUlkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cHNGb3JQYWdlKHBhZ2U6IGFueSwgc2l6ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25Hcm91cHMocGVyc29uSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkdyb3Vwc0ZvclBhZ2UocGVyc29uSWQ6IGFueSwgcGFnZTogYW55LCBzaXplOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlR3JvdXAobmFtZTogYW55LCBtZXRhZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwKGdyb3VwSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHVwZGF0ZUdyb3VwKGdyb3VwSWQ6IGFueSwgbmFtZTogYW55LCBtZXRhZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0VkaXRHcm91cFBlcnNvbnNSZXF1ZXN0fSBlZGl0R3JvdXBQZXJzb25zUmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZWRpdFBlcnNvbnNJbkdyb3VwKGdyb3VwSWQ6IGFueSwgZWRpdEdyb3VwUGVyc29uc1JlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25zSW5Hcm91cChncm91cElkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3JvdXBJZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbnNJbkdyb3VwRm9yUGFnZShncm91cElkOiBhbnksIHBhZ2U6IGFueSwgc2l6ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZUdyb3VwKGdyb3VwSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoUGVyc29uUmVxdWVzdH0gc2VhcmNoUGVyc29uUmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VhcmNoUGVyc29uKHNlYXJjaFBlcnNvblJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cblxufSJdfQ==