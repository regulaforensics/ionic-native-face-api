import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
var FaceSDK = /** @class */ (function (_super) {
    __extends(FaceSDK, _super);
    function FaceSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceSDK.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    FaceSDK.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceSDK.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDK.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    FaceSDK.prototype.setRequestHeaders = function (headers) { return cordova(this, "setRequestHeaders", {}, arguments); };
    FaceSDK.prototype.setCustomization = function (config) { return cordova(this, "setCustomization", {}, arguments); };
    FaceSDK.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    FaceSDK.prototype.initialize = function (config) { return cordova(this, "initialize", {}, arguments); };
    FaceSDK.prototype.deinitialize = function () { return cordova(this, "deinitialize", {}, arguments); };
    FaceSDK.prototype.startFaceCapture = function (config) { return cordova(this, "startFaceCapture", { "observable": true }, arguments); };
    FaceSDK.prototype.stopFaceCapture = function () { return cordova(this, "stopFaceCapture", {}, arguments); };
    FaceSDK.prototype.startLiveness = function (config) { return cordova(this, "startLiveness", { "observable": true }, arguments); };
    FaceSDK.prototype.stopLiveness = function () { return cordova(this, "stopLiveness", {}, arguments); };
    FaceSDK.prototype.matchFaces = function (request, config) { return cordova(this, "matchFaces", {}, arguments); };
    FaceSDK.prototype.splitComparedFaces = function (facesPairs, similarityThreshold) { return cordova(this, "splitComparedFaces", {}, arguments); };
    FaceSDK.prototype.detectFaces = function (request) { return cordova(this, "detectFaces", {}, arguments); };
    FaceSDK.prototype.createPerson = function (name, groupIds, metadata) { return cordova(this, "createPerson", {}, arguments); };
    FaceSDK.prototype.updatePerson = function (person) { return cordova(this, "updatePerson", {}, arguments); };
    FaceSDK.prototype.deletePerson = function (personId) { return cordova(this, "deletePerson", {}, arguments); };
    FaceSDK.prototype.getPerson = function (personId) { return cordova(this, "getPerson", {}, arguments); };
    FaceSDK.prototype.addPersonImage = function (personId, image) { return cordova(this, "addPersonImage", {}, arguments); };
    FaceSDK.prototype.deletePersonImage = function (personId, imageId) { return cordova(this, "deletePersonImage", {}, arguments); };
    FaceSDK.prototype.getPersonImage = function (personId, imageId) { return cordova(this, "getPersonImage", {}, arguments); };
    FaceSDK.prototype.getPersonImages = function (personId) { return cordova(this, "getPersonImages", {}, arguments); };
    FaceSDK.prototype.getPersonImagesForPage = function (personId, page, size) { return cordova(this, "getPersonImagesForPage", {}, arguments); };
    FaceSDK.prototype.createGroup = function (name, metadata) { return cordova(this, "createGroup", {}, arguments); };
    FaceSDK.prototype.updateGroup = function (group) { return cordova(this, "updateGroup", {}, arguments); };
    FaceSDK.prototype.editPersonsInGroup = function (groupId, editGroupPersonsRequest) { return cordova(this, "editPersonsInGroup", {}, arguments); };
    FaceSDK.prototype.deleteGroup = function (groupId) { return cordova(this, "deleteGroup", {}, arguments); };
    FaceSDK.prototype.getGroup = function (groupId) { return cordova(this, "getGroup", {}, arguments); };
    FaceSDK.prototype.getGroups = function () { return cordova(this, "getGroups", {}, arguments); };
    FaceSDK.prototype.getGroupsForPage = function (page, size) { return cordova(this, "getGroupsForPage", {}, arguments); };
    FaceSDK.prototype.getPersonGroups = function (personId) { return cordova(this, "getPersonGroups", {}, arguments); };
    FaceSDK.prototype.getPersonGroupsForPage = function (personId, page, size) { return cordova(this, "getPersonGroupsForPage", {}, arguments); };
    FaceSDK.prototype.getPersonsInGroup = function (groupId) { return cordova(this, "getPersonsInGroup", {}, arguments); };
    FaceSDK.prototype.getPersonsInGroupForPage = function (groupId, page, size) { return cordova(this, "getPersonsInGroupForPage", {}, arguments); };
    FaceSDK.prototype.searchPerson = function (searchPersonRequest) { return cordova(this, "searchPerson", {}, arguments); };
    FaceSDK.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FaceSDK, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    FaceSDK.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FaceSDK });
    FaceSDK.pluginName = "FaceSDK";
    FaceSDK.plugin = "cordova-plugin-face-api";
    FaceSDK.pluginRef = "FaceSDKPlugin.FaceSDK";
    FaceSDK.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceSDK.platforms = ["Android", "iOS"];
    FaceSDK = __decorate([], FaceSDK);
    return FaceSDK;
}(AwesomeCordovaNativePlugin));
export { FaceSDK };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: FaceSDK, decorators: [{
            type: Injectable
        }], propDecorators: { getVersion: [], getServiceUrl: [], setServiceUrl: [], setLocalizationDictionary: [], setRequestHeaders: [], setCustomization: [], isInitialized: [], initialize: [], deinitialize: [], startFaceCapture: [], stopFaceCapture: [], startLiveness: [], stopLiveness: [], matchFaces: [], splitComparedFaces: [], detectFaces: [], createPerson: [], updatePerson: [], deletePerson: [], getPerson: [], addPersonImage: [], deletePersonImage: [], getPersonImage: [], getPersonImages: [], getPersonImagesForPage: [], createGroup: [], updateGroup: [], editPersonsInGroup: [], deleteGroup: [], getGroup: [], getGroups: [], getGroupsForPage: [], getPersonGroups: [], getPersonGroupsForPage: [], getPersonsInGroup: [], getPersonsInGroupForPage: [], searchPerson: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUFRdkIsc0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQTtRQUVoQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUE7UUFFaEUsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzt3QkFwQkw7Ozs7OztJQTRCVyxhQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUE7UUFFdkIsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMs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QVVkLGlCQUFpQixNQVVqQixjQUFjLE1BU2QsZUFBZSxNQVdmLHNCQUFzQixNQVV0QixXQUFXLE1BU1gsV0FBVyxNQVVYLGtCQUFrQixNQVNsQixXQUFXLE1BU1gsUUFBUSxNQVFSLFNBQVMsTUFVVCxnQkFBZ0IsTUFTaEIsZUFBZSxNQVdmLHNCQUFzQixNQVN0QixpQkFBaUIsTUFXakIsd0JBQXdCLE1BU3hCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9taXphdGlvbiB7XG4gICAgY29sb3JzPzogUmVjb3JkPG51bWJlciwgbnVtYmVyPlxuICAgIGZvbnRzPzogUmVjb3JkPG51bWJlciwgRm9udD5cbiAgICBpbWFnZXM/OiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+XG4gICAgdWlDdXN0b21pemF0aW9uTGF5ZXI/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEN1c3RvbWl6YXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDdXN0b21pemF0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvbG9ycyA9IGpzb25PYmplY3RbXCJjb2xvcnNcIl1cbiAgICAgICAgcmVzdWx0LmZvbnRzID0ganNvbk9iamVjdFtcImZvbnRzXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdXG4gICAgICAgIHJlc3VsdC51aUN1c3RvbWl6YXRpb25MYXllciA9IGpzb25PYmplY3RbXCJ1aUN1c3RvbWl6YXRpb25MYXllclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb250IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgc3R5bGU/OiBudW1iZXJcbiAgICBzaXplPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZvbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGb250XG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuc3R5bGUgPSBqc29uT2JqZWN0W1wic3R5bGVcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBqc29uT2JqZWN0W1wic2l6ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlUmVzdWx0IHtcbiAgICBxdWFsaXR5PzogSW1hZ2VRdWFsaXR5UmVzdWx0W11cbiAgICBhdHRyaWJ1dGVzPzogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHRbXVxuICAgIGNyb3A/OiBzdHJpbmdcbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFJlY3Q/OiBSZWN0XG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGlzUXVhbGl0eUNvbXBsaWFudD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VSZXN1bHRcblxuICAgICAgICByZXN1bHQucXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY3JvcCA9IGpzb25PYmplY3RbXCJjcm9wXCJdXG4gICAgICAgIHJlc3VsdC5mYWNlUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VSZWN0XCJdKVxuICAgICAgICByZXN1bHQub3JpZ2luYWxSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wib3JpZ2luYWxSZWN0XCJdKVxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pc1F1YWxpdHlDb21wbGlhbnQgPSBqc29uT2JqZWN0W1wiaXNRdWFsaXR5Q29tcGxpYW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0IHtcbiAgICBhdHRyaWJ1dGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIHJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICBjb25maWRlbmNlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlID0ganNvbk9iamVjdFtcImF0dHJpYnV0ZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LnJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJhbmdlXCJdKVxuICAgICAgICByZXN1bHQuY29uZmlkZW5jZSA9IGpzb25PYmplY3RbXCJjb25maWRlbmNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQ29uZmlnIHtcbiAgICBhdHRyaWJ1dGVzPzogc3RyaW5nW11cbiAgICBjdXN0b21RdWFsaXR5PzogSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNbXVxuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcbiAgICBvbmx5Q2VudHJhbEZhY2U/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQ29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNDb25maWdcblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5vbmx5Q2VudHJhbEZhY2UgPSBqc29uT2JqZWN0W1wib25seUNlbnRyYWxGYWNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuZGVybHlpbmdFeGNlcHRpb24ge1xuICAgIGNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFVuZGVybHlpbmdFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVbmRlcmx5aW5nRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzRXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0V4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0Vycm9yID0gVW5kZXJseWluZ0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0Vycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1JlcXVlc3Qge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBjb25maWd1cmF0aW9uPzogRGV0ZWN0RmFjZXNDb25maWdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQuY29uZmlndXJhdGlvbiA9IERldGVjdEZhY2VzQ29uZmlnLmZyb21Kc29uKGpzb25PYmplY3RbXCJjb25maWd1cmF0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1Jlc3BvbnNlIHtcbiAgICBkZXRlY3Rpb24/OiBEZXRlY3RGYWNlUmVzdWx0XG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBlcnJvcj86IERldGVjdEZhY2VzRXhjZXB0aW9uXG4gICAgYWxsRGV0ZWN0aW9ucz86IERldGVjdEZhY2VSZXN1bHRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb24gPSBEZXRlY3RGYWNlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25cIl0pXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBEZXRlY3RGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG4gICAgICAgIHJlc3VsdC5hbGxEZXRlY3Rpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEZXRlY3RGYWNlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFsbERldGVjdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlQ29uZmlnIHtcbiAgICBjb3B5cmlnaHQ/OiBib29sZWFuXG4gICAgY2FtZXJhU3dpdGNoRW5hYmxlZD86IGJvb2xlYW5cbiAgICBjbG9zZUJ1dHRvbkVuYWJsZWQ/OiBib29sZWFuXG4gICAgdG9yY2hCdXR0b25FbmFibGVkPzogYm9vbGVhblxuICAgIHZpYnJhdGVPblN0ZXBzPzogYm9vbGVhblxuICAgIGNhbWVyYVBvc2l0aW9uQW5kcm9pZD86IG51bWJlclxuICAgIGNhbWVyYVBvc2l0aW9uSU9TPzogbnVtYmVyXG4gICAgc2NyZWVuT3JpZW50YXRpb24/OiBudW1iZXJbXVxuICAgIHRpbWVvdXQ/OiBudW1iZXJcbiAgICBob2xkU3RpbGxEdXJhdGlvbj86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUNvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LmNvcHlyaWdodCA9IGpzb25PYmplY3RbXCJjb3B5cmlnaHRcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVN3aXRjaEVuYWJsZWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhU3dpdGNoRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQuY2xvc2VCdXR0b25FbmFibGVkID0ganNvbk9iamVjdFtcImNsb3NlQnV0dG9uRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQudG9yY2hCdXR0b25FbmFibGVkID0ganNvbk9iamVjdFtcInRvcmNoQnV0dG9uRW5hYmxlZFwiXVxuICAgICAgICByZXN1bHQudmlicmF0ZU9uU3RlcHMgPSBqc29uT2JqZWN0W1widmlicmF0ZU9uU3RlcHNcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVBvc2l0aW9uQW5kcm9pZCA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbkFuZHJvaWRcIl1cbiAgICAgICAgcmVzdWx0LmNhbWVyYVBvc2l0aW9uSU9TID0ganNvbk9iamVjdFtcImNhbWVyYVBvc2l0aW9uSU9TXCJdXG4gICAgICAgIHJlc3VsdC5zY3JlZW5PcmllbnRhdGlvbiA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzY3JlZW5PcmllbnRhdGlvblwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zY3JlZW5PcmllbnRhdGlvbi5wdXNoKGpzb25PYmplY3RbXCJzY3JlZW5PcmllbnRhdGlvblwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudGltZW91dCA9IGpzb25PYmplY3RbXCJ0aW1lb3V0XCJdXG4gICAgICAgIHJlc3VsdC5ob2xkU3RpbGxEdXJhdGlvbiA9IGpzb25PYmplY3RbXCJob2xkU3RpbGxEdXJhdGlvblwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUV4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZUV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUltYWdlIHtcbiAgICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgICBpbWFnZT86IHN0cmluZ1xuICAgIHRhZz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVJbWFnZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZVJlc3BvbnNlIHtcbiAgICBlcnJvcj86IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG4gICAgaW1hZ2U/OiBGYWNlQ2FwdHVyZUltYWdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZVJlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmVycm9yID0gRmFjZUNhcHR1cmVFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBGYWNlQ2FwdHVyZUltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0SW1hZ2VDcm9wIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc2l6ZT86IFNpemVcbiAgICBwYWRDb2xvcj86IG51bWJlclxuICAgIHJldHVybk9yaWdpbmFsUmVjdD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT3V0cHV0SW1hZ2VDcm9wIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT3V0cHV0SW1hZ2VDcm9wXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IFNpemUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpemVcIl0pXG4gICAgICAgIHJlc3VsdC5wYWRDb2xvciA9IGpzb25PYmplY3RbXCJwYWRDb2xvclwiXVxuICAgICAgICByZXN1bHQucmV0dXJuT3JpZ2luYWxSZWN0ID0ganNvbk9iamVjdFtcInJldHVybk9yaWdpbmFsUmVjdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPdXRwdXRJbWFnZVBhcmFtcyB7XG4gICAgYmFja2dyb3VuZENvbG9yPzogbnVtYmVyXG4gICAgY3JvcD86IE91dHB1dEltYWdlQ3JvcFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBPdXRwdXRJbWFnZVBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE91dHB1dEltYWdlUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJiYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmNyb3AgPSBPdXRwdXRJbWFnZUNyb3AuZnJvbUpzb24oanNvbk9iamVjdFtcImNyb3BcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQb2ludCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50XG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpemUge1xuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpemUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTaXplXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljIHtcbiAgICBjaGFyYWN0ZXJpc3RpY05hbWU/OiBzdHJpbmdcbiAgICBjb2xvcj86IG51bWJlclxuICAgIHJlY29tbWVuZGVkUmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGN1c3RvbVJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY1xuXG4gICAgICAgIHJlc3VsdC5jaGFyYWN0ZXJpc3RpY05hbWUgPSBqc29uT2JqZWN0W1wiY2hhcmFjdGVyaXN0aWNOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5jb2xvciA9IGpzb25PYmplY3RbXCJjb2xvclwiXVxuICAgICAgICByZXN1bHQucmVjb21tZW5kZWRSYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWNvbW1lbmRlZFJhbmdlXCJdKVxuICAgICAgICByZXN1bHQuY3VzdG9tUmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUmFuZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eVJhbmdlIHtcbiAgICBtaW4/OiBudW1iZXJcbiAgICBtYXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5UmFuZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlSYW5nZVxuXG4gICAgICAgIHJlc3VsdC5taW4gPSBqc29uT2JqZWN0W1wibWluXCJdXG4gICAgICAgIHJlc3VsdC5tYXggPSBqc29uT2JqZWN0W1wibWF4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eVJlc3VsdCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGdyb3VwPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwID0ganNvbk9iamVjdFtcImdyb3VwXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyYW5nZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VTREtWZXJzaW9uIHtcbiAgICBhcGk/OiBzdHJpbmdcbiAgICBjb3JlPzogc3RyaW5nXG4gICAgY29yZU1vZGU/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZVNES1ZlcnNpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlU0RLVmVyc2lvblxuXG4gICAgICAgIHJlc3VsdC5hcGkgPSBqc29uT2JqZWN0W1wiYXBpXCJdXG4gICAgICAgIHJlc3VsdC5jb3JlID0ganNvbk9iamVjdFtcImNvcmVcIl1cbiAgICAgICAgcmVzdWx0LmNvcmVNb2RlID0ganNvbk9iamVjdFtcImNvcmVNb2RlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluaXRDb25maWcge1xuICAgIGxpY2Vuc2U/OiBzdHJpbmdcbiAgICBsaWNlbnNlVXBkYXRlPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbml0Q29uZmlnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW5pdENvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5saWNlbnNlID0ganNvbk9iamVjdFtcImxpY2Vuc2VcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGUgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0RXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW5pdEV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEluaXRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuY29kZSA9IGpzb25PYmplY3RbXCJjb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LnVuZGVybHlpbmdFcnJvciA9IFVuZGVybHlpbmdFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInVuZGVybHlpbmdFcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NDb25maWcge1xuICAgIGNvcHlyaWdodD86IGJvb2xlYW5cbiAgICBjYW1lcmFTd2l0Y2hFbmFibGVkPzogYm9vbGVhblxuICAgIGNsb3NlQnV0dG9uRW5hYmxlZD86IGJvb2xlYW5cbiAgICB0b3JjaEJ1dHRvbkVuYWJsZWQ/OiBib29sZWFuXG4gICAgdmlicmF0ZU9uU3RlcHM/OiBib29sZWFuXG4gICAgY2FtZXJhUG9zaXRpb25BbmRyb2lkPzogbnVtYmVyXG4gICAgY2FtZXJhUG9zaXRpb25JT1M/OiBudW1iZXJcbiAgICBzY3JlZW5PcmllbnRhdGlvbj86IG51bWJlcltdXG4gICAgbG9jYXRpb25UcmFja2luZ0VuYWJsZWQ/OiBib29sZWFuXG4gICAgYXR0ZW1wdHNDb3VudD86IG51bWJlclxuICAgIHJlY29yZGluZ1Byb2Nlc3M/OiBudW1iZXJcbiAgICBsaXZlbmVzc1R5cGU/OiBudW1iZXJcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBza2lwU3RlcD86IG51bWJlcltdXG4gICAgbWV0YWRhdGE/OiBhbnlcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0NvbmZpZ1xuXG4gICAgICAgIHJlc3VsdC5jb3B5cmlnaHQgPSBqc29uT2JqZWN0W1wiY29weXJpZ2h0XCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFTd2l0Y2hFbmFibGVkID0ganNvbk9iamVjdFtcImNhbWVyYVN3aXRjaEVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LmNsb3NlQnV0dG9uRW5hYmxlZCA9IGpzb25PYmplY3RbXCJjbG9zZUJ1dHRvbkVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnRvcmNoQnV0dG9uRW5hYmxlZCA9IGpzb25PYmplY3RbXCJ0b3JjaEJ1dHRvbkVuYWJsZWRcIl1cbiAgICAgICAgcmVzdWx0LnZpYnJhdGVPblN0ZXBzID0ganNvbk9iamVjdFtcInZpYnJhdGVPblN0ZXBzXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbkFuZHJvaWQgPSBqc29uT2JqZWN0W1wiY2FtZXJhUG9zaXRpb25BbmRyb2lkXCJdXG4gICAgICAgIHJlc3VsdC5jYW1lcmFQb3NpdGlvbklPUyA9IGpzb25PYmplY3RbXCJjYW1lcmFQb3NpdGlvbklPU1wiXVxuICAgICAgICByZXN1bHQuc2NyZWVuT3JpZW50YXRpb24gPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNjcmVlbk9yaWVudGF0aW9uXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2NyZWVuT3JpZW50YXRpb24ucHVzaChqc29uT2JqZWN0W1wic2NyZWVuT3JpZW50YXRpb25cIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmxvY2F0aW9uVHJhY2tpbmdFbmFibGVkID0ganNvbk9iamVjdFtcImxvY2F0aW9uVHJhY2tpbmdFbmFibGVkXCJdXG4gICAgICAgIHJlc3VsdC5hdHRlbXB0c0NvdW50ID0ganNvbk9iamVjdFtcImF0dGVtcHRzQ291bnRcIl1cbiAgICAgICAgcmVzdWx0LnJlY29yZGluZ1Byb2Nlc3MgPSBqc29uT2JqZWN0W1wicmVjb3JkaW5nUHJvY2Vzc1wiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3NUeXBlID0ganNvbk9iamVjdFtcImxpdmVuZXNzVHlwZVwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuc2tpcFN0ZXAgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNraXBTdGVwXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wic2tpcFN0ZXBcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2tpcFN0ZXAucHVzaChqc29uT2JqZWN0W1wic2tpcFN0ZXBcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzRXhjZXB0aW9uIHtcbiAgICBjb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuICAgIHVuZGVybHlpbmdFcnJvcj86IFVuZGVybHlpbmdFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0V4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5jb2RlID0ganNvbk9iamVjdFtcImNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0Vycm9yID0gVW5kZXJseWluZ0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0Vycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc05vdGlmaWNhdGlvbiB7XG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcmVzcG9uc2U/OiBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVzcG9uc2UgPSBMaXZlbmVzc1Jlc3BvbnNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXNwb25zZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NSZXNwb25zZSB7XG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBsaXZlbmVzcz86IG51bWJlclxuICAgIHRhZz86IHN0cmluZ1xuICAgIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmdcbiAgICBlc3RpbWF0ZWRBZ2U/OiBudW1iZXJcbiAgICBlcnJvcj86IExpdmVuZXNzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlID0ganNvbk9iamVjdFtcImltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzcyA9IGpzb25PYmplY3RbXCJsaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG4gICAgICAgIHJlc3VsdC5lc3RpbWF0ZWRBZ2UgPSBqc29uT2JqZWN0W1wiZXN0aW1hdGVkQWdlXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IExpdmVuZXNzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGFyZWRGYWNlIHtcbiAgICBpbWFnZUluZGV4PzogbnVtYmVyXG4gICAgaW1hZ2U/OiBNYXRjaEZhY2VzSW1hZ2VcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICBmYWNlPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGFyZWRGYWNlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlSW5kZXggPSBqc29uT2JqZWN0W1wiaW1hZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZmFjZSA9IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wYXJlZEZhY2VzUGFpciB7XG4gICAgZmlyc3Q/OiBDb21wYXJlZEZhY2VcbiAgICBzZWNvbmQ/OiBDb21wYXJlZEZhY2VcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgc2NvcmU/OiBudW1iZXJcbiAgICBlcnJvcj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlc1BhaXIgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21wYXJlZEZhY2VzUGFpclxuXG4gICAgICAgIHJlc3VsdC5maXJzdCA9IENvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlyc3RcIl0pXG4gICAgICAgIHJlc3VsdC5zZWNvbmQgPSBDb21wYXJlZEZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcInNlY29uZFwiXSlcbiAgICAgICAgcmVzdWx0LnNpbWlsYXJpdHkgPSBqc29uT2JqZWN0W1wic2ltaWxhcml0eVwiXVxuICAgICAgICByZXN1bHQuc2NvcmUgPSBqc29uT2JqZWN0W1wic2NvcmVcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBhcmVkRmFjZXNTcGxpdCB7XG4gICAgbWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgIHVubWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBDb21wYXJlZEZhY2VzU3BsaXQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21wYXJlZEZhY2VzU3BsaXRcblxuICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb25maWcge1xuICAgIHByb2Nlc3NpbmdNb2RlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNDb25maWcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzQ29uZmlnXG5cbiAgICAgICAgcmVzdWx0LnByb2Nlc3NpbmdNb2RlID0ganNvbk9iamVjdFtcInByb2Nlc3NpbmdNb2RlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb24ge1xuICAgIGltYWdlSW5kZXg/OiBudW1iZXJcbiAgICBpbWFnZT86IE1hdGNoRmFjZXNJbWFnZVxuICAgIGZhY2VzPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VbXVxuICAgIGVycm9yPzogTWF0Y2hGYWNlc0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRGV0ZWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvblxuXG4gICAgICAgIHJlc3VsdC5pbWFnZUluZGV4ID0ganNvbk9iamVjdFtcImltYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlID0gTWF0Y2hGYWNlc0ltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcbiAgICAgICAgcmVzdWx0LmZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mYWNlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHtcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICBsYW5kbWFya3M/OiBQb2ludFtdXG4gICAgZmFjZVJlY3Q/OiBSZWN0XG4gICAgcm90YXRpb25BbmdsZT86IG51bWJlclxuICAgIG9yaWdpbmFsUmVjdD86IFJlY3RcbiAgICBjcm9wPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcblxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5mYWNlUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VSZWN0XCJdKVxuICAgICAgICByZXN1bHQucm90YXRpb25BbmdsZSA9IGpzb25PYmplY3RbXCJyb3RhdGlvbkFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJvcmlnaW5hbFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5jcm9wID0ganNvbk9iamVjdFtcImNyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0V4Y2VwdGlvbiB7XG4gICAgY29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXJyb3I/OiBVbmRlcmx5aW5nRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmNvZGUgPSBqc29uT2JqZWN0W1wiY29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXJyb3IgPSBVbmRlcmx5aW5nRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNJbWFnZSB7XG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgICBkZXRlY3RBbGw/OiBib29sZWFuXG4gICAgaWRlbnRpZmllcj86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzSW1hZ2VcblxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cbiAgICAgICAgcmVzdWx0LmlkZW50aWZpZXIgPSBqc29uT2JqZWN0W1wiaWRlbnRpZmllclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVxdWVzdCB7XG4gICAgaW1hZ2VzPzogTWF0Y2hGYWNlc0ltYWdlW11cbiAgICBvdXRwdXRJbWFnZVBhcmFtcz86IE91dHB1dEltYWdlUGFyYW1zXG4gICAgdGFnPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5vdXRwdXRJbWFnZVBhcmFtcyA9IE91dHB1dEltYWdlUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJvdXRwdXRJbWFnZVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXNwb25zZSB7XG4gICAgcmVzdWx0cz86IENvbXBhcmVkRmFjZXNQYWlyW11cbiAgICBkZXRlY3Rpb25zPzogTWF0Y2hGYWNlc0RldGVjdGlvbltdXG4gICAgdGFnPzogc3RyaW5nXG4gICAgZXJyb3I/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVzdWx0c1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZXN1bHRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZGV0ZWN0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRldGVjdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0RldGVjdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kZXRlY3Rpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWRpdEdyb3VwUGVyc29uc1JlcXVlc3Qge1xuICAgIHBlcnNvbklkc1RvQWRkPzogc3RyaW5nW11cbiAgICBwZXJzb25JZHNUb1JlbW92ZT86IHN0cmluZ1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRWRpdEdyb3VwUGVyc29uc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQucGVyc29uSWRzVG9BZGQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBlcnNvbklkc1RvQWRkXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGVyc29uSWRzVG9BZGQucHVzaChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvUmVtb3ZlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb1JlbW92ZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvUmVtb3ZlLnB1c2goanNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIHtcbiAgICBpbWFnZURhdGE/OiBzdHJpbmdcbiAgICBpbWFnZVVybD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVVwbG9hZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlVXBsb2FkXG5cbiAgICAgICAgcmVzdWx0LmltYWdlRGF0YSA9IGpzb25PYmplY3RbXCJpbWFnZURhdGFcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlVXJsID0ganNvbk9iamVjdFtcImltYWdlVXJsXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VhYmxlSXRlbUxpc3Qge1xuICAgIGl0ZW1zPzogYW55W11cbiAgICBwYWdlPzogbnVtYmVyXG4gICAgdG90YWxQYWdlcz86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQYWdlYWJsZUl0ZW1MaXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGFnZWFibGVJdGVtTGlzdFxuXG4gICAgICAgIHJlc3VsdC5pdGVtcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaXRlbXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpdGVtc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5pdGVtcy5wdXNoKGpzb25PYmplY3RbXCJpdGVtc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucGFnZSA9IGpzb25PYmplY3RbXCJwYWdlXCJdXG4gICAgICAgIHJlc3VsdC50b3RhbFBhZ2VzID0ganNvbk9iamVjdFtcInRvdGFsUGFnZXNcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nXG4gICAgZ3JvdXBzPzogc3RyaW5nW11cbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvblxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZWRBdCA9IGpzb25PYmplY3RbXCJ1cGRhdGVkQXRcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3Vwcy5wdXNoKGpzb25PYmplY3RbXCJncm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25Hcm91cCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25Hcm91cFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25JbWFnZSB7XG4gICAgcGF0aD86IHN0cmluZ1xuICAgIHVybD86IHN0cmluZ1xuICAgIGNvbnRlbnRUeXBlPzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb25JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvbkltYWdlXG5cbiAgICAgICAgcmVzdWx0LnBhdGggPSBqc29uT2JqZWN0W1wicGF0aFwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuY29udGVudFR5cGUgPSBqc29uT2JqZWN0W1wiY29udGVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQZXJzb24ge1xuICAgIGltYWdlcz86IFNlYXJjaFBlcnNvbkltYWdlW11cbiAgICBkZXRlY3Rpb24/OiBTZWFyY2hQZXJzb25EZXRlY3Rpb25cbiAgICBuYW1lPzogc3RyaW5nXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nXG4gICAgZ3JvdXBzPzogc3RyaW5nW11cbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlYXJjaFBlcnNvblxuXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTZWFyY2hQZXJzb25JbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbiA9IFNlYXJjaFBlcnNvbkRldGVjdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0ZWN0aW9uXCJdKVxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC51cGRhdGVkQXQgPSBqc29uT2JqZWN0W1widXBkYXRlZEF0XCJdXG4gICAgICAgIHJlc3VsdC5ncm91cHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3Vwc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ncm91cHMucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uRGV0ZWN0aW9uIHtcbiAgICBsYW5kbWFya3M/OiBQb2ludFtdXG4gICAgcmVjdD86IFJlY3RcbiAgICBjcm9wPzogc3RyaW5nXG4gICAgcm90YXRpb25BbmdsZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25EZXRlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25EZXRlY3Rpb25cblxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNyb3AgPSBqc29uT2JqZWN0W1wiY3JvcFwiXVxuICAgICAgICByZXN1bHQucm90YXRpb25BbmdsZSA9IGpzb25PYmplY3RbXCJyb3RhdGlvbkFuZ2xlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbkltYWdlIHtcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgZGlzdGFuY2U/OiBudW1iZXJcbiAgICBwYXRoPzogc3RyaW5nXG4gICAgdXJsPzogc3RyaW5nXG4gICAgY29udGVudFR5cGU/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvbkltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uSW1hZ2VcblxuICAgICAgICByZXN1bHQuc2ltaWxhcml0eSA9IGpzb25PYmplY3RbXCJzaW1pbGFyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5kaXN0YW5jZSA9IGpzb25PYmplY3RbXCJkaXN0YW5jZVwiXVxuICAgICAgICByZXN1bHQucGF0aCA9IGpzb25PYmplY3RbXCJwYXRoXCJdXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5jb250ZW50VHlwZSA9IGpzb25PYmplY3RbXCJjb250ZW50VHlwZVwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvblJlcXVlc3Qge1xuICAgIGltYWdlVXBsb2FkPzogSW1hZ2VVcGxvYWRcbiAgICBncm91cElkc0ZvclNlYXJjaD86IHN0cmluZ1tdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgbGltaXQ/OiBudW1iZXJcbiAgICBkZXRlY3RBbGw/OiBib29sZWFuXG4gICAgb3V0cHV0SW1hZ2VQYXJhbXM/OiBPdXRwdXRJbWFnZVBhcmFtc1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25SZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5pbWFnZVVwbG9hZCA9IEltYWdlVXBsb2FkLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVVwbG9hZFwiXSlcbiAgICAgICAgcmVzdWx0Lmdyb3VwSWRzRm9yU2VhcmNoID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cElkc0ZvclNlYXJjaFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3VwSWRzRm9yU2VhcmNoLnB1c2goanNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC50aHJlc2hvbGQgPSBqc29uT2JqZWN0W1widGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5saW1pdCA9IGpzb25PYmplY3RbXCJsaW1pdFwiXVxuICAgICAgICByZXN1bHQuZGV0ZWN0QWxsID0ganNvbk9iamVjdFtcImRldGVjdEFsbFwiXVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluaXRSZXNwb25zZSB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgICBlcnJvcj86IEluaXRFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW5pdFJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW5pdFJlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LnN1Y2Nlc3MgPSBqc29uT2JqZWN0W1wic3VjY2Vzc1wiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBJbml0RXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9FbmNvZGVyQ29tcGxldGlvbiB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZpZGVvRW5jb2RlckNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWaWRlb0VuY29kZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LnN1Y2Nlc3MgPSBqc29uT2JqZWN0W1wic3VjY2Vzc1wiXVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbkRCUmVzcG9uc2Uge1xuICAgIGRhdGE/OiBhbnlcbiAgICBlcnJvcj86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb25EQlJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGVyc29uREJSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5kYXRhID0ganNvbk9iamVjdFtcImRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0ganNvbk9iamVjdFtcImVycm9yXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uQ29sb3IgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkQ6IDEwMCxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT05fVElUTEU6IDEwMSxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9CQUNLR1JPVU5EOiAxMDIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVDogMTAzLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NVQlRJVExFX0xBQkVMX1RFWFQ6IDEwNCxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMU19URVhUOiAxMDUsXG4gICAgQ0FNRVJBX1NDUkVFTl9TVFJPS0VfTk9STUFMOiAyMDAsXG4gICAgQ0FNRVJBX1NDUkVFTl9TVFJPS0VfQUNUSVZFOiAyMDEsXG4gICAgQ0FNRVJBX1NDUkVFTl9TRUNUT1JfVEFSR0VUOiAyMDIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TRUNUT1JfQUNUSVZFOiAyMDMsXG4gICAgQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX0JBQ0tHUk9VTkQ6IDIwNCxcbiAgICBDQU1FUkFfU0NSRUVOX0ZST05UX0hJTlRfTEFCRUxfVEVYVDogMjA1LFxuICAgIENBTUVSQV9TQ1JFRU5fQkFDS19ISU5UX0xBQkVMX0JBQ0tHUk9VTkQ6IDIwNixcbiAgICBDQU1FUkFfU0NSRUVOX0JBQ0tfSElOVF9MQUJFTF9URVhUOiAyMDcsXG4gICAgQ0FNRVJBX1NDUkVFTl9MSUdIVF9UT09MQkFSX1RJTlQ6IDIwOCxcbiAgICBDQU1FUkFfU0NSRUVOX0RBUktfVE9PTEJBUl9USU5UOiAyMDksXG4gICAgUkVUUllfU0NSRUVOX0JBQ0tHUk9VTkQ6IDMwMCxcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX0JBQ0tHUk9VTkQ6IDMwMSxcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX1RJVExFOiAzMDIsXG4gICAgUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFQ6IDMwMyxcbiAgICBSRVRSWV9TQ1JFRU5fU1VCVElUTEVfTEFCRUxfVEVYVDogMzA0LFxuICAgIFJFVFJZX1NDUkVFTl9ISU5UX0xBQkVMU19URVhUOiAzMDUsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fQkFDS0dST1VORDogNDAwLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTOiA0MDEsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fVElUTEU6IDQwMixcbiAgICBTVUNDRVNTX1NDUkVFTl9CQUNLR1JPVU5EOiA1MDAsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlHcm91cE5hbWUgPSB7XG4gICAgSU1BR0VfQ0hBUkFDVEVSSVNUSUNTOiAxLFxuICAgIEhFQURfU0laRV9BTkRfUE9TSVRJT046IDIsXG4gICAgRkFDRV9RVUFMSVRZOiAzLFxuICAgIEVZRVNfQ0hBUkFDVEVSSVNUSUNTOiA0LFxuICAgIFNIQURPV1NfQU5EX0xJR0hUTklORzogNSxcbiAgICBQT1NFX0FORF9FWFBSRVNTSU9OOiA2LFxuICAgIEhFQURfT0NDTFVTSU9OOiA3LFxuICAgIEJBQ0tHUk9VTkQ6IDgsXG4gICAgVU5LTk9XTjogOSxcbn1cblxuZXhwb3J0IGNvbnN0IExpY2Vuc2luZ1Jlc3VsdENvZGUgPSB7XG4gICAgT0s6IDAsXG4gICAgTElDRU5TRV9DT1JSVVBURUQ6IDEsXG4gICAgSU5WQUxJRF9EQVRFOiAyLFxuICAgIElOVkFMSURfVkVSU0lPTjogMyxcbiAgICBJTlZBTElEX0RFVklDRV9JRDogNCxcbiAgICBJTlZBTElEX1NZU1RFTV9PUl9BUFBfSUQ6IDUsXG4gICAgTk9fQ0FQQUJJTElUSUVTOiA2LFxuICAgIE5PX0FVVEhFTlRJQ0lUWTogNyxcbiAgICBMSUNFTlNFX0FCU0VOVDogOCxcbiAgICBOT19JTlRFUk5FVDogOSxcbiAgICBOT19EQVRBQkFTRTogMTAsXG4gICAgREFUQUJBU0VfSU5DT1JSRUNUOiAxMSxcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzRXJyb3JDb2RlID0ge1xuICAgIElNQUdFX0VNUFRZOiAwLFxuICAgIEZSX0ZBQ0VfTk9UX0RFVEVDVEVEOiAxLFxuICAgIEZBQ0VSX05PX0xJQ0VOU0U6IDIsXG4gICAgRkFDRVJfSVNfTk9UX0lOSVRJQUxJWkVEOiAzLFxuICAgIEZBQ0VSX0NPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogNCxcbiAgICBGQUNFUl9DT01NQU5EX1BBUkFNU19SRUFEX0VSUk9SOiA1LFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiA2LFxuICAgIFJFUVVFU1RfRkFJTEVEOiA3LFxuICAgIEFQSV9DQUxMX0ZBSUxFRDogOCxcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYVBvc2l0aW9uID0ge1xuICAgIEZST05UOiAwLFxuICAgIEJBQ0s6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBJbml0RXJyb3JDb2RlID0ge1xuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDAsXG4gICAgTUlTU0lOR19DT1JFOiAxLFxuICAgIElOVEVSTkFMX0NPUkVfRVJST1I6IDIsXG4gICAgQkFEX0xJQ0VOU0U6IDMsXG4gICAgVU5BVkFJTEFCTEU6IDQsXG4gICAgQ09OVEVYVF9JU19OVUxMOiAxMDAsXG4gICAgUkVTT1VSQ0VfREFUX0FCU0VOVDogMTAxLFxuICAgIExJQ0VOU0VfSVNfTlVMTDogMTAyLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTdGF0dXMgPSB7XG4gICAgUEFTU0VEOiAwLFxuICAgIFVOS05PV046IDEsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc0Vycm9yQ29kZSA9IHtcbiAgICBOT1RfSU5JVElBTElaRUQ6IDAsXG4gICAgTk9fTElDRU5TRTogMSxcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IDIsXG4gICAgU0VTU0lPTl9TVEFSVF9GQUlMRUQ6IDMsXG4gICAgQ0FOQ0VMTEVEOiA0LFxuICAgIFBST0NFU1NJTkdfVElNRU9VVDogNSxcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogNixcbiAgICBQUk9DRVNTSU5HX0ZSQU1FX0ZBSUxFRDogNyxcbiAgICBBUFBMSUNBVElPTl9JTkFDVElWRTogOCxcbiAgICBDT05URVhUX0lTX05VTEw6IDksXG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogMTAsXG4gICAgWk9PTV9OT1RfU1VQUE9SVEVEOiAxMSxcbiAgICBDQU1FUkFfTk9fUEVSTUlTU0lPTjogMTIsXG4gICAgQ0FNRVJBX05PVF9BVkFJTEFCTEU6IDEzLFxufVxuXG5leHBvcnQgY29uc3QgUmVjb3JkaW5nUHJvY2VzcyA9IHtcbiAgICBBU1lOQ0hST05PVVNfVVBMT0FEOiAwLFxuICAgIFNZTkNIUk9OT1VTX1VQTE9BRDogMSxcbiAgICBOT1RfVVBMT0FEOiAyLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNCYWNrZW5kRXJyb3JDb2RlID0ge1xuICAgIEZSX0ZBQ0VfTk9UX0RFVEVDVEVEOiAyLFxuICAgIEZBQ0VSX05PX0xJQ0VOU0U6IDIwMCxcbiAgICBGQUNFUl9JU19OT1RfSU5JVElBTElaRUQ6IDIwMSxcbiAgICBGQUNFUl9DT01NQU5EX0lTX05PVF9TVVBQT1JURUQ6IDIwMixcbiAgICBGQUNFUl9DT01NQU5EX1BBUkFNU19SRUFEX0VSUk9SOiAyMDMsXG4gICAgVU5ERUZJTkVEOiAtMSxcbn1cblxuZXhwb3J0IGNvbnN0IE1hdGNoRmFjZXNFcnJvckNvZGUgPSB7XG4gICAgSU1BR0VfRU1QVFk6IDAsXG4gICAgRkFDRV9OT1RfREVURUNURUQ6IDEsXG4gICAgTEFORE1BUktTX05PVF9ERVRFQ1RFRDogMixcbiAgICBGQUNFX0FMSUdORVJfRkFJTEVEOiAzLFxuICAgIERFU0NSSVBUT1JfRVhUUkFDVE9SX0VSUk9SOiA0LFxuICAgIElNQUdFU19DT1VOVF9MSU1JVF9FWENFRURFRDogNSxcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IDYsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IDcsXG4gICAgTk9fTElDRU5TRTogOCxcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljTmFtZSA9IHtcbiAgICBJTUFHRV9XSURUSDogXCJJbWFnZVdpZHRoXCIsXG4gICAgSU1BR0VfSEVJR0hUOiBcIkltYWdlSGVpZ2h0XCIsXG4gICAgSU1BR0VfV0lEVEhfVE9fSEVJR0hUOiBcIkltYWdlV2lkdGhUb0hlaWdodFwiLFxuICAgIElNQUdFX0NIQU5ORUxTX05VTUJFUjogXCJJbWFnZUNoYW5uZWxzTnVtYmVyXCIsXG4gICAgQVJUX0ZBQ0U6IFwiQXJ0RmFjZVwiLFxuICAgIFBBRERJTkdfUkFUSU86IFwiUGFkZGluZ1JhdGlvXCIsXG4gICAgRkFDRV9NSURfUE9JTlRfSE9SSVpPTlRBTF9QT1NJVElPTjogXCJGYWNlTWlkUG9pbnRIb3Jpem9udGFsUG9zaXRpb25cIixcbiAgICBGQUNFX01JRF9QT0lOVF9WRVJUSUNBTF9QT1NJVElPTjogXCJGYWNlTWlkUG9pbnRWZXJ0aWNhbFBvc2l0aW9uXCIsXG4gICAgSEVBRF9XSURUSF9SQVRJTzogXCJIZWFkV2lkdGhSYXRpb1wiLFxuICAgIEhFQURfSEVJR0hUX1JBVElPOiBcIkhlYWRIZWlnaHRSYXRpb1wiLFxuICAgIEVZRVNfRElTVEFOQ0U6IFwiRXllc0Rpc3RhbmNlXCIsXG4gICAgWUFXOiBcIllhd1wiLFxuICAgIFBJVENIOiBcIlBpdGNoXCIsXG4gICAgUk9MTDogXCJSb2xsXCIsXG4gICAgQkxVUl9MRVZFTDogXCJCbHVyTGV2ZWxcIixcbiAgICBOT0lTRV9MRVZFTDogXCJOb2lzZUxldmVsXCIsXG4gICAgVU5OQVRVUkFMX1NLSU5fVE9ORTogXCJVbm5hdHVyYWxTa2luVG9uZVwiLFxuICAgIEZBQ0VfRFlOQU1JQ19SQU5HRTogXCJGYWNlRHluYW1pY1JhbmdlXCIsXG4gICAgRVlFX1JJR0hUX0NMT1NFRDogXCJFeWVSaWdodENsb3NlZFwiLFxuICAgIEVZRV9MRUZUX0NMT1NFRDogXCJFeWVMZWZ0Q2xvc2VkXCIsXG4gICAgRVlFX1JJR0hUX09DQ0xVREVEOiBcIkV5ZVJpZ2h0T2NjbHVkZWRcIixcbiAgICBFWUVfTEVGVF9PQ0NMVURFRDogXCJFeWVMZWZ0T2NjbHVkZWRcIixcbiAgICBFWUVTX1JFRDogXCJFeWVzUmVkXCIsXG4gICAgRVlFX1JJR0hUX0NPVkVSRURfV0lUSF9IQUlSOiBcIkV5ZVJpZ2h0Q292ZXJlZFdpdGhIYWlyXCIsXG4gICAgRVlFX0xFRlRfQ09WRVJFRF9XSVRIX0hBSVI6IFwiRXllTGVmdENvdmVyZWRXaXRoSGFpclwiLFxuICAgIE9GRl9HQVpFOiBcIk9mZkdhemVcIixcbiAgICBUT09fREFSSzogXCJUb29EYXJrXCIsXG4gICAgVE9PX0xJR0hUOiBcIlRvb0xpZ2h0XCIsXG4gICAgRkFDRV9HTEFSRTogXCJGYWNlR2xhcmVcIixcbiAgICBTSEFET1dTX09OX0ZBQ0U6IFwiU2hhZG93c09uRmFjZVwiLFxuICAgIFNIT1VMREVSU19QT1NFOiBcIlNob3VsZGVyc1Bvc2VcIixcbiAgICBFWFBSRVNTSU9OX0xFVkVMOiBcIkV4cHJlc3Npb25MZXZlbFwiLFxuICAgIE1PVVRIX09QRU46IFwiTW91dGhPcGVuXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBEQVJLX0dMQVNTRVM6IFwiRGFya0dsYXNzZXNcIixcbiAgICBSRUZMRUNUSU9OX09OX0dMQVNTRVM6IFwiUmVmbGVjdGlvbk9uR2xhc3Nlc1wiLFxuICAgIEZSQU1FU19UT09fSEVBVlk6IFwiRnJhbWVzVG9vSGVhdnlcIixcbiAgICBGQUNFX09DQ0xVREVEOiBcIkZhY2VPY2NsdWRlZFwiLFxuICAgIEhFQURfQ09WRVJJTkc6IFwiSGVhZENvdmVyaW5nXCIsXG4gICAgRk9SRUhFQURfQ09WRVJJTkc6IFwiRm9yZWhlYWRDb3ZlcmluZ1wiLFxuICAgIFNUUk9OR19NQUtFVVA6IFwiU3Ryb25nTWFrZXVwXCIsXG4gICAgSEVBRF9QSE9ORVM6IFwiSGVhZHBob25lc1wiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIEJBQ0tHUk9VTkRfVU5JRk9STUlUWTogXCJCYWNrZ3JvdW5kVW5pZm9ybWl0eVwiLFxuICAgIFNIQURPV1NfT05fQkFDS0dST1VORDogXCJTaGFkb3dzT25CYWNrZ3JvdW5kXCIsXG4gICAgT1RIRVJfRkFDRVM6IFwiT3RoZXJGYWNlc1wiLFxuICAgIEJBQ0tHUk9VTkRfQ09MT1JfTUFUQ0g6IFwiQmFja2dyb3VuZENvbG9yTWF0Y2hcIixcbiAgICBVTktOT1dOOiBcIlVua25vd25cIixcbiAgICBJTUFHRV9DSEFSQUNURVJJU1RJQ19BTExfUkVDT01NRU5ERUQ6IFwiSW1hZ2VDaGFyYWN0ZXJpc3RpY1wiLFxuICAgIEhFQURfU0laRV9BTkRfUE9TSVRJT05fQUxMX1JFQ09NTUVOREVEOiBcIkhlYWRTaXplQW5kUG9zaXRpb25cIixcbiAgICBGQUNFX0lNQUdFX1FVQUxJVFlfQUxMX1JFQ09NTUVOREVEOiBcIkZhY2VJbWFnZVF1YWxpdHlcIixcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDU19BTExfUkVDT01NRU5ERUQ6IFwiRXllc0NoYXJhY3RlcmlzdGljc1wiLFxuICAgIFNIQURPV19BTkRfTElHSFRJTkdfQUxMX1JFQ09NTUVOREVEOiBcIlNoYWRvd3NBbmRMaWdodG5pbmdcIixcbiAgICBQT1NFX0FORF9FWFBSRVNTSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJQb3NlQW5kRXhwcmVzc2lvblwiLFxuICAgIEhFQURfT0NDTFVTSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJIZWFkT2NjbHVzaW9uXCIsXG4gICAgUVVBTElUWV9CQUNLR1JPVU5EX0FMTF9SRUNPTU1FTkRFRDogXCJRdWFsaXR5QmFja2dyb3VuZFwiLFxufVxuXG5leHBvcnQgY29uc3QgU2NyZWVuT3JpZW50YXRpb24gPSB7XG4gICAgUE9SVFJBSVQ6IDAsXG4gICAgTEFORFNDQVBFOiAxLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkZvbnQgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OOiAxMDAsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUw6IDEwMSxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9TVUJUSVRMRV9MQUJFTDogMTAyLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX01FU1NBR0VfTEFCRUxTOiAxMDMsXG4gICAgQ0FNRVJBX1NDUkVFTl9ISU5UX0xBQkVMOiAyMDAsXG4gICAgUkVUUllfU0NSRUVOX1JFVFJZX0JVVFRPTjogMzAwLFxuICAgIFJFVFJZX1NDUkVFTl9USVRMRV9MQUJFTDogMzAxLFxuICAgIFJFVFJZX1NDUkVFTl9TVUJUSVRMRV9MQUJFTDogMzAyLFxuICAgIFJFVFJZX1NDUkVFTl9ISU5UX0xBQkVMUzogMzAzLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOOiA0MDAsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc1NjZW5hcmlvID0ge1xuICAgIENST1BfQ0VOVFJBTF9GQUNFOiBcIkNyb3BDZW50cmFsRmFjZVwiLFxuICAgIENST1BfQUxMX0ZBQ0VTOiBcIkNyb3BBbGxGYWNlc1wiLFxuICAgIFRIVU1CTkFJTDogXCJUaHVtYm5haWxcIixcbiAgICBBVFRSSUJVVEVTX0FMTDogXCJBdHRyaWJ1dGVzQWxsXCIsXG4gICAgUVVBTElUWV9GVUxMOiBcIlF1YWxpdHlGdWxsXCIsXG4gICAgUVVBTElUWV9JQ0FPOiBcIlF1YWxpdHlJQ0FPXCIsXG4gICAgUVVBTElUWV9WSVNBX1NDSEVOR0VOOiBcIlF1YWxpdHlWaXNhU2NoZW5nZW5cIixcbiAgICBRVUFMSVRZX1ZJU0FfVVNBOiBcIlF1YWxpdHlWaXNhVVNBXCIsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1Byb2Nlc3NTdGF0dXMgPSB7XG4gICAgU1RBUlQ6IDAsXG4gICAgUFJFUEFSSU5HOiAxLFxuICAgIE5FV19TRVNTSU9OOiAyLFxuICAgIE5FWFRfU1RBR0U6IDMsXG4gICAgU0VDVE9SX0NIQU5HRUQ6IDQsXG4gICAgUFJPR1JFU1M6IDUsXG4gICAgTE9XX0JSSUdIVE5FU1M6IDYsXG4gICAgRklUX0ZBQ0U6IDcsXG4gICAgTU9WRV9BV0FZOiA4LFxuICAgIE1PVkVfQ0xPU0VSOiA5LFxuICAgIFRVUk5fSEVBRDogMTAsXG4gICAgUFJPQ0VTU0lORzogMTEsXG4gICAgRkFJTEVEOiAxMixcbiAgICBSRVRSWTogMTMsXG4gICAgU1VDQ0VTUzogMTQsXG59XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRJbWFnZUNyb3BBc3BlY3RSYXRpbyA9IHtcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fM1g0OiAwLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT180WDU6IDEsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzJYMzogMixcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fMVgxOiAzLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT183WDk6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1R5cGUgPSB7XG4gICAgQUNUSVZFOiAwLFxuICAgIFBBU1NJVkU6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1NraXBTdGVwID0ge1xuICAgIE9OQk9BUkRJTkdfU1RFUDogMCxcbiAgICBTVUNDRVNTX1NURVA6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlSZXN1bHRTdGF0dXMgPSB7XG4gICAgSU1BR0VfUVVBTElUWV9SRVNVTFRfU1RBVFVTX0ZBTFNFOiAwLFxuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19UUlVFOiAxLFxuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19VTkRFVEVSTUlORUQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVR5cGUgPSB7XG4gICAgUFJJTlRFRDogMSxcbiAgICBSRklEOiAyLFxuICAgIExJVkU6IDMsXG4gICAgRE9DVU1FTlRfV0lUSF9MSVZFOiA0LFxuICAgIEVYVEVSTkFMOiA1LFxuICAgIEdIT1NUX1BPUlRSQUlUOiA2LFxuICAgIEJBUkNPREU6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBGYWNlQ2FwdHVyZUVycm9yQ29kZSA9IHtcbiAgICBDQU5DRUw6IDAsXG4gICAgVElNRU9VVDogMSxcbiAgICBOT1RfSU5JVElBTElaRUQ6IDIsXG4gICAgU0VTU0lPTl9TVEFSVF9GQUlMRUQ6IDMsXG4gICAgQ0FNRVJBX05PVF9BVkFJTEFCTEU6IDQsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IDUsXG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogNixcbiAgICBDT05URVhUX0lTX05VTEw6IDcsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc0JhY2tlbmRFcnJvckNvZGUgPSB7XG4gICAgVU5ERUZJTkVEOiAtMSxcbiAgICBOT19MSUNFTlNFOiAyMDAsXG4gICAgTE9XX1FVQUxJVFk6IDIzMSxcbiAgICBUUkFDS19CUkVBSzogMjQ2LFxuICAgIENMT1NFRF9FWUVTX0RFVEVDVEVEOiAyMzAsXG4gICAgSElHSF9BU1lNTUVUUlk6IDIzMixcbiAgICBGQUNFX09WRVJfRU1PVElPTkFMOiAyMzMsXG4gICAgU1VOR0xBU1NFU19ERVRFQ1RFRDogMjM0LFxuICAgIFNNQUxMX0FHRTogMjM1LFxuICAgIEhFQUREUkVTU19ERVRFQ1RFRDogMjM2LFxuICAgIE1FRElDSU5FX01BU0tfREVURUNURUQ6IDIzOSxcbiAgICBPQ0NMVVNJT05fREVURUNURUQ6IDI0MCxcbiAgICBGT1JFSEVBRF9HTEFTU0VTX0RFVEVDVEVEOiAyNDIsXG4gICAgTU9VVEhfT1BFTkVEOiAyNDMsXG4gICAgQVJUX01BU0tfREVURUNURUQ6IDI0NCxcbiAgICBOT1RfTUFUQ0hFRDogMjM3LFxuICAgIElNQUdFU19DT1VOVF9MSU1JVF9FWENFRURFRDogMjM4LFxuICAgIEVMRUNUUk9OSUNfREVWSUNFX0RFVEVDVEVEOiAyNDUsXG4gICAgV1JPTkdfR0VPOiAyNDcsXG4gICAgV1JPTkdfT0Y6IDI0OCxcbiAgICBXUk9OR19WSUVXOiAyNDksXG59XG5cbmV4cG9ydCBjb25zdCBQcm9jZXNzaW5nTW9kZSA9IHtcbiAgICBPTkxJTkU6IDAsXG4gICAgT0ZGTElORTogMSxcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6YXRpb25JbWFnZSA9IHtcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9DTE9TRV9CVVRUT046IDEwMCxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9JTExVTUlOQVRJT046IDEwMSxcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9BQ0NFU1NPUklFUzogMTAyLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0NBTUVSQV9MRVZFTDogMTAzLFxuICAgIENBTUVSQV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiAyMDAsXG4gICAgQ0FNRVJBX1NDUkVFTl9MSUdIVF9PTl9CVVRUT046IDIwMSxcbiAgICBDQU1FUkFfU0NSRUVOX0xJR0hUX09GRl9CVVRUT046IDIwMixcbiAgICBDQU1FUkFfU0NSRUVOX1NXSVRDSF9CVVRUT046IDIwMyxcbiAgICBSRVRSWV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiAzMDAsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfRU5WSVJPTk1FTlQ6IDMwMSxcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9TVUJKRUNUOiAzMDIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OOiA0MDAsXG4gICAgU1VDQ0VTU19TQ1JFRU5fSU1BR0U6IDUwMCxcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQXR0cmlidXRlID0ge1xuICAgIEFHRTogXCJBZ2VcIixcbiAgICBFWUVfUklHSFQ6IFwiRXllUmlnaHRcIixcbiAgICBFWUVfTEVGVDogXCJFeWVMZWZ0XCIsXG4gICAgRU1PVElPTjogXCJFbW90aW9uXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBHTEFTU0VTOiBcIkdsYXNzZXNcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBNT1VUSDogXCJNb3V0aFwiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIE9DQ0xVU0lPTjogXCJPY2NsdXNpb25cIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURQSE9ORVM6IFwiSGVhZHBob25lc1wiLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEZvbnRTdHlsZSxcbiAgIEN1c3RvbWl6YXRpb25Db2xvcixcbiAgIEltYWdlUXVhbGl0eUdyb3VwTmFtZSxcbiAgIExpY2Vuc2luZ1Jlc3VsdENvZGUsXG4gICBEZXRlY3RGYWNlc0Vycm9yQ29kZSxcbiAgIENhbWVyYVBvc2l0aW9uLFxuICAgSW5pdEVycm9yQ29kZSxcbiAgIExpdmVuZXNzU3RhdHVzLFxuICAgTGl2ZW5lc3NFcnJvckNvZGUsXG4gICBSZWNvcmRpbmdQcm9jZXNzLFxuICAgRGV0ZWN0RmFjZXNCYWNrZW5kRXJyb3JDb2RlLFxuICAgTWF0Y2hGYWNlc0Vycm9yQ29kZSxcbiAgIEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljTmFtZSxcbiAgIFNjcmVlbk9yaWVudGF0aW9uLFxuICAgQ3VzdG9taXphdGlvbkZvbnQsXG4gICBEZXRlY3RGYWNlc1NjZW5hcmlvLFxuICAgTGl2ZW5lc3NQcm9jZXNzU3RhdHVzLFxuICAgT3V0cHV0SW1hZ2VDcm9wQXNwZWN0UmF0aW8sXG4gICBMaXZlbmVzc1R5cGUsXG4gICBMaXZlbmVzc1NraXBTdGVwLFxuICAgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzLFxuICAgSW1hZ2VUeXBlLFxuICAgRmFjZUNhcHR1cmVFcnJvckNvZGUsXG4gICBMaXZlbmVzc0JhY2tlbmRFcnJvckNvZGUsXG4gICBQcm9jZXNzaW5nTW9kZSxcbiAgIEN1c3RvbWl6YXRpb25JbWFnZSxcbiAgIERldGVjdEZhY2VzQXR0cmlidXRlLFxufVxuXG4vKipcbiAqIEBuYW1lIEZhY2VTREtcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyBhIHdyYXBwZXIgY29yZG92YSBwbHVnaW4gZm9yIFJlZ3VsYWBzIEZhY2UgU0RLLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmFjZVNESyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZS1hcGkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIEZhY2VTREs6IEZhY2VTREspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0ZhY2VTREsnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZhY2UtYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdGYWNlU0RLUGx1Z2luLkZhY2VTREsnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0ZhY2VBcGktQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhY2VTREsgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRTZXJ2aWNlVXJsKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFNlcnZpY2VVcmwodXJsOiBzdHJpbmcgfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSBkaWN0aW9uYXJ5XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRMb2NhbGl6YXRpb25EaWN0aW9uYXJ5KGRpY3Rpb25hcnk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHNldHMgaGVhZGVycyBmb3IgaHR0cCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIHN0cmluZz59IGhlYWRlcnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJlcXVlc3RIZWFkZXJzKGhlYWRlcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgVWlDb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0N1c3RvbWl6YXRpb259IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0Q3VzdG9taXphdGlvbihjb25maWc6IEN1c3RvbWl6YXRpb24pOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtJbml0Q29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemUoY29uZmlnOiBJbml0Q29uZmlnIHwgbnVsbCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0aWFsaXplKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RmFjZUNhcHR1cmVDb25maWd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgICBzdGFydEZhY2VDYXB0dXJlKGNvbmZpZzogRmFjZUNhcHR1cmVDb25maWcgfCBudWxsKTogT2JzZXJ2YWJsZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wRmFjZUNhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtMaXZlbmVzc0NvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxuICAgIHN0YXJ0TGl2ZW5lc3MoY29uZmlnOiBMaXZlbmVzc0NvbmZpZyB8IG51bGwpOiBPYnNlcnZhYmxlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BMaXZlbmVzcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdGNoRmFjZXNSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtNYXRjaEZhY2VzQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIG1hdGNoRmFjZXMocmVxdWVzdDogTWF0Y2hGYWNlc1JlcXVlc3QsIGNvbmZpZzogTWF0Y2hGYWNlc0NvbmZpZyB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0NvbXBhcmVkRmFjZXNQYWlyW119IGZhY2VzUGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2ltaWxhcml0eVRocmVzaG9sZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3BsaXRDb21wYXJlZEZhY2VzKGZhY2VzUGFpcnM6IENvbXBhcmVkRmFjZXNQYWlyW10sIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGV0ZWN0RmFjZXNSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZXRlY3RGYWNlcyhyZXF1ZXN0OiBEZXRlY3RGYWNlc1JlcXVlc3QpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IGdyb3VwSWRzXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBtZXRhZGF0YVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlUGVyc29uKG5hbWU6IHN0cmluZywgZ3JvdXBJZHM6IHN0cmluZ1tdIHwgbnVsbCwgbWV0YWRhdGE6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtQZXJzb259IHBlcnNvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlUGVyc29uKHBlcnNvbjogUGVyc29uKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWxldGVQZXJzb24ocGVyc29uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uKHBlcnNvbklkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcGFyYW0ge0ltYWdlVXBsb2FkfSBpbWFnZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUGVyc29uSW1hZ2UocGVyc29uSWQ6IHN0cmluZywgaW1hZ2U6IEltYWdlVXBsb2FkKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZVBlcnNvbkltYWdlKHBlcnNvbklkOiBzdHJpbmcsIGltYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUlkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25JbWFnZShwZXJzb25JZDogc3RyaW5nLCBpbWFnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlcyhwZXJzb25JZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2VzRm9yUGFnZShwZXJzb25JZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBtZXRhZGF0YVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlR3JvdXAobmFtZTogc3RyaW5nLCBtZXRhZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BlcnNvbkdyb3VwfSBncm91cFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlR3JvdXAoZ3JvdXA6IFBlcnNvbkdyb3VwKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcGFyYW0ge0VkaXRHcm91cFBlcnNvbnNSZXF1ZXN0fSBlZGl0R3JvdXBQZXJzb25zUmVxdWVzdFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZWRpdFBlcnNvbnNJbkdyb3VwKGdyb3VwSWQ6IHN0cmluZywgZWRpdEdyb3VwUGVyc29uc1JlcXVlc3Q6IEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cChncm91cElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cHNGb3JQYWdlKHBhZ2U6IG51bWJlciwgc2l6ZTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25Hcm91cHMocGVyc29uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkdyb3Vwc0ZvclBhZ2UocGVyc29uSWQ6IHN0cmluZywgcGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uc0luR3JvdXAoZ3JvdXBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25zSW5Hcm91cEZvclBhZ2UoZ3JvdXBJZDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcik6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoUGVyc29uUmVxdWVzdH0gc2VhcmNoUGVyc29uUmVxdWVzdFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VhcmNoUGVyc29uKHNlYXJjaFBlcnNvblJlcXVlc3Q6IFNlYXJjaFBlcnNvblJlcXVlc3QpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG5cbn0iXX0=