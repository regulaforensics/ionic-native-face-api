var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var Customization = /** @class */ (function () {
    function Customization() {
    }
    Customization.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Customization;
        result.colors = jsonObject["colors"];
        result.fonts = jsonObject["fonts"];
        result.images = jsonObject["images"];
        result.uiCustomizationLayer = jsonObject["uiCustomizationLayer"];
        return result;
    };
    return Customization;
}());
export { Customization };
var Font = /** @class */ (function () {
    function Font() {
    }
    Font.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Font;
        result.name = jsonObject["name"];
        result.style = jsonObject["style"];
        result.size = jsonObject["size"];
        return result;
    };
    return Font;
}());
export { Font };
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
        result.crop = jsonObject["crop"];
        result.faceRect = Rect.fromJson(jsonObject["faceRect"]);
        result.originalRect = Rect.fromJson(jsonObject["originalRect"]);
        result.landmarks = [];
        if (jsonObject["landmarks"] != null) {
            for (var i in jsonObject["landmarks"]) {
                var item = Point.fromJson(jsonObject["landmarks"][i]);
                if (item != undefined)
                    result.landmarks.push(item);
            }
        }
        result.isQualityCompliant = jsonObject["isQualityCompliant"];
        return result;
    };
    return DetectFaceResult;
}());
export { DetectFaceResult };
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
var DetectFacesConfig = /** @class */ (function () {
    function DetectFacesConfig() {
    }
    DetectFacesConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesConfig;
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
    return DetectFacesConfig;
}());
export { DetectFacesConfig };
var UnderlyingException = /** @class */ (function () {
    function UnderlyingException() {
    }
    UnderlyingException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new UnderlyingException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        return result;
    };
    return UnderlyingException;
}());
export { UnderlyingException };
var DetectFacesException = /** @class */ (function () {
    function DetectFacesException() {
    }
    DetectFacesException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        result.underlyingError = UnderlyingException.fromJson(jsonObject["underlyingError"]);
        return result;
    };
    return DetectFacesException;
}());
export { DetectFacesException };
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
        result.configuration = DetectFacesConfig.fromJson(jsonObject["configuration"]);
        return result;
    };
    return DetectFacesRequest;
}());
export { DetectFacesRequest };
var DetectFacesResponse = /** @class */ (function () {
    function DetectFacesResponse() {
    }
    DetectFacesResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new DetectFacesResponse;
        result.detection = DetectFaceResult.fromJson(jsonObject["detection"]);
        result.scenario = jsonObject["scenario"];
        result.error = DetectFacesException.fromJson(jsonObject["error"]);
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
var FaceCaptureConfig = /** @class */ (function () {
    function FaceCaptureConfig() {
    }
    FaceCaptureConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceCaptureConfig;
        result.copyright = jsonObject["copyright"];
        result.cameraSwitchEnabled = jsonObject["cameraSwitchEnabled"];
        result.closeButtonEnabled = jsonObject["closeButtonEnabled"];
        result.torchButtonEnabled = jsonObject["torchButtonEnabled"];
        result.vibrateOnSteps = jsonObject["vibrateOnSteps"];
        result.detectOcclusion = jsonObject["detectOcclusion"];
        result.cameraPositionAndroid = jsonObject["cameraPositionAndroid"];
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"];
        result.screenOrientation = [];
        if (jsonObject["screenOrientation"] != null) {
            for (var i in jsonObject["screenOrientation"]) {
                result.screenOrientation.push(jsonObject["screenOrientation"][i]);
            }
        }
        result.timeout = jsonObject["timeout"];
        result.holdStillDuration = jsonObject["holdStillDuration"];
        return result;
    };
    return FaceCaptureConfig;
}());
export { FaceCaptureConfig };
var FaceCaptureException = /** @class */ (function () {
    function FaceCaptureException() {
    }
    FaceCaptureException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceCaptureException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        return result;
    };
    return FaceCaptureException;
}());
export { FaceCaptureException };
var FaceCaptureImage = /** @class */ (function () {
    function FaceCaptureImage() {
    }
    FaceCaptureImage.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceCaptureImage;
        result.imageType = jsonObject["imageType"];
        result.image = jsonObject["image"];
        result.tag = jsonObject["tag"];
        return result;
    };
    return FaceCaptureImage;
}());
export { FaceCaptureImage };
var FaceCaptureResponse = /** @class */ (function () {
    function FaceCaptureResponse() {
    }
    FaceCaptureResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceCaptureResponse;
        result.error = FaceCaptureException.fromJson(jsonObject["error"]);
        result.image = FaceCaptureImage.fromJson(jsonObject["image"]);
        return result;
    };
    return FaceCaptureResponse;
}());
export { FaceCaptureResponse };
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
var ImageQualityCharacteristic = /** @class */ (function () {
    function ImageQualityCharacteristic() {
    }
    ImageQualityCharacteristic.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageQualityCharacteristic;
        result.characteristicName = jsonObject["characteristicName"];
        result.color = jsonObject["color"];
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
var FaceSDKVersion = /** @class */ (function () {
    function FaceSDKVersion() {
    }
    FaceSDKVersion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new FaceSDKVersion;
        result.api = jsonObject["api"];
        result.core = jsonObject["core"];
        result.coreMode = jsonObject["coreMode"];
        return result;
    };
    return FaceSDKVersion;
}());
export { FaceSDKVersion };
var InitConfig = /** @class */ (function () {
    function InitConfig() {
    }
    InitConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new InitConfig;
        result.license = jsonObject["license"];
        result.licenseUpdate = jsonObject["licenseUpdate"];
        return result;
    };
    return InitConfig;
}());
export { InitConfig };
var InitException = /** @class */ (function () {
    function InitException() {
    }
    InitException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new InitException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        result.underlyingError = UnderlyingException.fromJson(jsonObject["underlyingError"]);
        return result;
    };
    return InitException;
}());
export { InitException };
var LivenessConfig = /** @class */ (function () {
    function LivenessConfig() {
    }
    LivenessConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessConfig;
        result.copyright = jsonObject["copyright"];
        result.cameraSwitchEnabled = jsonObject["cameraSwitchEnabled"];
        result.closeButtonEnabled = jsonObject["closeButtonEnabled"];
        result.torchButtonEnabled = jsonObject["torchButtonEnabled"];
        result.vibrateOnSteps = jsonObject["vibrateOnSteps"];
        result.cameraPositionAndroid = jsonObject["cameraPositionAndroid"];
        result.cameraPositionIOS = jsonObject["cameraPositionIOS"];
        result.screenOrientation = [];
        if (jsonObject["screenOrientation"] != null) {
            for (var i in jsonObject["screenOrientation"]) {
                result.screenOrientation.push(jsonObject["screenOrientation"][i]);
            }
        }
        result.locationTrackingEnabled = jsonObject["locationTrackingEnabled"];
        result.attemptsCount = jsonObject["attemptsCount"];
        result.recordingProcess = jsonObject["recordingProcess"];
        result.livenessType = jsonObject["livenessType"];
        result.tag = jsonObject["tag"];
        result.skipStep = [];
        if (jsonObject["skipStep"] != null) {
            for (var i in jsonObject["skipStep"]) {
                result.skipStep.push(jsonObject["skipStep"][i]);
            }
        }
        result.metadata = jsonObject["metadata"];
        return result;
    };
    return LivenessConfig;
}());
export { LivenessConfig };
var LivenessException = /** @class */ (function () {
    function LivenessException() {
    }
    LivenessException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        result.underlyingError = UnderlyingException.fromJson(jsonObject["underlyingError"]);
        return result;
    };
    return LivenessException;
}());
export { LivenessException };
var LivenessNotification = /** @class */ (function () {
    function LivenessNotification() {
    }
    LivenessNotification.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessNotification;
        result.status = jsonObject["status"];
        result.response = LivenessResponse.fromJson(jsonObject["response"]);
        return result;
    };
    return LivenessNotification;
}());
export { LivenessNotification };
var LivenessResponse = /** @class */ (function () {
    function LivenessResponse() {
    }
    LivenessResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LivenessResponse;
        result.image = jsonObject["image"];
        result.liveness = jsonObject["liveness"];
        result.tag = jsonObject["tag"];
        result.transactionId = jsonObject["transactionId"];
        result.estimatedAge = jsonObject["estimatedAge"];
        result.error = LivenessException.fromJson(jsonObject["error"]);
        return result;
    };
    return LivenessResponse;
}());
export { LivenessResponse };
var ComparedFace = /** @class */ (function () {
    function ComparedFace() {
    }
    ComparedFace.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ComparedFace;
        result.imageIndex = jsonObject["imageIndex"];
        result.image = MatchFacesImage.fromJson(jsonObject["image"]);
        result.faceIndex = jsonObject["faceIndex"];
        result.face = MatchFacesDetectionFace.fromJson(jsonObject["face"]);
        return result;
    };
    return ComparedFace;
}());
export { ComparedFace };
var ComparedFacesPair = /** @class */ (function () {
    function ComparedFacesPair() {
    }
    ComparedFacesPair.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ComparedFacesPair;
        result.first = ComparedFace.fromJson(jsonObject["first"]);
        result.second = ComparedFace.fromJson(jsonObject["second"]);
        result.similarity = jsonObject["similarity"];
        result.score = jsonObject["score"];
        result.error = MatchFacesException.fromJson(jsonObject["error"]);
        return result;
    };
    return ComparedFacesPair;
}());
export { ComparedFacesPair };
var ComparedFacesSplit = /** @class */ (function () {
    function ComparedFacesSplit() {
    }
    ComparedFacesSplit.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ComparedFacesSplit;
        result.matchedFaces = [];
        if (jsonObject["matchedFaces"] != null) {
            for (var i in jsonObject["matchedFaces"]) {
                var item = ComparedFacesPair.fromJson(jsonObject["matchedFaces"][i]);
                if (item != undefined)
                    result.matchedFaces.push(item);
            }
        }
        result.unmatchedFaces = [];
        if (jsonObject["unmatchedFaces"] != null) {
            for (var i in jsonObject["unmatchedFaces"]) {
                var item = ComparedFacesPair.fromJson(jsonObject["unmatchedFaces"][i]);
                if (item != undefined)
                    result.unmatchedFaces.push(item);
            }
        }
        return result;
    };
    return ComparedFacesSplit;
}());
export { ComparedFacesSplit };
var MatchFacesConfig = /** @class */ (function () {
    function MatchFacesConfig() {
    }
    MatchFacesConfig.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesConfig;
        result.processingMode = jsonObject["processingMode"];
        result.locationTrackingEnabled = jsonObject["locationTrackingEnabled"];
        return result;
    };
    return MatchFacesConfig;
}());
export { MatchFacesConfig };
var MatchFacesDetection = /** @class */ (function () {
    function MatchFacesDetection() {
    }
    MatchFacesDetection.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesDetection;
        result.imageIndex = jsonObject["imageIndex"];
        result.image = MatchFacesImage.fromJson(jsonObject["image"]);
        result.faces = [];
        if (jsonObject["faces"] != null) {
            for (var i in jsonObject["faces"]) {
                var item = MatchFacesDetectionFace.fromJson(jsonObject["faces"][i]);
                if (item != undefined)
                    result.faces.push(item);
            }
        }
        result.error = MatchFacesException.fromJson(jsonObject["error"]);
        return result;
    };
    return MatchFacesDetection;
}());
export { MatchFacesDetection };
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
        result.originalRect = Rect.fromJson(jsonObject["originalRect"]);
        result.crop = jsonObject["crop"];
        return result;
    };
    return MatchFacesDetectionFace;
}());
export { MatchFacesDetectionFace };
var MatchFacesException = /** @class */ (function () {
    function MatchFacesException() {
    }
    MatchFacesException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesException;
        result.code = jsonObject["code"];
        result.message = jsonObject["message"];
        result.underlyingError = UnderlyingException.fromJson(jsonObject["underlyingError"]);
        return result;
    };
    return MatchFacesException;
}());
export { MatchFacesException };
var MatchFacesImage = /** @class */ (function () {
    function MatchFacesImage() {
    }
    MatchFacesImage.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesImage;
        result.image = jsonObject["image"];
        result.imageType = jsonObject["imageType"];
        result.detectAll = jsonObject["detectAll"];
        result.identifier = jsonObject["identifier"];
        return result;
    };
    return MatchFacesImage;
}());
export { MatchFacesImage };
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
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"]);
        result.tag = jsonObject["tag"];
        result.metadata = jsonObject["metadata"];
        return result;
    };
    return MatchFacesRequest;
}());
export { MatchFacesRequest };
var MatchFacesResponse = /** @class */ (function () {
    function MatchFacesResponse() {
    }
    MatchFacesResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new MatchFacesResponse;
        result.results = [];
        if (jsonObject["results"] != null) {
            for (var i in jsonObject["results"]) {
                var item = ComparedFacesPair.fromJson(jsonObject["results"][i]);
                if (item != undefined)
                    result.results.push(item);
            }
        }
        result.detections = [];
        if (jsonObject["detections"] != null) {
            for (var i in jsonObject["detections"]) {
                var item = MatchFacesDetection.fromJson(jsonObject["detections"][i]);
                if (item != undefined)
                    result.detections.push(item);
            }
        }
        result.tag = jsonObject["tag"];
        result.error = MatchFacesException.fromJson(jsonObject["error"]);
        return result;
    };
    return MatchFacesResponse;
}());
export { MatchFacesResponse };
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
var ImageUpload = /** @class */ (function () {
    function ImageUpload() {
    }
    ImageUpload.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new ImageUpload;
        result.imageData = jsonObject["imageData"];
        result.imageUrl = jsonObject["imageUrl"];
        return result;
    };
    return ImageUpload;
}());
export { ImageUpload };
var PageableItemList = /** @class */ (function () {
    function PageableItemList() {
    }
    PageableItemList.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PageableItemList;
        result.items = [];
        if (jsonObject["items"] != null) {
            for (var i in jsonObject["items"]) {
                result.items.push(jsonObject["items"][i]);
            }
        }
        result.page = jsonObject["page"];
        result.totalPages = jsonObject["totalPages"];
        return result;
    };
    return PageableItemList;
}());
export { PageableItemList };
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Person;
        result.name = jsonObject["name"];
        result.updatedAt = jsonObject["updatedAt"];
        result.groups = [];
        if (jsonObject["groups"] != null) {
            for (var i in jsonObject["groups"]) {
                result.groups.push(jsonObject["groups"][i]);
            }
        }
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
        result.detection = SearchPersonDetection.fromJson(jsonObject["detection"]);
        result.name = jsonObject["name"];
        result.updatedAt = jsonObject["updatedAt"];
        result.groups = [];
        if (jsonObject["groups"] != null) {
            for (var i in jsonObject["groups"]) {
                result.groups.push(jsonObject["groups"][i]);
            }
        }
        result.id = jsonObject["id"];
        result.metadata = jsonObject["metadata"];
        result.createdAt = jsonObject["createdAt"];
        return result;
    };
    return SearchPerson;
}());
export { SearchPerson };
var SearchPersonDetection = /** @class */ (function () {
    function SearchPersonDetection() {
    }
    SearchPersonDetection.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SearchPersonDetection;
        result.landmarks = [];
        if (jsonObject["landmarks"] != null) {
            for (var i in jsonObject["landmarks"]) {
                var item = Point.fromJson(jsonObject["landmarks"][i]);
                if (item != undefined)
                    result.landmarks.push(item);
            }
        }
        result.rect = Rect.fromJson(jsonObject["rect"]);
        result.crop = jsonObject["crop"];
        result.rotationAngle = jsonObject["rotationAngle"];
        return result;
    };
    return SearchPersonDetection;
}());
export { SearchPersonDetection };
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
var SearchPersonRequest = /** @class */ (function () {
    function SearchPersonRequest() {
    }
    SearchPersonRequest.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new SearchPersonRequest;
        result.imageUpload = ImageUpload.fromJson(jsonObject["imageUpload"]);
        result.groupIdsForSearch = [];
        if (jsonObject["groupIdsForSearch"] != null) {
            for (var i in jsonObject["groupIdsForSearch"]) {
                result.groupIdsForSearch.push(jsonObject["groupIdsForSearch"][i]);
            }
        }
        result.threshold = jsonObject["threshold"];
        result.limit = jsonObject["limit"];
        result.detectAll = jsonObject["detectAll"];
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"]);
        return result;
    };
    return SearchPersonRequest;
}());
export { SearchPersonRequest };
var InitResponse = /** @class */ (function () {
    function InitResponse() {
    }
    InitResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new InitResponse;
        result.success = jsonObject["success"];
        result.error = InitException.fromJson(jsonObject["error"]);
        return result;
    };
    return InitResponse;
}());
export { InitResponse };
var VideoEncoderCompletion = /** @class */ (function () {
    function VideoEncoderCompletion() {
    }
    VideoEncoderCompletion.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new VideoEncoderCompletion;
        result.success = jsonObject["success"];
        result.transactionId = jsonObject["transactionId"];
        return result;
    };
    return VideoEncoderCompletion;
}());
export { VideoEncoderCompletion };
var PersonDBResponse = /** @class */ (function () {
    function PersonDBResponse() {
    }
    PersonDBResponse.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new PersonDBResponse;
        result.data = jsonObject["data"];
        result.error = jsonObject["error"];
        return result;
    };
    return PersonDBResponse;
}());
export { PersonDBResponse };
export var FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
};
export var CustomizationColor = {
    ONBOARDING_SCREEN_START_BUTTON_BACKGROUND: 100,
    ONBOARDING_SCREEN_START_BUTTON_TITLE: 101,
    ONBOARDING_SCREEN_BACKGROUND: 102,
    ONBOARDING_SCREEN_TITLE_LABEL_TEXT: 103,
    ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT: 104,
    ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT: 105,
    CAMERA_SCREEN_STROKE_NORMAL: 200,
    CAMERA_SCREEN_STROKE_ACTIVE: 201,
    CAMERA_SCREEN_SECTOR_TARGET: 202,
    CAMERA_SCREEN_SECTOR_ACTIVE: 203,
    CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND: 204,
    CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT: 205,
    CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND: 206,
    CAMERA_SCREEN_BACK_HINT_LABEL_TEXT: 207,
    CAMERA_SCREEN_LIGHT_TOOLBAR_TINT: 208,
    CAMERA_SCREEN_DARK_TOOLBAR_TINT: 209,
    RETRY_SCREEN_BACKGROUND: 300,
    RETRY_SCREEN_RETRY_BUTTON_BACKGROUND: 301,
    RETRY_SCREEN_RETRY_BUTTON_TITLE: 302,
    RETRY_SCREEN_TITLE_LABEL_TEXT: 303,
    RETRY_SCREEN_SUBTITLE_LABEL_TEXT: 304,
    RETRY_SCREEN_HINT_LABELS_TEXT: 305,
    PROCESSING_SCREEN_BACKGROUND: 400,
    PROCESSING_SCREEN_PROGRESS: 401,
    PROCESSING_SCREEN_TITLE: 402,
    SUCCESS_SCREEN_BACKGROUND: 500,
};
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
export var LicensingResultCode = {
    OK: 0,
    LICENSE_CORRUPTED: 1,
    INVALID_DATE: 2,
    INVALID_VERSION: 3,
    INVALID_DEVICE_ID: 4,
    INVALID_SYSTEM_OR_APP_ID: 5,
    NO_CAPABILITIES: 6,
    NO_AUTHENTICITY: 7,
    LICENSE_ABSENT: 8,
    NO_INTERNET: 9,
    NO_DATABASE: 10,
    DATABASE_INCORRECT: 11,
};
export var DetectFacesErrorCode = {
    IMAGE_EMPTY: 0,
    FR_FACE_NOT_DETECTED: 1,
    FACER_NO_LICENSE: 2,
    FACER_IS_NOT_INITIALIZED: 3,
    FACER_COMMAND_IS_NOT_SUPPORTED: 4,
    FACER_COMMAND_PARAMS_READ_ERROR: 5,
    PROCESSING_FAILED: 6,
    REQUEST_FAILED: 7,
    API_CALL_FAILED: 8,
};
export var CameraPosition = {
    FRONT: 0,
    BACK: 1,
};
export var InitErrorCode = {
    IN_PROGRESS_ALREADY: 0,
    MISSING_CORE: 1,
    INTERNAL_CORE_ERROR: 2,
    BAD_LICENSE: 3,
    UNAVAILABLE: 4,
    CONTEXT_IS_NULL: 100,
    RESOURCE_DAT_ABSENT: 101,
    LICENSE_IS_NULL: 102,
};
export var LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
};
export var LivenessErrorCode = {
    NOT_INITIALIZED: 0,
    NO_LICENSE: 1,
    API_CALL_FAILED: 2,
    SESSION_START_FAILED: 3,
    CANCELLED: 4,
    PROCESSING_TIMEOUT: 5,
    PROCESSING_FAILED: 6,
    PROCESSING_FRAME_FAILED: 7,
    APPLICATION_INACTIVE: 8,
    CONTEXT_IS_NULL: 9,
    IN_PROGRESS_ALREADY: 10,
    ZOOM_NOT_SUPPORTED: 11,
    CAMERA_NO_PERMISSION: 12,
    CAMERA_NOT_AVAILABLE: 13,
};
export var RecordingProcess = {
    ASYNCHRONOUS_UPLOAD: 0,
    SYNCHRONOUS_UPLOAD: 1,
    NOT_UPLOAD: 2,
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
    IMAGE_EMPTY: 0,
    FACE_NOT_DETECTED: 1,
    LANDMARKS_NOT_DETECTED: 2,
    FACE_ALIGNER_FAILED: 3,
    DESCRIPTOR_EXTRACTOR_ERROR: 4,
    IMAGES_COUNT_LIMIT_EXCEEDED: 5,
    API_CALL_FAILED: 6,
    PROCESSING_FAILED: 7,
    NO_LICENSE: 8,
};
export var ImageQualityCharacteristicName = {
    IMAGE_WIDTH: "ImageWidth",
    IMAGE_HEIGHT: "ImageHeight",
    IMAGE_WIDTH_TO_HEIGHT: "ImageWidthToHeight",
    IMAGE_CHANNELS_NUMBER: "ImageChannelsNumber",
    ART_FACE: "ArtFace",
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
export var ScreenOrientation = {
    PORTRAIT: 0,
    LANDSCAPE: 1,
};
export var CustomizationFont = {
    ONBOARDING_SCREEN_START_BUTTON: 100,
    ONBOARDING_SCREEN_TITLE_LABEL: 101,
    ONBOARDING_SCREEN_SUBTITLE_LABEL: 102,
    ONBOARDING_SCREEN_MESSAGE_LABELS: 103,
    CAMERA_SCREEN_HINT_LABEL: 200,
    RETRY_SCREEN_RETRY_BUTTON: 300,
    RETRY_SCREEN_TITLE_LABEL: 301,
    RETRY_SCREEN_SUBTITLE_LABEL: 302,
    RETRY_SCREEN_HINT_LABELS: 303,
    PROCESSING_SCREEN: 400,
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
export var LivenessProcessStatus = {
    START: 0,
    PREPARING: 1,
    NEW_SESSION: 2,
    NEXT_STAGE: 3,
    SECTOR_CHANGED: 4,
    PROGRESS: 5,
    LOW_BRIGHTNESS: 6,
    FIT_FACE: 7,
    MOVE_AWAY: 8,
    MOVE_CLOSER: 9,
    TURN_HEAD: 10,
    PROCESSING: 11,
    FAILED: 12,
    RETRY: 13,
    SUCCESS: 14,
};
export var OutputImageCropAspectRatio = {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: 0,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: 1,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: 2,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: 3,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: 4,
};
export var LivenessType = {
    ACTIVE: 0,
    PASSIVE: 1,
};
export var LivenessSkipStep = {
    ONBOARDING_STEP: 0,
    SUCCESS_STEP: 1,
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
    BARCODE: 7,
};
export var FaceCaptureErrorCode = {
    CANCEL: 0,
    TIMEOUT: 1,
    NOT_INITIALIZED: 2,
    SESSION_START_FAILED: 3,
    CAMERA_NOT_AVAILABLE: 4,
    CAMERA_NO_PERMISSION: 5,
    IN_PROGRESS_ALREADY: 6,
    CONTEXT_IS_NULL: 7,
};
export var LivenessBackendErrorCode = {
    UNDEFINED: -1,
    NO_LICENSE: 200,
    LOW_QUALITY: 231,
    TRACK_BREAK: 246,
    CLOSED_EYES_DETECTED: 230,
    HIGH_ASYMMETRY: 232,
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
export var ProcessingMode = {
    ONLINE: 0,
    OFFLINE: 1,
};
export var CustomizationImage = {
    ONBOARDING_SCREEN_CLOSE_BUTTON: 100,
    ONBOARDING_SCREEN_ILLUMINATION: 101,
    ONBOARDING_SCREEN_ACCESSORIES: 102,
    ONBOARDING_SCREEN_CAMERA_LEVEL: 103,
    CAMERA_SCREEN_CLOSE_BUTTON: 200,
    CAMERA_SCREEN_LIGHT_ON_BUTTON: 201,
    CAMERA_SCREEN_LIGHT_OFF_BUTTON: 202,
    CAMERA_SCREEN_SWITCH_BUTTON: 203,
    RETRY_SCREEN_CLOSE_BUTTON: 300,
    RETRY_SCREEN_HINT_ENVIRONMENT: 301,
    RETRY_SCREEN_HINT_SUBJECT: 302,
    PROCESSING_SCREEN_CLOSE_BUTTON: 400,
    SUCCESS_SCREEN_IMAGE: 500,
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
    FontStyle: FontStyle,
    CustomizationColor: CustomizationColor,
    ImageQualityGroupName: ImageQualityGroupName,
    LicensingResultCode: LicensingResultCode,
    DetectFacesErrorCode: DetectFacesErrorCode,
    CameraPosition: CameraPosition,
    InitErrorCode: InitErrorCode,
    LivenessStatus: LivenessStatus,
    LivenessErrorCode: LivenessErrorCode,
    RecordingProcess: RecordingProcess,
    DetectFacesBackendErrorCode: DetectFacesBackendErrorCode,
    MatchFacesErrorCode: MatchFacesErrorCode,
    ImageQualityCharacteristicName: ImageQualityCharacteristicName,
    ScreenOrientation: ScreenOrientation,
    CustomizationFont: CustomizationFont,
    DetectFacesScenario: DetectFacesScenario,
    LivenessProcessStatus: LivenessProcessStatus,
    OutputImageCropAspectRatio: OutputImageCropAspectRatio,
    LivenessType: LivenessType,
    LivenessSkipStep: LivenessSkipStep,
    ImageQualityResultStatus: ImageQualityResultStatus,
    ImageType: ImageType,
    FaceCaptureErrorCode: FaceCaptureErrorCode,
    LivenessBackendErrorCode: LivenessBackendErrorCode,
    ProcessingMode: ProcessingMode,
    CustomizationImage: CustomizationImage,
    DetectFacesAttribute: DetectFacesAttribute,
};
var FaceSDKOriginal = /** @class */ (function (_super) {
    __extends(FaceSDKOriginal, _super);
    function FaceSDKOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceSDKOriginal.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    FaceSDKOriginal.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceSDKOriginal.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDKOriginal.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    FaceSDKOriginal.prototype.setRequestHeaders = function (headers) { return cordova(this, "setRequestHeaders", {}, arguments); };
    FaceSDKOriginal.prototype.setCustomization = function (config) { return cordova(this, "setCustomization", {}, arguments); };
    FaceSDKOriginal.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    FaceSDKOriginal.prototype.initialize = function (config) { return cordova(this, "initialize", {}, arguments); };
    FaceSDKOriginal.prototype.deinitialize = function () { return cordova(this, "deinitialize", {}, arguments); };
    FaceSDKOriginal.prototype.startFaceCapture = function (config) { return cordova(this, "startFaceCapture", { "observable": true }, arguments); };
    FaceSDKOriginal.prototype.stopFaceCapture = function () { return cordova(this, "stopFaceCapture", {}, arguments); };
    FaceSDKOriginal.prototype.startLiveness = function (config) { return cordova(this, "startLiveness", { "observable": true }, arguments); };
    FaceSDKOriginal.prototype.stopLiveness = function () { return cordova(this, "stopLiveness", {}, arguments); };
    FaceSDKOriginal.prototype.matchFaces = function (request, config) { return cordova(this, "matchFaces", {}, arguments); };
    FaceSDKOriginal.prototype.splitComparedFaces = function (facesPairs, similarityThreshold) { return cordova(this, "splitComparedFaces", {}, arguments); };
    FaceSDKOriginal.prototype.detectFaces = function (request) { return cordova(this, "detectFaces", {}, arguments); };
    FaceSDKOriginal.prototype.createPerson = function (name, groupIds, metadata) { return cordova(this, "createPerson", {}, arguments); };
    FaceSDKOriginal.prototype.updatePerson = function (person) { return cordova(this, "updatePerson", {}, arguments); };
    FaceSDKOriginal.prototype.deletePerson = function (personId) { return cordova(this, "deletePerson", {}, arguments); };
    FaceSDKOriginal.prototype.getPerson = function (personId) { return cordova(this, "getPerson", {}, arguments); };
    FaceSDKOriginal.prototype.addPersonImage = function (personId, image) { return cordova(this, "addPersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.deletePersonImage = function (personId, imageId) { return cordova(this, "deletePersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImage = function (personId, imageId) { return cordova(this, "getPersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImages = function (personId) { return cordova(this, "getPersonImages", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImagesForPage = function (personId, page, size) { return cordova(this, "getPersonImagesForPage", {}, arguments); };
    FaceSDKOriginal.prototype.createGroup = function (name, metadata) { return cordova(this, "createGroup", {}, arguments); };
    FaceSDKOriginal.prototype.updateGroup = function (group) { return cordova(this, "updateGroup", {}, arguments); };
    FaceSDKOriginal.prototype.editPersonsInGroup = function (groupId, editGroupPersonsRequest) { return cordova(this, "editPersonsInGroup", {}, arguments); };
    FaceSDKOriginal.prototype.deleteGroup = function (groupId) { return cordova(this, "deleteGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getGroup = function (groupId) { return cordova(this, "getGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getGroups = function () { return cordova(this, "getGroups", {}, arguments); };
    FaceSDKOriginal.prototype.getGroupsForPage = function (page, size) { return cordova(this, "getGroupsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonGroups = function (personId) { return cordova(this, "getPersonGroups", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonGroupsForPage = function (personId, page, size) { return cordova(this, "getPersonGroupsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsInGroup = function (groupId) { return cordova(this, "getPersonsInGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsInGroupForPage = function (groupId, page, size) { return cordova(this, "getPersonsInGroupForPage", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBUXZCLHNCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUE7UUFFaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBRWhFLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7d0JBcEJMOzs7Ozs7SUE0QlcsYUFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFBO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0s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QVMvRSw2QkFBVyxhQUFDLE9BQTJCO0lBV3ZDLDhCQUFZLGFBQUMsSUFBWSxFQUFFLFFBQXlCLEVBQUUsUUFBb0M7SUFTMUYsOEJBQVksYUFBQyxNQUFjO0lBUzNCLDhCQUFZLGFBQUMsUUFBZ0I7SUFTN0IsMkJBQVMsYUFBQyxRQUFnQjtJQVUxQixnQ0FBYyxhQUFDLFFBQWdCLEVBQUUsS0FBa0I7SUFVbkQsbUNBQWlCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0lBVW5ELGdDQUFjLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0lBU2hELGlDQUFlLGFBQUMsUUFBZ0I7SUFXaEMsd0NBQXNCLGFBQUMsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsSUFBWTtJQVVuRSw2QkFBVyxhQUFDLElBQVksRUFBRSxRQUFvQztJQVM5RCw2QkFBVyxhQUFDLEtBQWtCO0lBVTlCLG9DQUFrQixhQUFDLE9BQWUsRUFBRSx1QkFBZ0Q7SUFTcEYsNkJBQVcsYUFBQyxPQUFlO0lBUzNCLDBCQUFRLGFBQUMsT0FBZTtJQVF4QiwyQkFBUztJQVVULGtDQUFnQixhQUFDLElBQVksRUFBRSxJQUFZO0lBUzNDLGlDQUFlLGFBQUMsUUFBZ0I7SUFXaEMsd0NBQXNCLGFBQUMsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsSUFBWTtJQVNuRSxtQ0FBaUIsYUFBQyxPQUFlO0lBV2pDLDBDQUF3QixhQUFDLE9BQWUsRUFBRSxJQUFZLEVBQUUsSUFBWTtJQVNwRSw4QkFBWSxhQUFDLG1CQUF3Qzs7Ozs7O2tCQS8wRHpEO0VBMC9DNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9taXphdGlvbiB7XG4gICAgY29sb3JzPzogUmVjb3JkPG51bWJlciwgbnVtYmVyPlxuICAgIGZvbnRzPzogUmVjb3JkPG51bWJlciwgRm9udD5cbiAgICBpbWFnZXM/OiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+XG4gICAgdWlDdXN0b21pemF0aW9uTGF5ZXI/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvbG9ycyA9IGpzb25PYmplY3RbXCJjb2xvcnNcIl1cbiAgICAgICAgcmVzdWx0LmZvbnRzID0ganNvbk9iamVjdFtcImZvbnRzXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdXG4gICAgICAgIHJlc3VsdC51aUN1c3RvbWl6YXRpb25MYXllciA9IGpzb25PYmplY3RbXCJ1aUN1c3RvbWl6YXRpb25MYXllclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb250IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgc3R5bGU/OiBudW1iZXJcbiAgICBzaXplPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZvbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGb250XG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuc3R5bGUgPSBqc29uT2JqZWN0W1wic3R5bGVcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBqc29uT2JqZWN0W1wic2l6ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlUmVzdWx0IHtcbiAgICBxdWFsaXR5PzogSW1hZ2VRdWFsaXR5UmVzdWx0W11cbiAgICBhdHRyaWJ1dGVzPzogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHRbXVxuICAgIGNyb3A/OiBzdHJpbmdcbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFJlY3Q/OiBSZWN0XG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGlzUXVhbGl0eUNvbXBsaWFudD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VSZXN1bHRcblxuICAgICAgICByZXN1bHQucXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY3JvcCA9IGpzb25PYmplY3RbXCJjcm9wXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VSZWN0XCJdKVxuICAgICAgICByZXN1bHQub3JpZ2luYWxSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxSZWN0XCJdKVxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pc1F1YWxpdHlDb21wbGlhbnQgPSBqc29uT2JqZWN0W1wiaXNRdWFsaXR5Q29tcGxpYW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0IHtcbiAgICBhdHRyaWJ1dGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIHJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICBjb25maWRlbmNlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlID0ganNvbk9iamVjdFtcImF0dHJpYnV0ZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LnJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJhbmdlXCJdKVxuICAgICAgICByZXN1bHQuY29uZmlkZW5jZSA9IGpzb25PYmplY3RbXCJjb25maWRlbmNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQ29uZmlnIHtcbiAgICBhdHRyaWJ1dGVzPzogc3RyaW5nW11cbiAgICBjdXN0b21RdWFsaXR5PzogSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNbXVxuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcbiAgICBvbmx5Q2VudHJhbEZhY2U/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNDb25maWdcblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5vbmx5Q2VudHJhbEZhY2UgPSBqc29uT2JqZWN0W1wib25seUNlbnRyYWxGYWNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuZGVybHlpbmdFeGNlcHRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFVuZGVybHlpbmdFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVbmRlcmx5aW5nRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzRXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0V4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0Vycm9yID0gVW5kZXJseWluZ0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0Vycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1JlcXVlc3Qge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBjb25maWd1cmF0aW9uPzogRGV0ZWN0RmFjZXNDb25maWdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQuY29uZmlndXJhdGlvbiA9IERldGVjdEZhY2VzQ29uZmlnLmZyb21Kc29uKGpzb25PYmplY3RbXCJjb25maWd1cmF0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1Jlc3BvbnNlIHtcbiAgICBkZXRlY3Rpb24/OiBEZXRlY3RGYWNlUmVzdWx0XG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBlcnJvcj86IERldGVjdEZhY2VzRXhjZXB0aW9uXG4gICAgYWxsRGV0ZWN0aW9ucz86IERldGVjdEZhY2VSZXN1bHRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb24gPSBEZXRlY3RGYWNlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25cIl0pXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBEZXRlY3RGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG4gICAgICAgIHJlc3VsdC5hbGxEZXRlY3Rpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEZXRlY3RGYWNlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFsbERldGVjdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlQ29uZmlnIHtcbiAgICBjb3B5cmlnaHQ/OiBib29sZWFuXG4gICAgY2FtZXJhU3dpdGNoRW5hYmxlZD86IGJvb2xlYW5cbiAgICBjbG9zZUJ1dHRvbkVuYWJsZWQ/OiBib29sZWFuXG4gICAgdG9yY2hCdXR0b25FbmFibGVkPzogYm9vbGVhblxuICAgIHZpYnJhdGVPblN0ZXBzPzogYm9vbGVhblxuICAgIGRldGVjdE9jY2x1c2lvbj86IGJvb2xlYW5cbiAgICBjYW1lcmFQb3NpdGlvbkFuZHJvaWQ/OiBudW1iZXJcbiAgICBjYW1lcmFQb3NpdGlvbklPUz86IG51bWJlclxuICAgIHNjcmVlbk9yaWVudGF0aW9uPzogbnVtYmVyW11cbiAgICB0aW1lb3V0PzogbnVtYmVyXG4gICAgaG9sZFN0aWxsRHVyYXRpb24/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZUNvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5jb3B5cmlnaHQgPSBqc29uT2JqZWN0W1wiY29weXJpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFTd2l0Y2hFbmFibGVkID0ganNvbk9iamVjdFtcImNhbWVyYVN3aXRjaEVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LmNsb3NlQnV0dG9uRW5hYmxlZCA9IGpzb25PYmplY3RbXCJjbG9zZUJ1dHRvbkVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvcmNoQnV0dG9uRW5hYmxlZCA9IGpzb25PYmplY3RbXCJ0b3JjaEJ1dHRvbkVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnZpYnJhdGVPblN0ZXBzID0ganNvbk9iamVjdFtcInZpYnJhdGVPblN0ZXBzXCJdXG4gICAgICAgIHJlc3VsdC5kZXRlY3RPY2NsdXNpb24gPSBqc29uT2JqZWN0W1wiZGV0ZWN0T2NjbHVzaW9uXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbkFuZHJvaWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhUG9zaXRpb25BbmRyb2lkXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbklPUyA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbklPU1wiXVxuICAgICAgICByZXN1bHQuc2NyZWVuT3JpZW50YXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNjcmVlbk9yaWVudGF0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2NyZWVuT3JpZW50YXRpb24ucHVzaChqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnRpbWVvdXQgPSBqc29uT2JqZWN0W1widGltZW91dFwiXVxuICAgICAgICByZXN1bHQuaG9sZFN0aWxsRHVyYXRpb24gPSBqc29uT2JqZWN0W1wiaG9sZFN0aWxsRHVyYXRpb25cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVFeGNlcHRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVJbWFnZSB7XG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICB0YWc/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVJbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlSW1hZ2VcblxuICAgICAgICByZXN1bHQuaW1hZ2VUeXBlID0ganNvbk9iamVjdFtcImltYWdlVHlwZVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVSZXNwb25zZSB7XG4gICAgZXJyb3I/OiBGYWNlQ2FwdHVyZUV4Y2VwdGlvblxuICAgIGltYWdlPzogRmFjZUNhcHR1cmVJbWFnZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZVJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IEZhY2VDYXB0dXJlRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlID0gRmFjZUNhcHR1cmVJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE91dHB1dEltYWdlQ3JvcCB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHNpemU/OiBTaXplXG4gICAgcGFkQ29sb3I/OiBudW1iZXJcbiAgICByZXR1cm5PcmlnaW5hbFJlY3Q/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE91dHB1dEltYWdlQ3JvcCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE91dHB1dEltYWdlQ3JvcFxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBTaXplLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaXplXCJdKVxuICAgICAgICByZXN1bHQucGFkQ29sb3IgPSBqc29uT2JqZWN0W1wicGFkQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJldHVybk9yaWdpbmFsUmVjdCA9IGpzb25PYmplY3RbXCJyZXR1cm5PcmlnaW5hbFJlY3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0SW1hZ2VQYXJhbXMge1xuICAgIGJhY2tncm91bmRDb2xvcj86IG51bWJlclxuICAgIGNyb3A/OiBPdXRwdXRJbWFnZUNyb3BcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT3V0cHV0SW1hZ2VQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBPdXRwdXRJbWFnZVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSBqc29uT2JqZWN0W1wiYmFja2dyb3VuZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5jcm9wID0gT3V0cHV0SW1hZ2VDcm9wLmZyb21Kc29uKGpzb25PYmplY3RbXCJjcm9wXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUG9pbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQb2ludFxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgICBib3R0b20/OiBudW1iZXJcbiAgICB0b3A/OiBudW1iZXJcbiAgICBsZWZ0PzogbnVtYmVyXG4gICAgcmlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaXplIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTaXplIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2l6ZVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYyB7XG4gICAgY2hhcmFjdGVyaXN0aWNOYW1lPzogc3RyaW5nXG4gICAgY29sb3I/OiBudW1iZXJcbiAgICByZWNvbW1lbmRlZFJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICBjdXN0b21SYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNcblxuICAgICAgICByZXN1bHQuY2hhcmFjdGVyaXN0aWNOYW1lID0ganNvbk9iamVjdFtcImNoYXJhY3RlcmlzdGljTmFtZVwiXVxuICAgICAgICByZXN1bHQuY29sb3IgPSBqc29uT2JqZWN0W1wiY29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJlY29tbWVuZGVkUmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjb21tZW5kZWRSYW5nZVwiXSlcbiAgICAgICAgcmVzdWx0LmN1c3RvbVJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImN1c3RvbVJhbmdlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlSYW5nZSB7XG4gICAgbWluPzogbnVtYmVyXG4gICAgbWF4PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eVJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5UmFuZ2VcblxuICAgICAgICByZXN1bHQubWluID0ganNvbk9iamVjdFtcIm1pblwiXVxuICAgICAgICByZXN1bHQubWF4ID0ganNvbk9iamVjdFtcIm1heFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlSZXN1bHQge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBncm91cD86IG51bWJlclxuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICB2YWx1ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHlSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlSZXN1bHRcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5ncm91cCA9IGpzb25PYmplY3RbXCJncm91cFwiXVxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmFuZ2VcIl0pXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlU0RLVmVyc2lvbiB7XG4gICAgYXBpPzogc3RyaW5nXG4gICAgY29yZT86IHN0cmluZ1xuICAgIGNvcmVNb2RlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VTREtWZXJzaW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZVNES1ZlcnNpb25cblxuICAgICAgICByZXN1bHQuYXBpID0ganNvbk9iamVjdFtcImFwaVwiXVxuICAgICAgICByZXN1bHQuY29yZSA9IGpzb25PYmplY3RbXCJjb3JlXCJdXG4gICAgICAgIHJlc3VsdC5jb3JlTW9kZSA9IGpzb25PYmplY3RbXCJjb3JlTW9kZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0Q29uZmlnIHtcbiAgICBsaWNlbnNlPzogc3RyaW5nXG4gICAgbGljZW5zZVVwZGF0ZT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW5pdENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEluaXRDb25maWdcblxuICAgICAgICByZXN1bHQubGljZW5zZSA9IGpzb25PYmplY3RbXCJsaWNlbnNlXCJdXG4gICAgICAgIHJlc3VsdC5saWNlbnNlVXBkYXRlID0ganNvbk9iamVjdFtcImxpY2Vuc2VVcGRhdGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5pdEV4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXJyb3I/OiBVbmRlcmx5aW5nRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEluaXRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbml0RXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXJyb3IgPSBVbmRlcmx5aW5nRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzQ29uZmlnIHtcbiAgICBjb3B5cmlnaHQ/OiBib29sZWFuXG4gICAgY2FtZXJhU3dpdGNoRW5hYmxlZD86IGJvb2xlYW5cbiAgICBjbG9zZUJ1dHRvbkVuYWJsZWQ/OiBib29sZWFuXG4gICAgdG9yY2hCdXR0b25FbmFibGVkPzogYm9vbGVhblxuICAgIHZpYnJhdGVPblN0ZXBzPzogYm9vbGVhblxuICAgIGNhbWVyYVBvc2l0aW9uQW5kcm9pZD86IG51bWJlclxuICAgIGNhbWVyYVBvc2l0aW9uSU9TPzogbnVtYmVyXG4gICAgc2NyZWVuT3JpZW50YXRpb24/OiBudW1iZXJbXVxuICAgIGxvY2F0aW9uVHJhY2tpbmdFbmFibGVkPzogYm9vbGVhblxuICAgIGF0dGVtcHRzQ291bnQ/OiBudW1iZXJcbiAgICByZWNvcmRpbmdQcm9jZXNzPzogbnVtYmVyXG4gICAgbGl2ZW5lc3NUeXBlPzogbnVtYmVyXG4gICAgdGFnPzogc3RyaW5nXG4gICAgc2tpcFN0ZXA/OiBudW1iZXJbXVxuICAgIG1ldGFkYXRhPzogYW55XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NDb25maWdcblxuICAgICAgICByZXN1bHQuY29weXJpZ2h0ID0ganNvbk9iamVjdFtcImNvcHlyaWdodFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhU3dpdGNoRW5hYmxlZCA9IGpzb25PYmplY3RbXCJjYW1lcmFTd2l0Y2hFbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC5jbG9zZUJ1dHRvbkVuYWJsZWQgPSBqc29uT2JqZWN0W1wiY2xvc2VCdXR0b25FbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC50b3JjaEJ1dHRvbkVuYWJsZWQgPSBqc29uT2JqZWN0W1widG9yY2hCdXR0b25FbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC52aWJyYXRlT25TdGVwcyA9IGpzb25PYmplY3RbXCJ2aWJyYXRlT25TdGVwc1wiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUG9zaXRpb25BbmRyb2lkID0ganNvbk9iamVjdFtcImNhbWVyYVBvc2l0aW9uQW5kcm9pZFwiXVxuICAgICAgICByZXN1bHQuY2FtZXJhUG9zaXRpb25JT1MgPSBqc29uT2JqZWN0W1wiY2FtZXJhUG9zaXRpb25JT1NcIl1cbiAgICAgICAgcmVzdWx0LnNjcmVlbk9yaWVudGF0aW9uID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzY3JlZW5PcmllbnRhdGlvblwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNjcmVlbk9yaWVudGF0aW9uXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNjcmVlbk9yaWVudGF0aW9uLnB1c2goanNvbk9iamVjdFtcInNjcmVlbk9yaWVudGF0aW9uXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5sb2NhdGlvblRyYWNraW5nRW5hYmxlZCA9IGpzb25PYmplY3RbXCJsb2NhdGlvblRyYWNraW5nRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuYXR0ZW1wdHNDb3VudCA9IGpzb25PYmplY3RbXCJhdHRlbXB0c0NvdW50XCJdXG4gICAgICAgIHJlc3VsdC5yZWNvcmRpbmdQcm9jZXNzID0ganNvbk9iamVjdFtcInJlY29yZGluZ1Byb2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzVHlwZSA9IGpzb25PYmplY3RbXCJsaXZlbmVzc1R5cGVcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnNraXBTdGVwID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJza2lwU3RlcFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNraXBTdGVwXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNraXBTdGVwLnB1c2goanNvbk9iamVjdFtcInNraXBTdGVwXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0V4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXJyb3I/OiBVbmRlcmx5aW5nRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnVuZGVybHlpbmdFcnJvciA9IFVuZGVybHlpbmdFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInVuZGVybHlpbmdFcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NOb3RpZmljYXRpb24ge1xuICAgIHN0YXR1cz86IG51bWJlclxuICAgIHJlc3BvbnNlPzogTGl2ZW5lc3NSZXNwb25zZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc05vdGlmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzTm90aWZpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlc3BvbnNlID0gTGl2ZW5lc3NSZXNwb25zZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzcG9uc2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUmVzcG9uc2Uge1xuICAgIGltYWdlPzogc3RyaW5nXG4gICAgbGl2ZW5lc3M/OiBudW1iZXJcbiAgICB0YWc/OiBzdHJpbmdcbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG4gICAgZXN0aW1hdGVkQWdlPzogbnVtYmVyXG4gICAgZXJyb3I/OiBMaXZlbmVzc0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3MgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JZFwiXVxuICAgICAgICByZXN1bHQuZXN0aW1hdGVkQWdlID0ganNvbk9iamVjdFtcImVzdGltYXRlZEFnZVwiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBMaXZlbmVzc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBhcmVkRmFjZSB7XG4gICAgaW1hZ2VJbmRleD86IG51bWJlclxuICAgIGltYWdlPzogTWF0Y2hGYWNlc0ltYWdlXG4gICAgZmFjZUluZGV4PzogbnVtYmVyXG4gICAgZmFjZT86IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvbXBhcmVkRmFjZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvbXBhcmVkRmFjZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZUluZGV4ID0ganNvbk9iamVjdFtcImltYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlID0gTWF0Y2hGYWNlc0ltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcbiAgICAgICAgcmVzdWx0LmZhY2VJbmRleCA9IGpzb25PYmplY3RbXCJmYWNlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZhY2UgPSBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGFyZWRGYWNlc1BhaXIge1xuICAgIGZpcnN0PzogQ29tcGFyZWRGYWNlXG4gICAgc2Vjb25kPzogQ29tcGFyZWRGYWNlXG4gICAgc2ltaWxhcml0eT86IG51bWJlclxuICAgIHNjb3JlPzogbnVtYmVyXG4gICAgZXJyb3I/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvbXBhcmVkRmFjZXNQYWlyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGFyZWRGYWNlc1BhaXJcblxuICAgICAgICByZXN1bHQuZmlyc3QgPSBDb21wYXJlZEZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZpcnN0XCJdKVxuICAgICAgICByZXN1bHQuc2Vjb25kID0gQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWNvbmRcIl0pXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LnNjb3JlID0ganNvbk9iamVjdFtcInNjb3JlXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IE1hdGNoRmFjZXNFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wYXJlZEZhY2VzU3BsaXQge1xuICAgIG1hdGNoZWRGYWNlcz86IENvbXBhcmVkRmFjZXNQYWlyW11cbiAgICB1bm1hdGNoZWRGYWNlcz86IENvbXBhcmVkRmFjZXNQYWlyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlc1NwbGl0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGFyZWRGYWNlc1NwbGl0XG5cbiAgICAgICAgcmVzdWx0Lm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudW5tYXRjaGVkRmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzQ29uZmlnIHtcbiAgICBwcm9jZXNzaW5nTW9kZT86IG51bWJlclxuICAgIGxvY2F0aW9uVHJhY2tpbmdFbmFibGVkPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5wcm9jZXNzaW5nTW9kZSA9IGpzb25PYmplY3RbXCJwcm9jZXNzaW5nTW9kZVwiXVxuICAgICAgICByZXN1bHQubG9jYXRpb25UcmFja2luZ0VuYWJsZWQgPSBqc29uT2JqZWN0W1wibG9jYXRpb25UcmFja2luZ0VuYWJsZWRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0RldGVjdGlvbiB7XG4gICAgaW1hZ2VJbmRleD86IG51bWJlclxuICAgIGltYWdlPzogTWF0Y2hGYWNlc0ltYWdlXG4gICAgZmFjZXM/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVtdXG4gICAgZXJyb3I/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRGV0ZWN0aW9uXG5cbiAgICAgICAgcmVzdWx0LmltYWdlSW5kZXggPSBqc29uT2JqZWN0W1wiaW1hZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuZmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2Uge1xuICAgIGZhY2VJbmRleD86IG51bWJlclxuICAgIGxhbmRtYXJrcz86IFBvaW50W11cbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICByb3RhdGlvbkFuZ2xlPzogbnVtYmVyXG4gICAgb3JpZ2luYWxSZWN0PzogUmVjdFxuICAgIGNyb3A/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVxuXG4gICAgICAgIHJlc3VsdC5mYWNlSW5kZXggPSBqc29uT2JqZWN0W1wiZmFjZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZhY2VSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZVJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5yb3RhdGlvbkFuZ2xlID0ganNvbk9iamVjdFtcInJvdGF0aW9uQW5nbGVcIl1cbiAgICAgICAgcmVzdWx0Lm9yaWdpbmFsUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcIm9yaWdpbmFsUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNyb3AgPSBqc29uT2JqZWN0W1wiY3JvcFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0V4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnVuZGVybHlpbmdFcnJvciA9IFVuZGVybHlpbmdFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInVuZGVybHlpbmdFcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0ltYWdlIHtcbiAgICBpbWFnZT86IHN0cmluZ1xuICAgIGltYWdlVHlwZT86IG51bWJlclxuICAgIGRldGVjdEFsbD86IGJvb2xlYW5cbiAgICBpZGVudGlmaWVyPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNJbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNJbWFnZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VUeXBlID0ganNvbk9iamVjdFtcImltYWdlVHlwZVwiXVxuICAgICAgICByZXN1bHQuZGV0ZWN0QWxsID0ganNvbk9iamVjdFtcImRldGVjdEFsbFwiXVxuICAgICAgICByZXN1bHQuaWRlbnRpZmllciA9IGpzb25PYmplY3RbXCJpZGVudGlmaWVyXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgICBpbWFnZXM/OiBNYXRjaEZhY2VzSW1hZ2VbXVxuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm91dHB1dEltYWdlUGFyYW1zID0gT3V0cHV0SW1hZ2VQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcIm91dHB1dEltYWdlUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1Jlc3BvbnNlIHtcbiAgICByZXN1bHRzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgIGRldGVjdGlvbnM/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uW11cbiAgICB0YWc/OiBzdHJpbmdcbiAgICBlcnJvcj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInJlc3VsdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJyZXN1bHRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IENvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlc3VsdHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRldGVjdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IE1hdGNoRmFjZXNFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdCB7XG4gICAgcGVyc29uSWRzVG9BZGQ/OiBzdHJpbmdbXVxuICAgIHBlcnNvbklkc1RvUmVtb3ZlPzogc3RyaW5nW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRWRpdEdyb3VwUGVyc29uc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb0FkZCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb0FkZC5wdXNoKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucGVyc29uSWRzVG9SZW1vdmUgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGVyc29uSWRzVG9SZW1vdmUucHVzaChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQge1xuICAgIGltYWdlRGF0YT86IHN0cmluZ1xuICAgIGltYWdlVXJsPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlVXBsb2FkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VVcGxvYWRcblxuICAgICAgICByZXN1bHQuaW1hZ2VEYXRhID0ganNvbk9iamVjdFtcImltYWdlRGF0YVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VVcmwgPSBqc29uT2JqZWN0W1wiaW1hZ2VVcmxcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZWFibGVJdGVtTGlzdCB7XG4gICAgaXRlbXM/OiBhbnlbXVxuICAgIHBhZ2U/OiBudW1iZXJcbiAgICB0b3RhbFBhZ2VzPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBhZ2VhYmxlSXRlbUxpc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQYWdlYWJsZUl0ZW1MaXN0XG5cbiAgICAgICAgcmVzdWx0Lml0ZW1zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpdGVtc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIml0ZW1zXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lml0ZW1zLnB1c2goanNvbk9iamVjdFtcIml0ZW1zXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wYWdlID0ganNvbk9iamVjdFtcInBhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnRvdGFsUGFnZXMgPSBqc29uT2JqZWN0W1widG90YWxQYWdlc1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb24ge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB1cGRhdGVkQXQ/OiBzdHJpbmdcbiAgICBncm91cHM/OiBzdHJpbmdbXVxuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGVyc29uXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQudXBkYXRlZEF0ID0ganNvbk9iamVjdFtcInVwZGF0ZWRBdFwiXVxuICAgICAgICByZXN1bHQuZ3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBzLnB1c2goanNvbk9iamVjdFtcImdyb3Vwc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbkdyb3VwIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb25Hcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvbkdyb3VwXG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbkltYWdlIHtcbiAgICBwYXRoPzogc3RyaW5nXG4gICAgdXJsPzogc3RyaW5nXG4gICAgY29udGVudFR5cGU/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbkltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGVyc29uSW1hZ2VcblxuICAgICAgICByZXN1bHQucGF0aCA9IGpzb25PYmplY3RbXCJwYXRoXCJdXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5jb250ZW50VHlwZSA9IGpzb25PYmplY3RbXCJjb250ZW50VHlwZVwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbiB7XG4gICAgaW1hZ2VzPzogU2VhcmNoUGVyc29uSW1hZ2VbXVxuICAgIGRldGVjdGlvbj86IFNlYXJjaFBlcnNvbkRldGVjdGlvblxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICB1cGRhdGVkQXQ/OiBzdHJpbmdcbiAgICBncm91cHM/OiBzdHJpbmdbXVxuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uXG5cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFNlYXJjaFBlcnNvbkltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZGV0ZWN0aW9uID0gU2VhcmNoUGVyc29uRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25cIl0pXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZWRBdCA9IGpzb25PYmplY3RbXCJ1cGRhdGVkQXRcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3Vwcy5wdXNoKGpzb25PYmplY3RbXCJncm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQZXJzb25EZXRlY3Rpb24ge1xuICAgIGxhbmRtYXJrcz86IFBvaW50W11cbiAgICByZWN0PzogUmVjdFxuICAgIGNyb3A/OiBzdHJpbmdcbiAgICByb3RhdGlvbkFuZ2xlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvbkRldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlYXJjaFBlcnNvbkRldGVjdGlvblxuXG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWN0XCJdKVxuICAgICAgICByZXN1bHQuY3JvcCA9IGpzb25PYmplY3RbXCJjcm9wXCJdXG4gICAgICAgIHJlc3VsdC5yb3RhdGlvbkFuZ2xlID0ganNvbk9iamVjdFtcInJvdGF0aW9uQW5nbGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uSW1hZ2Uge1xuICAgIHNpbWlsYXJpdHk/OiBudW1iZXJcbiAgICBkaXN0YW5jZT86IG51bWJlclxuICAgIHBhdGg/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBjb250ZW50VHlwZT86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25JbWFnZVxuXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmRpc3RhbmNlID0ganNvbk9iamVjdFtcImRpc3RhbmNlXCJdXG4gICAgICAgIHJlc3VsdC5wYXRoID0ganNvbk9iamVjdFtcInBhdGhcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LmNvbnRlbnRUeXBlID0ganNvbk9iamVjdFtcImNvbnRlbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uUmVxdWVzdCB7XG4gICAgaW1hZ2VVcGxvYWQ/OiBJbWFnZVVwbG9hZFxuICAgIGdyb3VwSWRzRm9yU2VhcmNoPzogc3RyaW5nW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBsaW1pdD86IG51bWJlclxuICAgIGRldGVjdEFsbD86IGJvb2xlYW5cbiAgICBvdXRwdXRJbWFnZVBhcmFtcz86IE91dHB1dEltYWdlUGFyYW1zXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvblJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25SZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LmltYWdlVXBsb2FkID0gSW1hZ2VVcGxvYWQuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlVXBsb2FkXCJdKVxuICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2ggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2gucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmxpbWl0ID0ganNvbk9iamVjdFtcImxpbWl0XCJdXG4gICAgICAgIHJlc3VsdC5kZXRlY3RBbGwgPSBqc29uT2JqZWN0W1wiZGV0ZWN0QWxsXCJdXG4gICAgICAgIHJlc3VsdC5vdXRwdXRJbWFnZVBhcmFtcyA9IE91dHB1dEltYWdlUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJvdXRwdXRJbWFnZVBhcmFtc1wiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5pdFJlc3BvbnNlIHtcbiAgICBzdWNjZXNzPzogYm9vbGVhblxuICAgIGVycm9yPzogSW5pdEV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbml0UmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbml0UmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuc3VjY2VzcyA9IGpzb25PYmplY3RbXCJzdWNjZXNzXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IEluaXRFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb0VuY29kZXJDb21wbGV0aW9uIHtcbiAgICBzdWNjZXNzPzogYm9vbGVhblxuICAgIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVmlkZW9FbmNvZGVyQ29tcGxldGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFZpZGVvRW5jb2RlckNvbXBsZXRpb25cblxuICAgICAgICByZXN1bHQuc3VjY2VzcyA9IGpzb25PYmplY3RbXCJzdWNjZXNzXCJdXG4gICAgICAgIHJlc3VsdC50cmFuc2FjdGlvbklkID0ganNvbk9iamVjdFtcInRyYW5zYWN0aW9uSWRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uREJSZXNwb25zZSB7XG4gICAgZGF0YT86IGFueVxuICAgIGVycm9yPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbkRCUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25EQlJlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmRhdGEgPSBqc29uT2JqZWN0W1wiZGF0YVwiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBqc29uT2JqZWN0W1wiZXJyb3JcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRm9udFN0eWxlID0ge1xuICAgIE5PUk1BTDogMCxcbiAgICBCT0xEOiAxLFxuICAgIElUQUxJQzogMixcbiAgICBCT0xEX0lUQUxJQzogMyxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25Db2xvciA9IHtcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT05fQkFDS0dST1VORDogMTAwLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTl9USVRMRTogMTAxLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0JBQ0tHUk9VTkQ6IDEwMixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9USVRMRV9MQUJFTF9URVhUOiAxMDMsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1VCVElUTEVfTEFCRUxfVEVYVDogMTA0LFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX01FU1NBR0VfTEFCRUxTX1RFWFQ6IDEwNSxcbiAgICBDQU1FUkFfU0NSRUVOX1NUUk9LRV9OT1JNQUw6IDIwMCxcbiAgICBDQU1FUkFfU0NSRUVOX1NUUk9LRV9BQ1RJVkU6IDIwMSxcbiAgICBDQU1FUkFfU0NSRUVOX1NFQ1RPUl9UQVJHRVQ6IDIwMixcbiAgICBDQU1FUkFfU0NSRUVOX1NFQ1RPUl9BQ1RJVkU6IDIwMyxcbiAgICBDQU1FUkFfU0NSRUVOX0ZST05UX0hJTlRfTEFCRUxfQkFDS0dST1VORDogMjA0LFxuICAgIENBTUVSQV9TQ1JFRU5fRlJPTlRfSElOVF9MQUJFTF9URVhUOiAyMDUsXG4gICAgQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfQkFDS0dST1VORDogMjA2LFxuICAgIENBTUVSQV9TQ1JFRU5fQkFDS19ISU5UX0xBQkVMX1RFWFQ6IDIwNyxcbiAgICBDQU1FUkFfU0NSRUVOX0xJR0hUX1RPT0xCQVJfVElOVDogMjA4LFxuICAgIENBTUVSQV9TQ1JFRU5fREFSS19UT09MQkFSX1RJTlQ6IDIwOSxcbiAgICBSRVRSWV9TQ1JFRU5fQkFDS0dST1VORDogMzAwLFxuICAgIFJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fQkFDS0dST1VORDogMzAxLFxuICAgIFJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fVElUTEU6IDMwMixcbiAgICBSRVRSWV9TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVDogMzAzLFxuICAgIFJFVFJZX1NDUkVFTl9TVUJUSVRMRV9MQUJFTF9URVhUOiAzMDQsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfTEFCRUxTX1RFWFQ6IDMwNSxcbiAgICBQUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EOiA0MDAsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1M6IDQwMSxcbiAgICBQUk9DRVNTSU5HX1NDUkVFTl9USVRMRTogNDAyLFxuICAgIFNVQ0NFU1NfU0NSRUVOX0JBQ0tHUk9VTkQ6IDUwMCxcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlUXVhbGl0eUdyb3VwTmFtZSA9IHtcbiAgICBJTUFHRV9DSEFSQUNURVJJU1RJQ1M6IDEsXG4gICAgSEVBRF9TSVpFX0FORF9QT1NJVElPTjogMixcbiAgICBGQUNFX1FVQUxJVFk6IDMsXG4gICAgRVlFU19DSEFSQUNURVJJU1RJQ1M6IDQsXG4gICAgU0hBRE9XU19BTkRfTElHSFROSU5HOiA1LFxuICAgIFBPU0VfQU5EX0VYUFJFU1NJT046IDYsXG4gICAgSEVBRF9PQ0NMVVNJT046IDcsXG4gICAgQkFDS0dST1VORDogOCxcbiAgICBVTktOT1dOOiA5LFxufVxuXG5leHBvcnQgY29uc3QgTGljZW5zaW5nUmVzdWx0Q29kZSA9IHtcbiAgICBPSzogMCxcbiAgICBMSUNFTlNFX0NPUlJVUFRFRDogMSxcbiAgICBJTlZBTElEX0RBVEU6IDIsXG4gICAgSU5WQUxJRF9WRVJTSU9OOiAzLFxuICAgIElOVkFMSURfREVWSUNFX0lEOiA0LFxuICAgIElOVkFMSURfU1lTVEVNX09SX0FQUF9JRDogNSxcbiAgICBOT19DQVBBQklMSVRJRVM6IDYsXG4gICAgTk9fQVVUSEVOVElDSVRZOiA3LFxuICAgIExJQ0VOU0VfQUJTRU5UOiA4LFxuICAgIE5PX0lOVEVSTkVUOiA5LFxuICAgIE5PX0RBVEFCQVNFOiAxMCxcbiAgICBEQVRBQkFTRV9JTkNPUlJFQ1Q6IDExLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNFcnJvckNvZGUgPSB7XG4gICAgSU1BR0VfRU1QVFk6IDAsXG4gICAgRlJfRkFDRV9OT1RfREVURUNURUQ6IDEsXG4gICAgRkFDRVJfTk9fTElDRU5TRTogMixcbiAgICBGQUNFUl9JU19OT1RfSU5JVElBTElaRUQ6IDMsXG4gICAgRkFDRVJfQ09NTUFORF9JU19OT1RfU1VQUE9SVEVEOiA0LFxuICAgIEZBQ0VSX0NPTU1BTkRfUEFSQU1TX1JFQURfRVJST1I6IDUsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IDYsXG4gICAgUkVRVUVTVF9GQUlMRUQ6IDcsXG4gICAgQVBJX0NBTExfRkFJTEVEOiA4LFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhUG9zaXRpb24gPSB7XG4gICAgRlJPTlQ6IDAsXG4gICAgQkFDSzogMSxcbn1cblxuZXhwb3J0IGNvbnN0IEluaXRFcnJvckNvZGUgPSB7XG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogMCxcbiAgICBNSVNTSU5HX0NPUkU6IDEsXG4gICAgSU5URVJOQUxfQ09SRV9FUlJPUjogMixcbiAgICBCQURfTElDRU5TRTogMyxcbiAgICBVTkFWQUlMQUJMRTogNCxcbiAgICBDT05URVhUX0lTX05VTEw6IDEwMCxcbiAgICBSRVNPVVJDRV9EQVRfQUJTRU5UOiAxMDEsXG4gICAgTElDRU5TRV9JU19OVUxMOiAxMDIsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1N0YXR1cyA9IHtcbiAgICBQQVNTRUQ6IDAsXG4gICAgVU5LTk9XTjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzRXJyb3JDb2RlID0ge1xuICAgIE5PVF9JTklUSUFMSVpFRDogMCxcbiAgICBOT19MSUNFTlNFOiAxLFxuICAgIEFQSV9DQUxMX0ZBSUxFRDogMixcbiAgICBTRVNTSU9OX1NUQVJUX0ZBSUxFRDogMyxcbiAgICBDQU5DRUxMRUQ6IDQsXG4gICAgUFJPQ0VTU0lOR19USU1FT1VUOiA1LFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiA2LFxuICAgIFBST0NFU1NJTkdfRlJBTUVfRkFJTEVEOiA3LFxuICAgIEFQUExJQ0FUSU9OX0lOQUNUSVZFOiA4LFxuICAgIENPTlRFWFRfSVNfTlVMTDogOSxcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiAxMCxcbiAgICBaT09NX05PVF9TVVBQT1JURUQ6IDExLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiAxMixcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBSZWNvcmRpbmdQcm9jZXNzID0ge1xuICAgIEFTWU5DSFJPTk9VU19VUExPQUQ6IDAsXG4gICAgU1lOQ0hST05PVVNfVVBMT0FEOiAxLFxuICAgIE5PVF9VUExPQUQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUgPSB7XG4gICAgRlJfRkFDRV9OT1RfREVURUNURUQ6IDIsXG4gICAgRkFDRVJfTk9fTElDRU5TRTogMjAwLFxuICAgIEZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRDogMjAxLFxuICAgIEZBQ0VSX0NPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogMjAyLFxuICAgIEZBQ0VSX0NPTU1BTkRfUEFSQU1TX1JFQURfRVJST1I6IDIwMyxcbiAgICBVTkRFRklORUQ6IC0xLFxufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogMCxcbiAgICBGQUNFX05PVF9ERVRFQ1RFRDogMSxcbiAgICBMQU5ETUFSS1NfTk9UX0RFVEVDVEVEOiAyLFxuICAgIEZBQ0VfQUxJR05FUl9GQUlMRUQ6IDMsXG4gICAgREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1I6IDQsXG4gICAgSU1BR0VTX0NPVU5UX0xJTUlUX0VYQ0VFREVEOiA1LFxuICAgIEFQSV9DQUxMX0ZBSUxFRDogNixcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogNyxcbiAgICBOT19MSUNFTlNFOiA4LFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNOYW1lID0ge1xuICAgIElNQUdFX1dJRFRIOiBcIkltYWdlV2lkdGhcIixcbiAgICBJTUFHRV9IRUlHSFQ6IFwiSW1hZ2VIZWlnaHRcIixcbiAgICBJTUFHRV9XSURUSF9UT19IRUlHSFQ6IFwiSW1hZ2VXaWR0aFRvSGVpZ2h0XCIsXG4gICAgSU1BR0VfQ0hBTk5FTFNfTlVNQkVSOiBcIkltYWdlQ2hhbm5lbHNOdW1iZXJcIixcbiAgICBBUlRfRkFDRTogXCJBcnRGYWNlXCIsXG4gICAgUEFERElOR19SQVRJTzogXCJQYWRkaW5nUmF0aW9cIixcbiAgICBGQUNFX01JRF9QT0lOVF9IT1JJWk9OVEFMX1BPU0lUSU9OOiBcIkZhY2VNaWRQb2ludEhvcml6b250YWxQb3NpdGlvblwiLFxuICAgIEZBQ0VfTUlEX1BPSU5UX1ZFUlRJQ0FMX1BPU0lUSU9OOiBcIkZhY2VNaWRQb2ludFZlcnRpY2FsUG9zaXRpb25cIixcbiAgICBIRUFEX1dJRFRIX1JBVElPOiBcIkhlYWRXaWR0aFJhdGlvXCIsXG4gICAgSEVBRF9IRUlHSFRfUkFUSU86IFwiSGVhZEhlaWdodFJhdGlvXCIsXG4gICAgRVlFU19ESVNUQU5DRTogXCJFeWVzRGlzdGFuY2VcIixcbiAgICBZQVc6IFwiWWF3XCIsXG4gICAgUElUQ0g6IFwiUGl0Y2hcIixcbiAgICBST0xMOiBcIlJvbGxcIixcbiAgICBCTFVSX0xFVkVMOiBcIkJsdXJMZXZlbFwiLFxuICAgIE5PSVNFX0xFVkVMOiBcIk5vaXNlTGV2ZWxcIixcbiAgICBVTk5BVFVSQUxfU0tJTl9UT05FOiBcIlVubmF0dXJhbFNraW5Ub25lXCIsXG4gICAgRkFDRV9EWU5BTUlDX1JBTkdFOiBcIkZhY2VEeW5hbWljUmFuZ2VcIixcbiAgICBFWUVfUklHSFRfQ0xPU0VEOiBcIkV5ZVJpZ2h0Q2xvc2VkXCIsXG4gICAgRVlFX0xFRlRfQ0xPU0VEOiBcIkV5ZUxlZnRDbG9zZWRcIixcbiAgICBFWUVfUklHSFRfT0NDTFVERUQ6IFwiRXllUmlnaHRPY2NsdWRlZFwiLFxuICAgIEVZRV9MRUZUX09DQ0xVREVEOiBcIkV5ZUxlZnRPY2NsdWRlZFwiLFxuICAgIEVZRVNfUkVEOiBcIkV5ZXNSZWRcIixcbiAgICBFWUVfUklHSFRfQ09WRVJFRF9XSVRIX0hBSVI6IFwiRXllUmlnaHRDb3ZlcmVkV2l0aEhhaXJcIixcbiAgICBFWUVfTEVGVF9DT1ZFUkVEX1dJVEhfSEFJUjogXCJFeWVMZWZ0Q292ZXJlZFdpdGhIYWlyXCIsXG4gICAgT0ZGX0dBWkU6IFwiT2ZmR2F6ZVwiLFxuICAgIFRPT19EQVJLOiBcIlRvb0RhcmtcIixcbiAgICBUT09fTElHSFQ6IFwiVG9vTGlnaHRcIixcbiAgICBGQUNFX0dMQVJFOiBcIkZhY2VHbGFyZVwiLFxuICAgIFNIQURPV1NfT05fRkFDRTogXCJTaGFkb3dzT25GYWNlXCIsXG4gICAgU0hPVUxERVJTX1BPU0U6IFwiU2hvdWxkZXJzUG9zZVwiLFxuICAgIEVYUFJFU1NJT05fTEVWRUw6IFwiRXhwcmVzc2lvbkxldmVsXCIsXG4gICAgTU9VVEhfT1BFTjogXCJNb3V0aE9wZW5cIixcbiAgICBTTUlMRTogXCJTbWlsZVwiLFxuICAgIERBUktfR0xBU1NFUzogXCJEYXJrR2xhc3Nlc1wiLFxuICAgIFJFRkxFQ1RJT05fT05fR0xBU1NFUzogXCJSZWZsZWN0aW9uT25HbGFzc2VzXCIsXG4gICAgRlJBTUVTX1RPT19IRUFWWTogXCJGcmFtZXNUb29IZWF2eVwiLFxuICAgIEZBQ0VfT0NDTFVERUQ6IFwiRmFjZU9jY2x1ZGVkXCIsXG4gICAgSEVBRF9DT1ZFUklORzogXCJIZWFkQ292ZXJpbmdcIixcbiAgICBGT1JFSEVBRF9DT1ZFUklORzogXCJGb3JlaGVhZENvdmVyaW5nXCIsXG4gICAgU1RST05HX01BS0VVUDogXCJTdHJvbmdNYWtldXBcIixcbiAgICBIRUFEX1BIT05FUzogXCJIZWFkcGhvbmVzXCIsXG4gICAgTUVESUNBTF9NQVNLOiBcIk1lZGljYWxNYXNrXCIsXG4gICAgQkFDS0dST1VORF9VTklGT1JNSVRZOiBcIkJhY2tncm91bmRVbmlmb3JtaXR5XCIsXG4gICAgU0hBRE9XU19PTl9CQUNLR1JPVU5EOiBcIlNoYWRvd3NPbkJhY2tncm91bmRcIixcbiAgICBPVEhFUl9GQUNFUzogXCJPdGhlckZhY2VzXCIsXG4gICAgQkFDS0dST1VORF9DT0xPUl9NQVRDSDogXCJCYWNrZ3JvdW5kQ29sb3JNYXRjaFwiLFxuICAgIFVOS05PV046IFwiVW5rbm93blwiLFxuICAgIElNQUdFX0NIQVJBQ1RFUklTVElDX0FMTF9SRUNPTU1FTkRFRDogXCJJbWFnZUNoYXJhY3RlcmlzdGljXCIsXG4gICAgSEVBRF9TSVpFX0FORF9QT1NJVElPTl9BTExfUkVDT01NRU5ERUQ6IFwiSGVhZFNpemVBbmRQb3NpdGlvblwiLFxuICAgIEZBQ0VfSU1BR0VfUVVBTElUWV9BTExfUkVDT01NRU5ERUQ6IFwiRmFjZUltYWdlUXVhbGl0eVwiLFxuICAgIEVZRVNfQ0hBUkFDVEVSSVNUSUNTX0FMTF9SRUNPTU1FTkRFRDogXCJFeWVzQ2hhcmFjdGVyaXN0aWNzXCIsXG4gICAgU0hBRE9XX0FORF9MSUdIVElOR19BTExfUkVDT01NRU5ERUQ6IFwiU2hhZG93c0FuZExpZ2h0bmluZ1wiLFxuICAgIFBPU0VfQU5EX0VYUFJFU1NJT05fQUxMX1JFQ09NTUVOREVEOiBcIlBvc2VBbmRFeHByZXNzaW9uXCIsXG4gICAgSEVBRF9PQ0NMVVNJT05fQUxMX1JFQ09NTUVOREVEOiBcIkhlYWRPY2NsdXNpb25cIixcbiAgICBRVUFMSVRZX0JBQ0tHUk9VTkRfQUxMX1JFQ09NTUVOREVEOiBcIlF1YWxpdHlCYWNrZ3JvdW5kXCIsXG59XG5cbmV4cG9ydCBjb25zdCBTY3JlZW5PcmllbnRhdGlvbiA9IHtcbiAgICBQT1JUUkFJVDogMCxcbiAgICBMQU5EU0NBUEU6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uRm9udCA9IHtcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT046IDEwMCxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9USVRMRV9MQUJFTDogMTAxLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NVQlRJVExFX0xBQkVMOiAxMDIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fTUVTU0FHRV9MQUJFTFM6IDEwMyxcbiAgICBDQU1FUkFfU0NSRUVOX0hJTlRfTEFCRUw6IDIwMCxcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OOiAzMDAsXG4gICAgUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMOiAzMDEsXG4gICAgUkVUUllfU0NSRUVOX1NVQlRJVExFX0xBQkVMOiAzMDIsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfTEFCRUxTOiAzMDMsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU46IDQwMCxcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzU2NlbmFyaW8gPSB7XG4gICAgQ1JPUF9DRU5UUkFMX0ZBQ0U6IFwiQ3JvcENlbnRyYWxGYWNlXCIsXG4gICAgQ1JPUF9BTExfRkFDRVM6IFwiQ3JvcEFsbEZhY2VzXCIsXG4gICAgVEhVTUJOQUlMOiBcIlRodW1ibmFpbFwiLFxuICAgIEFUVFJJQlVURVNfQUxMOiBcIkF0dHJpYnV0ZXNBbGxcIixcbiAgICBRVUFMSVRZX0ZVTEw6IFwiUXVhbGl0eUZ1bGxcIixcbiAgICBRVUFMSVRZX0lDQU86IFwiUXVhbGl0eUlDQU9cIixcbiAgICBRVUFMSVRZX1ZJU0FfU0NIRU5HRU46IFwiUXVhbGl0eVZpc2FTY2hlbmdlblwiLFxuICAgIFFVQUxJVFlfVklTQV9VU0E6IFwiUXVhbGl0eVZpc2FVU0FcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzUHJvY2Vzc1N0YXR1cyA9IHtcbiAgICBTVEFSVDogMCxcbiAgICBQUkVQQVJJTkc6IDEsXG4gICAgTkVXX1NFU1NJT046IDIsXG4gICAgTkVYVF9TVEFHRTogMyxcbiAgICBTRUNUT1JfQ0hBTkdFRDogNCxcbiAgICBQUk9HUkVTUzogNSxcbiAgICBMT1dfQlJJR0hUTkVTUzogNixcbiAgICBGSVRfRkFDRTogNyxcbiAgICBNT1ZFX0FXQVk6IDgsXG4gICAgTU9WRV9DTE9TRVI6IDksXG4gICAgVFVSTl9IRUFEOiAxMCxcbiAgICBQUk9DRVNTSU5HOiAxMSxcbiAgICBGQUlMRUQ6IDEyLFxuICAgIFJFVFJZOiAxMyxcbiAgICBTVUNDRVNTOiAxNCxcbn1cblxuZXhwb3J0IGNvbnN0IE91dHB1dEltYWdlQ3JvcEFzcGVjdFJhdGlvID0ge1xuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT18zWDQ6IDAsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzRYNTogMSxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fMlgzOiAyLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT18xWDE6IDMsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzdYOTogNCxcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzVHlwZSA9IHtcbiAgICBBQ1RJVkU6IDAsXG4gICAgUEFTU0lWRTogMSxcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzU2tpcFN0ZXAgPSB7XG4gICAgT05CT0FSRElOR19TVEVQOiAwLFxuICAgIFNVQ0NFU1NfU1RFUDogMSxcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlUXVhbGl0eVJlc3VsdFN0YXR1cyA9IHtcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfRkFMU0U6IDAsXG4gICAgSU1BR0VfUVVBTElUWV9SRVNVTFRfU1RBVFVTX1RSVUU6IDEsXG4gICAgSU1BR0VfUVVBTElUWV9SRVNVTFRfU1RBVFVTX1VOREVURVJNSU5FRDogMixcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlVHlwZSA9IHtcbiAgICBQUklOVEVEOiAxLFxuICAgIFJGSUQ6IDIsXG4gICAgTElWRTogMyxcbiAgICBET0NVTUVOVF9XSVRIX0xJVkU6IDQsXG4gICAgRVhURVJOQUw6IDUsXG4gICAgR0hPU1RfUE9SVFJBSVQ6IDYsXG4gICAgQkFSQ09ERTogNyxcbn1cblxuZXhwb3J0IGNvbnN0IEZhY2VDYXB0dXJlRXJyb3JDb2RlID0ge1xuICAgIENBTkNFTDogMCxcbiAgICBUSU1FT1VUOiAxLFxuICAgIE5PVF9JTklUSUFMSVpFRDogMixcbiAgICBTRVNTSU9OX1NUQVJUX0ZBSUxFRDogMyxcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogNCxcbiAgICBDQU1FUkFfTk9fUEVSTUlTU0lPTjogNSxcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiA2LFxuICAgIENPTlRFWFRfSVNfTlVMTDogNyxcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzQmFja2VuZEVycm9yQ29kZSA9IHtcbiAgICBVTkRFRklORUQ6IC0xLFxuICAgIE5PX0xJQ0VOU0U6IDIwMCxcbiAgICBMT1dfUVVBTElUWTogMjMxLFxuICAgIFRSQUNLX0JSRUFLOiAyNDYsXG4gICAgQ0xPU0VEX0VZRVNfREVURUNURUQ6IDIzMCxcbiAgICBISUdIX0FTWU1NRVRSWTogMjMyLFxuICAgIEZBQ0VfT1ZFUl9FTU9USU9OQUw6IDIzMyxcbiAgICBTVU5HTEFTU0VTX0RFVEVDVEVEOiAyMzQsXG4gICAgU01BTExfQUdFOiAyMzUsXG4gICAgSEVBRERSRVNTX0RFVEVDVEVEOiAyMzYsXG4gICAgTUVESUNJTkVfTUFTS19ERVRFQ1RFRDogMjM5LFxuICAgIE9DQ0xVU0lPTl9ERVRFQ1RFRDogMjQwLFxuICAgIEZPUkVIRUFEX0dMQVNTRVNfREVURUNURUQ6IDI0MixcbiAgICBNT1VUSF9PUEVORUQ6IDI0MyxcbiAgICBBUlRfTUFTS19ERVRFQ1RFRDogMjQ0LFxuICAgIE5PVF9NQVRDSEVEOiAyMzcsXG4gICAgSU1BR0VTX0NPVU5UX0xJTUlUX0VYQ0VFREVEOiAyMzgsXG4gICAgRUxFQ1RST05JQ19ERVZJQ0VfREVURUNURUQ6IDI0NSxcbiAgICBXUk9OR19HRU86IDI0NyxcbiAgICBXUk9OR19PRjogMjQ4LFxuICAgIFdST05HX1ZJRVc6IDI0OSxcbn1cblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NpbmdNb2RlID0ge1xuICAgIE9OTElORTogMCxcbiAgICBPRkZMSU5FOiAxLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkltYWdlID0ge1xuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0NMT1NFX0JVVFRPTjogMTAwLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0lMTFVNSU5BVElPTjogMTAxLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0FDQ0VTU09SSUVTOiAxMDIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fQ0FNRVJBX0xFVkVMOiAxMDMsXG4gICAgQ0FNRVJBX1NDUkVFTl9DTE9TRV9CVVRUT046IDIwMCxcbiAgICBDQU1FUkFfU0NSRUVOX0xJR0hUX09OX0JVVFRPTjogMjAxLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfT0ZGX0JVVFRPTjogMjAyLFxuICAgIENBTUVSQV9TQ1JFRU5fU1dJVENIX0JVVFRPTjogMjAzLFxuICAgIFJFVFJZX1NDUkVFTl9DTE9TRV9CVVRUT046IDMwMCxcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9FTlZJUk9OTUVOVDogMzAxLFxuICAgIFJFVFJZX1NDUkVFTl9ISU5UX1NVQkpFQ1Q6IDMwMixcbiAgICBQUk9DRVNTSU5HX1NDUkVFTl9DTE9TRV9CVVRUT046IDQwMCxcbiAgICBTVUNDRVNTX1NDUkVFTl9JTUFHRTogNTAwLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNBdHRyaWJ1dGUgPSB7XG4gICAgQUdFOiBcIkFnZVwiLFxuICAgIEVZRV9SSUdIVDogXCJFeWVSaWdodFwiLFxuICAgIEVZRV9MRUZUOiBcIkV5ZUxlZnRcIixcbiAgICBFTU9USU9OOiBcIkVtb3Rpb25cIixcbiAgICBTTUlMRTogXCJTbWlsZVwiLFxuICAgIEdMQVNTRVM6IFwiR2xhc3Nlc1wiLFxuICAgIEhFQURfQ09WRVJJTkc6IFwiSGVhZENvdmVyaW5nXCIsXG4gICAgRk9SRUhFQURfQ09WRVJJTkc6IFwiRm9yZWhlYWRDb3ZlcmluZ1wiLFxuICAgIE1PVVRIOiBcIk1vdXRoXCIsXG4gICAgTUVESUNBTF9NQVNLOiBcIk1lZGljYWxNYXNrXCIsXG4gICAgT0NDTFVTSU9OOiBcIk9jY2x1c2lvblwiLFxuICAgIFNUUk9OR19NQUtFVVA6IFwiU3Ryb25nTWFrZXVwXCIsXG4gICAgSEVBRFBIT05FUzogXCJIZWFkcGhvbmVzXCIsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgRm9udFN0eWxlLFxuICAgQ3VzdG9taXphdGlvbkNvbG9yLFxuICAgSW1hZ2VRdWFsaXR5R3JvdXBOYW1lLFxuICAgTGljZW5zaW5nUmVzdWx0Q29kZSxcbiAgIERldGVjdEZhY2VzRXJyb3JDb2RlLFxuICAgQ2FtZXJhUG9zaXRpb24sXG4gICBJbml0RXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NTdGF0dXMsXG4gICBMaXZlbmVzc0Vycm9yQ29kZSxcbiAgIFJlY29yZGluZ1Byb2Nlc3MsXG4gICBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUsXG4gICBNYXRjaEZhY2VzRXJyb3JDb2RlLFxuICAgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNOYW1lLFxuICAgU2NyZWVuT3JpZW50YXRpb24sXG4gICBDdXN0b21pemF0aW9uRm9udCxcbiAgIERldGVjdEZhY2VzU2NlbmFyaW8sXG4gICBMaXZlbmVzc1Byb2Nlc3NTdGF0dXMsXG4gICBPdXRwdXRJbWFnZUNyb3BBc3BlY3RSYXRpbyxcbiAgIExpdmVuZXNzVHlwZSxcbiAgIExpdmVuZXNzU2tpcFN0ZXAsXG4gICBJbWFnZVF1YWxpdHlSZXN1bHRTdGF0dXMsXG4gICBJbWFnZVR5cGUsXG4gICBGYWNlQ2FwdHVyZUVycm9yQ29kZSxcbiAgIExpdmVuZXNzQmFja2VuZEVycm9yQ29kZSxcbiAgIFByb2Nlc3NpbmdNb2RlLFxuICAgQ3VzdG9taXphdGlvbkltYWdlLFxuICAgRGV0ZWN0RmFjZXNBdHRyaWJ1dGUsXG59XG5cbi8qKlxuICogQG5hbWUgRmFjZVNES1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRmFjZSBTREsuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlU0RLIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRmFjZVNESzogRmFjZVNESykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRmFjZVNESycsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZS1hcGknLFxuICAgIHBsdWdpblJlZjogJ0ZhY2VTREtQbHVnaW4uRmFjZVNESycsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRmFjZUFwaS1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZVNESyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFNlcnZpY2VVcmwoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0U2VydmljZVVybCh1cmw6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGRpY3Rpb25hcnlcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExvY2FsaXphdGlvbkRpY3Rpb25hcnkoZGljdGlvbmFyeTogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgc2V0cyBoZWFkZXJzIGZvciBodHRwIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gaGVhZGVyc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmVxdWVzdEhlYWRlcnMoaGVhZGVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBVaUNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q3VzdG9taXphdGlvbn0gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDdXN0b21pemF0aW9uKGNvbmZpZzogQ3VzdG9taXphdGlvbik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNJbml0aWFsaXplZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0luaXRDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaW5pdGlhbGl6ZShjb25maWc6IEluaXRDb25maWcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWluaXRpYWxpemUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtGYWNlQ2FwdHVyZUNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0RmFjZUNhcHR1cmUoY29uZmlnOiBGYWNlQ2FwdHVyZUNvbmZpZyB8IG51bGwpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BGYWNlQ2FwdHVyZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0xpdmVuZXNzQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gICAgc3RhcnRMaXZlbmVzcyhjb25maWc6IExpdmVuZXNzQ29uZmlnIHwgbnVsbCk6IE9ic2VydmFibGU8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcExpdmVuZXNzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0Y2hGYWNlc1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge01hdGNoRmFjZXNDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlcyhyZXF1ZXN0OiBNYXRjaEZhY2VzUmVxdWVzdCwgY29uZmlnOiBNYXRjaEZhY2VzQ29uZmlnIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Q29tcGFyZWRGYWNlc1BhaXJbXX0gZmFjZXNQYWlyc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaW1pbGFyaXR5VGhyZXNob2xkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzcGxpdENvbXBhcmVkRmFjZXMoZmFjZXNQYWlyczogQ29tcGFyZWRGYWNlc1BhaXJbXSwgc2ltaWxhcml0eVRocmVzaG9sZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZXRlY3RGYWNlc1JlcXVlc3R9IHJlcXVlc3RcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRldGVjdEZhY2VzKHJlcXVlc3Q6IERldGVjdEZhY2VzUmVxdWVzdCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gZ3JvdXBJZHNcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IG1ldGFkYXRhXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjcmVhdGVQZXJzb24obmFtZTogc3RyaW5nLCBncm91cElkczogc3RyaW5nW10gfCBudWxsLCBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BlcnNvbn0gcGVyc29uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICB1cGRhdGVQZXJzb24ocGVyc29uOiBQZXJzb24pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZVBlcnNvbihwZXJzb25JZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb24ocGVyc29uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEBwYXJhbSB7SW1hZ2VVcGxvYWR9IGltYWdlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQZXJzb25JbWFnZShwZXJzb25JZDogc3RyaW5nLCBpbWFnZTogSW1hZ2VVcGxvYWQpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVsZXRlUGVyc29uSW1hZ2UocGVyc29uSWQ6IHN0cmluZywgaW1hZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlKHBlcnNvbklkOiBzdHJpbmcsIGltYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2VzKHBlcnNvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25JbWFnZXNGb3JQYWdlKHBlcnNvbklkOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IG1ldGFkYXRhXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjcmVhdGVHcm91cChuYW1lOiBzdHJpbmcsIG1ldGFkYXRhOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGVyc29uR3JvdXB9IGdyb3VwXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICB1cGRhdGVHcm91cChncm91cDogUGVyc29uR3JvdXApOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZFxuICAgICAqIEBwYXJhbSB7RWRpdEdyb3VwUGVyc29uc1JlcXVlc3R9IGVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBlZGl0UGVyc29uc0luR3JvdXAoZ3JvdXBJZDogc3RyaW5nLCBlZGl0R3JvdXBQZXJzb25zUmVxdWVzdDogRWRpdEdyb3VwUGVyc29uc1JlcXVlc3QpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVsZXRlR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0R3JvdXBzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3Vwc0ZvclBhZ2UocGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkdyb3VwcyhwZXJzb25JZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uR3JvdXBzRm9yUGFnZShwZXJzb25JZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25zSW5Hcm91cChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbnNJbkdyb3VwRm9yUGFnZShncm91cElkOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTZWFyY2hQZXJzb25SZXF1ZXN0fSBzZWFyY2hQZXJzb25SZXF1ZXN0XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZWFyY2hQZXJzb24oc2VhcmNoUGVyc29uUmVxdWVzdDogU2VhcmNoUGVyc29uUmVxdWVzdCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cblxufSJdfQ==