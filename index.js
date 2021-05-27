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
    FaceApiOriginal.prototype.startLiveness = function () { return cordova(this, "startLiveness", {}, arguments); };
    FaceApiOriginal.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceApiOriginal.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceApiOriginal.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceApiOriginal.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceApiOriginal.prototype.presentFaceCaptureActivityByCameraId = function (cameraId) { return cordova(this, "presentFaceCaptureActivityByCameraId", {}, arguments); };
    FaceApiOriginal.prototype.startLivenessByCameraId = function (cameraId) { return cordova(this, "startLivenessByCameraId", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2UtYXBpL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOzs7O0lBTzdELHlCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUE7UUFFbkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzsyQkFoQkw7Ozs7OztJQXVCVywyQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFBO1FBRXJDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7NkJBL0JMOzs7Ozs7SUFzQ1csc0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUE7UUFFaEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFV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c0I7SUFTdEIsc0RBQW9DLGFBQUMsUUFBZ0I7SUFTckQseUNBQXVCLGFBQUMsUUFBZ0I7SUFTeEMsK0JBQWEsYUFBQyxHQUFXO0lBU3pCLDRCQUFVLGFBQUMsT0FBMEI7Ozs7OztrQkFyY3pDO0VBa1g2QixpQkFBaUI7U0FBakMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVFcnJvciB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUVycm9yIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlRXJyb3JcblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VQcm9jZXNzb3JFcnJvciB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlUHJvY2Vzc29yRXJyb3Ige1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZVByb2Nlc3NvckVycm9yXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0Vycm9yIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzRXJyb3Ige1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFcnJvclxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0Vycm9yIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNFcnJvciB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRXJyb3JcblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFnZVJhbmdlIHtcbiAgICBoaWdoPzogbnVtYmVyXG4gICAgbG93PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEFnZVJhbmdlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEFnZVJhbmdlXG5cbiAgICAgICAgcmVzdWx0LmhpZ2ggPSBqc29uT2JqZWN0W1wiaGlnaFwiXVxuICAgICAgICByZXN1bHQubG93ID0ganNvbk9iamVjdFtcImxvd1wiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wYXJlZEZhY2Uge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIGltYWdlVHlwZT86IG51bWJlclxuICAgIHBvc2l0aW9uPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvbXBhcmVkRmFjZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBDb21wYXJlZEZhY2VcblxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuaW1hZ2VUeXBlID0ganNvbk9iamVjdFtcImltYWdlVHlwZVwiXVxuICAgICAgICByZXN1bHQucG9zaXRpb24gPSBqc29uT2JqZWN0W1wicG9zaXRpb25cIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcGFyZWRGYWNlc1BhaXIge1xuICAgIGZpcnN0PzogQ29tcGFyZWRGYWNlXG4gICAgc2Vjb25kPzogQ29tcGFyZWRGYWNlXG4gICAgc2ltaWxhcml0eT86IG51bWJlclxuICAgIGVycm9yPzogTWF0Y2hGYWNlc0Vycm9yXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IENvbXBhcmVkRmFjZXNQYWlyIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IENvbXBhcmVkRmFjZXNQYWlyXG5cbiAgICAgICAgcmVzdWx0LmZpcnN0ID0gQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmaXJzdFwiXSlcbiAgICAgICAgcmVzdWx0LnNlY29uZCA9IENvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2Vjb25kXCJdKVxuICAgICAgICByZXN1bHQuc2ltaWxhcml0eSA9IGpzb25PYmplY3RbXCJzaW1pbGFyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IE1hdGNoRmFjZXNFcnJvci5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV0aG5pY2l0eSB7XG4gICAgY29uZmlkZW5jZT86IG51bWJlclxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEV0aG5pY2l0eSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFdGhuaWNpdHlcblxuICAgICAgICByZXN1bHQuY29uZmlkZW5jZSA9IGpzb25PYmplY3RbXCJjb25maWRlbmNlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZVJlc3BvbnNlIHtcbiAgICBlcnJvcj86IEZhY2VDYXB0dXJlRXJyb3JcbiAgICBpbWFnZT86IEltYWdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlUmVzcG9uc2Uge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IEZhY2VDYXB0dXJlRXJyb3IuZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdlbmRlciB7XG4gICAgY29uZmlkZW5jZT86IG51bWJlclxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEdlbmRlciB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBHZW5kZXJcblxuICAgICAgICByZXN1bHQuY29uZmlkZW5jZSA9IGpzb25PYmplY3RbXCJjb25maWRlbmNlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMYW5kbWFyayB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExhbmRtYXJrIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExhbmRtYXJrXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NSZXNwb25zZSB7XG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgbGl2ZW5lc3M/OiBudW1iZXJcbiAgICBlcnJvcj86IExpdmVuZXNzRXJyb3JcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NSZXNwb25zZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzID0ganNvbk9iamVjdFtcImxpdmVuZXNzXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IExpdmVuZXNzRXJyb3IuZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVzcG9uc2Uge1xuICAgIGVycm9yPzogRmFjZVByb2Nlc3NvckVycm9yXG4gICAgbWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgIHVubWF0Y2hlZEZhY2VzPzogQ29tcGFyZWRGYWNlc1BhaXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVzcG9uc2Uge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmVycm9yID0gRmFjZVByb2Nlc3NvckVycm9yLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcbiAgICAgICAgcmVzdWx0Lm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1hdGNoZWRGYWNlcy5wdXNoKENvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcy5wdXNoKENvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2Uge1xuICAgIGltYWdlVHlwZT86IG51bWJlclxuICAgIHRhZz86IHN0cmluZ1xuICAgIGJpdG1hcD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUmVxdWVzdCB7XG4gICAgbm9ybWFsSW1hZ2VEYXRhPzogYW55W11cbiAgICBzY2FsZWRJbWFnZURhdGE/OiBhbnlbXVxuICAgIHJlcXVlc3RCb2R5PzogYW55W11cbiAgICBndWlkPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUmVxdWVzdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQubm9ybWFsSW1hZ2VEYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJub3JtYWxJbWFnZURhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJub3JtYWxJbWFnZURhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQubm9ybWFsSW1hZ2VEYXRhLnB1c2goanNvbk9iamVjdFtcIm5vcm1hbEltYWdlRGF0YVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuc2NhbGVkSW1hZ2VEYXRhID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJzY2FsZWRJbWFnZURhdGFcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJzY2FsZWRJbWFnZURhdGFcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuc2NhbGVkSW1hZ2VEYXRhLnB1c2goanNvbk9iamVjdFtcInNjYWxlZEltYWdlRGF0YVwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVxdWVzdEJvZHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInJlcXVlc3RCb2R5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVxdWVzdEJvZHlcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVxdWVzdEJvZHkucHVzaChqc29uT2JqZWN0W1wicmVxdWVzdEJvZHlcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lmd1aWQgPSBqc29uT2JqZWN0W1wiZ3VpZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVxdWVzdCB7XG4gICAgc2ltaWxhcml0eVRocmVzaG9sZD86IG51bWJlclxuICAgIGltYWdlcz86IEltYWdlW11cbiAgICBjdXN0b21NZXRhZGF0YT86IGFueVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVxdWVzdCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5VGhyZXNob2xkID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlUaHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKEltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21NZXRhZGF0YSA9IGpzb25PYmplY3RbXCJjdXN0b21NZXRhZGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBlRmFjZVJQcm9jZXNzb3JFcnJvckNvZGVzID0ge1xuICAgIEZSX0lNQUdFX0VNUFRZOiAxLFxuICAgIEZSX0ZBQ0VfTk9UX0RFVEVDVEVEOiAyLFxuICAgIEZSX0xBTkRNQVJLU19OT1RfREVURUNURUQ6IDMsXG4gICAgRlJfRkFDRV9BTElHSE5FUl9GQUlMRUQ6IDQsXG4gICAgRlJfREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1I6IDUsXG4gICAgU0VSVkVSX1JFU1BPTlNFX0lTX0VNUFRZOiAxMDAxLFxuICAgIFJHTEZhY2VQcm9jZXNzb3JSZXN1bHRDb2RlTm9MaWNlbnNlOiAyMDAsXG4gICAgUkdMRmFjZVByb2Nlc3NvclJlc3VsdENvZGVJc05vdEluaXRpYWxpemVkOiAyMDEsXG4gICAgUkdMRmFjZVByb2Nlc3NvclJlc3VsdENvZGVDb21tYW5kSXNOb3RTdXBwb3J0ZWQ6IDIwMixcbiAgICBSR0xGYWNlUHJvY2Vzc29yUmVzdWx0Q29kZUNvbW1hbmRQYXJhbXNSZWFkRXJyb3I6IDIwMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVJbnB1dEZhY2VUeXBlID0ge1xuICAgIGlmdF9Eb2N1bWVudFByaW50ZWQ6IDEsXG4gICAgaWZ0X0RvY3VtZW50UkZJRDogMixcbiAgICBpZnRfTGl2ZTogMyxcbiAgICBpZnRfTGl2ZVdpdGhEb2M6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBGYWNlQ2FwdHVyZVJlc3VsdENvZGVzID0ge1xuICAgIENBTkNFTDogMSxcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogMixcbiAgICBDQU1FUkFfTk9fUEVSTUlTU0lPTjogMyxcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NFcnJvckNvZGUgPSB7XG4gICAgSU5URVJOQUxfRVJST1I6IDEwMDAsXG4gICAgU0VSVkVSX0VSUk9SOiAxMDAxLFxuICAgIFpPT01fTk9UX1NVUFBPUlRFRDogMTAwMixcbiAgICBDQU5DRUxMRUQ6IDYwMCxcbiAgICBQUk9DRVNTSU5HX1RJTUVPVVQ6IDYwMSxcbiAgICBTRVJWRVJfUkVTUE9OU0VfSVNfRU1QVFk6IDYwMixcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogNjAzLFxuICAgIFBST0NFU1NJTkdfQVRURU1QVF9FTkRFRDogNjA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTdGF0dXMgPSB7XG4gICAgUEFTU0VEOiAwLFxuICAgIFVOS05PV046IDEsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgZUZhY2VSUHJvY2Vzc29yRXJyb3JDb2RlcyxcbiAgIGVJbnB1dEZhY2VUeXBlLFxuICAgRmFjZUNhcHR1cmVSZXN1bHRDb2RlcyxcbiAgIExpdmVuZXNzRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NTdGF0dXMsXG59XG5cbi8qKlxuICogQG5hbWUgRmFjZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRmFjZSBBcGkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRmFjZTogRmFjZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRmFjZScsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZS1hcGknLFxuICAgIHBsdWdpblJlZjogJ0ZhY2UnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcmVndWxhZm9yZW5zaWNzL0ZhY2VBcGktQ29yZG92YS1QbHVnaW4nLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhY2VBcGkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFNlcnZpY2VVcmwoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydExpdmVuZXNzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0RmFjZVNka1ZlcnNpb24oKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcmVzZW50RmFjZUNhcHR1cmVBY3Rpdml0eSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcExpdmVuZXNzUHJvY2Vzc2luZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FtZXJhSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5QnlDYW1lcmFJZChjYW1lcmFJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbWVyYUlkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdGFydExpdmVuZXNzQnlDYW1lcmFJZChjYW1lcmFJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0U2VydmljZVVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0Y2hGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIG1hdGNoRmFjZXMocmVxdWVzdDogTWF0Y2hGYWNlc1JlcXVlc3QpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxufSJdfQ==