import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
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
        result.estimatedAge = jsonObject["estimatedAge"];
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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new Person;
        result.name = jsonObject["name"];
        result.groups = [];
        if (jsonObject["groups"] != null) {
            for (var i in jsonObject["groups"]) {
                result.groups.push(jsonObject["groups"][i]);
            }
        }
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
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"]);
        result.groupIdsForSearch = [];
        if (jsonObject["groupIdsForSearch"] != null) {
            for (var i in jsonObject["groupIdsForSearch"]) {
                result.groupIdsForSearch.push(jsonObject["groupIdsForSearch"][i]);
            }
        }
        result.threshold = jsonObject["threshold"];
        result.limit = jsonObject["limit"];
        result.imageUpload = ImageUpload.fromJson(jsonObject["imageUpload"]);
        result.detectAll = jsonObject["detectAll"];
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
        result.detection = SearchPersonDetection.fromJson(jsonObject["detection"]);
        result.images = [];
        if (jsonObject["images"] != null) {
            for (var i in jsonObject["images"]) {
                var item = SearchPersonImage.fromJson(jsonObject["images"][i]);
                if (item != undefined)
                    result.images.push(item);
            }
        }
        result.name = jsonObject["name"];
        result.groups = [];
        if (jsonObject["groups"] != null) {
            for (var i in jsonObject["groups"]) {
                result.groups.push(jsonObject["groups"][i]);
            }
        }
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
        result.cropImage = jsonObject["cropImage"];
        result.rotationAngle = jsonObject["rotationAngle"];
        return result;
    };
    return SearchPersonDetection;
}());
export { SearchPersonDetection };
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
export var FontStyle = {
    NORMAL: 0,
    BOLD: 1,
    ITALIC: 2,
    BOLD_ITALIC: 3,
};
export var CustomizationColor = {
    ONBOARDING_SCREEN_START_BUTTON_BACKGROUND: "CustomizationColor.ONBOARDING_SCREEN_START_BUTTON_BACKGROUND",
    ONBOARDING_SCREEN_START_BUTTON_TITLE: "CustomizationColor.ONBOARDING_SCREEN_START_BUTTON_TITLE",
    ONBOARDING_SCREEN_BACKGROUND: "CustomizationColor.ONBOARDING_SCREEN_BACKGROUND",
    ONBOARDING_SCREEN_TITLE_LABEL_TEXT: "CustomizationColor.ONBOARDING_SCREEN_TITLE_LABEL_TEXT",
    ONBOARDING_SCREEN_MESSAGE_LABEL_TEXT: "CustomizationColor.ONBOARDING_SCREEN_MESSAGE_LABEL_TEXT",
    CAMERA_SCREEN_STROKE_NORMAL: "CustomizationColor.CAMERA_SCREEN_STROKE_NORMAL",
    CAMERA_SCREEN_STROKE_ACTIVE: "CustomizationColor.CAMERA_SCREEN_STROKE_ACTIVE",
    CAMERA_SCREEN_SECTOR_TARGET: "CustomizationColor.CAMERA_SCREEN_SECTOR_TARGET",
    CAMERA_SCREEN_SECTOR_ACTIVE: "CustomizationColor.CAMERA_SCREEN_SECTOR_ACTIVE",
    CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND: "CustomizationColor.CAMERA_SCREEN_FRONT_HINT_LABEL_BACKGROUND",
    CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT: "CustomizationColor.CAMERA_SCREEN_FRONT_HINT_LABEL_TEXT",
    CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND: "CustomizationColor.CAMERA_SCREEN_BACK_HINT_LABEL_BACKGROUND",
    CAMERA_SCREEN_BACK_HINT_LABEL_TEXT: "CustomizationColor.CAMERA_SCREEN_BACK_HINT_LABEL_TEXT",
    CAMERA_SCREEN_LIGHT_TOOLBAR_TINT: "CustomizationColor.CAMERA_SCREEN_LIGHT_TOOLBAR_TINT",
    CAMERA_SCREEN_DARK_TOOLBAR_TINT: "CustomizationColor.CAMERA_SCREEN_DARK_TOOLBAR_TINT",
    RETRY_SCREEN_BACKGROUND: "CustomizationColor.RETRY_SCREEN_BACKGROUND",
    RETRY_SCREEN_RETRY_BUTTON_BACKGROUND: "CustomizationColor.RETRY_SCREEN_RETRY_BUTTON_BACKGROUND",
    RETRY_SCREEN_RETRY_BUTTON_TITLE: "CustomizationColor.RETRY_SCREEN_RETRY_BUTTON_TITLE",
    RETRY_SCREEN_TITLE_LABEL_TEXT: "CustomizationColor.RETRY_SCREEN_TITLE_LABEL_TEXT",
    RETRY_SCREEN_HINT_LABELS_TEXT: "CustomizationColor.RETRY_SCREEN_HINT_LABELS_TEXT",
    PROCESSING_SCREEN_BACKGROUND: "CustomizationColor.PROCESSING_SCREEN_BACKGROUND",
    PROCESSING_SCREEN_PROGRESS: "CustomizationColor.PROCESSING_SCREEN_PROGRESS",
    PROCESSING_SCREEN_TITLE: "CustomizationColor.PROCESSING_SCREEN_TITLE",
    SUCCESS_SCREEN_BACKGROUND: "CustomizationColor.SUCCESS_SCREEN_BACKGROUND",
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
    SESSION_START_FAILED: "SESSION_START_FAILED",
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
export var ButtonTag = {
    CLOSE: 1001,
    TORCH: 1002,
    CAMERA_SWITCH: 1003,
};
export var CustomizationFont = {
    ONBOARDING_SCREEN_START_BUTTON: "CustomizationFont.ONBOARDING_SCREEN_START_BUTTON",
    ONBOARDING_SCREEN_TITLE_LABEL: "CustomizationFont.ONBOARDING_SCREEN_TITLE_LABEL",
    ONBOARDING_SCREEN_MESSAGE_LABEL: "CustomizationFont.ONBOARDING_SCREEN_MESSAGE_LABEL",
    CAMERA_SCREEN_HINT_LABEL: "CustomizationFont.CAMERA_SCREEN_HINT_LABEL",
    RETRY_SCREEN_RETRY_BUTTON: "CustomizationFont.RETRY_SCREEN_RETRY_BUTTON",
    RETRY_SCREEN_TITLE_LABEL: "CustomizationFont.RETRY_SCREEN_TITLE_LABEL",
    RETRY_SCREEN_HINT_LABELS: "CustomizationFont.RETRY_SCREEN_HINT_LABELS",
    PROCESSING_SCREEN: "CustomizationFont.PROCESSING_SCREEN",
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
    START: "START",
    PREPARING: "PREPARING",
    NEW_SESSION: "NEW_SESSION",
    NEXT_STAGE: "NEXT_STAGE",
    SECTOR_CHANGED: "SECTOR_CHANGED",
    PROGRESS: "PROGRESS",
    LOW_BRIGHTNESS: "LOW_BRIGHTNESS",
    FIT_FACE: "FIT_FACE",
    MOVE_AWAY: "MOVE_AWAY",
    MOVE_CLOSER: "MOVE_CLOSER",
    TURN_HEAD: "TURN_HEAD",
    PROCESSING: "PROCESSING",
    FAILED: "FAILED",
    RETRY: "RETRY",
    SUCCESS: "SUCCESS",
};
export var OutputImageCropAspectRatio = {
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_3X4: 0,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_4X5: 1,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_2X3: 2,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_1X1: 3,
    OUTPUT_IMAGE_CROP_ASPECT_RATIO_7X9: 4,
};
export var LivenessSkipStep = {
    ONBOARDING_STEP: 1,
    SUCCESS_STEP: 2,
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
    SESSION_START_FAILED: "SESSION_START_FAILED",
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
export var CustomizationImage = {
    ONBOARDING_SCREEN_CLOSE_BUTTON: "CustomizationImage.ONBOARDING_SCREEN_CLOSE_BUTTON",
    ONBOARDING_SCREEN_ILLUMINATION: "CustomizationImage.ONBOARDING_SCREEN_ILLUMINATION",
    ONBOARDING_SCREEN_ACCESSORIES: "CustomizationImage.ONBOARDING_SCREEN_ACCESSORIES",
    ONBOARDING_SCREEN_CAMERA_LEVEL: "CustomizationImage.ONBOARDING_SCREEN_CAMERA_LEVEL",
    CAMERA_SCREEN_CLOSE_BUTTON: "CustomizationImage.CAMERA_SCREEN_CLOSE_BUTTON",
    CAMERA_SCREEN_LIGHT_ON_BUTTON: "CustomizationImage.CAMERA_SCREEN_LIGHT_ON_BUTTON",
    CAMERA_SCREEN_LIGHT_OFF_BUTTON: "CustomizationImage.CAMERA_SCREEN_LIGHT_OFF_BUTTON",
    CAMERA_SCREEN_SWITCH_BUTTON: "CustomizationImage.CAMERA_SCREEN_SWITCH_BUTTON",
    RETRY_SCREEN_CLOSE_BUTTON: "CustomizationImage.RETRY_SCREEN_CLOSE_BUTTON",
    RETRY_SCREEN_HINT_ENVIRONMENT: "CustomizationImage.RETRY_SCREEN_HINT_ENVIRONMENT",
    RETRY_SCREEN_HINT_SUBJECT: "CustomizationImage.RETRY_SCREEN_HINT_SUBJECT",
    PROCESSING_SCREEN_CLOSE_BUTTON: "CustomizationImage.PROCESSING_SCREEN_CLOSE_BUTTON",
    SUCCESS_SCREEN_IMAGE: "CustomizationImage.SUCCESS_SCREEN_IMAGE",
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
    DetectFacesErrorCode: DetectFacesErrorCode,
    InitErrorCode: InitErrorCode,
    LivenessStatus: LivenessStatus,
    CameraErrorCode: CameraErrorCode,
    LivenessErrorCode: LivenessErrorCode,
    DetectFacesBackendErrorCode: DetectFacesBackendErrorCode,
    MatchFacesErrorCode: MatchFacesErrorCode,
    ImageQualityCharacteristicName: ImageQualityCharacteristicName,
    ButtonTag: ButtonTag,
    CustomizationFont: CustomizationFont,
    DetectFacesScenario: DetectFacesScenario,
    LivenessProcessStatus: LivenessProcessStatus,
    OutputImageCropAspectRatio: OutputImageCropAspectRatio,
    LivenessSkipStep: LivenessSkipStep,
    ImageQualityResultStatus: ImageQualityResultStatus,
    ImageType: ImageType,
    FaceCaptureErrorCode: FaceCaptureErrorCode,
    LivenessBackendErrorCode: LivenessBackendErrorCode,
    CustomizationImage: CustomizationImage,
    DetectFacesAttribute: DetectFacesAttribute,
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
    FaceSDK.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    FaceSDK.prototype.deinit = function () { return cordova(this, "deinit", {}, arguments); };
    FaceSDK.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    FaceSDK.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceSDK.prototype.setRequestHeaders = function (headers) { return cordova(this, "setRequestHeaders", {}, arguments); };
    FaceSDK.prototype.presentFaceCaptureActivityWithConfig = function (config) { return cordova(this, "presentFaceCaptureActivityWithConfig", {}, arguments); };
    FaceSDK.prototype.startLivenessWithConfig = function (config) { return cordova(this, "startLivenessWithConfig", {}, arguments); };
    FaceSDK.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDK.prototype.matchFaces = function (request) { return cordova(this, "matchFaces", {}, arguments); };
    FaceSDK.prototype.detectFaces = function (request) { return cordova(this, "detectFaces", {}, arguments); };
    FaceSDK.prototype.setUiCustomizationLayer = function (json) { return cordova(this, "setUiCustomizationLayer", {}, arguments); };
    FaceSDK.prototype.setUiConfiguration = function (config) { return cordova(this, "setUiConfiguration", {}, arguments); };
    FaceSDK.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    FaceSDK.prototype.matchFacesSimilarityThresholdSplit = function (faces, similarity) { return cordova(this, "matchFacesSimilarityThresholdSplit", {}, arguments); };
    FaceSDK.prototype.getPerson = function (personId) { return cordova(this, "getPerson", {}, arguments); };
    FaceSDK.prototype.createPerson = function (name, groupIds, metadata) { return cordova(this, "createPerson", {}, arguments); };
    FaceSDK.prototype.updatePerson = function (person) { return cordova(this, "updatePerson", {}, arguments); };
    FaceSDK.prototype.deletePerson = function (personId) { return cordova(this, "deletePerson", {}, arguments); };
    FaceSDK.prototype.getPersonImages = function (personId) { return cordova(this, "getPersonImages", {}, arguments); };
    FaceSDK.prototype.getPersonImagesForPage = function (personId, page, size) { return cordova(this, "getPersonImagesForPage", {}, arguments); };
    FaceSDK.prototype.addPersonImage = function (personId, image) { return cordova(this, "addPersonImage", {}, arguments); };
    FaceSDK.prototype.getPersonImage = function (personId, imageId) { return cordova(this, "getPersonImage", {}, arguments); };
    FaceSDK.prototype.deletePersonImage = function (personId, imageId) { return cordova(this, "deletePersonImage", {}, arguments); };
    FaceSDK.prototype.getGroups = function () { return cordova(this, "getGroups", {}, arguments); };
    FaceSDK.prototype.getGroupsForPage = function (page, size) { return cordova(this, "getGroupsForPage", {}, arguments); };
    FaceSDK.prototype.getPersonGroups = function (personId) { return cordova(this, "getPersonGroups", {}, arguments); };
    FaceSDK.prototype.getPersonGroupsForPage = function (personId, page, size) { return cordova(this, "getPersonGroupsForPage", {}, arguments); };
    FaceSDK.prototype.createGroup = function (name, metadata) { return cordova(this, "createGroup", {}, arguments); };
    FaceSDK.prototype.getGroup = function (groupId) { return cordova(this, "getGroup", {}, arguments); };
    FaceSDK.prototype.updateGroup = function (group) { return cordova(this, "updateGroup", {}, arguments); };
    FaceSDK.prototype.editPersonsInGroup = function (groupId, editGroupPersonsRequest) { return cordova(this, "editPersonsInGroup", {}, arguments); };
    FaceSDK.prototype.getPersonsInGroup = function (groupId) { return cordova(this, "getPersonsInGroup", {}, arguments); };
    FaceSDK.prototype.getPersonsInGroupForPage = function (groupId, page, size) { return cordova(this, "getPersonsInGroupForPage", {}, arguments); };
    FaceSDK.prototype.deleteGroup = function (groupId) { return cordova(this, "deleteGroup", {}, arguments); };
    FaceSDK.prototype.searchPerson = function (searchPersonRequest) { return cordova(this, "searchPerson", {}, arguments); };
    FaceSDK.pluginName = "FaceSDK";
    FaceSDK.plugin = "cordova-plugin-face-api";
    FaceSDK.pluginRef = "FaceSDKPlugin.FaceSDK";
    FaceSDK.repo = "https://github.com/regulaforensics/FaceApi-Cordova-Plugin";
    FaceSDK.platforms = ["Android", "iOS"];
    FaceSDK.decorators = [
        { type: Injectable }
    ];
    return FaceSDK;
}(AwesomeCordovaNativePlugin));
export { FaceSDK };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7Ozs7SUFPakYsNkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7K0JBaEJMOzs7Ozs7SUF1Qlcsc0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQTtRQUVoQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV0QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3dCQS9CTDs7Ozs7O0lBdUNXLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQTtRQUV6QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsbUJBQW1CLEdBQUcsd0JBQXdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDakcsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztpQ0FoREw7Ozs7OztJQXVEVyxpQ0FBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksd0JBQXdCLENBQUE7UUFFM0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzttQ0EvREw7Ozs7OztJQXNFVyw0QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksbUJBQW1CLENBQUE7UUFFdEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFdEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzs4QkE5RUw7Ozs7OztJQXFGVyw0QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksbUJBQW1CLENBQUE7UUFFdEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDekUsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBRWxELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7OEJBN0ZMOzs7Ozs7SUF3R1cseUJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGdCQUFnQixDQUFBO1FBRW5DLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ2xELE1BQU0sQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBRTNFLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7MkJBcEhMOzs7Ozs7SUE2SFcsMkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFBO1FBRXJDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQ3hFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNsQyxLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDdEMsSUFBTSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN0RSxJQUFJLElBQUksSUFBSSxTQUFTO29CQUNqQixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNuQztTQUNKO1FBQ0QsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQy9CLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxJQUFNLElBQUksR0FBRywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzNFLElBQUksSUFBSSxJQUFJLFNBQVM7b0JBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2hDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDOzZCQXJKTDs7Ozs7O0lBOEpXLGNBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQTtRQUV4QixNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwQyxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM5QixNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxQyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO2dCQXhLTDs7Ozs7O0lBaUxXLDBCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQTtRQUVwQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsS0FBSyxJQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xDLElBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzlELElBQUksSUFBSSxJQUFJLFNBQVM7b0JBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQy9CO1NBQ0o7UUFDRCxNQUFNLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3BELE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzVDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTlCLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7NEJBbE1MOzs7Ozs7SUEyTVcsd0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQTtRQUVsQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUU1QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDOzBCQXJOTDs7Ozs7O0lBK05XLG9DQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBMkIsQ0FBQTtRQUU5QyxNQUFNLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNuRSxNQUFNLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNyRSxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUV4RSxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3NDQTFPTDs7Ozs7O0lBbVBXLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQTtRQUV6QyxNQUFNLENBQUMsSUFBSSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNsRSxNQUFNLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDNUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFNUMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztpQ0E3UEw7Ozs7OztJQXVRVyxnQ0FBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksdUJBQXVCLENBQUE7UUFFMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDckIsSUFBSSxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2pDLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNyQyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN2RCxJQUFJLElBQUksSUFBSSxTQUFTO29CQUNqQixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNsQztTQUNKO1FBQ0QsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELE1BQU0sQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ2xELE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRTFDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7a0NBelJMOzs7Ozs7SUFrU1csNEJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFtQixDQUFBO1FBRXRDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM1RCxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDN0IsS0FBSyxJQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pDLElBQU0sSUFBSSxHQUFHLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDckUsSUFBSSxJQUFJLElBQUksU0FBUztvQkFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDOUI7U0FDSjtRQUNELE1BQU0sQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBRXhFLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7OEJBblRMOzs7Ozs7SUEwVFcsY0FBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksS0FBSyxDQUFBO1FBRXhCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRTFCLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7Z0JBbFVMOzs7Ozs7SUEyVVcsYUFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFBO1FBRXZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRWxDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7ZUFyVkw7Ozs7OztJQTRWVywyQ0FBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksa0NBQWtDLENBQUE7UUFFckQsTUFBTSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUE7UUFDeEIsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BDLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUN4QyxJQUFNLElBQUksR0FBRywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hGLElBQUksSUFBSSxJQUFJLFNBQVM7b0JBQ2pCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3JDO1NBQ0o7UUFDRCxNQUFNLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQTtRQUMxQixJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN0QyxLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMxQyxJQUFNLElBQUksR0FBRywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDbEYsSUFBSSxJQUFJLElBQUksU0FBUztvQkFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDdkM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7NkNBbFhMOzs7Ozs7SUEyWFcsMkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFBO1FBRXJDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsd0JBQXdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1FBRXJGLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7NkJBcllMOzs7Ozs7SUE4WVcsaUNBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUF3QixDQUFBO1FBRTNDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNsQyxLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDdEQ7U0FDSjtRQUNELE1BQU0sQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNyQyxLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDekMsSUFBTSxJQUFJLEdBQUcsMEJBQTBCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNoRixJQUFJLElBQUksSUFBSSxTQUFTO29CQUNqQixNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUN0QztTQUNKO1FBQ0QsTUFBTSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ3RGLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFdEQsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzttQ0FwYUw7Ozs7OztJQTJhVywwQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUE7UUFFcEMsTUFBTSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN0RCxNQUFNLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFFMUQsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzs0QkFuYkw7Ozs7OztJQTRiVyx3QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksZUFBZSxDQUFBO1FBRWxDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFFNUQsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzswQkF0Y0w7Ozs7OztJQStjVyxtQ0FBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksMEJBQTBCLENBQUE7UUFFN0MsTUFBTSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQzVELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7UUFDcEYsTUFBTSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFFMUUsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztxQ0F6ZEw7Ozs7OztJQWdlVywwQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksaUJBQWlCLENBQUE7UUFFcEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFOUIsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzs0QkF4ZUw7Ozs7OztJQStlVyxhQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUE7UUFFdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFcEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztlQXZmTDs7Ozs7O0lBZ2dCVyw0QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksbUJBQW1CLENBQUE7UUFFdEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7UUFDckUsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDeEMsTUFBTSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDdEUsTUFBTSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7UUFDekIsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3JDLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUN6QyxJQUFNLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RFLElBQUksSUFBSSxJQUFJLFNBQVM7b0JBQ2pCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3RDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDOzhCQWpoQkw7Ozs7OztJQXloQlcsa0NBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUF5QixDQUFBO1FBRTVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxtQkFBbUIsR0FBRywyQkFBMkIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQTtRQUNwRyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV0QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO29DQWxpQkw7Ozs7OztJQXlpQlcsb0NBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLDJCQUEyQixDQUFBO1FBRTlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7c0NBampCTDs7Ozs7O0lBNmpCVyx5QkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUE7UUFFbkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQy9CLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxJQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2xFLElBQUksSUFBSSxJQUFJLFNBQVM7b0JBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ2hDO1NBQ0o7UUFDRCxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDbEMsS0FBSyxJQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ3RDLElBQU0sSUFBSSxHQUFHLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDN0UsSUFBSSxJQUFJLElBQUksU0FBUztvQkFDakIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbkM7U0FDSjtRQUNELE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ3JCLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNqQyxLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDckMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdkQsSUFBSSxJQUFJLElBQUksU0FBUztvQkFDakIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbEM7U0FDSjtRQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUN2RCxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDL0QsTUFBTSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBRTVELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7MkJBL2xCTDs7Ozs7O0lBeW1CVywyQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksa0JBQWtCLENBQUE7UUFFckMsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEMsTUFBTSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDOUQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFbEMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzs2QkFwbkJMOzs7Ozs7SUE2bkJXLG1DQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSwwQkFBMEIsQ0FBQTtRQUU3QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxNQUFNLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM5RCxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUU1QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3FDQXZvQkw7Ozs7OztJQStvQlcsYUFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFBO1FBRXZCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRWhDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7ZUF4cEJMOzs7Ozs7SUFtcUJXLGVBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQTtRQUV6QixNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsS0FBSyxJQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2xDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzlDO1NBQ0o7UUFDRCxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxQyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO2lCQXByQkw7Ozs7OztJQTZyQlcsb0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQTtRQUU5QixNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxQyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3NCQXZzQkw7Ozs7OztJQWt0Qlcsb0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQTtRQUU5QixNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM5QyxNQUFNLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxQyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3NCQTl0Qkw7Ozs7OztJQW91Qlcsb0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQTtRQUU5QixNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxQyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3NCQTN1Qkw7Ozs7OztJQWt2QlcsZ0NBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUF1QixDQUFBO1FBRTFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFBO1FBQzFCLElBQUksVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3RDLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDOUQ7U0FDSjtRQUNELE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUE7UUFDN0IsSUFBSSxVQUFVLENBQUMsbUJBQW1CLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDekMsS0FBSyxJQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ3BFO1NBQ0o7UUFFRCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO2tDQXB3Qkw7Ozs7OztJQSt3QlcsNEJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG1CQUFtQixDQUFBO1FBRXRDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtRQUN0RixNQUFNLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFBO1FBQzdCLElBQUksVUFBVSxDQUFDLG1CQUFtQixDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3pDLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNwRTtTQUNKO1FBQ0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3BFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRTFDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7OEJBaHlCTDs7Ozs7O0lBNnlCVyxxQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFBO1FBRS9CLE1BQU0sQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQzFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM5QixLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDbEMsSUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUNoRSxJQUFJLElBQUksSUFBSSxTQUFTO29CQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUMvQjtTQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDbEIsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLEtBQUssSUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUM5QztTQUNKO1FBQ0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDeEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFMUMsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQzt1QkF2MEJMOzs7Ozs7SUFvMUJXLDBCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQTtRQUVwQyxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM1QyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM5QixNQUFNLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM5QyxNQUFNLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1QixNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN4QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxQyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDOzRCQWwyQkw7Ozs7OztJQTIyQlcsOEJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFxQixDQUFBO1FBRXhDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ3JCLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNqQyxLQUFLLElBQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDckMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdkQsSUFBSSxJQUFJLElBQUksU0FBUztvQkFDakIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDbEM7U0FDSjtRQUNELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMvQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUVsRCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO2dDQTUzQkw7Ozs7OztJQW00QlcsNkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBRW5FLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7K0JBMzRCTDs7Ozs7O0lBazVCVywrQkFBUSxHQUFmLFVBQWdCLFVBQWdCO1FBQzVCLElBQUksVUFBVSxJQUFJLElBQUksSUFBSSxVQUFVLElBQUksU0FBUztZQUFFLE9BQU8sU0FBUyxDQUFBO1FBQ25FLElBQU0sTUFBTSxHQUFHLElBQUksc0JBQXNCLENBQUE7UUFFekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsTUFBTSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUE7UUFFbEQsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztpQ0ExNUJMOzs7QUE2NUJBLE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRztJQUNyQixNQUFNLEVBQUUsQ0FBQztJQUNULElBQUksRUFBRSxDQUFDO0lBQ1AsTUFBTSxFQUFFLENBQUM7SUFDVCxXQUFXLEVBQUUsQ0FBQztDQUNqQixDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sa0JBQWtCLEdBQUc7SUFDOUIseUNBQXlDLEVBQUUsOERBQThEO0lBQ3pHLG9DQUFvQyxFQUFFLHlEQUF5RDtJQUMvRiw0QkFBNEIsRUFBRSxpREFBaUQ7SUFDL0Usa0NBQWtDLEVBQUUsdURBQXVEO0lBQzNGLG9DQUFvQyxFQUFFLHlEQUF5RDtJQUMvRiwyQkFBMkIsRUFBRSxnREFBZ0Q7SUFDN0UsMkJBQTJCLEVBQUUsZ0RBQWdEO0lBQzdFLDJCQUEyQixFQUFFLGdEQUFnRDtJQUM3RSwyQkFBMkIsRUFBRSxnREFBZ0Q7SUFDN0UseUNBQXlDLEVBQUUsOERBQThEO0lBQ3pHLG1DQUFtQyxFQUFFLHdEQUF3RDtJQUM3Rix3Q0FBd0MsRUFBRSw2REFBNkQ7SUFDdkcsa0NBQWtDLEVBQUUsdURBQXVEO0lBQzNGLGdDQUFnQyxFQUFFLHFEQUFxRDtJQUN2RiwrQkFBK0IsRUFBRSxvREFBb0Q7SUFDckYsdUJBQXVCLEVBQUUsNENBQTRDO0lBQ3JFLG9DQUFvQyxFQUFFLHlEQUF5RDtJQUMvRiwrQkFBK0IsRUFBRSxvREFBb0Q7SUFDckYsNkJBQTZCLEVBQUUsa0RBQWtEO0lBQ2pGLDZCQUE2QixFQUFFLGtEQUFrRDtJQUNqRiw0QkFBNEIsRUFBRSxpREFBaUQ7SUFDL0UsMEJBQTBCLEVBQUUsK0NBQStDO0lBQzNFLHVCQUF1QixFQUFFLDRDQUE0QztJQUNyRSx5QkFBeUIsRUFBRSw4Q0FBOEM7Q0FDNUUsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLHFCQUFxQixHQUFHO0lBQ2pDLHFCQUFxQixFQUFFLENBQUM7SUFDeEIsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QixZQUFZLEVBQUUsQ0FBQztJQUNmLG9CQUFvQixFQUFFLENBQUM7SUFDdkIscUJBQXFCLEVBQUUsQ0FBQztJQUN4QixtQkFBbUIsRUFBRSxDQUFDO0lBQ3RCLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsT0FBTyxFQUFFLENBQUM7Q0FDYixDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUc7SUFDaEMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyx3QkFBd0IsRUFBRSwwQkFBMEI7SUFDcEQsOEJBQThCLEVBQUUsZ0NBQWdDO0lBQ2hFLCtCQUErQixFQUFFLGlDQUFpQztJQUNsRSxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxlQUFlLEVBQUUsaUJBQWlCO0NBQ3JDLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUc7SUFDekIsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzFDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsWUFBWSxFQUFFLGNBQWM7SUFDNUIsbUJBQW1CLEVBQUUscUJBQXFCO0NBQzdDLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQUc7SUFDMUIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFNBQVM7Q0FDckIsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLGVBQWUsR0FBRztJQUMzQixvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsb0JBQW9CLEVBQUUsc0JBQXNCO0NBQy9DLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRztJQUM3QixlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLG1CQUFtQixFQUFFLHFCQUFxQjtJQUMxQyxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsVUFBVSxFQUFFLFlBQVk7SUFDeEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1Qyx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQsb0JBQW9CLEVBQUUsc0JBQXNCO0NBQy9DLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSwyQkFBMkIsR0FBRztJQUN2QyxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsd0JBQXdCLEVBQUUsR0FBRztJQUM3Qiw4QkFBOEIsRUFBRSxHQUFHO0lBQ25DLCtCQUErQixFQUFFLEdBQUc7SUFDcEMsU0FBUyxFQUFFLENBQUMsQ0FBQztDQUNoQixDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUc7SUFDL0IsV0FBVyxFQUFFLGFBQWE7SUFDMUIsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLHNCQUFzQixFQUFFLHdCQUF3QjtJQUNoRCxtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsMEJBQTBCLEVBQUUsNEJBQTRCO0lBQ3hELFVBQVUsRUFBRSxZQUFZO0lBQ3hCLDJCQUEyQixFQUFFLDZCQUE2QjtJQUMxRCxlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLGlCQUFpQixFQUFFLG1CQUFtQjtDQUN6QyxDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sOEJBQThCLEdBQUc7SUFDMUMsV0FBVyxFQUFFLFlBQVk7SUFDekIsWUFBWSxFQUFFLGFBQWE7SUFDM0IscUJBQXFCLEVBQUUsb0JBQW9CO0lBQzNDLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QyxRQUFRLEVBQUUsU0FBUztJQUNuQixhQUFhLEVBQUUsY0FBYztJQUM3QixrQ0FBa0MsRUFBRSxnQ0FBZ0M7SUFDcEUsZ0NBQWdDLEVBQUUsOEJBQThCO0lBQ2hFLGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQyxpQkFBaUIsRUFBRSxpQkFBaUI7SUFDcEMsYUFBYSxFQUFFLGNBQWM7SUFDN0IsR0FBRyxFQUFFLEtBQUs7SUFDVixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxNQUFNO0lBQ1osVUFBVSxFQUFFLFdBQVc7SUFDdkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsbUJBQW1CLEVBQUUsbUJBQW1CO0lBQ3hDLGtCQUFrQixFQUFFLGtCQUFrQjtJQUN0QyxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbEMsZUFBZSxFQUFFLGVBQWU7SUFDaEMsa0JBQWtCLEVBQUUsa0JBQWtCO0lBQ3RDLGlCQUFpQixFQUFFLGlCQUFpQjtJQUNwQyxRQUFRLEVBQUUsU0FBUztJQUNuQiwyQkFBMkIsRUFBRSx5QkFBeUI7SUFDdEQsMEJBQTBCLEVBQUUsd0JBQXdCO0lBQ3BELFFBQVEsRUFBRSxTQUFTO0lBQ25CLFFBQVEsRUFBRSxTQUFTO0lBQ25CLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0lBQ3ZCLGVBQWUsRUFBRSxlQUFlO0lBQ2hDLGNBQWMsRUFBRSxlQUFlO0lBQy9CLGdCQUFnQixFQUFFLGlCQUFpQjtJQUNuQyxVQUFVLEVBQUUsV0FBVztJQUN2QixLQUFLLEVBQUUsT0FBTztJQUNkLFlBQVksRUFBRSxhQUFhO0lBQzNCLHFCQUFxQixFQUFFLHFCQUFxQjtJQUM1QyxnQkFBZ0IsRUFBRSxnQkFBZ0I7SUFDbEMsYUFBYSxFQUFFLGNBQWM7SUFDN0IsYUFBYSxFQUFFLGNBQWM7SUFDN0IsaUJBQWlCLEVBQUUsa0JBQWtCO0lBQ3JDLGFBQWEsRUFBRSxjQUFjO0lBQzdCLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLFlBQVksRUFBRSxhQUFhO0lBQzNCLHFCQUFxQixFQUFFLHNCQUFzQjtJQUM3QyxxQkFBcUIsRUFBRSxxQkFBcUI7SUFDNUMsV0FBVyxFQUFFLFlBQVk7SUFDekIsc0JBQXNCLEVBQUUsc0JBQXNCO0lBQzlDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLG9DQUFvQyxFQUFFLHFCQUFxQjtJQUMzRCxzQ0FBc0MsRUFBRSxxQkFBcUI7SUFDN0Qsa0NBQWtDLEVBQUUsa0JBQWtCO0lBQ3RELG9DQUFvQyxFQUFFLHFCQUFxQjtJQUMzRCxtQ0FBbUMsRUFBRSxxQkFBcUI7SUFDMUQsbUNBQW1DLEVBQUUsbUJBQW1CO0lBQ3hELDhCQUE4QixFQUFFLGVBQWU7SUFDL0Msa0NBQWtDLEVBQUUsbUJBQW1CO0NBQzFELENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUc7SUFDckIsS0FBSyxFQUFFLElBQUk7SUFDWCxLQUFLLEVBQUUsSUFBSTtJQUNYLGFBQWEsRUFBRSxJQUFJO0NBQ3RCLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxpQkFBaUIsR0FBRztJQUM3Qiw4QkFBOEIsRUFBRSxrREFBa0Q7SUFDbEYsNkJBQTZCLEVBQUUsaURBQWlEO0lBQ2hGLCtCQUErQixFQUFFLG1EQUFtRDtJQUNwRix3QkFBd0IsRUFBRSw0Q0FBNEM7SUFDdEUseUJBQXlCLEVBQUUsNkNBQTZDO0lBQ3hFLHdCQUF3QixFQUFFLDRDQUE0QztJQUN0RSx3QkFBd0IsRUFBRSw0Q0FBNEM7SUFDdEUsaUJBQWlCLEVBQUUscUNBQXFDO0NBQzNELENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRztJQUMvQixpQkFBaUIsRUFBRSxpQkFBaUI7SUFDcEMsY0FBYyxFQUFFLGNBQWM7SUFDOUIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsY0FBYyxFQUFFLGVBQWU7SUFDL0IsWUFBWSxFQUFFLGFBQWE7SUFDM0IsWUFBWSxFQUFFLGFBQWE7SUFDM0IscUJBQXFCLEVBQUUscUJBQXFCO0lBQzVDLGdCQUFnQixFQUFFLGdCQUFnQjtDQUNyQyxDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUc7SUFDakMsS0FBSyxFQUFFLE9BQU87SUFDZCxTQUFTLEVBQUUsV0FBVztJQUN0QixXQUFXLEVBQUUsYUFBYTtJQUMxQixVQUFVLEVBQUUsWUFBWTtJQUN4QixjQUFjLEVBQUUsZ0JBQWdCO0lBQ2hDLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsV0FBVyxFQUFFLGFBQWE7SUFDMUIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLE9BQU87SUFDZCxPQUFPLEVBQUUsU0FBUztDQUNyQixDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sMEJBQTBCLEdBQUc7SUFDdEMsa0NBQWtDLEVBQUUsQ0FBQztJQUNyQyxrQ0FBa0MsRUFBRSxDQUFDO0lBQ3JDLGtDQUFrQyxFQUFFLENBQUM7SUFDckMsa0NBQWtDLEVBQUUsQ0FBQztJQUNyQyxrQ0FBa0MsRUFBRSxDQUFDO0NBQ3hDLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRztJQUM1QixlQUFlLEVBQUUsQ0FBQztJQUNsQixZQUFZLEVBQUUsQ0FBQztDQUNsQixDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUc7SUFDcEMsaUNBQWlDLEVBQUUsQ0FBQztJQUNwQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ25DLHdDQUF3QyxFQUFFLENBQUM7Q0FDOUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLFNBQVMsR0FBRztJQUNyQixPQUFPLEVBQUUsQ0FBQztJQUNWLElBQUksRUFBRSxDQUFDO0lBQ1AsSUFBSSxFQUFFLENBQUM7SUFDUCxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsY0FBYyxFQUFFLENBQUM7Q0FDcEIsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHO0lBQ2hDLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QyxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzFDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsT0FBTyxFQUFFLFNBQVM7SUFDbEIsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxvQkFBb0IsRUFBRSxzQkFBc0I7Q0FDL0MsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUFHO0lBQ3BDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDYixVQUFVLEVBQUUsR0FBRztJQUNmLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLFNBQVMsRUFBRSxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIseUJBQXlCLEVBQUUsR0FBRztJQUM5QixZQUFZLEVBQUUsR0FBRztJQUNqQixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLDJCQUEyQixFQUFFLEdBQUc7SUFDaEMsMEJBQTBCLEVBQUUsR0FBRztJQUMvQixTQUFTLEVBQUUsR0FBRztJQUNkLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLEdBQUc7Q0FDbEIsQ0FBQTtBQUVELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHO0lBQzlCLDhCQUE4QixFQUFFLG1EQUFtRDtJQUNuRiw4QkFBOEIsRUFBRSxtREFBbUQ7SUFDbkYsNkJBQTZCLEVBQUUsa0RBQWtEO0lBQ2pGLDhCQUE4QixFQUFFLG1EQUFtRDtJQUNuRiwwQkFBMEIsRUFBRSwrQ0FBK0M7SUFDM0UsNkJBQTZCLEVBQUUsa0RBQWtEO0lBQ2pGLDhCQUE4QixFQUFFLG1EQUFtRDtJQUNuRiwyQkFBMkIsRUFBRSxnREFBZ0Q7SUFDN0UseUJBQXlCLEVBQUUsOENBQThDO0lBQ3pFLDZCQUE2QixFQUFFLGtEQUFrRDtJQUNqRix5QkFBeUIsRUFBRSw4Q0FBOEM7SUFDekUsOEJBQThCLEVBQUUsbURBQW1EO0lBQ25GLG9CQUFvQixFQUFFLHlDQUF5QztDQUNsRSxDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUc7SUFDaEMsR0FBRyxFQUFFLEtBQUs7SUFDVixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsU0FBUztJQUNuQixPQUFPLEVBQUUsU0FBUztJQUNsQixLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLGFBQWEsRUFBRSxjQUFjO0lBQzdCLGlCQUFpQixFQUFFLGtCQUFrQjtJQUNyQyxLQUFLLEVBQUUsT0FBTztJQUNkLFlBQVksRUFBRSxhQUFhO0lBQzNCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLGFBQWEsRUFBRSxjQUFjO0lBQzdCLFVBQVUsRUFBRSxZQUFZO0NBQzNCLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUc7SUFDakIsU0FBUyxXQUFBO0lBQ1Qsa0JBQWtCLG9CQUFBO0lBQ2xCLHFCQUFxQix1QkFBQTtJQUNyQixvQkFBb0Isc0JBQUE7SUFDcEIsYUFBYSxlQUFBO0lBQ2IsY0FBYyxnQkFBQTtJQUNkLGVBQWUsaUJBQUE7SUFDZixpQkFBaUIsbUJBQUE7SUFDakIsMkJBQTJCLDZCQUFBO0lBQzNCLG1CQUFtQixxQkFBQTtJQUNuQiw4QkFBOEIsZ0NBQUE7SUFDOUIsU0FBUyxXQUFBO0lBQ1QsaUJBQWlCLG1CQUFBO0lBQ2pCLG1CQUFtQixxQkFBQTtJQUNuQixxQkFBcUIsdUJBQUE7SUFDckIsMEJBQTBCLDRCQUFBO0lBQzFCLGdCQUFnQixrQkFBQTtJQUNoQix3QkFBd0IsMEJBQUE7SUFDeEIsU0FBUyxXQUFBO0lBQ1Qsb0JBQW9CLHNCQUFBO0lBQ3BCLHdCQUF3QiwwQkFBQTtJQUN4QixrQkFBa0Isb0JBQUE7SUFDbEIsb0JBQW9CLHNCQUFBO0NBQ3RCLENBQUE7O0lBMkI0QiwyQkFBMEI7Ozs7SUFPbkQsK0JBQWE7SUFRYiwrQkFBYTtJQVFiLG1DQUFpQjtJQVFqQiw0Q0FBMEI7SUFRMUIseUNBQXVCO0lBUXZCLHNCQUFJO0lBUUosd0JBQU07SUFRTiwrQkFBYTtJQVFiLHdDQUFzQjtJQVV0QixtQ0FBaUIsYUFBQyxPQUFZO0lBZTlCLHNEQUFvQyxhQUFDLE1BQVc7SUFnQmhELHlDQUF1QixhQUFDLE1BQVc7SUFTbkMsK0JBQWEsYUFBQyxHQUFRO0lBU3RCLDRCQUFVLGFBQUMsT0FBWTtJQVN2Qiw2QkFBVyxhQUFDLE9BQVk7SUFTeEIseUNBQXVCLGFBQUMsSUFBUztJQVNqQyxvQ0FBa0IsYUFBQyxNQUFXO0lBUzlCLDJDQUF5QixhQUFDLFVBQWU7SUFXekMsb0RBQWtDLGFBQUMsS0FBVSxFQUFFLFVBQWU7SUFTOUQsMkJBQVMsYUFBQyxRQUFhO0lBV3ZCLDhCQUFZLGFBQUMsSUFBUyxFQUFFLFFBQWEsRUFBRSxRQUFhO0lBU3BELDhCQUFZLGFBQUMsTUFBVztJQVN4Qiw4QkFBWSxhQUFDLFFBQWE7SUFTMUIsaUNBQWUsYUFBQyxRQUFhO0lBVzdCLHdDQUFzQixhQUFDLFFBQWEsRUFBRSxJQUFTLEVBQUUsSUFBUztJQVUxRCxnQ0FBYyxhQUFDLFFBQWEsRUFBRSxLQUFVO0lBVXhDLGdDQUFjLGFBQUMsUUFBYSxFQUFFLE9BQVk7SUFVMUMsbUNBQWlCLGFBQUMsUUFBYSxFQUFFLE9BQVk7SUFRN0MsMkJBQVM7SUFVVCxrQ0FBZ0IsYUFBQyxJQUFTLEVBQUUsSUFBUztJQVNyQyxpQ0FBZSxhQUFDLFFBQWE7SUFXN0Isd0NBQXNCLGFBQUMsUUFBYSxFQUFFLElBQVMsRUFBRSxJQUFTO0lBVTFELDZCQUFXLGFBQUMsSUFBUyxFQUFFLFFBQWE7SUFTcEMsMEJBQVEsYUFBQyxPQUFZO0lBU3JCLDZCQUFXLGFBQUMsS0FBVTtJQVV0QixvQ0FBa0IsYUFBQyxPQUFZLEVBQUUsdUJBQTRCO0lBUzdELG1DQUFpQixhQUFDLE9BQVk7SUFXOUIsMENBQXdCLGFBQUMsT0FBWSxFQUFFLElBQVMsRUFBRSxJQUFTO0lBUzNELDZCQUFXLGFBQUMsT0FBWTtJQVN4Qiw4QkFBWSxhQUFDLG1CQUF3Qjs7Ozs7OztnQkE1WHhDLFVBQVU7O2tCQXZ3Q1g7RUF3d0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZUV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZUV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0RXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEluaXRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbml0RXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXhjZXB0aW9uPzogTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFcnJvckV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXhjZXB0aW9uID0gTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzQmFja2VuZEV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0V4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlUmVzcG9uc2Uge1xuICAgIGV4Y2VwdGlvbj86IEZhY2VDYXB0dXJlRXhjZXB0aW9uXG4gICAgaW1hZ2U/OiBJbWFnZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGYWNlQ2FwdHVyZVJlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBGYWNlQ2FwdHVyZUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzUmVzcG9uc2Uge1xuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIGxpdmVuZXNzPzogc3RyaW5nXG4gICAgdGFnPzogc3RyaW5nXG4gICAgdHJhbnNhY3Rpb25JZD86IHN0cmluZ1xuICAgIGVzdGltYXRlZEFnZT86IG51bWJlclxuICAgIGV4Y2VwdGlvbj86IExpdmVuZXNzRXJyb3JFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQubGl2ZW5lc3MgPSBqc29uT2JqZWN0W1wibGl2ZW5lc3NcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JZFwiXVxuICAgICAgICByZXN1bHQuZXN0aW1hdGVkQWdlID0ganNvbk9iamVjdFtcImVzdGltYXRlZEFnZVwiXVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTGl2ZW5lc3NFcnJvckV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVzcG9uc2Uge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIGV4Y2VwdGlvbj86IE1hdGNoRmFjZXNFeGNlcHRpb25cbiAgICBkZXRlY3Rpb25zPzogTWF0Y2hGYWNlc0RldGVjdGlvbltdXG4gICAgcmVzdWx0cz86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmRldGVjdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZXN1bHRzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicmVzdWx0c1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInJlc3VsdHNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucmVzdWx0cy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2Uge1xuICAgIGltYWdlVHlwZT86IG51bWJlclxuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIHRhZz86IHN0cmluZ1xuICAgIGltYWdlRGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlRGF0YSA9IGpzb25PYmplY3RbXCJpbWFnZURhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1JlcXVlc3Qge1xuICAgIGltYWdlcz86IE1hdGNoRmFjZXNJbWFnZVtdXG4gICAgY3VzdG9tTWV0YWRhdGE/OiBhbnlcbiAgICB0aHVtYm5haWxzPzogYm9vbGVhblxuICAgIHRhZz86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LmltYWdlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiaW1hZ2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiaW1hZ2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmN1c3RvbU1ldGFkYXRhID0ganNvbk9iamVjdFtcImN1c3RvbU1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC50aHVtYm5haWxzID0ganNvbk9iamVjdFtcInRodW1ibmFpbHNcIl1cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0ltYWdlIHtcbiAgICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgICBkZXRlY3RBbGw/OiBib29sZWFuXG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgaWRlbnRpZmllcj86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzSW1hZ2VcblxuICAgICAgICByZXN1bHQuaW1hZ2VUeXBlID0ganNvbk9iamVjdFtcImltYWdlVHlwZVwiXVxuICAgICAgICByZXN1bHQuZGV0ZWN0QWxsID0ganNvbk9iamVjdFtcImRldGVjdEFsbFwiXVxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQuaWRlbnRpZmllciA9IGpzb25PYmplY3RbXCJpZGVudGlmaWVyXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpciB7XG4gICAgZmlyc3Q/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlXG4gICAgc2Vjb25kPzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuICAgIHNpbWlsYXJpdHk/OiBudW1iZXJcbiAgICBzY29yZT86IG51bWJlclxuICAgIGV4Y2VwdGlvbj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyXG5cbiAgICAgICAgcmVzdWx0LmZpcnN0ID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmlyc3RcIl0pXG4gICAgICAgIHJlc3VsdC5zZWNvbmQgPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJzZWNvbmRcIl0pXG4gICAgICAgIHJlc3VsdC5zaW1pbGFyaXR5ID0ganNvbk9iamVjdFtcInNpbWlsYXJpdHlcIl1cbiAgICAgICAgcmVzdWx0LnNjb3JlID0ganNvbk9iamVjdFtcInNjb3JlXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNDb21wYXJlZEZhY2Uge1xuICAgIGZhY2U/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVxuICAgIGltYWdlPzogTWF0Y2hGYWNlc0ltYWdlXG4gICAgZmFjZUluZGV4PzogbnVtYmVyXG4gICAgaW1hZ2VJbmRleD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuXG4gICAgICAgIHJlc3VsdC5mYWNlID0gTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VcIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5mYWNlSW5kZXggPSBqc29uT2JqZWN0W1wiZmFjZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZUluZGV4ID0ganNvbk9iamVjdFtcImltYWdlSW5kZXhcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2Uge1xuICAgIGZhY2VJbmRleD86IG51bWJlclxuICAgIGxhbmRtYXJrcz86IFBvaW50W11cbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICByb3RhdGlvbkFuZ2xlPzogbnVtYmVyXG4gICAgdGh1bWJuYWlsPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcblxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5mYWNlUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VSZWN0XCJdKVxuICAgICAgICByZXN1bHQucm90YXRpb25BbmdsZSA9IGpzb25PYmplY3RbXCJyb3RhdGlvbkFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC50aHVtYm5haWwgPSBqc29uT2JqZWN0W1widGh1bWJuYWlsXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb24ge1xuICAgIGltYWdlPzogTWF0Y2hGYWNlc0ltYWdlXG4gICAgaW1hZ2VJbmRleD86IG51bWJlclxuICAgIGZhY2VzPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VbXVxuICAgIGV4Y2VwdGlvbj86IE1hdGNoRmFjZXNFeGNlcHRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0RldGVjdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNEZXRlY3Rpb25cblxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VJbmRleCA9IGpzb25PYmplY3RbXCJpbWFnZUluZGV4XCJdXG4gICAgICAgIHJlc3VsdC5mYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJmYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBNYXRjaEZhY2VzRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvaW50IHtcbiAgICB4PzogbnVtYmVyXG4gICAgeT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQb2ludCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBvaW50XG5cbiAgICAgICAgcmVzdWx0LnggPSBqc29uT2JqZWN0W1wieFwiXVxuICAgICAgICByZXN1bHQueSA9IGpzb25PYmplY3RbXCJ5XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICAgIGJvdHRvbT86IG51bWJlclxuICAgIHRvcD86IG51bWJlclxuICAgIGxlZnQ/OiBudW1iZXJcbiAgICByaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBSZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUmVjdFxuXG4gICAgICAgIHJlc3VsdC5ib3R0b20gPSBqc29uT2JqZWN0W1wiYm90dG9tXCJdXG4gICAgICAgIHJlc3VsdC50b3AgPSBqc29uT2JqZWN0W1widG9wXCJdXG4gICAgICAgIHJlc3VsdC5sZWZ0ID0ganNvbk9iamVjdFtcImxlZnRcIl1cbiAgICAgICAgcmVzdWx0LnJpZ2h0ID0ganNvbk9iamVjdFtcInJpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNTaW1pbGFyaXR5VGhyZXNob2xkU3BsaXQge1xuICAgIG1hdGNoZWRGYWNlcz86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgdW5tYXRjaGVkRmFjZXM/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzU2ltaWxhcml0eVRocmVzaG9sZFNwbGl0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1NpbWlsYXJpdHlUaHJlc2hvbGRTcGxpdFxuXG4gICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcIm1hdGNoZWRGYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIuZnJvbUpzb24oanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1JlcXVlc3Qge1xuICAgIHRhZz86IHN0cmluZ1xuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgaW1hZ2U/OiBzdHJpbmdcbiAgICBjb25maWd1cmF0aW9uPzogRGV0ZWN0RmFjZXNDb25maWd1cmF0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzUmVxdWVzdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBqc29uT2JqZWN0W1wiaW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LmNvbmZpZ3VyYXRpb24gPSBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImNvbmZpZ3VyYXRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQ29uZmlndXJhdGlvbiB7XG4gICAgYXR0cmlidXRlcz86IHN0cmluZ1tdXG4gICAgY3VzdG9tUXVhbGl0eT86IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljW11cbiAgICBvdXRwdXRJbWFnZVBhcmFtcz86IE91dHB1dEltYWdlUGFyYW1zXG4gICAgb25seUNlbnRyYWxGYWNlPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb25cblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYXR0cmlidXRlcy5wdXNoKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYy5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jdXN0b21RdWFsaXR5LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG4gICAgICAgIHJlc3VsdC5vbmx5Q2VudHJhbEZhY2UgPSBqc29uT2JqZWN0W1wib25seUNlbnRyYWxGYWNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE91dHB1dEltYWdlUGFyYW1zIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmdcbiAgICBjcm9wPzogT3V0cHV0SW1hZ2VDcm9wXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE91dHB1dEltYWdlUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT3V0cHV0SW1hZ2VQYXJhbXNcblxuICAgICAgICByZXN1bHQuYmFja2dyb3VuZENvbG9yID0ganNvbk9iamVjdFtcImJhY2tncm91bmRDb2xvclwiXVxuICAgICAgICByZXN1bHQuY3JvcCA9IE91dHB1dEltYWdlQ3JvcC5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3JvcFwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0SW1hZ2VDcm9wIHtcbiAgICB0eXBlPzogbnVtYmVyXG4gICAgc2l6ZT86IFNpemVcbiAgICBwYWRDb2xvcj86IHN0cmluZ1xuICAgIHJldHVybk9yaWdpbmFsUmVjdD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT3V0cHV0SW1hZ2VDcm9wIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgT3V0cHV0SW1hZ2VDcm9wXG5cbiAgICAgICAgcmVzdWx0LnR5cGUgPSBqc29uT2JqZWN0W1widHlwZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IFNpemUuZnJvbUpzb24oanNvbk9iamVjdFtcInNpemVcIl0pXG4gICAgICAgIHJlc3VsdC5wYWRDb2xvciA9IGpzb25PYmplY3RbXCJwYWRDb2xvclwiXVxuICAgICAgICByZXN1bHQucmV0dXJuT3JpZ2luYWxSZWN0ID0ganNvbk9iamVjdFtcInJldHVybk9yaWdpbmFsUmVjdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYyB7XG4gICAgY2hhcmFjdGVyaXN0aWNOYW1lPzogc3RyaW5nXG4gICAgaW1hZ2VRdWFsaXR5R3JvdXA/OiBudW1iZXJcbiAgICByZWNvbW1lbmRlZFJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICBjdXN0b21SYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNcblxuICAgICAgICByZXN1bHQuY2hhcmFjdGVyaXN0aWNOYW1lID0ganNvbk9iamVjdFtcImNoYXJhY3RlcmlzdGljTmFtZVwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VRdWFsaXR5R3JvdXAgPSBqc29uT2JqZWN0W1wiaW1hZ2VRdWFsaXR5R3JvdXBcIl1cbiAgICAgICAgcmVzdWx0LnJlY29tbWVuZGVkUmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjb21tZW5kZWRSYW5nZVwiXSlcbiAgICAgICAgcmVzdWx0LmN1c3RvbVJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImN1c3RvbVJhbmdlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVF1YWxpdHlSYW5nZSB7XG4gICAgbWluPzogbnVtYmVyXG4gICAgbWF4PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eVJhbmdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5UmFuZ2VcblxuICAgICAgICByZXN1bHQubWluID0ganNvbk9iamVjdFtcIm1pblwiXVxuICAgICAgICByZXN1bHQubWF4ID0ganNvbk9iamVjdFtcIm1heFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaXplIHtcbiAgICB3aWR0aD86IG51bWJlclxuICAgIGhlaWdodD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTaXplIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2l6ZVxuXG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGpzb25PYmplY3RbXCJ3aWR0aFwiXVxuICAgICAgICByZXN1bHQuaGVpZ2h0ID0ganNvbk9iamVjdFtcImhlaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc1Jlc3BvbnNlIHtcbiAgICBkZXRlY3Rpb24/OiBEZXRlY3RGYWNlUmVzdWx0XG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBlcnJvcj86IERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb25cbiAgICBhbGxEZXRlY3Rpb25zPzogRGV0ZWN0RmFjZVJlc3VsdFtdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbiA9IERldGVjdEZhY2VSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5lcnJvciA9IERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImVycm9yXCJdKVxuICAgICAgICByZXN1bHQuYWxsRGV0ZWN0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImFsbERldGVjdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gRGV0ZWN0RmFjZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hbGxEZXRlY3Rpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICB1bmRlcmx5aW5nRXhjZXB0aW9uPzogRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNFcnJvckV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXhjZXB0aW9uID0gRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQmFja2VuZEV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VSZXN1bHQge1xuICAgIHF1YWxpdHk/OiBJbWFnZVF1YWxpdHlSZXN1bHRbXVxuICAgIGF0dHJpYnV0ZXM/OiBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFtdXG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGNyb3A/OiBzdHJpbmdcbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFJlY3Q/OiBSZWN0XG4gICAgaXNRdWFsaXR5Q29tcGxpYW50PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5xdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNyb3AgPSBqc29uT2JqZWN0W1wiY3JvcFwiXVxuICAgICAgICByZXN1bHQuZmFjZVJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm9yaWdpbmFsUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcIm9yaWdpbmFsUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmlzUXVhbGl0eUNvbXBsaWFudCA9IGpzb25PYmplY3RbXCJpc1F1YWxpdHlDb21wbGlhbnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5UmVzdWx0IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgZ3JvdXA/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICByYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5UmVzdWx0XG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuZ3JvdXAgPSBqc29uT2JqZWN0W1wiZ3JvdXBcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJhbmdlXCJdKVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQge1xuICAgIGF0dHJpYnV0ZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGNvbmZpZGVuY2U/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGUgPSBqc29uT2JqZWN0W1wiYXR0cmlidXRlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQucmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmFuZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5jb25maWRlbmNlID0ganNvbk9iamVjdFtcImNvbmZpZGVuY2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9udCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHN0eWxlPzogbnVtYmVyXG4gICAgc2l6ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGb250IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRm9udFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnN0eWxlID0ganNvbk9iamVjdFtcInN0eWxlXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgZ3JvdXBzPzogc3RyaW5nW11cbiAgICB1cGRhdGVkQXQ/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvblxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3Vwcy5wdXNoKGpzb25PYmplY3RbXCJncm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZWRBdCA9IGpzb25PYmplY3RbXCJ1cGRhdGVkQXRcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25Hcm91cCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25Hcm91cFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25JbWFnZSB7XG4gICAgcGF0aD86IHN0cmluZ1xuICAgIHVybD86IHN0cmluZ1xuICAgIGNvbnRlbnRUeXBlPzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb25JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvbkltYWdlXG5cbiAgICAgICAgcmVzdWx0LnBhdGggPSBqc29uT2JqZWN0W1wicGF0aFwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuY29udGVudFR5cGUgPSBqc29uT2JqZWN0W1wiY29udGVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCB7XG4gICAgaW1hZ2VEYXRhPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlVXBsb2FkIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VVcGxvYWRcblxuICAgICAgICByZXN1bHQuaW1hZ2VEYXRhID0ganNvbk9iamVjdFtcImltYWdlRGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdCB7XG4gICAgcGVyc29uSWRzVG9BZGQ/OiBzdHJpbmdbXVxuICAgIHBlcnNvbklkc1RvUmVtb3ZlPzogc3RyaW5nW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRWRpdEdyb3VwUGVyc29uc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb0FkZCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb0FkZC5wdXNoKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucGVyc29uSWRzVG9SZW1vdmUgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGVyc29uSWRzVG9SZW1vdmUucHVzaChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uUmVxdWVzdCB7XG4gICAgb3V0cHV0SW1hZ2VQYXJhbXM/OiBPdXRwdXRJbWFnZVBhcmFtc1xuICAgIGdyb3VwSWRzRm9yU2VhcmNoPzogc3RyaW5nW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBsaW1pdD86IG51bWJlclxuICAgIGltYWdlVXBsb2FkPzogSW1hZ2VVcGxvYWRcbiAgICBkZXRlY3RBbGw/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvblJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25SZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0Lm91dHB1dEltYWdlUGFyYW1zID0gT3V0cHV0SW1hZ2VQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcIm91dHB1dEltYWdlUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2ggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2gucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmxpbWl0ID0ganNvbk9iamVjdFtcImxpbWl0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVVwbG9hZCA9IEltYWdlVXBsb2FkLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVVwbG9hZFwiXSlcbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uIHtcbiAgICBkZXRlY3Rpb24/OiBTZWFyY2hQZXJzb25EZXRlY3Rpb25cbiAgICBpbWFnZXM/OiBTZWFyY2hQZXJzb25JbWFnZVtdXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGdyb3Vwcz86IHN0cmluZ1tdXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25cblxuICAgICAgICByZXN1bHQuZGV0ZWN0aW9uID0gU2VhcmNoUGVyc29uRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25cIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTZWFyY2hQZXJzb25JbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuZ3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBzLnB1c2goanNvbk9iamVjdFtcImdyb3Vwc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudXBkYXRlZEF0ID0ganNvbk9iamVjdFtcInVwZGF0ZWRBdFwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbkltYWdlIHtcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgZGlzdGFuY2U/OiBudW1iZXJcbiAgICBwYXRoPzogc3RyaW5nXG4gICAgdXJsPzogc3RyaW5nXG4gICAgY29udGVudFR5cGU/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvbkltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uSW1hZ2VcblxuICAgICAgICByZXN1bHQuc2ltaWxhcml0eSA9IGpzb25PYmplY3RbXCJzaW1pbGFyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5kaXN0YW5jZSA9IGpzb25PYmplY3RbXCJkaXN0YW5jZVwiXVxuICAgICAgICByZXN1bHQucGF0aCA9IGpzb25PYmplY3RbXCJwYXRoXCJdXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5jb250ZW50VHlwZSA9IGpzb25PYmplY3RbXCJjb250ZW50VHlwZVwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbkRldGVjdGlvbiB7XG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIHJlY3Q/OiBSZWN0XG4gICAgY3JvcEltYWdlPzogc3RyaW5nXG4gICAgcm90YXRpb25BbmdsZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25EZXRlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25EZXRlY3Rpb25cblxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNyb3BJbWFnZSA9IGpzb25PYmplY3RbXCJjcm9wSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnJvdGF0aW9uQW5nbGUgPSBqc29uT2JqZWN0W1wicm90YXRpb25BbmdsZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc05vdGlmaWNhdGlvbiB7XG4gICAgc3RhdHVzPzogc3RyaW5nXG4gICAgcmVzcG9uc2U/OiBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVzcG9uc2UgPSBMaXZlbmVzc1Jlc3BvbnNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXNwb25zZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9FbmNvZGVyQ29tcGxldGlvbiB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZpZGVvRW5jb2RlckNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWaWRlb0VuY29kZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LnN1Y2Nlc3MgPSBqc29uT2JqZWN0W1wic3VjY2Vzc1wiXVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uQ29sb3IgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLk9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTl9CQUNLR1JPVU5EXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX1RJVExFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5PTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT05fVElUTEVcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5PTkJPQVJESU5HX1NDUkVFTl9CQUNLR1JPVU5EXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVFwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX01FU1NBR0VfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuT05CT0FSRElOR19TQ1JFRU5fTUVTU0FHRV9MQUJFTF9URVhUXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TVFJPS0VfTk9STUFMOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX1NUUk9LRV9OT1JNQUxcIixcbiAgICBDQU1FUkFfU0NSRUVOX1NUUk9LRV9BQ1RJVkU6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fU1RST0tFX0FDVElWRVwiLFxuICAgIENBTUVSQV9TQ1JFRU5fU0VDVE9SX1RBUkdFVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9TRUNUT1JfVEFSR0VUXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TRUNUT1JfQUNUSVZFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX1NFQ1RPUl9BQ1RJVkVcIixcbiAgICBDQU1FUkFfU0NSRUVOX0ZST05UX0hJTlRfTEFCRUxfQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX0JBQ0tHUk9VTkRcIixcbiAgICBDQU1FUkFfU0NSRUVOX0ZST05UX0hJTlRfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX1RFWFRcIixcbiAgICBDQU1FUkFfU0NSRUVOX0JBQ0tfSElOVF9MQUJFTF9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX0JBQ0tfSElOVF9MQUJFTF9CQUNLR1JPVU5EXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfVEVYVFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfVE9PTEJBUl9USU5UOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX0xJR0hUX1RPT0xCQVJfVElOVFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fREFSS19UT09MQkFSX1RJTlQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fREFSS19UT09MQkFSX1RJTlRcIixcbiAgICBSRVRSWV9TQ1JFRU5fQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX0JBQ0tHUk9VTkRcIixcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fQkFDS0dST1VORFwiLFxuICAgIFJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fVElUTEU6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fVElUTEVcIixcbiAgICBSRVRSWV9TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFRcIixcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFNfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX0hJTlRfTEFCRUxTX1RFWFRcIixcbiAgICBQUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5QUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1M6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlBST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fVElUTEU6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlBST0NFU1NJTkdfU0NSRUVOX1RJVExFXCIsXG4gICAgU1VDQ0VTU19TQ1JFRU5fQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuU1VDQ0VTU19TQ1JFRU5fQkFDS0dST1VORFwiLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5R3JvdXBOYW1lID0ge1xuICAgIElNQUdFX0NIQVJBQ1RFUklTVElDUzogMSxcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OOiAyLFxuICAgIEZBQ0VfUVVBTElUWTogMyxcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDUzogNCxcbiAgICBTSEFET1dTX0FORF9MSUdIVE5JTkc6IDUsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTjogNixcbiAgICBIRUFEX09DQ0xVU0lPTjogNyxcbiAgICBCQUNLR1JPVU5EOiA4LFxuICAgIFVOS05PV046IDksXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogXCJJTUFHRV9FTVBUWVwiLFxuICAgIEZSX0ZBQ0VfTk9UX0RFVEVDVEVEOiBcIkZSX0ZBQ0VfTk9UX0RFVEVDVEVEXCIsXG4gICAgRkFDRVJfTk9fTElDRU5TRTogXCJGQUNFUl9OT19MSUNFTlNFXCIsXG4gICAgRkFDRVJfSVNfTk9UX0lOSVRJQUxJWkVEOiBcIkZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRFwiLFxuICAgIEZBQ0VSX0NPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogXCJGQUNFUl9DT01NQU5EX0lTX05PVF9TVVBQT1JURURcIixcbiAgICBGQUNFUl9DT01NQU5EX1BBUkFNU19SRUFEX0VSUk9SOiBcIkZBQ0VSX0NPTU1BTkRfUEFSQU1TX1JFQURfRVJST1JcIixcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogXCJQUk9DRVNTSU5HX0ZBSUxFRFwiLFxuICAgIFJFUVVFU1RfRkFJTEVEOiBcIlJFUVVFU1RfRkFJTEVEXCIsXG4gICAgQVBJX0NBTExfRkFJTEVEOiBcIkFQSV9DQUxMX0ZBSUxFRFwiLFxufVxuXG5leHBvcnQgY29uc3QgSW5pdEVycm9yQ29kZSA9IHtcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiBcIklOX1BST0dSRVNTX0FMUkVBRFlcIixcbiAgICBDT05URVhUX0lTX05VTEw6IFwiQ09OVEVYVF9JU19OVUxMXCIsXG4gICAgTUlTU0lOR19DT1JFOiBcIk1JU1NJTkdfQ09SRVwiLFxuICAgIElOVEVSTkFMX0NPUkVfRVJST1I6IFwiSU5URVJOQUxfQ09SRV9FUlJPUlwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTdGF0dXMgPSB7XG4gICAgUEFTU0VEOiBcIlBBU1NFRFwiLFxuICAgIFVOS05PV046IFwiVU5LTk9XTlwiLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhRXJyb3JDb2RlID0ge1xuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiBcIkNBTUVSQV9OT1RfQVZBSUxBQkxFXCIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IFwiQ0FNRVJBX05PX1BFUk1JU1NJT05cIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzRXJyb3JDb2RlID0ge1xuICAgIENPTlRFWFRfSVNfTlVMTDogXCJDT05URVhUX0lTX05VTExcIixcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiBcIklOX1BST0dSRVNTX0FMUkVBRFlcIixcbiAgICBaT09NX05PVF9TVVBQT1JURUQ6IFwiWk9PTV9OT1RfU1VQUE9SVEVEXCIsXG4gICAgTk9fTElDRU5TRTogXCJOT19MSUNFTlNFXCIsXG4gICAgQ0FOQ0VMTEVEOiBcIkNBTkNFTExFRFwiLFxuICAgIFBST0NFU1NJTkdfVElNRU9VVDogXCJQUk9DRVNTSU5HX1RJTUVPVVRcIixcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IFwiQVBJX0NBTExfRkFJTEVEXCIsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IFwiUFJPQ0VTU0lOR19GQUlMRURcIixcbiAgICBOT1RfSU5JVElBTElaRUQ6IFwiTk9UX0lOSVRJQUxJWkVEXCIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IFwiQ0FNRVJBX05PX1BFUk1JU1NJT05cIixcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogXCJDQU1FUkFfTk9UX0FWQUlMQUJMRVwiLFxuICAgIFBST0NFU1NJTkdfRlJBTUVfRkFJTEVEOiBcIlBST0NFU1NJTkdfRlJBTUVfRkFJTEVEXCIsXG4gICAgU0VTU0lPTl9TVEFSVF9GQUlMRUQ6IFwiU0VTU0lPTl9TVEFSVF9GQUlMRURcIixcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQmFja2VuZEVycm9yQ29kZSA9IHtcbiAgICBGUl9GQUNFX05PVF9ERVRFQ1RFRDogMixcbiAgICBGQUNFUl9OT19MSUNFTlNFOiAyMDAsXG4gICAgRkFDRVJfSVNfTk9UX0lOSVRJQUxJWkVEOiAyMDEsXG4gICAgRkFDRVJfQ09NTUFORF9JU19OT1RfU1VQUE9SVEVEOiAyMDIsXG4gICAgRkFDRVJfQ09NTUFORF9QQVJBTVNfUkVBRF9FUlJPUjogMjAzLFxuICAgIFVOREVGSU5FRDogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaEZhY2VzRXJyb3JDb2RlID0ge1xuICAgIElNQUdFX0VNUFRZOiBcIklNQUdFX0VNUFRZXCIsXG4gICAgRkFDRV9OT1RfREVURUNURUQ6IFwiRkFDRV9OT1RfREVURUNURURcIixcbiAgICBMQU5ETUFSS1NfTk9UX0RFVEVDVEVEOiBcIkxBTkRNQVJLU19OT1RfREVURUNURURcIixcbiAgICBGQUNFX0FMSUdORVJfRkFJTEVEOiBcIkZBQ0VfQUxJR05FUl9GQUlMRURcIixcbiAgICBERVNDUklQVE9SX0VYVFJBQ1RPUl9FUlJPUjogXCJERVNDUklQVE9SX0VYVFJBQ1RPUl9FUlJPUlwiLFxuICAgIE5PX0xJQ0VOU0U6IFwiTk9fTElDRU5TRVwiLFxuICAgIElNQUdFU19DT1VOVF9MSU1JVF9FWENFRURFRDogXCJJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERURcIixcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IFwiQVBJX0NBTExfRkFJTEVEXCIsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IFwiUFJPQ0VTU0lOR19GQUlMRURcIixcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljTmFtZSA9IHtcbiAgICBJTUFHRV9XSURUSDogXCJJbWFnZVdpZHRoXCIsXG4gICAgSU1BR0VfSEVJR0hUOiBcIkltYWdlSGVpZ2h0XCIsXG4gICAgSU1BR0VfV0lEVEhfVE9fSEVJR0hUOiBcIkltYWdlV2lkdGhUb0hlaWdodFwiLFxuICAgIElNQUdFX0NIQU5ORUxTX05VTUJFUjogXCJJbWFnZUNoYW5uZWxzTnVtYmVyXCIsXG4gICAgQVJUX0ZBQ0U6IFwiQXJ0RmFjZVwiLFxuICAgIFBBRERJTkdfUkFUSU86IFwiUGFkZGluZ1JhdGlvXCIsXG4gICAgRkFDRV9NSURfUE9JTlRfSE9SSVpPTlRBTF9QT1NJVElPTjogXCJGYWNlTWlkUG9pbnRIb3Jpem9udGFsUG9zaXRpb25cIixcbiAgICBGQUNFX01JRF9QT0lOVF9WRVJUSUNBTF9QT1NJVElPTjogXCJGYWNlTWlkUG9pbnRWZXJ0aWNhbFBvc2l0aW9uXCIsXG4gICAgSEVBRF9XSURUSF9SQVRJTzogXCJIZWFkV2lkdGhSYXRpb1wiLFxuICAgIEhFQURfSEVJR0hUX1JBVElPOiBcIkhlYWRIZWlnaHRSYXRpb1wiLFxuICAgIEVZRVNfRElTVEFOQ0U6IFwiRXllc0Rpc3RhbmNlXCIsXG4gICAgWUFXOiBcIllhd1wiLFxuICAgIFBJVENIOiBcIlBpdGNoXCIsXG4gICAgUk9MTDogXCJSb2xsXCIsXG4gICAgQkxVUl9MRVZFTDogXCJCbHVyTGV2ZWxcIixcbiAgICBOT0lTRV9MRVZFTDogXCJOb2lzZUxldmVsXCIsXG4gICAgVU5OQVRVUkFMX1NLSU5fVE9ORTogXCJVbm5hdHVyYWxTa2luVG9uZVwiLFxuICAgIEZBQ0VfRFlOQU1JQ19SQU5HRTogXCJGYWNlRHluYW1pY1JhbmdlXCIsXG4gICAgRVlFX1JJR0hUX0NMT1NFRDogXCJFeWVSaWdodENsb3NlZFwiLFxuICAgIEVZRV9MRUZUX0NMT1NFRDogXCJFeWVMZWZ0Q2xvc2VkXCIsXG4gICAgRVlFX1JJR0hUX09DQ0xVREVEOiBcIkV5ZVJpZ2h0T2NjbHVkZWRcIixcbiAgICBFWUVfTEVGVF9PQ0NMVURFRDogXCJFeWVMZWZ0T2NjbHVkZWRcIixcbiAgICBFWUVTX1JFRDogXCJFeWVzUmVkXCIsXG4gICAgRVlFX1JJR0hUX0NPVkVSRURfV0lUSF9IQUlSOiBcIkV5ZVJpZ2h0Q292ZXJlZFdpdGhIYWlyXCIsXG4gICAgRVlFX0xFRlRfQ09WRVJFRF9XSVRIX0hBSVI6IFwiRXllTGVmdENvdmVyZWRXaXRoSGFpclwiLFxuICAgIE9GRl9HQVpFOiBcIk9mZkdhemVcIixcbiAgICBUT09fREFSSzogXCJUb29EYXJrXCIsXG4gICAgVE9PX0xJR0hUOiBcIlRvb0xpZ2h0XCIsXG4gICAgRkFDRV9HTEFSRTogXCJGYWNlR2xhcmVcIixcbiAgICBTSEFET1dTX09OX0ZBQ0U6IFwiU2hhZG93c09uRmFjZVwiLFxuICAgIFNIT1VMREVSU19QT1NFOiBcIlNob3VsZGVyc1Bvc2VcIixcbiAgICBFWFBSRVNTSU9OX0xFVkVMOiBcIkV4cHJlc3Npb25MZXZlbFwiLFxuICAgIE1PVVRIX09QRU46IFwiTW91dGhPcGVuXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBEQVJLX0dMQVNTRVM6IFwiRGFya0dsYXNzZXNcIixcbiAgICBSRUZMRUNUSU9OX09OX0dMQVNTRVM6IFwiUmVmbGVjdGlvbk9uR2xhc3Nlc1wiLFxuICAgIEZSQU1FU19UT09fSEVBVlk6IFwiRnJhbWVzVG9vSGVhdnlcIixcbiAgICBGQUNFX09DQ0xVREVEOiBcIkZhY2VPY2NsdWRlZFwiLFxuICAgIEhFQURfQ09WRVJJTkc6IFwiSGVhZENvdmVyaW5nXCIsXG4gICAgRk9SRUhFQURfQ09WRVJJTkc6IFwiRm9yZWhlYWRDb3ZlcmluZ1wiLFxuICAgIFNUUk9OR19NQUtFVVA6IFwiU3Ryb25nTWFrZXVwXCIsXG4gICAgSEVBRF9QSE9ORVM6IFwiSGVhZHBob25lc1wiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIEJBQ0tHUk9VTkRfVU5JRk9STUlUWTogXCJCYWNrZ3JvdW5kVW5pZm9ybWl0eVwiLFxuICAgIFNIQURPV1NfT05fQkFDS0dST1VORDogXCJTaGFkb3dzT25CYWNrZ3JvdW5kXCIsXG4gICAgT1RIRVJfRkFDRVM6IFwiT3RoZXJGYWNlc1wiLFxuICAgIEJBQ0tHUk9VTkRfQ09MT1JfTUFUQ0g6IFwiQmFja2dyb3VuZENvbG9yTWF0Y2hcIixcbiAgICBVTktOT1dOOiBcIlVua25vd25cIixcbiAgICBJTUFHRV9DSEFSQUNURVJJU1RJQ19BTExfUkVDT01NRU5ERUQ6IFwiSW1hZ2VDaGFyYWN0ZXJpc3RpY1wiLFxuICAgIEhFQURfU0laRV9BTkRfUE9TSVRJT05fQUxMX1JFQ09NTUVOREVEOiBcIkhlYWRTaXplQW5kUG9zaXRpb25cIixcbiAgICBGQUNFX0lNQUdFX1FVQUxJVFlfQUxMX1JFQ09NTUVOREVEOiBcIkZhY2VJbWFnZVF1YWxpdHlcIixcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDU19BTExfUkVDT01NRU5ERUQ6IFwiRXllc0NoYXJhY3RlcmlzdGljc1wiLFxuICAgIFNIQURPV19BTkRfTElHSFRJTkdfQUxMX1JFQ09NTUVOREVEOiBcIlNoYWRvd3NBbmRMaWdodG5pbmdcIixcbiAgICBQT1NFX0FORF9FWFBSRVNTSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJQb3NlQW5kRXhwcmVzc2lvblwiLFxuICAgIEhFQURfT0NDTFVTSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJIZWFkT2NjbHVzaW9uXCIsXG4gICAgUVVBTElUWV9CQUNLR1JPVU5EX0FMTF9SRUNPTU1FTkRFRDogXCJRdWFsaXR5QmFja2dyb3VuZFwiLFxufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uVGFnID0ge1xuICAgIENMT1NFOiAxMDAxLFxuICAgIFRPUkNIOiAxMDAyLFxuICAgIENBTUVSQV9TV0lUQ0g6IDEwMDMsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uRm9udCA9IHtcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT046IFwiQ3VzdG9taXphdGlvbkZvbnQuT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUw6IFwiQ3VzdG9taXphdGlvbkZvbnQuT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUxcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMOiBcIkN1c3RvbWl6YXRpb25Gb250Lk9OQk9BUkRJTkdfU0NSRUVOX01FU1NBR0VfTEFCRUxcIixcbiAgICBDQU1FUkFfU0NSRUVOX0hJTlRfTEFCRUw6IFwiQ3VzdG9taXphdGlvbkZvbnQuQ0FNRVJBX1NDUkVFTl9ISU5UX0xBQkVMXCIsXG4gICAgUkVUUllfU0NSRUVOX1JFVFJZX0JVVFRPTjogXCJDdXN0b21pemF0aW9uRm9udC5SRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OXCIsXG4gICAgUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMOiBcIkN1c3RvbWl6YXRpb25Gb250LlJFVFJZX1NDUkVFTl9USVRMRV9MQUJFTFwiLFxuICAgIFJFVFJZX1NDUkVFTl9ISU5UX0xBQkVMUzogXCJDdXN0b21pemF0aW9uRm9udC5SRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFNcIixcbiAgICBQUk9DRVNTSU5HX1NDUkVFTjogXCJDdXN0b21pemF0aW9uRm9udC5QUk9DRVNTSU5HX1NDUkVFTlwiLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNTY2VuYXJpbyA9IHtcbiAgICBDUk9QX0NFTlRSQUxfRkFDRTogXCJDcm9wQ2VudHJhbEZhY2VcIixcbiAgICBDUk9QX0FMTF9GQUNFUzogXCJDcm9wQWxsRmFjZXNcIixcbiAgICBUSFVNQk5BSUw6IFwiVGh1bWJuYWlsXCIsXG4gICAgQVRUUklCVVRFU19BTEw6IFwiQXR0cmlidXRlc0FsbFwiLFxuICAgIFFVQUxJVFlfRlVMTDogXCJRdWFsaXR5RnVsbFwiLFxuICAgIFFVQUxJVFlfSUNBTzogXCJRdWFsaXR5SUNBT1wiLFxuICAgIFFVQUxJVFlfVklTQV9TQ0hFTkdFTjogXCJRdWFsaXR5VmlzYVNjaGVuZ2VuXCIsXG4gICAgUVVBTElUWV9WSVNBX1VTQTogXCJRdWFsaXR5VmlzYVVTQVwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NQcm9jZXNzU3RhdHVzID0ge1xuICAgIFNUQVJUOiBcIlNUQVJUXCIsXG4gICAgUFJFUEFSSU5HOiBcIlBSRVBBUklOR1wiLFxuICAgIE5FV19TRVNTSU9OOiBcIk5FV19TRVNTSU9OXCIsXG4gICAgTkVYVF9TVEFHRTogXCJORVhUX1NUQUdFXCIsXG4gICAgU0VDVE9SX0NIQU5HRUQ6IFwiU0VDVE9SX0NIQU5HRURcIixcbiAgICBQUk9HUkVTUzogXCJQUk9HUkVTU1wiLFxuICAgIExPV19CUklHSFRORVNTOiBcIkxPV19CUklHSFRORVNTXCIsXG4gICAgRklUX0ZBQ0U6IFwiRklUX0ZBQ0VcIixcbiAgICBNT1ZFX0FXQVk6IFwiTU9WRV9BV0FZXCIsXG4gICAgTU9WRV9DTE9TRVI6IFwiTU9WRV9DTE9TRVJcIixcbiAgICBUVVJOX0hFQUQ6IFwiVFVSTl9IRUFEXCIsXG4gICAgUFJPQ0VTU0lORzogXCJQUk9DRVNTSU5HXCIsXG4gICAgRkFJTEVEOiBcIkZBSUxFRFwiLFxuICAgIFJFVFJZOiBcIlJFVFJZXCIsXG4gICAgU1VDQ0VTUzogXCJTVUNDRVNTXCIsXG59XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRJbWFnZUNyb3BBc3BlY3RSYXRpbyA9IHtcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fM1g0OiAwLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT180WDU6IDEsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzJYMzogMixcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fMVgxOiAzLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT183WDk6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1NraXBTdGVwID0ge1xuICAgIE9OQk9BUkRJTkdfU1RFUDogMSxcbiAgICBTVUNDRVNTX1NURVA6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlSZXN1bHRTdGF0dXMgPSB7XG4gICAgSU1BR0VfUVVBTElUWV9SRVNVTFRfU1RBVFVTX0ZBTFNFOiAwLFxuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19UUlVFOiAxLFxuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19VTkRFVEVSTUlORUQ6IDIsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVR5cGUgPSB7XG4gICAgUFJJTlRFRDogMSxcbiAgICBSRklEOiAyLFxuICAgIExJVkU6IDMsXG4gICAgRE9DVU1FTlRfV0lUSF9MSVZFOiA0LFxuICAgIEVYVEVSTkFMOiA1LFxuICAgIEdIT1NUX1BPUlRSQUlUOiA2LFxufVxuXG5leHBvcnQgY29uc3QgRmFjZUNhcHR1cmVFcnJvckNvZGUgPSB7XG4gICAgQ0FOQ0VMOiBcIkNBTkNFTFwiLFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiBcIkNBTUVSQV9OT1RfQVZBSUxBQkxFXCIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IFwiQ0FNRVJBX05PX1BFUk1JU1NJT05cIixcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiBcIklOX1BST0dSRVNTX0FMUkVBRFlcIixcbiAgICBDT05URVhUX0lTX05VTEw6IFwiQ09OVEVYVF9JU19OVUxMXCIsXG4gICAgVElNRU9VVDogXCJUSU1FT1VUXCIsXG4gICAgTk9UX0lOSVRJQUxJWkVEOiBcIk5PVF9JTklUSUFMSVpFRFwiLFxuICAgIFNFU1NJT05fU1RBUlRfRkFJTEVEOiBcIlNFU1NJT05fU1RBUlRfRkFJTEVEXCIsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc0JhY2tlbmRFcnJvckNvZGUgPSB7XG4gICAgVU5ERUZJTkVEOiAtMSxcbiAgICBOT19MSUNFTlNFOiAyMDAsXG4gICAgTE9XX1FVQUxJVFk6IDIzMSxcbiAgICBISUdIX0FTWU1NRVRSWTogMjMyLFxuICAgIFRSQUNLX0JSRUFLOiAyNDYsXG4gICAgQ0xPU0VEX0VZRVNfREVURUNURUQ6IDIzMCxcbiAgICBGQUNFX09WRVJfRU1PVElPTkFMOiAyMzMsXG4gICAgU1VOR0xBU1NFU19ERVRFQ1RFRDogMjM0LFxuICAgIFNNQUxMX0FHRTogMjM1LFxuICAgIEhFQUREUkVTU19ERVRFQ1RFRDogMjM2LFxuICAgIE1FRElDSU5FX01BU0tfREVURUNURUQ6IDIzOSxcbiAgICBPQ0NMVVNJT05fREVURUNURUQ6IDI0MCxcbiAgICBGT1JFSEVBRF9HTEFTU0VTX0RFVEVDVEVEOiAyNDIsXG4gICAgTU9VVEhfT1BFTkVEOiAyNDMsXG4gICAgQVJUX01BU0tfREVURUNURUQ6IDI0NCxcbiAgICBOT1RfTUFUQ0hFRDogMjM3LFxuICAgIElNQUdFU19DT1VOVF9MSU1JVF9FWENFRURFRDogMjM4LFxuICAgIEVMRUNUUk9OSUNfREVWSUNFX0RFVEVDVEVEOiAyNDUsXG4gICAgV1JPTkdfR0VPOiAyNDcsXG4gICAgV1JPTkdfT0Y6IDI0OCxcbiAgICBXUk9OR19WSUVXOiAyNDksXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uSW1hZ2UgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5PTkJPQVJESU5HX1NDUkVFTl9DTE9TRV9CVVRUT05cIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9JTExVTUlOQVRJT046IFwiQ3VzdG9taXphdGlvbkltYWdlLk9OQk9BUkRJTkdfU0NSRUVOX0lMTFVNSU5BVElPTlwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0FDQ0VTU09SSUVTOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5PTkJPQVJESU5HX1NDUkVFTl9BQ0NFU1NPUklFU1wiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0NBTUVSQV9MRVZFTDogXCJDdXN0b21pemF0aW9uSW1hZ2UuT05CT0FSRElOR19TQ1JFRU5fQ0FNRVJBX0xFVkVMXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9DTE9TRV9CVVRUT046IFwiQ3VzdG9taXphdGlvbkltYWdlLkNBTUVSQV9TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9MSUdIVF9PTl9CVVRUT046IFwiQ3VzdG9taXphdGlvbkltYWdlLkNBTUVSQV9TQ1JFRU5fTElHSFRfT05fQlVUVE9OXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9MSUdIVF9PRkZfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX0xJR0hUX09GRl9CVVRUT05cIixcbiAgICBDQU1FUkFfU0NSRUVOX1NXSVRDSF9CVVRUT046IFwiQ3VzdG9taXphdGlvbkltYWdlLkNBTUVSQV9TQ1JFRU5fU1dJVENIX0JVVFRPTlwiLFxuICAgIFJFVFJZX1NDUkVFTl9DTE9TRV9CVVRUT046IFwiQ3VzdG9taXphdGlvbkltYWdlLlJFVFJZX1NDUkVFTl9DTE9TRV9CVVRUT05cIixcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9FTlZJUk9OTUVOVDogXCJDdXN0b21pemF0aW9uSW1hZ2UuUkVUUllfU0NSRUVOX0hJTlRfRU5WSVJPTk1FTlRcIixcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9TVUJKRUNUOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5SRVRSWV9TQ1JFRU5fSElOVF9TVUJKRUNUXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5QUk9DRVNTSU5HX1NDUkVFTl9DTE9TRV9CVVRUT05cIixcbiAgICBTVUNDRVNTX1NDUkVFTl9JTUFHRTogXCJDdXN0b21pemF0aW9uSW1hZ2UuU1VDQ0VTU19TQ1JFRU5fSU1BR0VcIixcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQXR0cmlidXRlID0ge1xuICAgIEFHRTogXCJBZ2VcIixcbiAgICBFWUVfUklHSFQ6IFwiRXllUmlnaHRcIixcbiAgICBFWUVfTEVGVDogXCJFeWVMZWZ0XCIsXG4gICAgRU1PVElPTjogXCJFbW90aW9uXCIsXG4gICAgU01JTEU6IFwiU21pbGVcIixcbiAgICBHTEFTU0VTOiBcIkdsYXNzZXNcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBNT1VUSDogXCJNb3V0aFwiLFxuICAgIE1FRElDQUxfTUFTSzogXCJNZWRpY2FsTWFza1wiLFxuICAgIE9DQ0xVU0lPTjogXCJPY2NsdXNpb25cIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURQSE9ORVM6IFwiSGVhZHBob25lc1wiLFxufVxuXG5leHBvcnQgY29uc3QgRW51bSA9IHtcbiAgIEZvbnRTdHlsZSxcbiAgIEN1c3RvbWl6YXRpb25Db2xvcixcbiAgIEltYWdlUXVhbGl0eUdyb3VwTmFtZSxcbiAgIERldGVjdEZhY2VzRXJyb3JDb2RlLFxuICAgSW5pdEVycm9yQ29kZSxcbiAgIExpdmVuZXNzU3RhdHVzLFxuICAgQ2FtZXJhRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NFcnJvckNvZGUsXG4gICBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUsXG4gICBNYXRjaEZhY2VzRXJyb3JDb2RlLFxuICAgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNOYW1lLFxuICAgQnV0dG9uVGFnLFxuICAgQ3VzdG9taXphdGlvbkZvbnQsXG4gICBEZXRlY3RGYWNlc1NjZW5hcmlvLFxuICAgTGl2ZW5lc3NQcm9jZXNzU3RhdHVzLFxuICAgT3V0cHV0SW1hZ2VDcm9wQXNwZWN0UmF0aW8sXG4gICBMaXZlbmVzc1NraXBTdGVwLFxuICAgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzLFxuICAgSW1hZ2VUeXBlLFxuICAgRmFjZUNhcHR1cmVFcnJvckNvZGUsXG4gICBMaXZlbmVzc0JhY2tlbmRFcnJvckNvZGUsXG4gICBDdXN0b21pemF0aW9uSW1hZ2UsXG4gICBEZXRlY3RGYWNlc0F0dHJpYnV0ZSxcbn1cblxuLyoqXG4gKiBAbmFtZSBGYWNlU0RLXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgaXMgYSB3cmFwcGVyIGNvcmRvdmEgcGx1Z2luIGZvciBSZWd1bGFgcyBGYWNlIFNESy5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZhY2VTREsgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2UtYXBpL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHB1YmxpYyBGYWNlU0RLOiBGYWNlU0RLKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdGYWNlU0RLJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mYWNlLWFwaScsXG4gICAgcGx1Z2luUmVmOiAnRmFjZVNES1BsdWdpbi5GYWNlU0RLJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3JlZ3VsYWZvcmVuc2ljcy9GYWNlQXBpLUNvcmRvdmEtUGx1Z2luJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWNlU0RLIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRTZXJ2aWNlVXJsKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnRMaXZlbmVzcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEZhY2VTZGtWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJlc2VudEZhY2VDYXB0dXJlQWN0aXZpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wRmFjZUNhcHR1cmVBY3Rpdml0eSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWluaXQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpc0luaXRpYWxpemVkKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcExpdmVuZXNzUHJvY2Vzc2luZygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIHNldHMgaGVhZGVycyBmb3IgaHR0cCByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21hcH0gaGVhZGVycyBrZXkgLSBoZWFkZXIgbmFtZVxuICAgICAqICB2YWx1ZSAtIGhlYWRlciB2YWx1ZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0UmVxdWVzdEhlYWRlcnMoaGVhZGVyczogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBpbnQgY2FtZXJhSWQgLSBzZXQgY2FtZXJhIG9uIEFuZHJvaWRcbiAgICAgKiAgQ2FtZXJhUG9zaXRpb24gY2FtZXJhUG9zaXRpb25JT1MgLSBzZXQgY2FtZXJhIG9uIGlPU1xuICAgICAqICBib29sZWFuIGNhbWVyYVN3aXRjaEVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiBzaG93SGVscFRleHRBbmltYXRpb25cbiAgICAgKiAgYm9vbGVhbiBmb3JjZVRvVXNlSHVhd2VpVmlzaW9uXG4gICAgICogIGJvb2xlYW4gY2xvc2VCdXR0b25FbmFibGVkXG4gICAgICogIGJvb2xlYW4gdG9yY2hCdXR0b25FbmFibGVkXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBwcmVzZW50RmFjZUNhcHR1cmVBY3Rpdml0eVdpdGhDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIGludCBjYW1lcmFJZCAtIHNldCBjYW1lcmEgb24gQW5kcm9pZFxuICAgICAqICBDYW1lcmFQb3NpdGlvbiBjYW1lcmFQb3NpdGlvbklPUyAtIHNldCBjYW1lcmEgb24gaU9TXG4gICAgICogIGJvb2xlYW4gY2FtZXJhU3dpdGNoRW5hYmxlZFxuICAgICAqICBib29sZWFuIHNob3dIZWxwVGV4dEFuaW1hdGlvblxuICAgICAqICBib29sZWFuIGxvY2F0aW9uVHJhY2tpbmdFbmFibGVkXG4gICAgICogIGJvb2xlYW4gZm9yY2VUb1VzZUh1YXdlaVZpc2lvblxuICAgICAqICBib29sZWFuIGNsb3NlQnV0dG9uRW5hYmxlZFxuICAgICAqICBib29sZWFuIHRvcmNoQnV0dG9uRW5hYmxlZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RhcnRMaXZlbmVzc1dpdGhDb25maWcoY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRTZXJ2aWNlVXJsKHVybDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtNYXRjaEZhY2VzUmVxdWVzdH0gcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlcyhyZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0RldGVjdEZhY2VzUmVxdWVzdH0gcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGV0ZWN0RmFjZXMocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IFVJQ3VzdG9taXphdGlvbkxheWVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0ganNvbiBjdXN0b20gVUkgbGF5ZXIgSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VWlDdXN0b21pemF0aW9uTGF5ZXIoanNvbjogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBVc2UgdGhpcyBtZXRob2QgdG8gc2V0IFVpQ29uZmlndXJhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBVaUNvbmZpZ3VyYXRpb24gSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0VWlDb25maWd1cmF0aW9uKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRpY3Rpb25hcnkgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExvY2FsaXphdGlvbkRpY3Rpb25hcnkoZGljdGlvbmFyeTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZhY2VzIGZhY2VzQXJyYXk6IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG4gICAgICogIGZhY2VzID0gSlNPTi5zdHJpbmdpZnkoZmFjZXNBcnJheSlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2ltaWxhcml0eSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgbWF0Y2hGYWNlc1NpbWlsYXJpdHlUaHJlc2hvbGRTcGxpdChmYWNlczogYW55LCBzaW1pbGFyaXR5OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbihwZXJzb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBncm91cElkcyBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlUGVyc29uKG5hbWU6IGFueSwgZ3JvdXBJZHM6IGFueSwgbWV0YWRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGVyc29ufSBwZXJzb24gZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHVwZGF0ZVBlcnNvbihwZXJzb246IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVsZXRlUGVyc29uKHBlcnNvbklkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlcyhwZXJzb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2VzRm9yUGFnZShwZXJzb25JZDogYW55LCBwYWdlOiBhbnksIHNpemU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7SW1hZ2VVcGxvYWR9IGltYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBhZGRQZXJzb25JbWFnZShwZXJzb25JZDogYW55LCBpbWFnZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlKHBlcnNvbklkOiBhbnksIGltYWdlSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUlkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWxldGVQZXJzb25JbWFnZShwZXJzb25JZDogYW55LCBpbWFnZUlkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwcygpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cHNGb3JQYWdlKHBhZ2U6IGFueSwgc2l6ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25Hcm91cHMocGVyc29uSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkdyb3Vwc0ZvclBhZ2UocGVyc29uSWQ6IGFueSwgcGFnZTogYW55LCBzaXplOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgY3JlYXRlR3JvdXAobmFtZTogYW55LCBtZXRhZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3VwKGdyb3VwSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UGVyc29uR3JvdXB9IGdyb3VwIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICB1cGRhdGVHcm91cChncm91cDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0VkaXRHcm91cFBlcnNvbnNSZXF1ZXN0fSBlZGl0R3JvdXBQZXJzb25zUmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZWRpdFBlcnNvbnNJbkdyb3VwKGdyb3VwSWQ6IGFueSwgZWRpdEdyb3VwUGVyc29uc1JlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25zSW5Hcm91cChncm91cElkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbnNJbkdyb3VwRm9yUGFnZShncm91cElkOiBhbnksIHBhZ2U6IGFueSwgc2l6ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZUdyb3VwKGdyb3VwSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U2VhcmNoUGVyc29uUmVxdWVzdH0gc2VhcmNoUGVyc29uUmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2VhcmNoUGVyc29uKHNlYXJjaFBlcnNvblJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cblxufSJdfQ==