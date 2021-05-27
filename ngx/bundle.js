'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FaceCaptureError = /** @class */ (function () {
    function FaceCaptureError() {
    }
    FaceCaptureError.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new FaceCaptureError;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return FaceCaptureError;
}());
var FaceProcessorError = /** @class */ (function () {
    function FaceProcessorError() {
    }
    FaceProcessorError.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new FaceProcessorError;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return FaceProcessorError;
}());
var LivenessError = /** @class */ (function () {
    function LivenessError() {
    }
    LivenessError.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new LivenessError;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return LivenessError;
}());
var MatchFacesError = /** @class */ (function () {
    function MatchFacesError() {
    }
    MatchFacesError.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new MatchFacesError;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return MatchFacesError;
}());
var AgeRange = /** @class */ (function () {
    function AgeRange() {
    }
    AgeRange.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new AgeRange;
        result.high = jsonObject["high"];
        result.low = jsonObject["low"];
        return result;
    };
    return AgeRange;
}());
var ComparedFace = /** @class */ (function () {
    function ComparedFace() {
    }
    ComparedFace.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new ComparedFace;
        result.tag = jsonObject["tag"];
        result.imageType = jsonObject["imageType"];
        result.position = jsonObject["position"];
        return result;
    };
    return ComparedFace;
}());
var ComparedFacesPair = /** @class */ (function () {
    function ComparedFacesPair() {
    }
    ComparedFacesPair.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new ComparedFacesPair;
        result.first = ComparedFace.fromJson(jsonObject["first"]);
        result.second = ComparedFace.fromJson(jsonObject["second"]);
        result.similarity = jsonObject["similarity"];
        result.error = MatchFacesError.fromJson(jsonObject["error"]);
        return result;
    };
    return ComparedFacesPair;
}());
var Ethnicity = /** @class */ (function () {
    function Ethnicity() {
    }
    Ethnicity.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Ethnicity;
        result.confidence = jsonObject["confidence"];
        result.value = jsonObject["value"];
        return result;
    };
    return Ethnicity;
}());
var FaceCaptureResponse = /** @class */ (function () {
    function FaceCaptureResponse() {
    }
    FaceCaptureResponse.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new FaceCaptureResponse;
        result.error = FaceCaptureError.fromJson(jsonObject["error"]);
        result.image = Image.fromJson(jsonObject["image"]);
        return result;
    };
    return FaceCaptureResponse;
}());
var Gender = /** @class */ (function () {
    function Gender() {
    }
    Gender.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Gender;
        result.confidence = jsonObject["confidence"];
        result.value = jsonObject["value"];
        return result;
    };
    return Gender;
}());
var Landmark = /** @class */ (function () {
    function Landmark() {
    }
    Landmark.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Landmark;
        result.type = jsonObject["type"];
        result.x = jsonObject["x"];
        result.y = jsonObject["y"];
        return result;
    };
    return Landmark;
}());
var LivenessResponse = /** @class */ (function () {
    function LivenessResponse() {
    }
    LivenessResponse.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new LivenessResponse;
        result.bitmap = jsonObject["bitmap"];
        result.liveness = jsonObject["liveness"];
        result.error = LivenessError.fromJson(jsonObject["error"]);
        return result;
    };
    return LivenessResponse;
}());
var MatchFacesResponse = /** @class */ (function () {
    function MatchFacesResponse() {
    }
    MatchFacesResponse.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new MatchFacesResponse;
        result.error = FaceProcessorError.fromJson(jsonObject["error"]);
        result.matchedFaces = [];
        if (jsonObject["matchedFaces"] != null) {
            for (var i in jsonObject["matchedFaces"]) {
                result.matchedFaces.push(ComparedFacesPair.fromJson(jsonObject["matchedFaces"][i]));
            }
        }
        result.unmatchedFaces = [];
        if (jsonObject["unmatchedFaces"] != null) {
            for (var i in jsonObject["unmatchedFaces"]) {
                result.unmatchedFaces.push(ComparedFacesPair.fromJson(jsonObject["unmatchedFaces"][i]));
            }
        }
        return result;
    };
    return MatchFacesResponse;
}());
var Image = /** @class */ (function () {
    function Image() {
    }
    Image.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new Image;
        result.imageType = jsonObject["imageType"];
        result.tag = jsonObject["tag"];
        result.bitmap = jsonObject["bitmap"];
        return result;
    };
    return Image;
}());
var LivenessRequest = /** @class */ (function () {
    function LivenessRequest() {
    }
    LivenessRequest.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new LivenessRequest;
        result.normalImageData = [];
        if (jsonObject["normalImageData"] != null) {
            for (var i in jsonObject["normalImageData"]) {
                result.normalImageData.push(jsonObject["normalImageData"][i]);
            }
        }
        result.scaledImageData = [];
        if (jsonObject["scaledImageData"] != null) {
            for (var i in jsonObject["scaledImageData"]) {
                result.scaledImageData.push(jsonObject["scaledImageData"][i]);
            }
        }
        result.requestBody = [];
        if (jsonObject["requestBody"] != null) {
            for (var i in jsonObject["requestBody"]) {
                result.requestBody.push(jsonObject["requestBody"][i]);
            }
        }
        result.guid = jsonObject["guid"];
        return result;
    };
    return LivenessRequest;
}());
var MatchFacesRequest = /** @class */ (function () {
    function MatchFacesRequest() {
    }
    MatchFacesRequest.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new MatchFacesRequest;
        result.similarityThreshold = jsonObject["similarityThreshold"];
        result.images = [];
        if (jsonObject["images"] != null) {
            for (var i in jsonObject["images"]) {
                result.images.push(Image.fromJson(jsonObject["images"][i]));
            }
        }
        result.customMetadata = jsonObject["customMetadata"];
        return result;
    };
    return MatchFacesRequest;
}());
var eFaceRProcessorErrorCodes = {
    FR_IMAGE_EMPTY: 1,
    FR_FACE_NOT_DETECTED: 2,
    FR_LANDMARKS_NOT_DETECTED: 3,
    FR_FACE_ALIGHNER_FAILED: 4,
    FR_DESCRIPTOR_EXTRACTOR_ERROR: 5,
    SERVER_RESPONSE_IS_EMPTY: 1001,
    RGLFaceProcessorResultCodeNoLicense: 200,
    RGLFaceProcessorResultCodeIsNotInitialized: 201,
    RGLFaceProcessorResultCodeCommandIsNotSupported: 202,
    RGLFaceProcessorResultCodeCommandParamsReadError: 203,
};
var eInputFaceType = {
    ift_DocumentPrinted: 1,
    ift_DocumentRFID: 2,
    ift_Live: 3,
    ift_LiveWithDoc: 4,
};
var FaceCaptureResultCodes = {
    CANCEL: 1,
    CAMERA_NOT_AVAILABLE: 2,
    CAMERA_NO_PERMISSION: 3,
    IN_PROGRESS_ALREADY: 4,
};
var LivenessErrorCode = {
    INTERNAL_ERROR: 1000,
    SERVER_ERROR: 1001,
    ZOOM_NOT_SUPPORTED: 1002,
    CANCELLED: 600,
    PROCESSING_TIMEOUT: 601,
    SERVER_RESPONSE_IS_EMPTY: 602,
    PROCESSING_FAILED: 603,
    PROCESSING_ATTEMPT_ENDED: 604,
};
var LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
};
var Enum = {
    eFaceRProcessorErrorCodes: eFaceRProcessorErrorCodes,
    eInputFaceType: eInputFaceType,
    FaceCaptureResultCodes: FaceCaptureResultCodes,
    LivenessErrorCode: LivenessErrorCode,
    LivenessStatus: LivenessStatus,
};
var FaceApi = /** @class */ (function (_super) {
    tslib.__extends(FaceApi, _super);
    function FaceApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceApi.prototype.getServiceUrl = function () { return core.cordova(this, "getServiceUrl", {}, arguments); };
    FaceApi.prototype.startLiveness = function () { return core.cordova(this, "startLiveness", {}, arguments); };
    FaceApi.prototype.getFaceSdkVersion = function () { return core.cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceApi.prototype.presentFaceCaptureActivity = function () { return core.cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceApi.prototype.stopFaceCaptureActivity = function () { return core.cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceApi.prototype.stopLivenessProcessing = function () { return core.cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceApi.prototype.presentFaceCaptureActivityByCameraId = function (cameraId) { return core.cordova(this, "presentFaceCaptureActivityByCameraId", {}, arguments); };
    FaceApi.prototype.startLivenessByCameraId = function (cameraId) { return core.cordova(this, "startLivenessByCameraId", {}, arguments); };
    FaceApi.prototype.setServiceUrl = function (url) { return core.cordova(this, "setServiceUrl", {}, arguments); };
    FaceApi.prototype.matchFaces = function (request) { return core.cordova(this, "matchFaces", {}, arguments); };
    FaceApi.pluginName = "Face";
    FaceApi.plugin = "cordova-plugin-face-api";
    FaceApi.pluginRef = "Face";
    FaceApi.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceApi.platforms = ["Android", "iOS"];
    FaceApi.decorators = [
        { type: core$1.Injectable }
    ];
    return FaceApi;
}(core.IonicNativePlugin));

exports.AgeRange = AgeRange;
exports.ComparedFace = ComparedFace;
exports.ComparedFacesPair = ComparedFacesPair;
exports.Enum = Enum;
exports.Ethnicity = Ethnicity;
exports.FaceApi = FaceApi;
exports.FaceCaptureError = FaceCaptureError;
exports.FaceCaptureResponse = FaceCaptureResponse;
exports.FaceCaptureResultCodes = FaceCaptureResultCodes;
exports.FaceProcessorError = FaceProcessorError;
exports.Gender = Gender;
exports.Image = Image;
exports.Landmark = Landmark;
exports.LivenessError = LivenessError;
exports.LivenessErrorCode = LivenessErrorCode;
exports.LivenessRequest = LivenessRequest;
exports.LivenessResponse = LivenessResponse;
exports.LivenessStatus = LivenessStatus;
exports.MatchFacesError = MatchFacesError;
exports.MatchFacesRequest = MatchFacesRequest;
exports.MatchFacesResponse = MatchFacesResponse;
exports.eFaceRProcessorErrorCodes = eFaceRProcessorErrorCodes;
exports.eInputFaceType = eInputFaceType;
