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
var LivenessParams = /** @class */ (function () {
    function LivenessParams() {
    }
    LivenessParams.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new LivenessParams;
        result.attemptsCount = jsonObject["attemptsCount"];
        return result;
    };
    return LivenessParams;
}());
export { LivenessParams };
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
var FaceApiOriginal = /** @class */ (function (_super) {
    __extends(FaceApiOriginal, _super);
    function FaceApiOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceApiOriginal.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceApiOriginal.prototype.startLivenessMatching = function () { return cordova(this, "startLivenessMatching", {}, arguments); };
    FaceApiOriginal.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceApiOriginal.prototype.livenessParams = function () { return cordova(this, "livenessParams", {}, arguments); };
    FaceApiOriginal.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceApiOriginal.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceApiOriginal.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceApiOriginal.prototype.presentFaceCaptureActivityByCameraId = function (cameraId) { return cordova(this, "presentFaceCaptureActivityByCameraId", {}, arguments); };
    FaceApiOriginal.prototype.startLivenessMatchingByCameraId = function (cameraId) { return cordova(this, "startLivenessMatchingByCameraId", {}, arguments); };
    FaceApiOriginal.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceApiOriginal.prototype.matchFaces = function (request) { return cordova(this, "matchFaces", {}, arguments); };
    FaceApiOriginal.pluginName = "Face";
    FaceApiOriginal.plugin = "cordova-plugin-face-api";
    FaceApiOriginal.pluginRef = "Face";
    FaceApiOriginal.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceApiOriginal.platforms = ["Android", "iOS"];
    return FaceApiOriginal;
}(IonicNativePlugin));
var FaceApi = new FaceApiOriginal();
export { FaceApi };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2UtYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOzs7O0lBTy9ELHlCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDOUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUE7UUFFbkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDOzJCQWhCSDs7Ozs7O0lBdUJTLDJCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDOUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksa0JBQWtCLENBQUE7UUFFckMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDZixDQUFDOzZCQS9CSDs7Ozs7O0lBc0NTLHNCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDOUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksYUFBYSxDQUFBO1FBRWhDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxD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QUNqQix5QkFBeUIsMkJBQUE7SUFDekIsY0FBYyxnQkFBQTtJQUNkLHNCQUFzQix3QkFBQTtJQUN0QixpQkFBaUIsbUJBQUE7SUFDakIsY0FBYyxnQkFBQTtDQUNoQixDQUFBOztJQTJCNEIsMkJBQWlCOzs7O0lBTzVDLCtCQUFhO0lBUWIsdUNBQXFCO0lBUXJCLG1DQUFpQjtJQVFqQixnQ0FBYztJQVFkLDRDQUEwQjtJQVExQix5Q0FBdUI7SUFRdkIsd0NBQXNCO0lBU3RCLHNEQUFvQyxhQUFDLFFBQVE7SUFTN0MsaURBQStCLGFBQUMsUUFBUTtJQVN4QywrQkFBYSxhQUFDLEdBQUc7SUFTakIsNEJBQVUsYUFBQyxPQUFPOzs7Ozs7a0JBMWRwQjtFQStYNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlRXJyb3Ige1xuICBlcnJvckNvZGU/OiBudW1iZXJcbiAgbWVzc2FnZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVFcnJvciB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVFcnJvclxuXG4gICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VQcm9jZXNzb3JFcnJvciB7XG4gIGVycm9yQ29kZT86IG51bWJlclxuICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlUHJvY2Vzc29yRXJyb3Ige1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VQcm9jZXNzb3JFcnJvclxuXG4gICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzRXJyb3Ige1xuICBlcnJvckNvZGU/OiBudW1iZXJcbiAgbWVzc2FnZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NFcnJvciB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFcnJvclxuXG4gICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNFcnJvciB7XG4gIGVycm9yQ29kZT86IG51bWJlclxuICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRXJyb3Ige1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNFcnJvclxuXG4gICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUGFyYW1zIHtcbiAgYXR0ZW1wdHNDb3VudD86IG51bWJlclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NQYXJhbXMge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUGFyYW1zXG5cbiAgICByZXN1bHQuYXR0ZW1wdHNDb3VudCA9IGpzb25PYmplY3RbXCJhdHRlbXB0c0NvdW50XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFnZVJhbmdlIHtcbiAgaGlnaD86IG51bWJlclxuICBsb3c/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFnZVJhbmdlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBZ2VSYW5nZVxuXG4gICAgcmVzdWx0LmhpZ2ggPSBqc29uT2JqZWN0W1wiaGlnaFwiXVxuICAgIHJlc3VsdC5sb3cgPSBqc29uT2JqZWN0W1wibG93XCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBhcmVkRmFjZSB7XG4gIHRhZz86IHN0cmluZ1xuICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgcG9zaXRpb24/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvbXBhcmVkRmFjZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQ29tcGFyZWRGYWNlXG5cbiAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgcmVzdWx0LnBvc2l0aW9uID0ganNvbk9iamVjdFtcInBvc2l0aW9uXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBhcmVkRmFjZXNQYWlyIHtcbiAgZmlyc3Q/OiBDb21wYXJlZEZhY2VcbiAgc2Vjb25kPzogQ29tcGFyZWRGYWNlXG4gIHNpbWlsYXJpdHk/OiBudW1iZXJcbiAgZXJyb3I/OiBNYXRjaEZhY2VzRXJyb3JcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvbXBhcmVkRmFjZXNQYWlyIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21wYXJlZEZhY2VzUGFpclxuXG4gICAgcmVzdWx0LmZpcnN0ID0gQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaXJzdFwiXSlcbiAgICByZXN1bHQuc2Vjb25kID0gQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWNvbmRcIl0pXG4gICAgcmVzdWx0LnNpbWlsYXJpdHkgPSBqc29uT2JqZWN0W1wic2ltaWxhcml0eVwiXVxuICAgIHJlc3VsdC5lcnJvciA9IE1hdGNoRmFjZXNFcnJvci5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV0aG5pY2l0eSB7XG4gIGNvbmZpZGVuY2U/OiBudW1iZXJcbiAgdmFsdWU/OiBudW1iZXJcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV0aG5pY2l0eSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRXRobmljaXR5XG5cbiAgICByZXN1bHQuY29uZmlkZW5jZSA9IGpzb25PYmplY3RbXCJjb25maWRlbmNlXCJdXG4gICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlUmVzcG9uc2Uge1xuICBlcnJvcj86IEZhY2VDYXB0dXJlRXJyb3JcbiAgaW1hZ2U/OiBJbWFnZVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVSZXNwb25zZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVSZXNwb25zZVxuXG4gICAgcmVzdWx0LmVycm9yID0gRmFjZUNhcHR1cmVFcnJvci5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG4gICAgcmVzdWx0LmltYWdlID0gSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHZW5kZXIge1xuICBjb25maWRlbmNlPzogbnVtYmVyXG4gIHZhbHVlPzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBHZW5kZXIge1xuICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEdlbmRlclxuXG4gICAgcmVzdWx0LmNvbmZpZGVuY2UgPSBqc29uT2JqZWN0W1wiY29uZmlkZW5jZVwiXVxuICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW5kbWFyayB7XG4gIHR5cGU/OiBudW1iZXJcbiAgeD86IG51bWJlclxuICB5PzogbnVtYmVyXG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMYW5kbWFyayB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTGFuZG1hcmtcblxuICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc1Jlc3BvbnNlIHtcbiAgYml0bWFwPzogc3RyaW5nXG4gIGxpdmVuZXNzPzogbnVtYmVyXG4gIGVycm9yPzogTGl2ZW5lc3NFcnJvclxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NSZXNwb25zZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NSZXNwb25zZVxuXG4gICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICByZXN1bHQubGl2ZW5lc3MgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NcIl1cbiAgICByZXN1bHQuZXJyb3IgPSBMaXZlbmVzc0Vycm9yLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1Jlc3BvbnNlIHtcbiAgZXJyb3I/OiBGYWNlUHJvY2Vzc29yRXJyb3JcbiAgbWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuICB1bm1hdGNoZWRGYWNlcz86IENvbXBhcmVkRmFjZXNQYWlyW11cblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXNwb25zZSB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1Jlc3BvbnNlXG5cbiAgICByZXN1bHQuZXJyb3IgPSBGYWNlUHJvY2Vzc29yRXJyb3IuZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMucHVzaChDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzLnB1c2goQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdW2ldKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlIHtcbiAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gIHRhZz86IHN0cmluZ1xuICBiaXRtYXA/OiBzdHJpbmdcblxuICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlIHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVxuXG4gICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUmVxdWVzdCB7XG4gIG5vcm1hbEltYWdlRGF0YT86IGFueVtdXG4gIHNjYWxlZEltYWdlRGF0YT86IGFueVtdXG4gIHJlcXVlc3RCb2R5PzogYW55W11cbiAgZ3VpZD86IHN0cmluZ1xuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NSZXF1ZXN0IHtcbiAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc1JlcXVlc3RcblxuICAgIHJlc3VsdC5ub3JtYWxJbWFnZURhdGEgPSBbXVxuICAgIGlmIChqc29uT2JqZWN0W1wibm9ybWFsSW1hZ2VEYXRhXCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibm9ybWFsSW1hZ2VEYXRhXCJdKSB7XG4gICAgICAgIHJlc3VsdC5ub3JtYWxJbWFnZURhdGEucHVzaChqc29uT2JqZWN0W1wibm9ybWFsSW1hZ2VEYXRhXCJdW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuc2NhbGVkSW1hZ2VEYXRhID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcInNjYWxlZEltYWdlRGF0YVwiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInNjYWxlZEltYWdlRGF0YVwiXSkge1xuICAgICAgICByZXN1bHQuc2NhbGVkSW1hZ2VEYXRhLnB1c2goanNvbk9iamVjdFtcInNjYWxlZEltYWdlRGF0YVwiXVtpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJlcXVlc3RCb2R5ID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcInJlcXVlc3RCb2R5XCJdICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVxdWVzdEJvZHlcIl0pIHtcbiAgICAgICAgcmVzdWx0LnJlcXVlc3RCb2R5LnB1c2goanNvbk9iamVjdFtcInJlcXVlc3RCb2R5XCJdW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQuZ3VpZCA9IGpzb25PYmplY3RbXCJndWlkXCJdXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgc2ltaWxhcml0eVRocmVzaG9sZD86IG51bWJlclxuICBpbWFnZXM/OiBJbWFnZVtdXG4gIGN1c3RvbU1ldGFkYXRhPzogYW55XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVxdWVzdCB7XG4gICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1JlcXVlc3RcblxuICAgIHJlc3VsdC5zaW1pbGFyaXR5VGhyZXNob2xkID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlUaHJlc2hvbGRcIl1cbiAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VzLnB1c2goSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSkpXG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5jdXN0b21NZXRhZGF0YSA9IGpzb25PYmplY3RbXCJjdXN0b21NZXRhZGF0YVwiXVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlRmFjZVJQcm9jZXNzb3JFcnJvckNvZGVzID0ge1xuICAgIEZSX0lNQUdFX0VNUFRZOiAxLFxuICAgIEZSX0ZBQ0VfTk9UX0RFVEVDVEVEOiAyLFxuICAgIEZSX0xBTkRNQVJLU19OT1RfREVURUNURUQ6IDMsXG4gICAgRlJfRkFDRV9BTElHSE5FUl9GQUlMRUQ6IDQsXG4gICAgRlJfREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1I6IDUsXG4gICAgU0VSVkVSX1JFU1BPTlNFX0lTX0VNUFRZOiAxMDAxLFxuICAgIFJHTEZhY2VQcm9jZXNzb3JSZXN1bHRDb2RlTm9MaWNlbnNlOiAyMDAsXG4gICAgUkdMRmFjZVByb2Nlc3NvclJlc3VsdENvZGVJc05vdEluaXRpYWxpemVkOiAyMDEsXG4gICAgUkdMRmFjZVByb2Nlc3NvclJlc3VsdENvZGVDb21tYW5kSXNOb3RTdXBwb3J0ZWQ6IDIwMixcbiAgICBSR0xGYWNlUHJvY2Vzc29yUmVzdWx0Q29kZUNvbW1hbmRQYXJhbXNSZWFkRXJyb3I6IDIwMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVJbnB1dEZhY2VUeXBlID0ge1xuICAgIGlmdF9Eb2N1bWVudFByaW50ZWQ6IDEsXG4gICAgaWZ0X0RvY3VtZW50UkZJRDogMixcbiAgICBpZnRfTGl2ZTogMyxcbiAgICBpZnRfTGl2ZVdpdGhEb2M6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBGYWNlQ2FwdHVyZVJlc3VsdENvZGVzID0ge1xuICAgIENBTkNFTDogMSxcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogMixcbiAgICBDQU1FUkFfTk9fUEVSTUlTU0lPTjogMyxcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NFcnJvckNvZGUgPSB7XG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDAsXG4gICAgU0VSVkVSX0VSUk9SOiAxMDAxLFxuICAgIFpPT01fTk9UX1NVUFBPUlRFRDogMTAwMixcbiAgICBDQU5DRUxMRUQ6IDYwMCxcbiAgICBQUk9DRVNTSU5HX1RJTUVPVVQ6IDYwMSxcbiAgICBTRVJWRVJfUkVTUE9OU0VfSVNfRU1QVFk6IDYwMixcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogNjAzLFxuICAgIFBST0NFU1NJTkdfQVRURU1QVF9FTkRFRDogNjA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTdGF0dXMgPSB7XG4gICAgUEFTU0VEOiAwLFxuICAgIFVOS05PV046IDEsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgZUZhY2VSUHJvY2Vzc29yRXJyb3JDb2RlcyxcbiAgIGVJbnB1dEZhY2VUeXBlLFxuICAgRmFjZUNhcHR1cmVSZXN1bHRDb2RlcyxcbiAgIExpdmVuZXNzRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NTdGF0dXMsXG59XG5cbi8qKlxuICogQG5hbWUgRmFjZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRmFjZSBBcGkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRmFjZTogRmFjZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZhY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlLWFwaScsXG4gIHBsdWdpblJlZjogJ0ZhY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9GYWNlQXBpLUNvcmRvdmEtUGx1Z2luJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZUFwaSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNlcnZpY2VVcmwoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnRMaXZlbmVzc01hdGNoaW5nKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZhY2VTZGtWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxpdmVuZXNzUGFyYW1zKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN0b3BMaXZlbmVzc1Byb2Nlc3NpbmcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJZCBkZXNjcmlwdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5QnlDYW1lcmFJZChjYW1lcmFJZCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSWQgZGVzY3JpcHRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzdGFydExpdmVuZXNzTWF0Y2hpbmdCeUNhbWVyYUlkKGNhbWVyYUlkKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAvKipcbiAgICogIGRlc2NyaXB0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgZGVzY3JpcHRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRTZXJ2aWNlVXJsKHVybCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgLyoqXG4gICAqICBkZXNjcmlwdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge01hdGNoRmFjZXNSZXF1ZXN0fSByZXF1ZXN0IGRlc2NyaXB0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbWF0Y2hGYWNlcyhyZXF1ZXN0KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cbn0iXX0=