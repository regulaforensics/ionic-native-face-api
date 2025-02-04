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
    NOT_INITIALIZED: 201,
    COMMAND_IS_NOT_SUPPORTED: 202,
    PARAMS_READ_ERROR: 203,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztJQVF2QixzQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFBO1FBRWhDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUVoRSxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3dCQXBCTDs7Ozs7O0lBNEJXLGFBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQTtRQUV2QixNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENB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NEJBQVUsYUFBQyxPQUEwQixFQUFFLE1BQStCO0lBVXRFLG9DQUFrQixhQUFDLFVBQStCLEVBQUUsbUJBQTJCO0lBUy9FLDZCQUFXLGFBQUMsT0FBMkI7SUFXdkMsOEJBQVksYUFBQyxJQUFZLEVBQUUsUUFBeUIsRUFBRSxRQUFvQztJQVMxRiw4QkFBWSxhQUFDLE1BQWM7SUFTM0IsOEJBQVksYUFBQyxRQUFnQjtJQVM3QiwyQkFBUyxhQUFDLFFBQWdCO0lBVTFCLGdDQUFjLGFBQUMsUUFBZ0IsRUFBRSxLQUFrQjtJQVVuRCxtQ0FBaUIsYUFBQyxRQUFnQixFQUFFLE9BQWU7SUFVbkQsZ0NBQWMsYUFBQyxRQUFnQixFQUFFLE9BQWU7SUFTaEQsaUNBQWUsYUFBQyxRQUFnQjtJQVdoQyx3Q0FBc0IsYUFBQyxRQUFnQixFQUFFLElBQVksRUFBRSxJQUFZO0lBVW5FLDZCQUFXLGFBQUMsSUFBWSxFQUFFLFFBQW9DO0lBUzlELDZCQUFXLGFBQUMsS0FBa0I7SUFVOUIsb0NBQWtCLGFBQUMsT0FBZSxFQUFFLHVCQUFnRDtJQVNwRiw2QkFBVyxhQUFDLE9BQWU7SUFTM0IsMEJBQVEsYUFBQyxPQUFlO0lBUXhCLDJCQUFTO0lBVVQsa0NBQWdCLGFBQUMsSUFBWSxFQUFFLElBQVk7SUFTM0MsaUNBQWUsYUFBQyxRQUFnQjtJQVdoQyx3Q0FBc0IsYUFBQyxRQUFnQixFQUFFLElBQVksRUFBRSxJQUFZO0lBU25FLG1DQUFpQixhQUFDLE9BQWU7SUFXakMsMENBQXdCLGFBQUMsT0FBZSxFQUFFLElBQVksRUFBRSxJQUFZO0lBU3BFLDhCQUFZLGFBQUMsbUJBQXdDOzs7Ozs7a0JBbDFEekQ7RUE2L0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21pemF0aW9uIHtcbiAgICBjb2xvcnM/OiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+XG4gICAgZm9udHM/OiBSZWNvcmQ8bnVtYmVyLCBGb250PlxuICAgIGltYWdlcz86IFJlY29yZDxudW1iZXIsIHN0cmluZz5cbiAgICB1aUN1c3RvbWl6YXRpb25MYXllcj86IFJlY29yZDxzdHJpbmcsIGFueT5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ3VzdG9taXphdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEN1c3RvbWl6YXRpb25cblxuICAgICAgICByZXN1bHQuY29sb3JzID0ganNvbk9iamVjdFtcImNvbG9yc1wiXVxuICAgICAgICByZXN1bHQuZm9udHMgPSBqc29uT2JqZWN0W1wiZm9udHNcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IGpzb25PYmplY3RbXCJpbWFnZXNcIl1cbiAgICAgICAgcmVzdWx0LnVpQ3VzdG9taXphdGlvbkxheWVyID0ganNvbk9iamVjdFtcInVpQ3VzdG9taXphdGlvbkxheWVyXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvbnQge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBzdHlsZT86IG51bWJlclxuICAgIHNpemU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRm9udCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZvbnRcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5zdHlsZSA9IGpzb25PYmplY3RbXCJzdHlsZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IGpzb25PYmplY3RbXCJzaXplXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VSZXN1bHQge1xuICAgIHF1YWxpdHk/OiBJbWFnZVF1YWxpdHlSZXN1bHRbXVxuICAgIGF0dHJpYnV0ZXM/OiBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFtdXG4gICAgY3JvcD86IHN0cmluZ1xuICAgIGZhY2VSZWN0PzogUmVjdFxuICAgIG9yaWdpbmFsUmVjdD86IFJlY3RcbiAgICBsYW5kbWFya3M/OiBQb2ludFtdXG4gICAgaXNRdWFsaXR5Q29tcGxpYW50PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5xdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jcm9wID0ganNvbk9iamVjdFtcImNyb3BcIl1cbiAgICAgICAgcmVzdWx0LmZhY2VSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZVJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJvcmlnaW5hbFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlzUXVhbGl0eUNvbXBsaWFudCA9IGpzb25PYmplY3RbXCJpc1F1YWxpdHlDb21wbGlhbnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQge1xuICAgIGF0dHJpYnV0ZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGNvbmZpZGVuY2U/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGUgPSBqc29uT2JqZWN0W1wiYXR0cmlidXRlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQucmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmFuZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5jb25maWRlbmNlID0ganNvbk9iamVjdFtcImNvbmZpZGVuY2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNDb25maWcge1xuICAgIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXVxuICAgIGN1c3RvbVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY1tdXG4gICAgb3V0cHV0SW1hZ2VQYXJhbXM/OiBPdXRwdXRJbWFnZVBhcmFtc1xuICAgIG9ubHlDZW50cmFsRmFjZT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0NvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmN1c3RvbVF1YWxpdHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImN1c3RvbVF1YWxpdHlcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljLmZyb21Kc29uKGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmN1c3RvbVF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5vdXRwdXRJbWFnZVBhcmFtcyA9IE91dHB1dEltYWdlUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJvdXRwdXRJbWFnZVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0Lm9ubHlDZW50cmFsRmFjZSA9IGpzb25PYmplY3RbXCJvbmx5Q2VudHJhbEZhY2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5kZXJseWluZ0V4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogVW5kZXJseWluZ0V4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNFeGNlcHRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG4gICAgdW5kZXJseWluZ0Vycm9yPzogVW5kZXJseWluZ0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0V4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXJyb3IgPSBVbmRlcmx5aW5nRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzUmVxdWVzdCB7XG4gICAgdGFnPzogc3RyaW5nXG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBpbWFnZT86IHN0cmluZ1xuICAgIGNvbmZpZ3VyYXRpb24/OiBEZXRlY3RGYWNlc0NvbmZpZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LmltYWdlID0ganNvbk9iamVjdFtcImltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jb25maWd1cmF0aW9uID0gRGV0ZWN0RmFjZXNDb25maWcuZnJvbUpzb24oanNvbk9iamVjdFtcImNvbmZpZ3VyYXRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzUmVzcG9uc2Uge1xuICAgIGRldGVjdGlvbj86IERldGVjdEZhY2VSZXN1bHRcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIGVycm9yPzogRGV0ZWN0RmFjZXNFeGNlcHRpb25cbiAgICBhbGxEZXRlY3Rpb25zPzogRGV0ZWN0RmFjZVJlc3VsdFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbiA9IERldGVjdEZhY2VSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IERldGVjdEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcbiAgICAgICAgcmVzdWx0LmFsbERldGVjdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFsbERldGVjdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldGVjdEZhY2VSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImFsbERldGVjdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWxsRGV0ZWN0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVDb25maWcge1xuICAgIGNvcHlyaWdodD86IGJvb2xlYW5cbiAgICBjYW1lcmFTd2l0Y2hFbmFibGVkPzogYm9vbGVhblxuICAgIGNsb3NlQnV0dG9uRW5hYmxlZD86IGJvb2xlYW5cbiAgICB0b3JjaEJ1dHRvbkVuYWJsZWQ/OiBib29sZWFuXG4gICAgdmlicmF0ZU9uU3RlcHM/OiBib29sZWFuXG4gICAgZGV0ZWN0T2NjbHVzaW9uPzogYm9vbGVhblxuICAgIGNhbWVyYVBvc2l0aW9uQW5kcm9pZD86IG51bWJlclxuICAgIGNhbWVyYVBvc2l0aW9uSU9TPzogbnVtYmVyXG4gICAgc2NyZWVuT3JpZW50YXRpb24/OiBudW1iZXJbXVxuICAgIHRpbWVvdXQ/OiBudW1iZXJcbiAgICBob2xkU3RpbGxEdXJhdGlvbj86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LmNvcHlyaWdodCA9IGpzb25PYmplY3RbXCJjb3B5cmlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVN3aXRjaEVuYWJsZWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhU3dpdGNoRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuY2xvc2VCdXR0b25FbmFibGVkID0ganNvbk9iamVjdFtcImNsb3NlQnV0dG9uRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25FbmFibGVkID0ganNvbk9iamVjdFtcInRvcmNoQnV0dG9uRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQudmlicmF0ZU9uU3RlcHMgPSBqc29uT2JqZWN0W1widmlicmF0ZU9uU3RlcHNcIl1cbiAgICAgICAgcmVzdWx0LmRldGVjdE9jY2x1c2lvbiA9IGpzb25PYmplY3RbXCJkZXRlY3RPY2NsdXNpb25cIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVBvc2l0aW9uQW5kcm9pZCA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbkFuZHJvaWRcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVBvc2l0aW9uSU9TID0ganNvbk9iamVjdFtcImNhbWVyYVBvc2l0aW9uSU9TXCJdXG4gICAgICAgIHJlc3VsdC5zY3JlZW5PcmllbnRhdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzY3JlZW5PcmllbnRhdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zY3JlZW5PcmllbnRhdGlvbi5wdXNoKGpzb25PYmplY3RbXCJzY3JlZW5PcmllbnRhdGlvblwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudGltZW91dCA9IGpzb25PYmplY3RbXCJ0aW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5ob2xkU3RpbGxEdXJhdGlvbiA9IGpzb25PYmplY3RbXCJob2xkU3RpbGxEdXJhdGlvblwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUV4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZUV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUltYWdlIHtcbiAgICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgICBpbWFnZT86IHN0cmluZ1xuICAgIHRhZz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVJbWFnZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZVJlc3BvbnNlIHtcbiAgICBlcnJvcj86IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG4gICAgaW1hZ2U/OiBGYWNlQ2FwdHVyZUltYWdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZVJlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmVycm9yID0gRmFjZUNhcHR1cmVFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBGYWNlQ2FwdHVyZUltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0SW1hZ2VDcm9wIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc2l6ZT86IFNpemVcbiAgICBwYWRDb2xvcj86IG51bWJlclxuICAgIHJldHVybk9yaWdpbmFsUmVjdD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT3V0cHV0SW1hZ2VDcm9wIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT3V0cHV0SW1hZ2VDcm9wXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IFNpemUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpemVcIl0pXG4gICAgICAgIHJlc3VsdC5wYWRDb2xvciA9IGpzb25PYmplY3RbXCJwYWRDb2xvclwiXVxuICAgICAgICByZXN1bHQucmV0dXJuT3JpZ2luYWxSZWN0ID0ganNvbk9iamVjdFtcInJldHVybk9yaWdpbmFsUmVjdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPdXRwdXRJbWFnZVBhcmFtcyB7XG4gICAgYmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgY3JvcD86IE91dHB1dEltYWdlQ3JvcFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBPdXRwdXRJbWFnZVBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE91dHB1dEltYWdlUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJiYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmNyb3AgPSBPdXRwdXRJbWFnZUNyb3AuZnJvbUpzb24oanNvbk9iamVjdFtcImNyb3BcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQb2ludCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50XG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpemUge1xuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpemUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTaXplXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljIHtcbiAgICBjaGFyYWN0ZXJpc3RpY05hbWU/OiBzdHJpbmdcbiAgICBjb2xvcj86IG51bWJlclxuICAgIHJlY29tbWVuZGVkUmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGN1c3RvbVJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY1xuXG4gICAgICAgIHJlc3VsdC5jaGFyYWN0ZXJpc3RpY05hbWUgPSBqc29uT2JqZWN0W1wiY2hhcmFjdGVyaXN0aWNOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5jb2xvciA9IGpzb25PYmplY3RbXCJjb2xvclwiXVxuICAgICAgICByZXN1bHQucmVjb21tZW5kZWRSYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWNvbW1lbmRlZFJhbmdlXCJdKVxuICAgICAgICByZXN1bHQuY3VzdG9tUmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUmFuZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eVJhbmdlIHtcbiAgICBtaW4/OiBudW1iZXJcbiAgICBtYXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5UmFuZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlSYW5nZVxuXG4gICAgICAgIHJlc3VsdC5taW4gPSBqc29uT2JqZWN0W1wibWluXCJdXG4gICAgICAgIHJlc3VsdC5tYXggPSBqc29uT2JqZWN0W1wibWF4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eVJlc3VsdCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGdyb3VwPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwID0ganNvbk9iamVjdFtcImdyb3VwXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyYW5nZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VTREtWZXJzaW9uIHtcbiAgICBhcGk/OiBzdHJpbmdcbiAgICBjb3JlPzogc3RyaW5nXG4gICAgY29yZU1vZGU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZVNES1ZlcnNpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlU0RLVmVyc2lvblxuXG4gICAgICAgIHJlc3VsdC5hcGkgPSBqc29uT2JqZWN0W1wiYXBpXCJdXG4gICAgICAgIHJlc3VsdC5jb3JlID0ganNvbk9iamVjdFtcImNvcmVcIl1cbiAgICAgICAgcmVzdWx0LmNvcmVNb2RlID0ganNvbk9iamVjdFtcImNvcmVNb2RlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluaXRDb25maWcge1xuICAgIGxpY2Vuc2U/OiBzdHJpbmdcbiAgICBsaWNlbnNlVXBkYXRlPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbml0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW5pdENvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5saWNlbnNlID0ganNvbk9iamVjdFtcImxpY2Vuc2VcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGUgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0RXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW5pdEV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEluaXRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnVuZGVybHlpbmdFcnJvciA9IFVuZGVybHlpbmdFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInVuZGVybHlpbmdFcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NDb25maWcge1xuICAgIGNvcHlyaWdodD86IGJvb2xlYW5cbiAgICBjYW1lcmFTd2l0Y2hFbmFibGVkPzogYm9vbGVhblxuICAgIGNsb3NlQnV0dG9uRW5hYmxlZD86IGJvb2xlYW5cbiAgICB0b3JjaEJ1dHRvbkVuYWJsZWQ/OiBib29sZWFuXG4gICAgdmlicmF0ZU9uU3RlcHM/OiBib29sZWFuXG4gICAgY2FtZXJhUG9zaXRpb25BbmRyb2lkPzogbnVtYmVyXG4gICAgY2FtZXJhUG9zaXRpb25JT1M/OiBudW1iZXJcbiAgICBzY3JlZW5PcmllbnRhdGlvbj86IG51bWJlcltdXG4gICAgbG9jYXRpb25UcmFja2luZ0VuYWJsZWQ/OiBib29sZWFuXG4gICAgYXR0ZW1wdHNDb3VudD86IG51bWJlclxuICAgIHJlY29yZGluZ1Byb2Nlc3M/OiBudW1iZXJcbiAgICBsaXZlbmVzc1R5cGU/OiBudW1iZXJcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBza2lwU3RlcD86IG51bWJlcltdXG4gICAgbWV0YWRhdGE/OiBhbnlcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0NvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5jb3B5cmlnaHQgPSBqc29uT2JqZWN0W1wiY29weXJpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFTd2l0Y2hFbmFibGVkID0ganNvbk9iamVjdFtcImNhbWVyYVN3aXRjaEVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LmNsb3NlQnV0dG9uRW5hYmxlZCA9IGpzb25PYmplY3RbXCJjbG9zZUJ1dHRvbkVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvcmNoQnV0dG9uRW5hYmxlZCA9IGpzb25PYmplY3RbXCJ0b3JjaEJ1dHRvbkVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnZpYnJhdGVPblN0ZXBzID0ganNvbk9iamVjdFtcInZpYnJhdGVPblN0ZXBzXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbkFuZHJvaWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhUG9zaXRpb25BbmRyb2lkXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbklPUyA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbklPU1wiXVxuICAgICAgICByZXN1bHQuc2NyZWVuT3JpZW50YXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNjcmVlbk9yaWVudGF0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2NyZWVuT3JpZW50YXRpb24ucHVzaChqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxvY2F0aW9uVHJhY2tpbmdFbmFibGVkID0ganNvbk9iamVjdFtcImxvY2F0aW9uVHJhY2tpbmdFbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC5hdHRlbXB0c0NvdW50ID0ganNvbk9iamVjdFtcImF0dGVtcHRzQ291bnRcIl1cbiAgICAgICAgcmVzdWx0LnJlY29yZGluZ1Byb2Nlc3MgPSBqc29uT2JqZWN0W1wicmVjb3JkaW5nUHJvY2Vzc1wiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3NUeXBlID0ganNvbk9iamVjdFtcImxpdmVuZXNzVHlwZVwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuc2tpcFN0ZXAgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNraXBTdGVwXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2tpcFN0ZXBcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2tpcFN0ZXAucHVzaChqc29uT2JqZWN0W1wic2tpcFN0ZXBcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzRXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0V4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0Vycm9yID0gVW5kZXJseWluZ0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0Vycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc05vdGlmaWNhdGlvbiB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcmVzcG9uc2U/OiBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVzcG9uc2UgPSBMaXZlbmVzc1Jlc3BvbnNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXNwb25zZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NSZXNwb25zZSB7XG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBsaXZlbmVzcz86IG51bWJlclxuICAgIHRhZz86IHN0cmluZ1xuICAgIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmdcbiAgICBlc3RpbWF0ZWRBZ2U/OiBudW1iZXJcbiAgICBlcnJvcj86IExpdmVuZXNzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlID0ganNvbk9iamVjdFtcImltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzcyA9IGpzb25PYmplY3RbXCJsaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG4gICAgICAgIHJlc3VsdC5lc3RpbWF0ZWRBZ2UgPSBqc29uT2JqZWN0W1wiZXN0aW1hdGVkQWdlXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IExpdmVuZXNzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGFyZWRGYWNlIHtcbiAgICBpbWFnZUluZGV4PzogbnVtYmVyXG4gICAgaW1hZ2U/OiBNYXRjaEZhY2VzSW1hZ2VcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICBmYWNlPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGFyZWRGYWNlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlSW5kZXggPSBqc29uT2JqZWN0W1wiaW1hZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZmFjZSA9IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wYXJlZEZhY2VzUGFpciB7XG4gICAgZmlyc3Q/OiBDb21wYXJlZEZhY2VcbiAgICBzZWNvbmQ/OiBDb21wYXJlZEZhY2VcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgc2NvcmU/OiBudW1iZXJcbiAgICBlcnJvcj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlc1BhaXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21wYXJlZEZhY2VzUGFpclxuXG4gICAgICAgIHJlc3VsdC5maXJzdCA9IENvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlyc3RcIl0pXG4gICAgICAgIHJlc3VsdC5zZWNvbmQgPSBDb21wYXJlZEZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY29uZFwiXSlcbiAgICAgICAgcmVzdWx0LnNpbWlsYXJpdHkgPSBqc29uT2JqZWN0W1wic2ltaWxhcml0eVwiXVxuICAgICAgICByZXN1bHQuc2NvcmUgPSBqc29uT2JqZWN0W1wic2NvcmVcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBhcmVkRmFjZXNTcGxpdCB7XG4gICAgbWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgIHVubWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb21wYXJlZEZhY2VzU3BsaXQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21wYXJlZEZhY2VzU3BsaXRcblxuICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb25maWcge1xuICAgIHByb2Nlc3NpbmdNb2RlPzogbnVtYmVyXG4gICAgbG9jYXRpb25UcmFja2luZ0VuYWJsZWQ/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NpbmdNb2RlID0ganNvbk9iamVjdFtcInByb2Nlc3NpbmdNb2RlXCJdXG4gICAgICAgIHJlc3VsdC5sb2NhdGlvblRyYWNraW5nRW5hYmxlZCA9IGpzb25PYmplY3RbXCJsb2NhdGlvblRyYWNraW5nRW5hYmxlZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRGV0ZWN0aW9uIHtcbiAgICBpbWFnZUluZGV4PzogbnVtYmVyXG4gICAgaW1hZ2U/OiBNYXRjaEZhY2VzSW1hZ2VcbiAgICBmYWNlcz86IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlW11cbiAgICBlcnJvcj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0RldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNEZXRlY3Rpb25cblxuICAgICAgICByZXN1bHQuaW1hZ2VJbmRleCA9IGpzb25PYmplY3RbXCJpbWFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5lcnJvciA9IE1hdGNoRmFjZXNFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZSB7XG4gICAgZmFjZUluZGV4PzogbnVtYmVyXG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGZhY2VSZWN0PzogUmVjdFxuICAgIHJvdGF0aW9uQW5nbGU/OiBudW1iZXJcbiAgICBvcmlnaW5hbFJlY3Q/OiBSZWN0XG4gICAgY3JvcD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlXG5cbiAgICAgICAgcmVzdWx0LmZhY2VJbmRleCA9IGpzb25PYmplY3RbXCJmYWNlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxhbmRtYXJrcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFBvaW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGFuZG1hcmtzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZmFjZVJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LnJvdGF0aW9uQW5nbGUgPSBqc29uT2JqZWN0W1wicm90YXRpb25BbmdsZVwiXVxuICAgICAgICByZXN1bHQub3JpZ2luYWxSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxSZWN0XCJdKVxuICAgICAgICByZXN1bHQuY3JvcCA9IGpzb25PYmplY3RbXCJjcm9wXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNFeGNlcHRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG4gICAgdW5kZXJseWluZ0Vycm9yPzogVW5kZXJseWluZ0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0V4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0Vycm9yID0gVW5kZXJseWluZ0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0Vycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzSW1hZ2Uge1xuICAgIGltYWdlPzogc3RyaW5nXG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgZGV0ZWN0QWxsPzogYm9vbGVhblxuICAgIGlkZW50aWZpZXI/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0ltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0ltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlID0ganNvbk9iamVjdFtcImltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5kZXRlY3RBbGwgPSBqc29uT2JqZWN0W1wiZGV0ZWN0QWxsXCJdXG4gICAgICAgIHJlc3VsdC5pZGVudGlmaWVyID0ganNvbk9iamVjdFtcImlkZW50aWZpZXJcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1JlcXVlc3Qge1xuICAgIGltYWdlcz86IE1hdGNoRmFjZXNJbWFnZVtdXG4gICAgb3V0cHV0SW1hZ2VQYXJhbXM/OiBPdXRwdXRJbWFnZVBhcmFtc1xuICAgIHRhZz86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0ltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVzcG9uc2Uge1xuICAgIHJlc3VsdHM/OiBDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgZGV0ZWN0aW9ucz86IE1hdGNoRmFjZXNEZXRlY3Rpb25bXVxuICAgIHRhZz86IHN0cmluZ1xuICAgIGVycm9yPzogTWF0Y2hGYWNlc0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQucmVzdWx0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVzdWx0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInJlc3VsdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0cy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRldGVjdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNEZXRlY3Rpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGV0ZWN0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0IHtcbiAgICBwZXJzb25JZHNUb0FkZD86IHN0cmluZ1tdXG4gICAgcGVyc29uSWRzVG9SZW1vdmU/OiBzdHJpbmdbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvQWRkID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBlcnNvbklkc1RvQWRkXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvQWRkLnB1c2goanNvbk9iamVjdFtcInBlcnNvbklkc1RvQWRkXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb1JlbW92ZSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJwZXJzb25JZHNUb1JlbW92ZVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb1JlbW92ZS5wdXNoKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb1JlbW92ZVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCB7XG4gICAgaW1hZ2VEYXRhPzogc3RyaW5nXG4gICAgaW1hZ2VVcmw/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VVcGxvYWQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVVwbG9hZFxuXG4gICAgICAgIHJlc3VsdC5pbWFnZURhdGEgPSBqc29uT2JqZWN0W1wiaW1hZ2VEYXRhXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVVybCA9IGpzb25PYmplY3RbXCJpbWFnZVVybFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlYWJsZUl0ZW1MaXN0IHtcbiAgICBpdGVtcz86IGFueVtdXG4gICAgcGFnZT86IG51bWJlclxuICAgIHRvdGFsUGFnZXM/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGFnZWFibGVJdGVtTGlzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhZ2VhYmxlSXRlbUxpc3RcblxuICAgICAgICByZXN1bHQuaXRlbXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIml0ZW1zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaXRlbXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaXRlbXMucHVzaChqc29uT2JqZWN0W1wiaXRlbXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnBhZ2UgPSBqc29uT2JqZWN0W1wicGFnZVwiXVxuICAgICAgICByZXN1bHQudG90YWxQYWdlcyA9IGpzb25PYmplY3RbXCJ0b3RhbFBhZ2VzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHVwZGF0ZWRBdD86IHN0cmluZ1xuICAgIGdyb3Vwcz86IHN0cmluZ1tdXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25cblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC51cGRhdGVkQXQgPSBqc29uT2JqZWN0W1widXBkYXRlZEF0XCJdXG4gICAgICAgIHJlc3VsdC5ncm91cHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3Vwc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ncm91cHMucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uR3JvdXAge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbkdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGVyc29uR3JvdXBcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uSW1hZ2Uge1xuICAgIHBhdGg/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBjb250ZW50VHlwZT86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25JbWFnZVxuXG4gICAgICAgIHJlc3VsdC5wYXRoID0ganNvbk9iamVjdFtcInBhdGhcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LmNvbnRlbnRUeXBlID0ganNvbk9iamVjdFtcImNvbnRlbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uIHtcbiAgICBpbWFnZXM/OiBTZWFyY2hQZXJzb25JbWFnZVtdXG4gICAgZGV0ZWN0aW9uPzogU2VhcmNoUGVyc29uRGV0ZWN0aW9uXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHVwZGF0ZWRBdD86IHN0cmluZ1xuICAgIGdyb3Vwcz86IHN0cmluZ1tdXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25cblxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2VhcmNoUGVyc29uSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb24gPSBTZWFyY2hQZXJzb25EZXRlY3Rpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvblwiXSlcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQudXBkYXRlZEF0ID0ganNvbk9iamVjdFtcInVwZGF0ZWRBdFwiXVxuICAgICAgICByZXN1bHQuZ3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBzLnB1c2goanNvbk9iamVjdFtcImdyb3Vwc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbkRldGVjdGlvbiB7XG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIHJlY3Q/OiBSZWN0XG4gICAgY3JvcD86IHN0cmluZ1xuICAgIHJvdGF0aW9uQW5nbGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uRGV0ZWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uRGV0ZWN0aW9uXG5cbiAgICAgICAgcmVzdWx0LmxhbmRtYXJrcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFBvaW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGFuZG1hcmtzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5jcm9wID0ganNvbk9iamVjdFtcImNyb3BcIl1cbiAgICAgICAgcmVzdWx0LnJvdGF0aW9uQW5nbGUgPSBqc29uT2JqZWN0W1wicm90YXRpb25BbmdsZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQZXJzb25JbWFnZSB7XG4gICAgc2ltaWxhcml0eT86IG51bWJlclxuICAgIGRpc3RhbmNlPzogbnVtYmVyXG4gICAgcGF0aD86IHN0cmluZ1xuICAgIHVybD86IHN0cmluZ1xuICAgIGNvbnRlbnRUeXBlPzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlYXJjaFBlcnNvbkltYWdlXG5cbiAgICAgICAgcmVzdWx0LnNpbWlsYXJpdHkgPSBqc29uT2JqZWN0W1wic2ltaWxhcml0eVwiXVxuICAgICAgICByZXN1bHQuZGlzdGFuY2UgPSBqc29uT2JqZWN0W1wiZGlzdGFuY2VcIl1cbiAgICAgICAgcmVzdWx0LnBhdGggPSBqc29uT2JqZWN0W1wicGF0aFwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuY29udGVudFR5cGUgPSBqc29uT2JqZWN0W1wiY29udGVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQZXJzb25SZXF1ZXN0IHtcbiAgICBpbWFnZVVwbG9hZD86IEltYWdlVXBsb2FkXG4gICAgZ3JvdXBJZHNGb3JTZWFyY2g/OiBzdHJpbmdbXVxuICAgIHRocmVzaG9sZD86IG51bWJlclxuICAgIGxpbWl0PzogbnVtYmVyXG4gICAgZGV0ZWN0QWxsPzogYm9vbGVhblxuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlYXJjaFBlcnNvblJlcXVlc3RcblxuICAgICAgICByZXN1bHQuaW1hZ2VVcGxvYWQgPSBJbWFnZVVwbG9hZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VVcGxvYWRcIl0pXG4gICAgICAgIHJlc3VsdC5ncm91cElkc0ZvclNlYXJjaCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cElkc0ZvclNlYXJjaFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ncm91cElkc0ZvclNlYXJjaC5wdXNoKGpzb25PYmplY3RbXCJncm91cElkc0ZvclNlYXJjaFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudGhyZXNob2xkID0ganNvbk9iamVjdFtcInRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQubGltaXQgPSBqc29uT2JqZWN0W1wibGltaXRcIl1cbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cbiAgICAgICAgcmVzdWx0Lm91dHB1dEltYWdlUGFyYW1zID0gT3V0cHV0SW1hZ2VQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcIm91dHB1dEltYWdlUGFyYW1zXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0UmVzcG9uc2Uge1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgZXJyb3I/OiBJbml0RXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEluaXRSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEluaXRSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5zdWNjZXNzID0ganNvbk9iamVjdFtcInN1Y2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gSW5pdEV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvRW5jb2RlckNvbXBsZXRpb24ge1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgdHJhbnNhY3Rpb25JZD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWaWRlb0VuY29kZXJDb21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmlkZW9FbmNvZGVyQ29tcGxldGlvblxuXG4gICAgICAgIHJlc3VsdC5zdWNjZXNzID0ganNvbk9iamVjdFtcInN1Y2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25EQlJlc3BvbnNlIHtcbiAgICBkYXRhPzogYW55XG4gICAgZXJyb3I/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uREJSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvbkRCUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuZGF0YSA9IGpzb25PYmplY3RbXCJkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IGpzb25PYmplY3RbXCJlcnJvclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGb250U3R5bGUgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJPTEQ6IDEsXG4gICAgSVRBTElDOiAyLFxuICAgIEJPTERfSVRBTElDOiAzLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkNvbG9yID0ge1xuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTl9CQUNLR1JPVU5EOiAxMDAsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX1RJVExFOiAxMDEsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fQkFDS0dST1VORDogMTAyLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFQ6IDEwMyxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9TVUJUSVRMRV9MQUJFTF9URVhUOiAxMDQsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fTUVTU0FHRV9MQUJFTFNfVEVYVDogMTA1LFxuICAgIENBTUVSQV9TQ1JFRU5fU1RST0tFX05PUk1BTDogMjAwLFxuICAgIENBTUVSQV9TQ1JFRU5fU1RST0tFX0FDVElWRTogMjAxLFxuICAgIENBTUVSQV9TQ1JFRU5fU0VDVE9SX1RBUkdFVDogMjAyLFxuICAgIENBTUVSQV9TQ1JFRU5fU0VDVE9SX0FDVElWRTogMjAzLFxuICAgIENBTUVSQV9TQ1JFRU5fRlJPTlRfSElOVF9MQUJFTF9CQUNLR1JPVU5EOiAyMDQsXG4gICAgQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX1RFWFQ6IDIwNSxcbiAgICBDQU1FUkFfU0NSRUVOX0JBQ0tfSElOVF9MQUJFTF9CQUNLR1JPVU5EOiAyMDYsXG4gICAgQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfVEVYVDogMjA3LFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfVE9PTEJBUl9USU5UOiAyMDgsXG4gICAgQ0FNRVJBX1NDUkVFTl9EQVJLX1RPT0xCQVJfVElOVDogMjA5LFxuICAgIFJFVFJZX1NDUkVFTl9CQUNLR1JPVU5EOiAzMDAsXG4gICAgUkVUUllfU0NSRUVOX1JFVFJZX0JVVFRPTl9CQUNLR1JPVU5EOiAzMDEsXG4gICAgUkVUUllfU0NSRUVOX1JFVFJZX0JVVFRPTl9USVRMRTogMzAyLFxuICAgIFJFVFJZX1NDUkVFTl9USVRMRV9MQUJFTF9URVhUOiAzMDMsXG4gICAgUkVUUllfU0NSRUVOX1NVQlRJVExFX0xBQkVMX1RFWFQ6IDMwNCxcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFNfVEVYVDogMzA1LFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX0JBQ0tHUk9VTkQ6IDQwMCxcbiAgICBQUk9DRVNTSU5HX1NDUkVFTl9QUk9HUkVTUzogNDAxLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX1RJVExFOiA0MDIsXG4gICAgU1VDQ0VTU19TQ1JFRU5fQkFDS0dST1VORDogNTAwLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5R3JvdXBOYW1lID0ge1xuICAgIElNQUdFX0NIQVJBQ1RFUklTVElDUzogMSxcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OOiAyLFxuICAgIEZBQ0VfUVVBTElUWTogMyxcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDUzogNCxcbiAgICBTSEFET1dTX0FORF9MSUdIVE5JTkc6IDUsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTjogNixcbiAgICBIRUFEX09DQ0xVU0lPTjogNyxcbiAgICBCQUNLR1JPVU5EOiA4LFxuICAgIFVOS05PV046IDksXG59XG5cbmV4cG9ydCBjb25zdCBMaWNlbnNpbmdSZXN1bHRDb2RlID0ge1xuICAgIE9LOiAwLFxuICAgIExJQ0VOU0VfQ09SUlVQVEVEOiAxLFxuICAgIElOVkFMSURfREFURTogMixcbiAgICBJTlZBTElEX1ZFUlNJT046IDMsXG4gICAgSU5WQUxJRF9ERVZJQ0VfSUQ6IDQsXG4gICAgSU5WQUxJRF9TWVNURU1fT1JfQVBQX0lEOiA1LFxuICAgIE5PX0NBUEFCSUxJVElFUzogNixcbiAgICBOT19BVVRIRU5USUNJVFk6IDcsXG4gICAgTElDRU5TRV9BQlNFTlQ6IDgsXG4gICAgTk9fSU5URVJORVQ6IDksXG4gICAgTk9fREFUQUJBU0U6IDEwLFxuICAgIERBVEFCQVNFX0lOQ09SUkVDVDogMTEsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogMCxcbiAgICBGUl9GQUNFX05PVF9ERVRFQ1RFRDogMSxcbiAgICBGQUNFUl9OT19MSUNFTlNFOiAyLFxuICAgIEZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRDogMyxcbiAgICBGQUNFUl9DT01NQU5EX0lTX05PVF9TVVBQT1JURUQ6IDQsXG4gICAgRkFDRVJfQ09NTUFORF9QQVJBTVNfUkVBRF9FUlJPUjogNSxcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogNixcbiAgICBSRVFVRVNUX0ZBSUxFRDogNyxcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBDYW1lcmFQb3NpdGlvbiA9IHtcbiAgICBGUk9OVDogMCxcbiAgICBCQUNLOiAxLFxufVxuXG5leHBvcnQgY29uc3QgSW5pdEVycm9yQ29kZSA9IHtcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiAwLFxuICAgIE1JU1NJTkdfQ09SRTogMSxcbiAgICBJTlRFUk5BTF9DT1JFX0VSUk9SOiAyLFxuICAgIEJBRF9MSUNFTlNFOiAzLFxuICAgIFVOQVZBSUxBQkxFOiA0LFxuICAgIENPTlRFWFRfSVNfTlVMTDogMTAwLFxuICAgIFJFU09VUkNFX0RBVF9BQlNFTlQ6IDEwMSxcbiAgICBMSUNFTlNFX0lTX05VTEw6IDEwMixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzU3RhdHVzID0ge1xuICAgIFBBU1NFRDogMCxcbiAgICBVTktOT1dOOiAxLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NFcnJvckNvZGUgPSB7XG4gICAgTk9UX0lOSVRJQUxJWkVEOiAwLFxuICAgIE5PX0xJQ0VOU0U6IDEsXG4gICAgQVBJX0NBTExfRkFJTEVEOiAyLFxuICAgIFNFU1NJT05fU1RBUlRfRkFJTEVEOiAzLFxuICAgIENBTkNFTExFRDogNCxcbiAgICBQUk9DRVNTSU5HX1RJTUVPVVQ6IDUsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IDYsXG4gICAgUFJPQ0VTU0lOR19GUkFNRV9GQUlMRUQ6IDcsXG4gICAgQVBQTElDQVRJT05fSU5BQ1RJVkU6IDgsXG4gICAgQ09OVEVYVF9JU19OVUxMOiA5LFxuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDEwLFxuICAgIFpPT01fTk9UX1NVUFBPUlRFRDogMTEsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IDEyLFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiAxMyxcbn1cblxuZXhwb3J0IGNvbnN0IFJlY29yZGluZ1Byb2Nlc3MgPSB7XG4gICAgQVNZTkNIUk9OT1VTX1VQTE9BRDogMCxcbiAgICBTWU5DSFJPTk9VU19VUExPQUQ6IDEsXG4gICAgTk9UX1VQTE9BRDogMixcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQmFja2VuZEVycm9yQ29kZSA9IHtcbiAgICBGUl9GQUNFX05PVF9ERVRFQ1RFRDogMixcbiAgICBGQUNFUl9OT19MSUNFTlNFOiAyMDAsXG4gICAgRkFDRVJfSVNfTk9UX0lOSVRJQUxJWkVEOiAyMDEsXG4gICAgRkFDRVJfQ09NTUFORF9JU19OT1RfU1VQUE9SVEVEOiAyMDIsXG4gICAgRkFDRVJfQ09NTUFORF9QQVJBTVNfUkVBRF9FUlJPUjogMjAzLFxuICAgIFVOREVGSU5FRDogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaEZhY2VzRXJyb3JDb2RlID0ge1xuICAgIElNQUdFX0VNUFRZOiAwLFxuICAgIEZBQ0VfTk9UX0RFVEVDVEVEOiAxLFxuICAgIExBTkRNQVJLU19OT1RfREVURUNURUQ6IDIsXG4gICAgRkFDRV9BTElHTkVSX0ZBSUxFRDogMyxcbiAgICBERVNDUklQVE9SX0VYVFJBQ1RPUl9FUlJPUjogNCxcbiAgICBJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERUQ6IDUsXG4gICAgQVBJX0NBTExfRkFJTEVEOiA2LFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiA3LFxuICAgIE5PX0xJQ0VOU0U6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY05hbWUgPSB7XG4gICAgSU1BR0VfV0lEVEg6IFwiSW1hZ2VXaWR0aFwiLFxuICAgIElNQUdFX0hFSUdIVDogXCJJbWFnZUhlaWdodFwiLFxuICAgIElNQUdFX1dJRFRIX1RPX0hFSUdIVDogXCJJbWFnZVdpZHRoVG9IZWlnaHRcIixcbiAgICBJTUFHRV9DSEFOTkVMU19OVU1CRVI6IFwiSW1hZ2VDaGFubmVsc051bWJlclwiLFxuICAgIEFSVF9GQUNFOiBcIkFydEZhY2VcIixcbiAgICBQQURESU5HX1JBVElPOiBcIlBhZGRpbmdSYXRpb1wiLFxuICAgIEZBQ0VfTUlEX1BPSU5UX0hPUklaT05UQUxfUE9TSVRJT046IFwiRmFjZU1pZFBvaW50SG9yaXpvbnRhbFBvc2l0aW9uXCIsXG4gICAgRkFDRV9NSURfUE9JTlRfVkVSVElDQUxfUE9TSVRJT046IFwiRmFjZU1pZFBvaW50VmVydGljYWxQb3NpdGlvblwiLFxuICAgIEhFQURfV0lEVEhfUkFUSU86IFwiSGVhZFdpZHRoUmF0aW9cIixcbiAgICBIRUFEX0hFSUdIVF9SQVRJTzogXCJIZWFkSGVpZ2h0UmF0aW9cIixcbiAgICBFWUVTX0RJU1RBTkNFOiBcIkV5ZXNEaXN0YW5jZVwiLFxuICAgIFlBVzogXCJZYXdcIixcbiAgICBQSVRDSDogXCJQaXRjaFwiLFxuICAgIFJPTEw6IFwiUm9sbFwiLFxuICAgIEJMVVJfTEVWRUw6IFwiQmx1ckxldmVsXCIsXG4gICAgTk9JU0VfTEVWRUw6IFwiTm9pc2VMZXZlbFwiLFxuICAgIFVOTkFUVVJBTF9TS0lOX1RPTkU6IFwiVW5uYXR1cmFsU2tpblRvbmVcIixcbiAgICBGQUNFX0RZTkFNSUNfUkFOR0U6IFwiRmFjZUR5bmFtaWNSYW5nZVwiLFxuICAgIEVZRV9SSUdIVF9DTE9TRUQ6IFwiRXllUmlnaHRDbG9zZWRcIixcbiAgICBFWUVfTEVGVF9DTE9TRUQ6IFwiRXllTGVmdENsb3NlZFwiLFxuICAgIEVZRV9SSUdIVF9PQ0NMVURFRDogXCJFeWVSaWdodE9jY2x1ZGVkXCIsXG4gICAgRVlFX0xFRlRfT0NDTFVERUQ6IFwiRXllTGVmdE9jY2x1ZGVkXCIsXG4gICAgRVlFU19SRUQ6IFwiRXllc1JlZFwiLFxuICAgIEVZRV9SSUdIVF9DT1ZFUkVEX1dJVEhfSEFJUjogXCJFeWVSaWdodENvdmVyZWRXaXRoSGFpclwiLFxuICAgIEVZRV9MRUZUX0NPVkVSRURfV0lUSF9IQUlSOiBcIkV5ZUxlZnRDb3ZlcmVkV2l0aEhhaXJcIixcbiAgICBPRkZfR0FaRTogXCJPZmZHYXplXCIsXG4gICAgVE9PX0RBUks6IFwiVG9vRGFya1wiLFxuICAgIFRPT19MSUdIVDogXCJUb29MaWdodFwiLFxuICAgIEZBQ0VfR0xBUkU6IFwiRmFjZUdsYXJlXCIsXG4gICAgU0hBRE9XU19PTl9GQUNFOiBcIlNoYWRvd3NPbkZhY2VcIixcbiAgICBTSE9VTERFUlNfUE9TRTogXCJTaG91bGRlcnNQb3NlXCIsXG4gICAgRVhQUkVTU0lPTl9MRVZFTDogXCJFeHByZXNzaW9uTGV2ZWxcIixcbiAgICBNT1VUSF9PUEVOOiBcIk1vdXRoT3BlblwiLFxuICAgIFNNSUxFOiBcIlNtaWxlXCIsXG4gICAgREFSS19HTEFTU0VTOiBcIkRhcmtHbGFzc2VzXCIsXG4gICAgUkVGTEVDVElPTl9PTl9HTEFTU0VTOiBcIlJlZmxlY3Rpb25PbkdsYXNzZXNcIixcbiAgICBGUkFNRVNfVE9PX0hFQVZZOiBcIkZyYW1lc1Rvb0hlYXZ5XCIsXG4gICAgRkFDRV9PQ0NMVURFRDogXCJGYWNlT2NjbHVkZWRcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURfUEhPTkVTOiBcIkhlYWRwaG9uZXNcIixcbiAgICBNRURJQ0FMX01BU0s6IFwiTWVkaWNhbE1hc2tcIixcbiAgICBCQUNLR1JPVU5EX1VOSUZPUk1JVFk6IFwiQmFja2dyb3VuZFVuaWZvcm1pdHlcIixcbiAgICBTSEFET1dTX09OX0JBQ0tHUk9VTkQ6IFwiU2hhZG93c09uQmFja2dyb3VuZFwiLFxuICAgIE9USEVSX0ZBQ0VTOiBcIk90aGVyRmFjZXNcIixcbiAgICBCQUNLR1JPVU5EX0NPTE9SX01BVENIOiBcIkJhY2tncm91bmRDb2xvck1hdGNoXCIsXG4gICAgVU5LTk9XTjogXCJVbmtub3duXCIsXG4gICAgSU1BR0VfQ0hBUkFDVEVSSVNUSUNfQUxMX1JFQ09NTUVOREVEOiBcIkltYWdlQ2hhcmFjdGVyaXN0aWNcIixcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJIZWFkU2l6ZUFuZFBvc2l0aW9uXCIsXG4gICAgRkFDRV9JTUFHRV9RVUFMSVRZX0FMTF9SRUNPTU1FTkRFRDogXCJGYWNlSW1hZ2VRdWFsaXR5XCIsXG4gICAgRVlFU19DSEFSQUNURVJJU1RJQ1NfQUxMX1JFQ09NTUVOREVEOiBcIkV5ZXNDaGFyYWN0ZXJpc3RpY3NcIixcbiAgICBTSEFET1dfQU5EX0xJR0hUSU5HX0FMTF9SRUNPTU1FTkRFRDogXCJTaGFkb3dzQW5kTGlnaHRuaW5nXCIsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTl9BTExfUkVDT01NRU5ERUQ6IFwiUG9zZUFuZEV4cHJlc3Npb25cIixcbiAgICBIRUFEX09DQ0xVU0lPTl9BTExfUkVDT01NRU5ERUQ6IFwiSGVhZE9jY2x1c2lvblwiLFxuICAgIFFVQUxJVFlfQkFDS0dST1VORF9BTExfUkVDT01NRU5ERUQ6IFwiUXVhbGl0eUJhY2tncm91bmRcIixcbn1cblxuZXhwb3J0IGNvbnN0IFNjcmVlbk9yaWVudGF0aW9uID0ge1xuICAgIFBPUlRSQUlUOiAwLFxuICAgIExBTkRTQ0FQRTogMSxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25Gb250ID0ge1xuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTjogMTAwLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMOiAxMDEsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1VCVElUTEVfTEFCRUw6IDEwMixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMUzogMTAzLFxuICAgIENBTUVSQV9TQ1JFRU5fSElOVF9MQUJFTDogMjAwLFxuICAgIFJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT046IDMwMCxcbiAgICBSRVRSWV9TQ1JFRU5fVElUTEVfTEFCRUw6IDMwMSxcbiAgICBSRVRSWV9TQ1JFRU5fU1VCVElUTEVfTEFCRUw6IDMwMixcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFM6IDMwMyxcbiAgICBQUk9DRVNTSU5HX1NDUkVFTjogNDAwLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNTY2VuYXJpbyA9IHtcbiAgICBDUk9QX0NFTlRSQUxfRkFDRTogXCJDcm9wQ2VudHJhbEZhY2VcIixcbiAgICBDUk9QX0FMTF9GQUNFUzogXCJDcm9wQWxsRmFjZXNcIixcbiAgICBUSFVNQk5BSUw6IFwiVGh1bWJuYWlsXCIsXG4gICAgQVRUUklCVVRFU19BTEw6IFwiQXR0cmlidXRlc0FsbFwiLFxuICAgIFFVQUxJVFlfRlVMTDogXCJRdWFsaXR5RnVsbFwiLFxuICAgIFFVQUxJVFlfSUNBTzogXCJRdWFsaXR5SUNBT1wiLFxuICAgIFFVQUxJVFlfVklTQV9TQ0hFTkdFTjogXCJRdWFsaXR5VmlzYVNjaGVuZ2VuXCIsXG4gICAgUVVBTElUWV9WSVNBX1VTQTogXCJRdWFsaXR5VmlzYVVTQVwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NQcm9jZXNzU3RhdHVzID0ge1xuICAgIFNUQVJUOiAwLFxuICAgIFBSRVBBUklORzogMSxcbiAgICBORVdfU0VTU0lPTjogMixcbiAgICBORVhUX1NUQUdFOiAzLFxuICAgIFNFQ1RPUl9DSEFOR0VEOiA0LFxuICAgIFBST0dSRVNTOiA1LFxuICAgIExPV19CUklHSFRORVNTOiA2LFxuICAgIEZJVF9GQUNFOiA3LFxuICAgIE1PVkVfQVdBWTogOCxcbiAgICBNT1ZFX0NMT1NFUjogOSxcbiAgICBUVVJOX0hFQUQ6IDEwLFxuICAgIFBST0NFU1NJTkc6IDExLFxuICAgIEZBSUxFRDogMTIsXG4gICAgUkVUUlk6IDEzLFxuICAgIFNVQ0NFU1M6IDE0LFxufVxuXG5leHBvcnQgY29uc3QgT3V0cHV0SW1hZ2VDcm9wQXNwZWN0UmF0aW8gPSB7XG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzNYNDogMCxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fNFg1OiAxLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT18yWDM6IDIsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzFYMTogMyxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fN1g5OiA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NUeXBlID0ge1xuICAgIEFDVElWRTogMCxcbiAgICBQQVNTSVZFOiAxLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTa2lwU3RlcCA9IHtcbiAgICBPTkJPQVJESU5HX1NURVA6IDAsXG4gICAgU1VDQ0VTU19TVEVQOiAxLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzID0ge1xuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19GQUxTRTogMCxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVFJVRTogMSxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVU5ERVRFUk1JTkVEOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VUeXBlID0ge1xuICAgIFBSSU5URUQ6IDEsXG4gICAgUkZJRDogMixcbiAgICBMSVZFOiAzLFxuICAgIERPQ1VNRU5UX1dJVEhfTElWRTogNCxcbiAgICBFWFRFUk5BTDogNSxcbiAgICBHSE9TVF9QT1JUUkFJVDogNixcbiAgICBCQVJDT0RFOiA3LFxufVxuXG5leHBvcnQgY29uc3QgRmFjZUNhcHR1cmVFcnJvckNvZGUgPSB7XG4gICAgQ0FOQ0VMOiAwLFxuICAgIFRJTUVPVVQ6IDEsXG4gICAgTk9UX0lOSVRJQUxJWkVEOiAyLFxuICAgIFNFU1NJT05fU1RBUlRfRkFJTEVEOiAzLFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiA0LFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiA1LFxuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDYsXG4gICAgQ09OVEVYVF9JU19OVUxMOiA3LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NCYWNrZW5kRXJyb3JDb2RlID0ge1xuICAgIFVOREVGSU5FRDogLTEsXG4gICAgTk9fTElDRU5TRTogMjAwLFxuICAgIE5PVF9JTklUSUFMSVpFRDogMjAxLFxuICAgIENPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogMjAyLFxuICAgIFBBUkFNU19SRUFEX0VSUk9SOiAyMDMsXG4gICAgTE9XX1FVQUxJVFk6IDIzMSxcbiAgICBUUkFDS19CUkVBSzogMjQ2LFxuICAgIENMT1NFRF9FWUVTX0RFVEVDVEVEOiAyMzAsXG4gICAgSElHSF9BU1lNTUVUUlk6IDIzMixcbiAgICBGQUNFX09WRVJfRU1PVElPTkFMOiAyMzMsXG4gICAgU1VOR0xBU1NFU19ERVRFQ1RFRDogMjM0LFxuICAgIFNNQUxMX0FHRTogMjM1LFxuICAgIEhFQUREUkVTU19ERVRFQ1RFRDogMjM2LFxuICAgIE1FRElDSU5FX01BU0tfREVURUNURUQ6IDIzOSxcbiAgICBPQ0NMVVNJT05fREVURUNURUQ6IDI0MCxcbiAgICBGT1JFSEVBRF9HTEFTU0VTX0RFVEVDVEVEOiAyNDIsXG4gICAgTU9VVEhfT1BFTkVEOiAyNDMsXG4gICAgQVJUX01BU0tfREVURUNURUQ6IDI0NCxcbiAgICBOT1RfTUFUQ0hFRDogMjM3LFxuICAgIElNQUdFU19DT1VOVF9MSU1JVF9FWENFRURFRDogMjM4LFxuICAgIEVMRUNUUk9OSUNfREVWSUNFX0RFVEVDVEVEOiAyNDUsXG4gICAgV1JPTkdfR0VPOiAyNDcsXG4gICAgV1JPTkdfT0Y6IDI0OCxcbiAgICBXUk9OR19WSUVXOiAyNDksXG59XG5cbmV4cG9ydCBjb25zdCBQcm9jZXNzaW5nTW9kZSA9IHtcbiAgICBPTkxJTkU6IDAsXG4gICAgT0ZGTElORTogMSxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25JbWFnZSA9IHtcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9DTE9TRV9CVVRUT046IDEwMCxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9JTExVTUlOQVRJT046IDEwMSxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9BQ0NFU1NPUklFUzogMTAyLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0NBTUVSQV9MRVZFTDogMTAzLFxuICAgIENBTUVSQV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiAyMDAsXG4gICAgQ0FNRVJBX1NDUkVFTl9MSUdIVF9PTl9CVVRUT046IDIwMSxcbiAgICBDQU1FUkFfU0NSRUVOX0xJR0hUX09GRl9CVVRUT046IDIwMixcbiAgICBDQU1FUkFfU0NSRUVOX1NXSVRDSF9CVVRUT046IDIwMyxcbiAgICBSRVRSWV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiAzMDAsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfRU5WSVJPTk1FTlQ6IDMwMSxcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9TVUJKRUNUOiAzMDIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OOiA0MDAsXG4gICAgU1VDQ0VTU19TQ1JFRU5fSU1BR0U6IDUwMCxcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQXR0cmlidXRlID0ge1xuICAgIEFHRTogXCJBZ2VcIixcbiAgICBFWUVfUklHSFQ6IFwiRXllUmlnaHRcIixcbiAgICBFWUVfTEVGVDogXCJFeWVMZWZ0XCIsXG4gICAgRU1PVElPTjogXCJFbW90aW9uXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBHTEFTU0VTOiBcIkdsYXNzZXNcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBNT1VUSDogXCJNb3V0aFwiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIE9DQ0xVU0lPTjogXCJPY2NsdXNpb25cIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURQSE9ORVM6IFwiSGVhZHBob25lc1wiLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEZvbnRTdHlsZSxcbiAgIEN1c3RvbWl6YXRpb25Db2xvcixcbiAgIEltYWdlUXVhbGl0eUdyb3VwTmFtZSxcbiAgIExpY2Vuc2luZ1Jlc3VsdENvZGUsXG4gICBEZXRlY3RGYWNlc0Vycm9yQ29kZSxcbiAgIENhbWVyYVBvc2l0aW9uLFxuICAgSW5pdEVycm9yQ29kZSxcbiAgIExpdmVuZXNzU3RhdHVzLFxuICAgTGl2ZW5lc3NFcnJvckNvZGUsXG4gICBSZWNvcmRpbmdQcm9jZXNzLFxuICAgRGV0ZWN0RmFjZXNCYWNrZW5kRXJyb3JDb2RlLFxuICAgTWF0Y2hGYWNlc0Vycm9yQ29kZSxcbiAgIEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljTmFtZSxcbiAgIFNjcmVlbk9yaWVudGF0aW9uLFxuICAgQ3VzdG9taXphdGlvbkZvbnQsXG4gICBEZXRlY3RGYWNlc1NjZW5hcmlvLFxuICAgTGl2ZW5lc3NQcm9jZXNzU3RhdHVzLFxuICAgT3V0cHV0SW1hZ2VDcm9wQXNwZWN0UmF0aW8sXG4gICBMaXZlbmVzc1R5cGUsXG4gICBMaXZlbmVzc1NraXBTdGVwLFxuICAgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzLFxuICAgSW1hZ2VUeXBlLFxuICAgRmFjZUNhcHR1cmVFcnJvckNvZGUsXG4gICBMaXZlbmVzc0JhY2tlbmRFcnJvckNvZGUsXG4gICBQcm9jZXNzaW5nTW9kZSxcbiAgIEN1c3RvbWl6YXRpb25JbWFnZSxcbiAgIERldGVjdEZhY2VzQXR0cmlidXRlLFxufVxuXG4vKipcbiAqIEBuYW1lIEZhY2VTREtcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyBhIHdyYXBwZXIgY29yZG92YSBwbHVnaW4gZm9yIFJlZ3VsYWBzIEZhY2UgU0RLLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmFjZVNESyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZS1hcGkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIEZhY2VTREs6IEZhY2VTREspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0ZhY2VTREsnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZhY2UtYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdGYWNlU0RLUGx1Z2luLkZhY2VTREsnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0ZhY2VBcGktQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhY2VTREsgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRTZXJ2aWNlVXJsKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFNlcnZpY2VVcmwodXJsOiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBkaWN0aW9uYXJ5XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRMb2NhbGl6YXRpb25EaWN0aW9uYXJ5KGRpY3Rpb25hcnk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHNldHMgaGVhZGVycyBmb3IgaHR0cCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGhlYWRlcnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJlcXVlc3RIZWFkZXJzKGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgVWlDb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0N1c3RvbWl6YXRpb259IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0Q3VzdG9taXphdGlvbihjb25maWc6IEN1c3RvbWl6YXRpb24pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtJbml0Q29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemUoY29uZmlnOiBJbml0Q29uZmlnIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0aWFsaXplKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFjZUNhcHR1cmVDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzdGFydEZhY2VDYXB0dXJlKGNvbmZpZzogRmFjZUNhcHR1cmVDb25maWcgfCBudWxsKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wRmFjZUNhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtMaXZlbmVzc0NvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0TGl2ZW5lc3MoY29uZmlnOiBMaXZlbmVzc0NvbmZpZyB8IG51bGwpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BMaXZlbmVzcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdGNoRmFjZXNSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtNYXRjaEZhY2VzQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIG1hdGNoRmFjZXMocmVxdWVzdDogTWF0Y2hGYWNlc1JlcXVlc3QsIGNvbmZpZzogTWF0Y2hGYWNlc0NvbmZpZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NvbXBhcmVkRmFjZXNQYWlyW119IGZhY2VzUGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2ltaWxhcml0eVRocmVzaG9sZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3BsaXRDb21wYXJlZEZhY2VzKGZhY2VzUGFpcnM6IENvbXBhcmVkRmFjZXNQYWlyW10sIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGV0ZWN0RmFjZXNSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZXRlY3RGYWNlcyhyZXF1ZXN0OiBEZXRlY3RGYWNlc1JlcXVlc3QpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGdyb3VwSWRzXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBtZXRhZGF0YVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlUGVyc29uKG5hbWU6IHN0cmluZywgZ3JvdXBJZHM6IHN0cmluZ1tdIHwgbnVsbCwgbWV0YWRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQZXJzb259IHBlcnNvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlUGVyc29uKHBlcnNvbjogUGVyc29uKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWxldGVQZXJzb24ocGVyc29uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uKHBlcnNvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcGFyYW0ge0ltYWdlVXBsb2FkfSBpbWFnZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUGVyc29uSW1hZ2UocGVyc29uSWQ6IHN0cmluZywgaW1hZ2U6IEltYWdlVXBsb2FkKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZVBlcnNvbkltYWdlKHBlcnNvbklkOiBzdHJpbmcsIGltYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUlkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25JbWFnZShwZXJzb25JZDogc3RyaW5nLCBpbWFnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlcyhwZXJzb25JZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2VzRm9yUGFnZShwZXJzb25JZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBtZXRhZGF0YVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlR3JvdXAobmFtZTogc3RyaW5nLCBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BlcnNvbkdyb3VwfSBncm91cFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlR3JvdXAoZ3JvdXA6IFBlcnNvbkdyb3VwKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcGFyYW0ge0VkaXRHcm91cFBlcnNvbnNSZXF1ZXN0fSBlZGl0R3JvdXBQZXJzb25zUmVxdWVzdFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZWRpdFBlcnNvbnNJbkdyb3VwKGdyb3VwSWQ6IHN0cmluZywgZWRpdEdyb3VwUGVyc29uc1JlcXVlc3Q6IEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cHNGb3JQYWdlKHBhZ2U6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25Hcm91cHMocGVyc29uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkdyb3Vwc0ZvclBhZ2UocGVyc29uSWQ6IHN0cmluZywgcGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uc0luR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25zSW5Hcm91cEZvclBhZ2UoZ3JvdXBJZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoUGVyc29uUmVxdWVzdH0gc2VhcmNoUGVyc29uUmVxdWVzdFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VhcmNoUGVyc29uKHNlYXJjaFBlcnNvblJlcXVlc3Q6IFNlYXJjaFBlcnNvblJlcXVlc3QpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG5cbn0iXX0=