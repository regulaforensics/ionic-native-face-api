import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
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
export { FaceCaptureError };
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
export { FaceProcessorError };
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
export { LivenessError };
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
export { MatchFacesError };
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
export { AgeRange };
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
export { ComparedFace };
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
export { ComparedFacesPair };
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
export { Ethnicity };
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
export { FaceCaptureResponse };
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
export { Gender };
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
export { Landmark };
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
export { LivenessResponse };
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
export { MatchFacesResponse };
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
export { Image };
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
export { LivenessRequest };
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
export { MatchFacesRequest };
export var eFaceRProcessorErrorCodes = {
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
export var eInputFaceType = {
    ift_DocumentPrinted: 1,
    ift_DocumentRFID: 2,
    ift_Live: 3,
    ift_LiveWithDoc: 4,
};
export var FaceCaptureResultCodes = {
    CANCEL: 1,
    CAMERA_NOT_AVAILABLE: 2,
    CAMERA_NO_PERMISSION: 3,
    IN_PROGRESS_ALREADY: 4,
};
export var LivenessErrorCode = {
    INTERNAL_ERROR: 1000,
    SERVER_ERROR: 1001,
    ZOOM_NOT_SUPPORTED: 1002,
    CANCELLED: 600,
    PROCESSING_TIMEOUT: 601,
    SERVER_RESPONSE_IS_EMPTY: 602,
    PROCESSING_FAILED: 603,
    PROCESSING_ATTEMPT_ENDED: 604,
};
export var LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
};
export var Enum = {
    eFaceRProcessorErrorCodes: eFaceRProcessorErrorCodes,
    eInputFaceType: eInputFaceType,
    FaceCaptureResultCodes: FaceCaptureResultCodes,
    LivenessErrorCode: LivenessErrorCode,
    LivenessStatus: LivenessStatus,
};
var FaceApi = /** @class */ (function (_super) {
    __extends(FaceApi, _super);
    function FaceApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceApi.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceApi.prototype.startLiveness = function () { return cordova(this, "startLiveness", {}, arguments); };
    FaceApi.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceApi.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceApi.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceApi.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceApi.prototype.presentFaceCaptureActivityByCameraId = function (cameraId) { return cordova(this, "presentFaceCaptureActivityByCameraId", {}, arguments); };
    FaceApi.prototype.startLivenessByCameraId = function (cameraId) { return cordova(this, "startLivenessByCameraId", {}, arguments); };
    FaceApi.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceApi.prototype.matchFaces = function (request) { return cordova(this, "matchFaces", {}, arguments); };
    FaceApi.pluginName = "Face";
    FaceApi.plugin = "cordova-plugin-face-api";
    FaceApi.pluginRef = "Face";
    FaceApi.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceApi.platforms = ["Android", "iOS"];
    FaceApi.decorators = [
        { type: Injectable }
    ];
    return FaceApi;
}(IonicNativePlugin));
export { FaceApi };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2UtYXBpL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOzs7O0lBTzdELHlCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUE7UUFFbkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzsyQkFoQkw7Ozs7OztJQXVCVywyQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFBO1FBRXJDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7NkJBL0JMOzs7Ozs7SUFzQ1csc0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUE7UUFFaEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFD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SUFRakIsNENBQTBCO0lBUTFCLHlDQUF1QjtJQVF2Qix3Q0FBc0I7SUFTdEIsc0RBQW9DLGFBQUMsUUFBZ0I7SUFTckQseUNBQXVCLGFBQUMsUUFBZ0I7SUFTeEMsK0JBQWEsYUFBQyxHQUFXO0lBU3pCLDRCQUFVLGFBQUMsT0FBMEI7Ozs7Ozs7Z0JBcEZ4QyxVQUFVOztrQkFqWFg7RUFrWDZCLGlCQUFpQjtTQUFqQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUVycm9yIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlRXJyb3Ige1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVFcnJvclxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZVByb2Nlc3NvckVycm9yIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VQcm9jZXNzb3JFcnJvciB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlUHJvY2Vzc29yRXJyb3JcblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzRXJyb3Ige1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NFcnJvciB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0Vycm9yXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRXJyb3Ige1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0Vycm9yIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNFcnJvclxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWdlUmFuZ2Uge1xuICAgIGhpZ2g/OiBudW1iZXJcbiAgICBsb3c/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQWdlUmFuZ2Uge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQWdlUmFuZ2VcblxuICAgICAgICByZXN1bHQuaGlnaCA9IGpzb25PYmplY3RbXCJoaWdoXCJdXG4gICAgICAgIHJlc3VsdC5sb3cgPSBqc29uT2JqZWN0W1wibG93XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBhcmVkRmFjZSB7XG4gICAgdGFnPzogc3RyaW5nXG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgcG9zaXRpb24/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvbXBhcmVkRmFjZVxuXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5wb3NpdGlvbiA9IGpzb25PYmplY3RbXCJwb3NpdGlvblwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wYXJlZEZhY2VzUGFpciB7XG4gICAgZmlyc3Q/OiBDb21wYXJlZEZhY2VcbiAgICBzZWNvbmQ/OiBDb21wYXJlZEZhY2VcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgZXJyb3I/OiBNYXRjaEZhY2VzRXJyb3JcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogQ29tcGFyZWRGYWNlc1BhaXIge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGFyZWRGYWNlc1BhaXJcblxuICAgICAgICByZXN1bHQuZmlyc3QgPSBDb21wYXJlZEZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZpcnN0XCJdKVxuICAgICAgICByZXN1bHQuc2Vjb25kID0gQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWNvbmRcIl0pXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gTWF0Y2hGYWNlc0Vycm9yLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRXRobmljaXR5IHtcbiAgICBjb25maWRlbmNlPzogbnVtYmVyXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRXRobmljaXR5IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEV0aG5pY2l0eVxuXG4gICAgICAgIHJlc3VsdC5jb25maWRlbmNlID0ganNvbk9iamVjdFtcImNvbmZpZGVuY2VcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlUmVzcG9uc2Uge1xuICAgIGVycm9yPzogRmFjZUNhcHR1cmVFcnJvclxuICAgIGltYWdlPzogSW1hZ2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVSZXNwb25zZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZVJlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmVycm9yID0gRmFjZUNhcHR1cmVFcnJvci5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IEltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2VuZGVyIHtcbiAgICBjb25maWRlbmNlPzogbnVtYmVyXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogR2VuZGVyIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEdlbmRlclxuXG4gICAgICAgIHJlc3VsdC5jb25maWRlbmNlID0ganNvbk9iamVjdFtcImNvbmZpZGVuY2VcIl1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExhbmRtYXJrIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGFuZG1hcmsge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGFuZG1hcmtcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc1Jlc3BvbnNlIHtcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICBsaXZlbmVzcz86IG51bWJlclxuICAgIGVycm9yPzogTGl2ZW5lc3NFcnJvclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc1Jlc3BvbnNlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3MgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gTGl2ZW5lc3NFcnJvci5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXNwb25zZSB7XG4gICAgZXJyb3I/OiBGYWNlUHJvY2Vzc29yRXJyb3JcbiAgICBtYXRjaGVkRmFjZXM/OiBDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgdW5tYXRjaGVkRmFjZXM/OiBDb21wYXJlZEZhY2VzUGFpcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXNwb25zZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuZXJyb3IgPSBGYWNlUHJvY2Vzc29yRXJyb3IuZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzLnB1c2goQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzLnB1c2goQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZSB7XG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgdGFnPzogc3RyaW5nXG4gICAgYml0bWFwPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NSZXF1ZXN0IHtcbiAgICBub3JtYWxJbWFnZURhdGE/OiBhbnlbXVxuICAgIHNjYWxlZEltYWdlRGF0YT86IGFueVtdXG4gICAgcmVxdWVzdEJvZHk/OiBhbnlbXVxuICAgIGd1aWQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NSZXF1ZXN0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5ub3JtYWxJbWFnZURhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm5vcm1hbEltYWdlRGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm5vcm1hbEltYWdlRGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ub3JtYWxJbWFnZURhdGEucHVzaChqc29uT2JqZWN0W1wibm9ybWFsSW1hZ2VEYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5zY2FsZWRJbWFnZURhdGEgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInNjYWxlZEltYWdlRGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNjYWxlZEltYWdlRGF0YVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zY2FsZWRJbWFnZURhdGEucHVzaChqc29uT2JqZWN0W1wic2NhbGVkSW1hZ2VEYXRhXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZXF1ZXN0Qm9keSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVxdWVzdEJvZHlcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJyZXF1ZXN0Qm9keVwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5yZXF1ZXN0Qm9keS5wdXNoKGpzb25PYmplY3RbXCJyZXF1ZXN0Qm9keVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZ3VpZCA9IGpzb25PYmplY3RbXCJndWlkXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgICBzaW1pbGFyaXR5VGhyZXNob2xkPzogbnVtYmVyXG4gICAgaW1hZ2VzPzogSW1hZ2VbXVxuICAgIGN1c3RvbU1ldGFkYXRhPzogYW55XG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LnNpbWlsYXJpdHlUaHJlc2hvbGQgPSBqc29uT2JqZWN0W1wic2ltaWxhcml0eVRocmVzaG9sZFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmN1c3RvbU1ldGFkYXRhID0ganNvbk9iamVjdFtcImN1c3RvbU1ldGFkYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGVGYWNlUlByb2Nlc3NvckVycm9yQ29kZXMgPSB7XG4gICAgRlJfSU1BR0VfRU1QVFk6IDEsXG4gICAgRlJfRkFDRV9OT1RfREVURUNURUQ6IDIsXG4gICAgRlJfTEFORE1BUktTX05PVF9ERVRFQ1RFRDogMyxcbiAgICBGUl9GQUNFX0FMSUdITkVSX0ZBSUxFRDogNCxcbiAgICBGUl9ERVNDUklQVE9SX0VYVFJBQ1RPUl9FUlJPUjogNSxcbiAgICBTRVJWRVJfUkVTUE9OU0VfSVNfRU1QVFk6IDEwMDEsXG4gICAgUkdMRmFjZVByb2Nlc3NvclJlc3VsdENvZGVOb0xpY2Vuc2U6IDIwMCxcbiAgICBSR0xGYWNlUHJvY2Vzc29yUmVzdWx0Q29kZUlzTm90SW5pdGlhbGl6ZWQ6IDIwMSxcbiAgICBSR0xGYWNlUHJvY2Vzc29yUmVzdWx0Q29kZUNvbW1hbmRJc05vdFN1cHBvcnRlZDogMjAyLFxuICAgIFJHTEZhY2VQcm9jZXNzb3JSZXN1bHRDb2RlQ29tbWFuZFBhcmFtc1JlYWRFcnJvcjogMjAzLFxufVxuXG5leHBvcnQgY29uc3QgZUlucHV0RmFjZVR5cGUgPSB7XG4gICAgaWZ0X0RvY3VtZW50UHJpbnRlZDogMSxcbiAgICBpZnRfRG9jdW1lbnRSRklEOiAyLFxuICAgIGlmdF9MaXZlOiAzLFxuICAgIGlmdF9MaXZlV2l0aERvYzogNCxcbn1cblxuZXhwb3J0IGNvbnN0IEZhY2VDYXB0dXJlUmVzdWx0Q29kZXMgPSB7XG4gICAgQ0FOQ0VMOiAxLFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiAyLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiAzLFxuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc0Vycm9yQ29kZSA9IHtcbiAgICBJTlRFUk5BTF9FUlJPUjogMTAwMCxcbiAgICBTRVJWRVJfRVJST1I6IDEwMDEsXG4gICAgWk9PTV9OT1RfU1VQUE9SVEVEOiAxMDAyLFxuICAgIENBTkNFTExFRDogNjAwLFxuICAgIFBST0NFU1NJTkdfVElNRU9VVDogNjAxLFxuICAgIFNFUlZFUl9SRVNQT05TRV9JU19FTVBUWTogNjAyLFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiA2MDMsXG4gICAgUFJPQ0VTU0lOR19BVFRFTVBUX0VOREVEOiA2MDQsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1N0YXR1cyA9IHtcbiAgICBQQVNTRUQ6IDAsXG4gICAgVU5LTk9XTjogMSxcbn1cblxuZXhwb3J0IGNvbnN0IEVudW0gPSB7XG4gICBlRmFjZVJQcm9jZXNzb3JFcnJvckNvZGVzLFxuICAgZUlucHV0RmFjZVR5cGUsXG4gICBGYWNlQ2FwdHVyZVJlc3VsdENvZGVzLFxuICAgTGl2ZW5lc3NFcnJvckNvZGUsXG4gICBMaXZlbmVzc1N0YXR1cyxcbn1cblxuLyoqXG4gKiBAbmFtZSBGYWNlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGNvcmRvdmEgcGx1Z2luIGZvciBSZWd1bGFgcyBGYWNlIEFwaS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZhY2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2UtYXBpL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBGYWNlOiBGYWNlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdGYWNlJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlLWFwaScsXG4gICAgcGx1Z2luUmVmOiAnRmFjZScsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRmFjZUFwaS1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZUFwaSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2VydmljZVVybCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRGYWNlU2RrVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcEZhY2VDYXB0dXJlQWN0aXZpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wTGl2ZW5lc3NQcm9jZXNzaW5nKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJlc2VudEZhY2VDYXB0dXJlQWN0aXZpdHlCeUNhbWVyYUlkKGNhbWVyYUlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3NCeUNhbWVyYUlkKGNhbWVyYUlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRTZXJ2aWNlVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYXRjaEZhY2VzUmVxdWVzdH0gcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlcyhyZXF1ZXN0OiBNYXRjaEZhY2VzUmVxdWVzdCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG59Il19