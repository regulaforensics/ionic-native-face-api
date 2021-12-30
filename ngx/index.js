import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var FaceCaptureException = /** @class */ (function () {
    function FaceCaptureException() {
    }
    FaceCaptureException.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new FaceCaptureException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return FaceCaptureException;
}());
export { FaceCaptureException };
var LivenessErrorException = /** @class */ (function () {
    function LivenessErrorException() {
    }
    LivenessErrorException.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new LivenessErrorException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return LivenessErrorException;
}());
export { LivenessErrorException };
var MatchFacesException = /** @class */ (function () {
    function MatchFacesException() {
    }
    MatchFacesException.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new LivenessResponse;
        result.bitmap = jsonObject["bitmap"];
        result.liveness = jsonObject["liveness"];
        result.guid = jsonObject["guid"];
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
        if (jsonObject == null)
            return null;
        var result = new MatchFacesResponse;
        result.exception = MatchFacesException.fromJson(jsonObject["exception"]);
        result.matchedFaces = [];
        if (jsonObject["matchedFaces"] != null) {
            for (var i in jsonObject["matchedFaces"]) {
                result.matchedFaces.push(MatchFacesComparedFacesPair.fromJson(jsonObject["matchedFaces"][i]));
            }
        }
        result.unmatchedFaces = [];
        if (jsonObject["unmatchedFaces"] != null) {
            for (var i in jsonObject["unmatchedFaces"]) {
                result.unmatchedFaces.push(MatchFacesComparedFacesPair.fromJson(jsonObject["unmatchedFaces"][i]));
            }
        }
        result.facesResponse = [];
        if (jsonObject["facesResponse"] != null) {
            for (var i in jsonObject["facesResponse"]) {
                result.facesResponse.push(MatchFacesDetection.fromJson(jsonObject["facesResponse"][i]));
            }
        }
        result.results = [];
        if (jsonObject["results"] != null) {
            for (var i in jsonObject["results"]) {
                result.results.push(MatchFacesComparedFacesPair.fromJson(jsonObject["results"][i]));
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
var MatchFacesRequest = /** @class */ (function () {
    function MatchFacesRequest() {
    }
    MatchFacesRequest.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new MatchFacesRequest;
        result.matchFacesImages = [];
        if (jsonObject["matchFacesImages"] != null) {
            for (var i in jsonObject["matchFacesImages"]) {
                result.matchFacesImages.push(MatchFacesImage.fromJson(jsonObject["matchFacesImages"][i]));
            }
        }
        result.customMetadata = jsonObject["customMetadata"];
        result.thumbnails = jsonObject["thumbnails"];
        return result;
    };
    return MatchFacesRequest;
}());
export { MatchFacesRequest };
var MatchFacesImage = /** @class */ (function () {
    function MatchFacesImage() {
    }
    MatchFacesImage.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
        var result = new MatchFacesImage;
        result.imageType = jsonObject["imageType"];
        result.detectAll = jsonObject["detectAll"];
        result.bitmap = jsonObject["bitmap"];
        return result;
    };
    return MatchFacesImage;
}());
export { MatchFacesImage };
var MatchFacesComparedFacesPair = /** @class */ (function () {
    function MatchFacesComparedFacesPair() {
    }
    MatchFacesComparedFacesPair.fromJson = function (jsonObject) {
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
        var result = new MatchFacesComparedFace;
        result.detectionFace = MatchFacesDetectionFace.fromJson(jsonObject["detectionFace"]);
        result.matchesFaceImage = MatchFacesImage.fromJson(jsonObject["matchesFaceImage"]);
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
        if (jsonObject == null)
            return null;
        var result = new MatchFacesDetectionFace;
        result.faceIndex = jsonObject["faceIndex"];
        result.landmarks = [];
        if (jsonObject["landmarks"] != null) {
            for (var i in jsonObject["landmarks"]) {
                result.landmarks.push(Point.fromJson(jsonObject["landmarks"][i]));
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
        if (jsonObject == null)
            return null;
        var result = new MatchFacesDetection;
        result.image = MatchFacesImage.fromJson(jsonObject["image"]);
        result.imageIndex = jsonObject["imageIndex"];
        result.faces = [];
        if (jsonObject["faces"] != null) {
            for (var i in jsonObject["faces"]) {
                result.faces.push(MatchFacesDetectionFace.fromJson(jsonObject["faces"][i]));
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
        if (jsonObject == null)
            return null;
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
        if (jsonObject == null)
            return null;
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
export var ComparedFacesPairErrorCodes = {
    IMAGE_EMPTY: 1,
    FACE_NOT_DETECTED: 2,
    LANDMARKS_NOT_DETECTED: 3,
    FACE_ALIGNER_FAILED: 4,
    DESCRIPTOR_EXTRACTOR_ERROR: 5,
    API_CALL_FAILED: 6,
};
export var FaceCaptureResultCodes = {
    CANCEL: 1,
    CAMERA_NOT_AVAILABLE: 2,
    CAMERA_NO_PERMISSION: 3,
    IN_PROGRESS_ALREADY: 4,
    CONTEXT_IS_NULL: 5,
};
export var ImageType = {
    IMAGE_TYPE_PRINTED: 1,
    IMAGE_TYPE_RFID: 2,
    IMAGE_TYPE_LIVE: 3,
    IMAGE_TYPE_LIVE_WITH_DOC: 4,
};
export var LivenessErrorCode = {
    CONTEXT_IS_NULL: 1,
    IN_PROGRESS_ALREADY: 2,
    ZOOM_NOT_SUPPORTED: 3,
    NO_LICENSE: 4,
    CANCELLED: 5,
    PROCESSING_TIMEOUT: 6,
    API_CALL_FAILED: 7,
    PROCESSING_FAILED: 8,
    PROCESSING_ATTEMPTS_ENDED: 9,
};
export var LivenessStatus = {
    PASSED: 0,
    UNKNOWN: 1,
};
export var MatchFacesErrorCodes = {
    IMAGE_EMPTY: 1,
    FACE_NOT_DETECTED: 2,
    LANDMARKS_NOT_DETECTED: 3,
    FACE_ALIGNER_FAILED: 4,
    DESCRIPTOR_EXTRACTOR_ERROR: 5,
    NO_LICENSE: 6,
    NOT_INITIALIZED: 7,
    COMMAND_IS_NOT_SUPPORTED: 8,
    COMMAND_PARAMS_READ_ERROR: 9,
    API_CALL_FAILED: 10,
    PROCESSING_FAILED: 11,
};
export var RFSCameraPosition = {
    RFSCameraPositionBack: 0,
    RFSCameraPositionFront: 1,
};
export var Enum = {
    ComparedFacesPairErrorCodes: ComparedFacesPairErrorCodes,
    FaceCaptureResultCodes: FaceCaptureResultCodes,
    ImageType: ImageType,
    LivenessErrorCode: LivenessErrorCode,
    LivenessStatus: LivenessStatus,
    MatchFacesErrorCodes: MatchFacesErrorCodes,
    RFSCameraPosition: RFSCameraPosition,
};
var FaceSDK = /** @class */ (function (_super) {
    __extends(FaceSDK, _super);
    function FaceSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceSDK.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceSDK.prototype.startLiveness = function () { return cordova(this, "startLiveness", {}, arguments); };
    FaceSDK.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceSDK.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceSDK.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceSDK.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceSDK.prototype.presentFaceCaptureActivityWithConfig = function (config) { return cordova(this, "presentFaceCaptureActivityWithConfig", {}, arguments); };
    FaceSDK.prototype.startLivenessWithConfig = function (config) { return cordova(this, "startLivenessWithConfig", {}, arguments); };
    FaceSDK.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDK.prototype.matchFaces = function (request) { return cordova(this, "matchFaces", {}, arguments); };
    FaceSDK.prototype.setLanguage = function (language) { return cordova(this, "setLanguage", {}, arguments); };
    FaceSDK.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    FaceSDK.prototype.matchFacesWithConfig = function (request, config) { return cordova(this, "matchFacesWithConfig", {}, arguments); };
    FaceSDK.pluginName = "FaceSDK";
    FaceSDK.plugin = "cordova-plugin-face-api";
    FaceSDK.pluginRef = "FaceSDK";
    FaceSDK.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceSDK.platforms = ["Android", "iOS"];
    FaceSDK.decorators = [
        { type: Injectable }
    ];
    return FaceSDK;
}(IonicNativePlugin));
export { FaceSDK };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZhY2UtYXBpL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOzs7O0lBTzdELDZCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFBO1FBQ25DLElBQU0sTUFBTSxHQUFHLElBQUksb0JBQW9CLENBQUE7UUFFdkMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzsrQkFoQkw7Ozs7OztJQXVCVywrQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQTtRQUNuQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHNCQUFzQixDQUFBO1FBRXpDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7aUNBL0JMOzs7Ozs7SUFzQ1csNEJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUE7UUFDbkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQTtRQUV0QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENB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LGlCQUFpQixtQkFBQTtJQUNqQixjQUFjLGdCQUFBO0lBQ2Qsb0JBQW9CLHNCQUFBO0lBQ3BCLGlCQUFpQixtQkFBQTtDQUNuQixDQUFBOztJQTJCNEIsMkJBQWlCOzs7O0lBTzFDLCtCQUFhO0lBUWIsK0JBQWE7SUFRYixtQ0FBaUI7SUFRakIsNENBQTBCO0lBUTFCLHlDQUF1QjtJQVF2Qix3Q0FBc0I7SUFVdEIsc0RBQW9DLGFBQUMsTUFBVztJQVVoRCx5Q0FBdUIsYUFBQyxNQUFXO0lBU25DLCtCQUFhLGFBQUMsR0FBUTtJQVN0Qiw0QkFBVSxhQUFDLE9BQVk7SUFTdkIsNkJBQVcsYUFBQyxRQUFhO0lBU3pCLDJCQUFTLGFBQUMsTUFBVztJQVVyQixzQ0FBb0IsYUFBQyxPQUFZLEVBQUUsTUFBVzs7Ozs7OztnQkFsSGpELFVBQVU7O2tCQTlZWDtFQStZNkIsaUJBQWlCO1NBQWpDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlRXhjZXB0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzRXJyb3JFeGNlcHRpb24ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFcnJvckV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0V4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRXhjZXB0aW9uIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlUmVzcG9uc2Uge1xuICAgIGV4Y2VwdGlvbj86IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG4gICAgaW1hZ2U/OiBJbWFnZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZVJlc3BvbnNlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gRmFjZUNhcHR1cmVFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4Y2VwdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlID0gSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc1Jlc3BvbnNlIHtcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICBsaXZlbmVzcz86IG51bWJlclxuICAgIGd1aWQ/OiBzdHJpbmdcbiAgICBleGNlcHRpb24/OiBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUmVzcG9uc2Uge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzcyA9IGpzb25PYmplY3RbXCJsaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQuZ3VpZCA9IGpzb25PYmplY3RbXCJndWlkXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXNwb25zZSB7XG4gICAgZXhjZXB0aW9uPzogTWF0Y2hGYWNlc0V4Y2VwdGlvblxuICAgIG1hdGNoZWRGYWNlcz86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgdW5tYXRjaGVkRmFjZXM/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgIGZhY2VzUmVzcG9uc2U/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uW11cbiAgICByZXN1bHRzPzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1Jlc3BvbnNlIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMucHVzaChNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzLnB1c2goTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZhY2VzUmVzcG9uc2UgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZhY2VzUmVzcG9uc2VcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmYWNlc1Jlc3BvbnNlXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZhY2VzUmVzcG9uc2UucHVzaChNYXRjaEZhY2VzRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlc1Jlc3BvbnNlXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVzdWx0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVzdWx0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInJlc3VsdHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0cy5wdXNoKE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXVtpXSkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2Uge1xuICAgIGltYWdlVHlwZT86IG51bWJlclxuICAgIHRhZz86IHN0cmluZ1xuICAgIGJpdG1hcD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgICBtYXRjaEZhY2VzSW1hZ2VzPzogTWF0Y2hGYWNlc0ltYWdlW11cbiAgICBjdXN0b21NZXRhZGF0YT86IGFueVxuICAgIHRodW1ibmFpbHM/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0Lm1hdGNoRmFjZXNJbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm1hdGNoRmFjZXNJbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtYXRjaEZhY2VzSW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lm1hdGNoRmFjZXNJbWFnZXMucHVzaChNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoRmFjZXNJbWFnZXNcIl1baV0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21NZXRhZGF0YSA9IGpzb25PYmplY3RbXCJjdXN0b21NZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQudGh1bWJuYWlscyA9IGpzb25PYmplY3RbXCJ0aHVtYm5haWxzXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNJbWFnZSB7XG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgZGV0ZWN0QWxsPzogYm9vbGVhblxuICAgIGJpdG1hcD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzSW1hZ2Uge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0ltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyIHtcbiAgICBmaXJzdD86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VcbiAgICBzZWNvbmQ/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlXG4gICAgc2ltaWxhcml0eT86IG51bWJlclxuICAgIHNjb3JlPzogbnVtYmVyXG4gICAgZXhjZXB0aW9uPzogTWF0Y2hGYWNlc0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyXG5cbiAgICAgICAgcmVzdWx0LmZpcnN0ID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlyc3RcIl0pXG4gICAgICAgIHJlc3VsdC5zZWNvbmQgPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWNvbmRcIl0pXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LnNjb3JlID0ganNvbk9iamVjdFtcInNjb3JlXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb21wYXJlZEZhY2Uge1xuICAgIGRldGVjdGlvbkZhY2U/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVxuICAgIG1hdGNoZXNGYWNlSW1hZ2U/OiBNYXRjaEZhY2VzSW1hZ2VcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICBpbWFnZUluZGV4PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNDb21wYXJlZEZhY2Uge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuXG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb25GYWNlID0gTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvbkZhY2VcIl0pXG4gICAgICAgIHJlc3VsdC5tYXRjaGVzRmFjZUltYWdlID0gTWF0Y2hGYWNlc0ltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJtYXRjaGVzRmFjZUltYWdlXCJdKVxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VJbmRleCA9IGpzb25PYmplY3RbXCJpbWFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHtcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICBsYW5kbWFya3M/OiBQb2ludFtdXG4gICAgZmFjZVJlY3Q/OiBSZWN0XG4gICAgcm90YXRpb25BbmdsZT86IG51bWJlclxuICAgIHRodW1ibmFpbD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZSB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwpIHJldHVybiBudWxsXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVxuXG4gICAgICAgIHJlc3VsdC5mYWNlSW5kZXggPSBqc29uT2JqZWN0W1wiZmFjZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZmFjZVJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LnJvdGF0aW9uQW5nbGUgPSBqc29uT2JqZWN0W1wicm90YXRpb25BbmdsZVwiXVxuICAgICAgICByZXN1bHQudGh1bWJuYWlsID0ganNvbk9iamVjdFtcInRodW1ibmFpbFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRGV0ZWN0aW9uIHtcbiAgICBpbWFnZT86IE1hdGNoRmFjZXNJbWFnZVxuICAgIGltYWdlSW5kZXg/OiBudW1iZXJcbiAgICBmYWNlcz86IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlW11cbiAgICBleGNlcHRpb24/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb24ge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvblxuXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZUluZGV4ID0ganNvbk9iamVjdFtcImltYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmZhY2VzLnB1c2goTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VzXCJdW2ldKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUG9pbnQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUG9pbnRcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3Qge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENvbXBhcmVkRmFjZXNQYWlyRXJyb3JDb2RlcyA9IHtcbiAgICBJTUFHRV9FTVBUWTogMSxcbiAgICBGQUNFX05PVF9ERVRFQ1RFRDogMixcbiAgICBMQU5ETUFSS1NfTk9UX0RFVEVDVEVEOiAzLFxuICAgIEZBQ0VfQUxJR05FUl9GQUlMRUQ6IDQsXG4gICAgREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1I6IDUsXG4gICAgQVBJX0NBTExfRkFJTEVEOiA2LFxufVxuXG5leHBvcnQgY29uc3QgRmFjZUNhcHR1cmVSZXN1bHRDb2RlcyA9IHtcbiAgICBDQU5DRUw6IDEsXG4gICAgQ0FNRVJBX05PVF9BVkFJTEFCTEU6IDIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IDMsXG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogNCxcbiAgICBDT05URVhUX0lTX05VTEw6IDUsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVR5cGUgPSB7XG4gICAgSU1BR0VfVFlQRV9QUklOVEVEOiAxLFxuICAgIElNQUdFX1RZUEVfUkZJRDogMixcbiAgICBJTUFHRV9UWVBFX0xJVkU6IDMsXG4gICAgSU1BR0VfVFlQRV9MSVZFX1dJVEhfRE9DOiA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NFcnJvckNvZGUgPSB7XG4gICAgQ09OVEVYVF9JU19OVUxMOiAxLFxuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDIsXG4gICAgWk9PTV9OT1RfU1VQUE9SVEVEOiAzLFxuICAgIE5PX0xJQ0VOU0U6IDQsXG4gICAgQ0FOQ0VMTEVEOiA1LFxuICAgIFBST0NFU1NJTkdfVElNRU9VVDogNixcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IDcsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IDgsXG4gICAgUFJPQ0VTU0lOR19BVFRFTVBUU19FTkRFRDogOSxcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzU3RhdHVzID0ge1xuICAgIFBBU1NFRDogMCxcbiAgICBVTktOT1dOOiAxLFxufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hGYWNlc0Vycm9yQ29kZXMgPSB7XG4gICAgSU1BR0VfRU1QVFk6IDEsXG4gICAgRkFDRV9OT1RfREVURUNURUQ6IDIsXG4gICAgTEFORE1BUktTX05PVF9ERVRFQ1RFRDogMyxcbiAgICBGQUNFX0FMSUdORVJfRkFJTEVEOiA0LFxuICAgIERFU0NSSVBUT1JfRVhUUkFDVE9SX0VSUk9SOiA1LFxuICAgIE5PX0xJQ0VOU0U6IDYsXG4gICAgTk9UX0lOSVRJQUxJWkVEOiA3LFxuICAgIENPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogOCxcbiAgICBDT01NQU5EX1BBUkFNU19SRUFEX0VSUk9SOiA5LFxuICAgIEFQSV9DQUxMX0ZBSUxFRDogMTAsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IDExLFxufVxuXG5leHBvcnQgY29uc3QgUkZTQ2FtZXJhUG9zaXRpb24gPSB7XG4gICAgUkZTQ2FtZXJhUG9zaXRpb25CYWNrOiAwLFxuICAgIFJGU0NhbWVyYVBvc2l0aW9uRnJvbnQ6IDEsXG59XG5cbmV4cG9ydCBjb25zdCBFbnVtID0ge1xuICAgQ29tcGFyZWRGYWNlc1BhaXJFcnJvckNvZGVzLFxuICAgRmFjZUNhcHR1cmVSZXN1bHRDb2RlcyxcbiAgIEltYWdlVHlwZSxcbiAgIExpdmVuZXNzRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NTdGF0dXMsXG4gICBNYXRjaEZhY2VzRXJyb3JDb2RlcyxcbiAgIFJGU0NhbWVyYVBvc2l0aW9uLFxufVxuXG4vKipcbiAqIEBuYW1lIEZhY2VTREtcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBpcyBhIHdyYXBwZXIgY29yZG92YSBwbHVnaW4gZm9yIFJlZ3VsYWBzIEZhY2UgU0RLLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmFjZVNESyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmFjZS1hcGkvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHVibGljIEZhY2VTREs6IEZhY2VTREspIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ0ZhY2VTREsnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZhY2UtYXBpJyxcbiAgICBwbHVnaW5SZWY6ICdGYWNlU0RLJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9GYWNlQXBpLUNvcmRvdmEtUGx1Z2luJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWNlU0RLIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRTZXJ2aWNlVXJsKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnRMaXZlbmVzcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEZhY2VTZGtWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJlc2VudEZhY2VDYXB0dXJlQWN0aXZpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wRmFjZUNhcHR1cmVBY3Rpdml0eSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BMaXZlbmVzc1Byb2Nlc3NpbmcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBpbnQgY2FtZXJhSWQgLSBzZXQgY2FtZXJhIG9uIEFuZHJvaWRcbiAgICAgKiAgUkZTQ2FtZXJhUG9zaXRpb24gY2FtZXJhUG9zaXRpb25JT1MgLSBzZXQgY2FtZXJhIG9uIGlPU1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJlc2VudEZhY2VDYXB0dXJlQWN0aXZpdHlXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBpbnQgY2FtZXJhSWQgLSBzZXQgY2FtZXJhIG9uIEFuZHJvaWRcbiAgICAgKiAgUkZTQ2FtZXJhUG9zaXRpb24gY2FtZXJhUG9zaXRpb25JT1MgLSBzZXQgY2FtZXJhIG9uIGlPU1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnRMaXZlbmVzc1dpdGhDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRTZXJ2aWNlVXJsKHVybDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYXRjaEZhY2VzUmVxdWVzdH0gcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlcyhyZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExhbmd1YWdlKGxhbmd1YWdlOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGNoYW5nZSBhcHBlYXJhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdGNoRmFjZXNSZXF1ZXN0fSByZXF1ZXN0IGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlc1dpdGhDb25maWcocmVxdWVzdDogYW55LCBjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG59Il19