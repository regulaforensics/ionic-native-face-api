import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
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
        result.underlyingException = LicenseException.fromJson(jsonObject["underlyingException"]);
        result.message = jsonObject["message"];
        return result;
    };
    return InitException;
}());
export { InitException };
var LicenseException = /** @class */ (function () {
    function LicenseException() {
    }
    LicenseException.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new LicenseException;
        result.errorCode = jsonObject["errorCode"];
        result.message = jsonObject["message"];
        return result;
    };
    return LicenseException;
}());
export { LicenseException };
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
        result.detailedErrorMessage = jsonObject["detailedErrorMessage"];
        return result;
    };
    return MatchFacesException;
}());
export { MatchFacesException };
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
        result.tag = jsonObject["tag"];
        result.outputImageParams = OutputImageParams.fromJson(jsonObject["outputImageParams"]);
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
        result.rotationAngle = jsonObject["rotationAngle"];
        result.landmarks = [];
        if (jsonObject["landmarks"] != null) {
            for (var i in jsonObject["landmarks"]) {
                var item = Point.fromJson(jsonObject["landmarks"][i]);
                if (item != undefined)
                    result.landmarks.push(item);
            }
        }
        result.faceRect = Rect.fromJson(jsonObject["faceRect"]);
        result.originalRect = Rect.fromJson(jsonObject["originalRect"]);
        result.crop = jsonObject["crop"];
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
        result.imageUrl = jsonObject["imageUrl"];
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
var InitializationConfiguration = /** @class */ (function () {
    function InitializationConfiguration() {
    }
    InitializationConfiguration.fromJson = function (jsonObject) {
        if (jsonObject == null || jsonObject == undefined)
            return undefined;
        var result = new InitializationConfiguration;
        result.license = jsonObject["license"];
        result.licenseUpdate = jsonObject["licenseUpdate"];
        return result;
    };
    return InitializationConfiguration;
}());
export { InitializationConfiguration };
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
    ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT: "CustomizationColor.ONBOARDING_SCREEN_SUBTITLE_LABEL_TEXT",
    ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT: "CustomizationColor.ONBOARDING_SCREEN_MESSAGE_LABELS_TEXT",
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
    RETRY_SCREEN_SUBTITLE_LABEL_TEXT: "CustomizationColor.RETRY_SCREEN_SUBTITLE_LABEL_TEXT",
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
    PASSED: "PASSED",
    UNKNOWN: "UNKNOWN",
};
export var CameraErrorCode = {
    CAMERA_NOT_AVAILABLE: "CAMERA_NOT_AVAILABLE",
    CAMERA_NO_PERMISSION: "CAMERA_NO_PERMISSION",
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
    ASYNCHRONOUS_UPLOAD: "ASYNCHRONOUS_UPLOAD",
    SYNCHRONOUS_UPLOAD: "SYNCHRONOUS_UPLOAD",
    NOT_UPLOAD: "NOT_UPLOAD",
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
    PORTRAIT: 1,
    LANDSCAPE: 2,
};
export var ButtonTag = {
    CLOSE: 1001,
    TORCH: 1002,
    CAMERA_SWITCH: 1003,
};
export var CustomizationFont = {
    ONBOARDING_SCREEN_START_BUTTON: "CustomizationFont.ONBOARDING_SCREEN_START_BUTTON",
    ONBOARDING_SCREEN_TITLE_LABEL: "CustomizationFont.ONBOARDING_SCREEN_TITLE_LABEL",
    ONBOARDING_SCREEN_SUBTITLE_LABEL: "CustomizationFont.ONBOARDING_SCREEN_SUBTITLE_LABEL",
    ONBOARDING_SCREEN_MESSAGE_LABELS: "CustomizationFont.ONBOARDING_SCREEN_MESSAGE_LABELS",
    CAMERA_SCREEN_HINT_LABEL: "CustomizationFont.CAMERA_SCREEN_HINT_LABEL",
    RETRY_SCREEN_RETRY_BUTTON: "CustomizationFont.RETRY_SCREEN_RETRY_BUTTON",
    RETRY_SCREEN_TITLE_LABEL: "CustomizationFont.RETRY_SCREEN_TITLE_LABEL",
    RETRY_SCREEN_SUBTITLE_LABEL: "CustomizationFont.RETRY_SCREEN_SUBTITLE_LABEL",
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
export var LivenessType = {
    ACTIVE: "ACTIVE",
    PASSIVE: "PASSIVE",
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
    ONLINE: "ONLINE",
    OFFLINE: "OFFLINE",
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
    LicensingResultCode: LicensingResultCode,
    DetectFacesErrorCode: DetectFacesErrorCode,
    InitErrorCode: InitErrorCode,
    LivenessStatus: LivenessStatus,
    CameraErrorCode: CameraErrorCode,
    LivenessErrorCode: LivenessErrorCode,
    RecordingProcess: RecordingProcess,
    DetectFacesBackendErrorCode: DetectFacesBackendErrorCode,
    MatchFacesErrorCode: MatchFacesErrorCode,
    ImageQualityCharacteristicName: ImageQualityCharacteristicName,
    ScreenOrientation: ScreenOrientation,
    ButtonTag: ButtonTag,
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
    FaceSDK.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceSDK.prototype.startLiveness = function () { return cordova(this, "startLiveness", {}, arguments); };
    FaceSDK.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceSDK.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceSDK.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceSDK.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    FaceSDK.prototype.initialize = function () { return cordova(this, "initialize", {}, arguments); };
    FaceSDK.prototype.initializeWithConfig = function (config) { return cordova(this, "initializeWithConfig", {}, arguments); };
    FaceSDK.prototype.deinit = function () { return cordova(this, "deinit", {}, arguments); };
    FaceSDK.prototype.deinitialize = function () { return cordova(this, "deinitialize", {}, arguments); };
    FaceSDK.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    FaceSDK.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceSDK.prototype.setRequestHeaders = function (headers) { return cordova(this, "setRequestHeaders", {}, arguments); };
    FaceSDK.prototype.presentFaceCaptureActivityWithConfig = function (config) { return cordova(this, "presentFaceCaptureActivityWithConfig", {}, arguments); };
    FaceSDK.prototype.matchFacesWithConfig = function (request, config) { return cordova(this, "matchFacesWithConfig", {}, arguments); };
    FaceSDK.prototype.startLivenessWithConfig = function (config) { return cordova(this, "startLivenessWithConfig", {}, arguments); };
    FaceSDK.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDK.prototype.setLogs = function (isEnable) { return cordova(this, "setLogs", {}, arguments); };
    FaceSDK.prototype.setSaveLogs = function (isSaveLog) { return cordova(this, "setSaveLogs", {}, arguments); };
    FaceSDK.prototype.setLogsFolder = function (path) { return cordova(this, "setLogsFolder", {}, arguments); };
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
        }], propDecorators: { getServiceUrl: [], startLiveness: [], getFaceSdkVersion: [], presentFaceCaptureActivity: [], stopFaceCaptureActivity: [], init: [], initialize: [], initializeWithConfig: [], deinit: [], deinitialize: [], isInitialized: [], stopLivenessProcessing: [], setRequestHeaders: [], presentFaceCaptureActivityWithConfig: [], matchFacesWithConfig: [], startLivenessWithConfig: [], setServiceUrl: [], setLogs: [], setSaveLogs: [], setLogsFolder: [], matchFaces: [], detectFaces: [], setUiCustomizationLayer: [], setUiConfiguration: [], setLocalizationDictionary: [], matchFacesSimilarityThresholdSplit: [], getPerson: [], createPerson: [], updatePerson: [], deletePerson: [], getPersonImages: [], getPersonImagesForPage: [], addPersonImage: [], getPersonImage: [], deletePersonImage: [], getGroups: [], getGroupsForPage: [], getPersonGroups: [], getPersonGroupsForPage: [], createGroup: [], getGroup: [], updateGroup: [], editPersonsInGroup: [], getPersonsInGroup: [], getPersonsInGroupForPage: [], deleteGroup: [], searchPerson: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7Ozs7O0lBT2pGLDZCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQTtRQUV2QyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV0QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDOytCQWhCTDs7Ozs7O0lBd0JXLHNCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUE7UUFFaEMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDMUMsTUFBTSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ3pGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7d0JBakNMOzs7Ozs7SUF3Q1cseUJBQVEsR0FBZixVQUFnQixV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QUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNsYXNzIEZhY2VDYXB0dXJlRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFjZUNhcHR1cmVFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluaXRFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIHVuZGVybHlpbmdFeGNlcHRpb24/OiBMaWNlbnNlRXhjZXB0aW9uXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbml0RXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW5pdEV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXhjZXB0aW9uID0gTGljZW5zZUV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0V4Y2VwdGlvblwiXSlcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaWNlbnNlRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpY2Vuc2VFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaWNlbnNlRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICB1bmRlcmx5aW5nRXhjZXB0aW9uPzogTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NFcnJvckV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC51bmRlcmx5aW5nRXhjZXB0aW9uID0gTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bmRlcmx5aW5nRXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIExpdmVuZXNzQmFja2VuZEV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogbnVtYmVyXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQubWVzc2FnZSA9IGpzb25PYmplY3RbXCJtZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcbiAgICBkZXRhaWxlZEVycm9yTWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0V4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cbiAgICAgICAgcmVzdWx0LmRldGFpbGVkRXJyb3JNZXNzYWdlID0ganNvbk9iamVjdFtcImRldGFpbGVkRXJyb3JNZXNzYWdlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIHVuZGVybHlpbmdFeGNlcHRpb24/OiBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb25cbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0LnVuZGVybHlpbmdFeGNlcHRpb24gPSBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcInVuZGVybHlpbmdFeGNlcHRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBudW1iZXJcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQmFja2VuZEV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzQmFja2VuZEV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVSZXNwb25zZSB7XG4gICAgZXhjZXB0aW9uPzogRmFjZUNhcHR1cmVFeGNlcHRpb25cbiAgICBpbWFnZT86IEltYWdlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEZhY2VDYXB0dXJlUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZVJlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmV4Y2VwdGlvbiA9IEZhY2VDYXB0dXJlRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IEltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NSZXNwb25zZSB7XG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgbGl2ZW5lc3M/OiBzdHJpbmdcbiAgICB0YWc/OiBzdHJpbmdcbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG4gICAgZXN0aW1hdGVkQWdlPzogbnVtYmVyXG4gICAgZXhjZXB0aW9uPzogTGl2ZW5lc3NFcnJvckV4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC5saXZlbmVzcyA9IGpzb25PYmplY3RbXCJsaXZlbmVzc1wiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG4gICAgICAgIHJlc3VsdC5lc3RpbWF0ZWRBZ2UgPSBqc29uT2JqZWN0W1wiZXN0aW1hdGVkQWdlXCJdXG4gICAgICAgIHJlc3VsdC5leGNlcHRpb24gPSBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJleGNlcHRpb25cIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXNwb25zZSB7XG4gICAgdGFnPzogc3RyaW5nXG4gICAgZXhjZXB0aW9uPzogTWF0Y2hGYWNlc0V4Y2VwdGlvblxuICAgIGRldGVjdGlvbnM/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uW11cbiAgICByZXN1bHRzPzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LmV4Y2VwdGlvbiA9IE1hdGNoRmFjZXNFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4Y2VwdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImRldGVjdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJkZXRlY3Rpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNEZXRlY3Rpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImRldGVjdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuZGV0ZWN0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnJlc3VsdHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInJlc3VsdHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJyZXN1bHRzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzdWx0c1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5yZXN1bHRzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZSB7XG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgYml0bWFwPzogc3RyaW5nXG4gICAgdGFnPzogc3RyaW5nXG4gICAgaW1hZ2VEYXRhPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VcblxuICAgICAgICByZXN1bHQuaW1hZ2VUeXBlID0ganNvbk9iamVjdFtcImltYWdlVHlwZVwiXVxuICAgICAgICByZXN1bHQuYml0bWFwID0ganNvbk9iamVjdFtcImJpdG1hcFwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuaW1hZ2VEYXRhID0ganNvbk9iamVjdFtcImltYWdlRGF0YVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzUmVxdWVzdCB7XG4gICAgaW1hZ2VzPzogTWF0Y2hGYWNlc0ltYWdlW11cbiAgICBjdXN0b21NZXRhZGF0YT86IGFueVxuICAgIHRhZz86IHN0cmluZ1xuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21NZXRhZGF0YSA9IGpzb25PYmplY3RbXCJjdXN0b21NZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQub3V0cHV0SW1hZ2VQYXJhbXMgPSBPdXRwdXRJbWFnZVBhcmFtcy5mcm9tSnNvbihqc29uT2JqZWN0W1wib3V0cHV0SW1hZ2VQYXJhbXNcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNJbWFnZSB7XG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgZGV0ZWN0QWxsPzogYm9vbGVhblxuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIGlkZW50aWZpZXI/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0ltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0ltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICAgICAgcmVzdWx0LmlkZW50aWZpZXIgPSBqc29uT2JqZWN0W1wiaWRlbnRpZmllclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIge1xuICAgIGZpcnN0PzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuICAgIHNlY29uZD86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgc2NvcmU/OiBudW1iZXJcbiAgICBleGNlcHRpb24/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpclxuXG4gICAgICAgIHJlc3VsdC5maXJzdCA9IE1hdGNoRmFjZXNDb21wYXJlZEZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZpcnN0XCJdKVxuICAgICAgICByZXN1bHQuc2Vjb25kID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2Vjb25kXCJdKVxuICAgICAgICByZXN1bHQuc2ltaWxhcml0eSA9IGpzb25PYmplY3RbXCJzaW1pbGFyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5zY29yZSA9IGpzb25PYmplY3RbXCJzY29yZVwiXVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlIHtcbiAgICBmYWNlPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcbiAgICBpbWFnZT86IE1hdGNoRmFjZXNJbWFnZVxuICAgIGZhY2VJbmRleD86IG51bWJlclxuICAgIGltYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VcblxuICAgICAgICByZXN1bHQuZmFjZSA9IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VJbmRleCA9IGpzb25PYmplY3RbXCJpbWFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHtcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICByb3RhdGlvbkFuZ2xlPzogbnVtYmVyXG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGZhY2VSZWN0PzogUmVjdFxuICAgIG9yaWdpbmFsUmVjdD86IFJlY3RcbiAgICBjcm9wPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcblxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQucm90YXRpb25BbmdsZSA9IGpzb25PYmplY3RbXCJyb3RhdGlvbkFuZ2xlXCJdXG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmZhY2VSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZVJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJvcmlnaW5hbFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5jcm9wID0ganNvbk9iamVjdFtcImNyb3BcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc0RldGVjdGlvbiB7XG4gICAgaW1hZ2U/OiBNYXRjaEZhY2VzSW1hZ2VcbiAgICBpbWFnZUluZGV4PzogbnVtYmVyXG4gICAgZmFjZXM/OiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZVtdXG4gICAgZXhjZXB0aW9uPzogTWF0Y2hGYWNlc0V4Y2VwdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRGV0ZWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0RldGVjdGlvblxuXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IE1hdGNoRmFjZXNJbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZUluZGV4ID0ganNvbk9iamVjdFtcImltYWdlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJmYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5mYWNlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmV4Y2VwdGlvbiA9IE1hdGNoRmFjZXNFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4Y2VwdGlvblwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9pbnQge1xuICAgIHg/OiBudW1iZXJcbiAgICB5PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBvaW50IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUG9pbnRcblxuICAgICAgICByZXN1bHQueCA9IGpzb25PYmplY3RbXCJ4XCJdXG4gICAgICAgIHJlc3VsdC55ID0ganNvbk9iamVjdFtcInlcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gICAgYm90dG9tPzogbnVtYmVyXG4gICAgdG9wPzogbnVtYmVyXG4gICAgbGVmdD86IG51bWJlclxuICAgIHJpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFJlY3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0XG5cbiAgICAgICAgcmVzdWx0LmJvdHRvbSA9IGpzb25PYmplY3RbXCJib3R0b21cIl1cbiAgICAgICAgcmVzdWx0LnRvcCA9IGpzb25PYmplY3RbXCJ0b3BcIl1cbiAgICAgICAgcmVzdWx0LmxlZnQgPSBqc29uT2JqZWN0W1wibGVmdFwiXVxuICAgICAgICByZXN1bHQucmlnaHQgPSBqc29uT2JqZWN0W1wicmlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1NpbWlsYXJpdHlUaHJlc2hvbGRTcGxpdCB7XG4gICAgbWF0Y2hlZEZhY2VzPzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyW11cbiAgICB1bm1hdGNoZWRGYWNlcz86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpcltdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNTaW1pbGFyaXR5VGhyZXNob2xkU3BsaXQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzU2ltaWxhcml0eVRocmVzaG9sZFNwbGl0XG5cbiAgICAgICAgcmVzdWx0Lm1hdGNoZWRGYWNlcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1wibWF0Y2hlZEZhY2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm1hdGNoZWRGYWNlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpci5mcm9tSnNvbihqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudW5tYXRjaGVkRmFjZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzUmVxdWVzdCB7XG4gICAgdGFnPzogc3RyaW5nXG4gICAgc2NlbmFyaW8/OiBzdHJpbmdcbiAgICBpbWFnZT86IHN0cmluZ1xuICAgIGNvbmZpZ3VyYXRpb24/OiBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb25cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNSZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0LnRhZyA9IGpzb25PYmplY3RbXCJ0YWdcIl1cbiAgICAgICAgcmVzdWx0LnNjZW5hcmlvID0ganNvbk9iamVjdFtcInNjZW5hcmlvXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZSA9IGpzb25PYmplY3RbXCJpbWFnZVwiXVxuICAgICAgICByZXN1bHQuY29uZmlndXJhdGlvbiA9IERldGVjdEZhY2VzQ29uZmlndXJhdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiY29uZmlndXJhdGlvblwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNDb25maWd1cmF0aW9uIHtcbiAgICBhdHRyaWJ1dGVzPzogc3RyaW5nW11cbiAgICBjdXN0b21RdWFsaXR5PzogSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNbXVxuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcbiAgICBvbmx5Q2VudHJhbEZhY2U/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzQ29uZmlndXJhdGlvblxuXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmN1c3RvbVF1YWxpdHkgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImN1c3RvbVF1YWxpdHlcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljLmZyb21Kc29uKGpzb25PYmplY3RbXCJjdXN0b21RdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmN1c3RvbVF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5vdXRwdXRJbWFnZVBhcmFtcyA9IE91dHB1dEltYWdlUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJvdXRwdXRJbWFnZVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0Lm9ubHlDZW50cmFsRmFjZSA9IGpzb25PYmplY3RbXCJvbmx5Q2VudHJhbEZhY2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT3V0cHV0SW1hZ2VQYXJhbXMge1xuICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZ1xuICAgIGNyb3A/OiBPdXRwdXRJbWFnZUNyb3BcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogT3V0cHV0SW1hZ2VQYXJhbXMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBPdXRwdXRJbWFnZVBhcmFtc1xuXG4gICAgICAgIHJlc3VsdC5iYWNrZ3JvdW5kQ29sb3IgPSBqc29uT2JqZWN0W1wiYmFja2dyb3VuZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5jcm9wID0gT3V0cHV0SW1hZ2VDcm9wLmZyb21Kc29uKGpzb25PYmplY3RbXCJjcm9wXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPdXRwdXRJbWFnZUNyb3Age1xuICAgIHR5cGU/OiBudW1iZXJcbiAgICBzaXplPzogU2l6ZVxuICAgIHBhZENvbG9yPzogc3RyaW5nXG4gICAgcmV0dXJuT3JpZ2luYWxSZWN0PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBPdXRwdXRJbWFnZUNyb3AgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBPdXRwdXRJbWFnZUNyb3BcblxuICAgICAgICByZXN1bHQudHlwZSA9IGpzb25PYmplY3RbXCJ0eXBlXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0gU2l6ZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2l6ZVwiXSlcbiAgICAgICAgcmVzdWx0LnBhZENvbG9yID0ganNvbk9iamVjdFtcInBhZENvbG9yXCJdXG4gICAgICAgIHJlc3VsdC5yZXR1cm5PcmlnaW5hbFJlY3QgPSBqc29uT2JqZWN0W1wicmV0dXJuT3JpZ2luYWxSZWN0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljIHtcbiAgICBjaGFyYWN0ZXJpc3RpY05hbWU/OiBzdHJpbmdcbiAgICBpbWFnZVF1YWxpdHlHcm91cD86IG51bWJlclxuICAgIHJlY29tbWVuZGVkUmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGN1c3RvbVJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWMgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY1xuXG4gICAgICAgIHJlc3VsdC5jaGFyYWN0ZXJpc3RpY05hbWUgPSBqc29uT2JqZWN0W1wiY2hhcmFjdGVyaXN0aWNOYW1lXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVF1YWxpdHlHcm91cCA9IGpzb25PYmplY3RbXCJpbWFnZVF1YWxpdHlHcm91cFwiXVxuICAgICAgICByZXN1bHQucmVjb21tZW5kZWRSYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZWNvbW1lbmRlZFJhbmdlXCJdKVxuICAgICAgICByZXN1bHQuY3VzdG9tUmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiY3VzdG9tUmFuZ2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eVJhbmdlIHtcbiAgICBtaW4/OiBudW1iZXJcbiAgICBtYXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5UmFuZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVF1YWxpdHlSYW5nZVxuXG4gICAgICAgIHJlc3VsdC5taW4gPSBqc29uT2JqZWN0W1wibWluXCJdXG4gICAgICAgIHJlc3VsdC5tYXggPSBqc29uT2JqZWN0W1wibWF4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpemUge1xuICAgIHdpZHRoPzogbnVtYmVyXG4gICAgaGVpZ2h0PzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNpemUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTaXplXG5cbiAgICAgICAgcmVzdWx0LndpZHRoID0ganNvbk9iamVjdFtcIndpZHRoXCJdXG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBqc29uT2JqZWN0W1wiaGVpZ2h0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzUmVzcG9uc2Uge1xuICAgIGRldGVjdGlvbj86IERldGVjdEZhY2VSZXN1bHRcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIGVycm9yPzogRGV0ZWN0RmFjZXNFcnJvckV4Y2VwdGlvblxuICAgIGFsbERldGVjdGlvbnM/OiBEZXRlY3RGYWNlUmVzdWx0W11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuZGV0ZWN0aW9uID0gRGV0ZWN0RmFjZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0ZWN0aW9uXCJdKVxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gRGV0ZWN0RmFjZXNFcnJvckV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG4gICAgICAgIHJlc3VsdC5hbGxEZXRlY3Rpb25zID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYWxsRGV0ZWN0aW9uc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEZXRlY3RGYWNlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmFsbERldGVjdGlvbnMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VSZXN1bHQge1xuICAgIHF1YWxpdHk/OiBJbWFnZVF1YWxpdHlSZXN1bHRbXVxuICAgIGF0dHJpYnV0ZXM/OiBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFtdXG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIGNyb3A/OiBzdHJpbmdcbiAgICBmYWNlUmVjdD86IFJlY3RcbiAgICBvcmlnaW5hbFJlY3Q/OiBSZWN0XG4gICAgaXNRdWFsaXR5Q29tcGxpYW50PzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5xdWFsaXR5ID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicXVhbGl0eVwiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBJbWFnZVF1YWxpdHlSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcInF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5sYW5kbWFya3MgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImxhbmRtYXJrc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBQb2ludC5mcm9tSnNvbihqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxhbmRtYXJrcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmNyb3AgPSBqc29uT2JqZWN0W1wiY3JvcFwiXVxuICAgICAgICByZXN1bHQuZmFjZVJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0Lm9yaWdpbmFsUmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcIm9yaWdpbmFsUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmlzUXVhbGl0eUNvbXBsaWFudCA9IGpzb25PYmplY3RbXCJpc1F1YWxpdHlDb21wbGlhbnRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5UmVzdWx0IHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgZ3JvdXA/OiBudW1iZXJcbiAgICBzdGF0dXM/OiBudW1iZXJcbiAgICByYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG4gICAgdmFsdWU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VRdWFsaXR5UmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW1hZ2VRdWFsaXR5UmVzdWx0XG5cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuZ3JvdXAgPSBqc29uT2JqZWN0W1wiZ3JvdXBcIl1cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJhbmdlXCJdKVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQge1xuICAgIGF0dHJpYnV0ZT86IHN0cmluZ1xuICAgIHZhbHVlPzogc3RyaW5nXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIGNvbmZpZGVuY2U/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGUgPSBqc29uT2JqZWN0W1wiYXR0cmlidXRlXCJdXG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGpzb25PYmplY3RbXCJ2YWx1ZVwiXVxuICAgICAgICByZXN1bHQucmFuZ2UgPSBJbWFnZVF1YWxpdHlSYW5nZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmFuZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5jb25maWRlbmNlID0ganNvbk9iamVjdFtcImNvbmZpZGVuY2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRm9udCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIHN0eWxlPzogbnVtYmVyXG4gICAgc2l6ZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBGb250IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRm9udFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LnN0eWxlID0ganNvbk9iamVjdFtcInN0eWxlXCJdXG4gICAgICAgIHJlc3VsdC5zaXplID0ganNvbk9iamVjdFtcInNpemVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uIHtcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgZ3JvdXBzPzogc3RyaW5nW11cbiAgICB1cGRhdGVkQXQ/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvblxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3Vwcy5wdXNoKGpzb25PYmplY3RbXCJncm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZWRBdCA9IGpzb25PYmplY3RbXCJ1cGRhdGVkQXRcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25Hcm91cCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uR3JvdXAgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25Hcm91cFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJzb25JbWFnZSB7XG4gICAgcGF0aD86IHN0cmluZ1xuICAgIHVybD86IHN0cmluZ1xuICAgIGNvbnRlbnRUeXBlPzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb25JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBlcnNvbkltYWdlXG5cbiAgICAgICAgcmVzdWx0LnBhdGggPSBqc29uT2JqZWN0W1wicGF0aFwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuY29udGVudFR5cGUgPSBqc29uT2JqZWN0W1wiY29udGVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCB7XG4gICAgaW1hZ2VEYXRhPzogc3RyaW5nXG4gICAgaW1hZ2VVcmw/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2VVcGxvYWQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVVwbG9hZFxuXG4gICAgICAgIHJlc3VsdC5pbWFnZURhdGEgPSBqc29uT2JqZWN0W1wiaW1hZ2VEYXRhXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVVybCA9IGpzb25PYmplY3RbXCJpbWFnZVVybFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdCB7XG4gICAgcGVyc29uSWRzVG9BZGQ/OiBzdHJpbmdbXVxuICAgIHBlcnNvbklkc1RvUmVtb3ZlPzogc3RyaW5nW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRWRpdEdyb3VwUGVyc29uc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBFZGl0R3JvdXBQZXJzb25zUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb0FkZCA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wZXJzb25JZHNUb0FkZC5wdXNoKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb0FkZFwiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucGVyc29uSWRzVG9SZW1vdmUgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGVyc29uSWRzVG9SZW1vdmUucHVzaChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9SZW1vdmVcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uUmVxdWVzdCB7XG4gICAgb3V0cHV0SW1hZ2VQYXJhbXM/OiBPdXRwdXRJbWFnZVBhcmFtc1xuICAgIGdyb3VwSWRzRm9yU2VhcmNoPzogc3RyaW5nW11cbiAgICB0aHJlc2hvbGQ/OiBudW1iZXJcbiAgICBsaW1pdD86IG51bWJlclxuICAgIGltYWdlVXBsb2FkPzogSW1hZ2VVcGxvYWRcbiAgICBkZXRlY3RBbGw/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvblJlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25SZXF1ZXN0XG5cbiAgICAgICAgcmVzdWx0Lm91dHB1dEltYWdlUGFyYW1zID0gT3V0cHV0SW1hZ2VQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcIm91dHB1dEltYWdlUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2ggPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBJZHNGb3JTZWFyY2gucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBJZHNGb3JTZWFyY2hcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnRocmVzaG9sZCA9IGpzb25PYmplY3RbXCJ0aHJlc2hvbGRcIl1cbiAgICAgICAgcmVzdWx0LmxpbWl0ID0ganNvbk9iamVjdFtcImxpbWl0XCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZVVwbG9hZCA9IEltYWdlVXBsb2FkLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVVwbG9hZFwiXSlcbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGVyc29uIHtcbiAgICBkZXRlY3Rpb24/OiBTZWFyY2hQZXJzb25EZXRlY3Rpb25cbiAgICBpbWFnZXM/OiBTZWFyY2hQZXJzb25JbWFnZVtdXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGdyb3Vwcz86IHN0cmluZ1tdXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25cblxuICAgICAgICByZXN1bHQuZGV0ZWN0aW9uID0gU2VhcmNoUGVyc29uRGV0ZWN0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25cIl0pXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBTZWFyY2hQZXJzb25JbWFnZS5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmltYWdlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm5hbWUgPSBqc29uT2JqZWN0W1wibmFtZVwiXVxuICAgICAgICByZXN1bHQuZ3JvdXBzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cHNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJncm91cHNcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuZ3JvdXBzLnB1c2goanNvbk9iamVjdFtcImdyb3Vwc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudXBkYXRlZEF0ID0ganNvbk9iamVjdFtcInVwZGF0ZWRBdFwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbkltYWdlIHtcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgZGlzdGFuY2U/OiBudW1iZXJcbiAgICBwYXRoPzogc3RyaW5nXG4gICAgdXJsPzogc3RyaW5nXG4gICAgY29udGVudFR5cGU/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFNlYXJjaFBlcnNvbkltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uSW1hZ2VcblxuICAgICAgICByZXN1bHQuc2ltaWxhcml0eSA9IGpzb25PYmplY3RbXCJzaW1pbGFyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5kaXN0YW5jZSA9IGpzb25PYmplY3RbXCJkaXN0YW5jZVwiXVxuICAgICAgICByZXN1bHQucGF0aCA9IGpzb25PYmplY3RbXCJwYXRoXCJdXG4gICAgICAgIHJlc3VsdC51cmwgPSBqc29uT2JqZWN0W1widXJsXCJdXG4gICAgICAgIHJlc3VsdC5jb250ZW50VHlwZSA9IGpzb25PYmplY3RbXCJjb250ZW50VHlwZVwiXVxuICAgICAgICByZXN1bHQuaWQgPSBqc29uT2JqZWN0W1wiaWRcIl1cbiAgICAgICAgcmVzdWx0Lm1ldGFkYXRhID0ganNvbk9iamVjdFtcIm1ldGFkYXRhXCJdXG4gICAgICAgIHJlc3VsdC5jcmVhdGVkQXQgPSBqc29uT2JqZWN0W1wiY3JlYXRlZEF0XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbkRldGVjdGlvbiB7XG4gICAgbGFuZG1hcmtzPzogUG9pbnRbXVxuICAgIHJlY3Q/OiBSZWN0XG4gICAgY3JvcEltYWdlPzogc3RyaW5nXG4gICAgcm90YXRpb25BbmdsZT86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25EZXRlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZWFyY2hQZXJzb25EZXRlY3Rpb25cblxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LmNyb3BJbWFnZSA9IGpzb25PYmplY3RbXCJjcm9wSW1hZ2VcIl1cbiAgICAgICAgcmVzdWx0LnJvdGF0aW9uQW5nbGUgPSBqc29uT2JqZWN0W1wicm90YXRpb25BbmdsZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc05vdGlmaWNhdGlvbiB7XG4gICAgc3RhdHVzPzogc3RyaW5nXG4gICAgcmVzcG9uc2U/OiBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzTm90aWZpY2F0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NOb3RpZmljYXRpb25cblxuICAgICAgICByZXN1bHQuc3RhdHVzID0ganNvbk9iamVjdFtcInN0YXR1c1wiXVxuICAgICAgICByZXN1bHQucmVzcG9uc2UgPSBMaXZlbmVzc1Jlc3BvbnNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXNwb25zZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9FbmNvZGVyQ29tcGxldGlvbiB7XG4gICAgc3VjY2Vzcz86IGJvb2xlYW5cbiAgICB0cmFuc2FjdGlvbklkPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFZpZGVvRW5jb2RlckNvbXBsZXRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBWaWRlb0VuY29kZXJDb21wbGV0aW9uXG5cbiAgICAgICAgcmVzdWx0LnN1Y2Nlc3MgPSBqc29uT2JqZWN0W1wic3VjY2Vzc1wiXVxuICAgICAgICByZXN1bHQudHJhbnNhY3Rpb25JZCA9IGpzb25PYmplY3RbXCJ0cmFuc2FjdGlvbklkXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEluaXRpYWxpemF0aW9uQ29uZmlndXJhdGlvbiB7XG4gICAgbGljZW5zZT86IHN0cmluZ1xuICAgIGxpY2Vuc2VVcGRhdGU/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEluaXRpYWxpemF0aW9uQ29uZmlndXJhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEluaXRpYWxpemF0aW9uQ29uZmlndXJhdGlvblxuXG4gICAgICAgIHJlc3VsdC5saWNlbnNlID0ganNvbk9iamVjdFtcImxpY2Vuc2VcIl1cbiAgICAgICAgcmVzdWx0LmxpY2Vuc2VVcGRhdGUgPSBqc29uT2JqZWN0W1wibGljZW5zZVVwZGF0ZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0UmVzcG9uc2Uge1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgZXJyb3I/OiBJbml0RXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEluaXRSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEluaXRSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5zdWNjZXNzID0ganNvbk9iamVjdFtcInN1Y2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LmVycm9yID0gSW5pdEV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXJyb3JcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEZvbnRTdHlsZSA9IHtcbiAgICBOT1JNQUw6IDAsXG4gICAgQk9MRDogMSxcbiAgICBJVEFMSUM6IDIsXG4gICAgQk9MRF9JVEFMSUM6IDMsXG59XG5cbmV4cG9ydCBjb25zdCBDdXN0b21pemF0aW9uQ29sb3IgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLk9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTl9CQUNLR1JPVU5EXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX1RJVExFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5PTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT05fVElUTEVcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5PTkJPQVJESU5HX1NDUkVFTl9CQUNLR1JPVU5EXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuT05CT0FSRElOR19TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVFwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NVQlRJVExFX0xBQkVMX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLk9OQk9BUkRJTkdfU0NSRUVOX1NVQlRJVExFX0xBQkVMX1RFWFRcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMU19URVhUOiBcIkN1c3RvbWl6YXRpb25Db2xvci5PTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMU19URVhUXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TVFJPS0VfTk9STUFMOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX1NUUk9LRV9OT1JNQUxcIixcbiAgICBDQU1FUkFfU0NSRUVOX1NUUk9LRV9BQ1RJVkU6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fU1RST0tFX0FDVElWRVwiLFxuICAgIENBTUVSQV9TQ1JFRU5fU0VDVE9SX1RBUkdFVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9TRUNUT1JfVEFSR0VUXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TRUNUT1JfQUNUSVZFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX1NFQ1RPUl9BQ1RJVkVcIixcbiAgICBDQU1FUkFfU0NSRUVOX0ZST05UX0hJTlRfTEFCRUxfQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX0JBQ0tHUk9VTkRcIixcbiAgICBDQU1FUkFfU0NSRUVOX0ZST05UX0hJTlRfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX1RFWFRcIixcbiAgICBDQU1FUkFfU0NSRUVOX0JBQ0tfSElOVF9MQUJFTF9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX0JBQ0tfSElOVF9MQUJFTF9CQUNLR1JPVU5EXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfVEVYVFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfVE9PTEJBUl9USU5UOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX0xJR0hUX1RPT0xCQVJfVElOVFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fREFSS19UT09MQkFSX1RJTlQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fREFSS19UT09MQkFSX1RJTlRcIixcbiAgICBSRVRSWV9TQ1JFRU5fQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX0JBQ0tHUk9VTkRcIixcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fQkFDS0dST1VORFwiLFxuICAgIFJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fVElUTEU6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05fVElUTEVcIixcbiAgICBSRVRSWV9TQ1JFRU5fVElUTEVfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFRcIixcbiAgICBSRVRSWV9TQ1JFRU5fU1VCVElUTEVfTEFCRUxfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX1NVQlRJVExFX0xBQkVMX1RFWFRcIixcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFNfVEVYVDogXCJDdXN0b21pemF0aW9uQ29sb3IuUkVUUllfU0NSRUVOX0hJTlRfTEFCRUxTX1RFWFRcIixcbiAgICBQUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5QUk9DRVNTSU5HX1NDUkVFTl9CQUNLR1JPVU5EXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fUFJPR1JFU1M6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlBST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fVElUTEU6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlBST0NFU1NJTkdfU0NSRUVOX1RJVExFXCIsXG4gICAgU1VDQ0VTU19TQ1JFRU5fQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuU1VDQ0VTU19TQ1JFRU5fQkFDS0dST1VORFwiLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5R3JvdXBOYW1lID0ge1xuICAgIElNQUdFX0NIQVJBQ1RFUklTVElDUzogMSxcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OOiAyLFxuICAgIEZBQ0VfUVVBTElUWTogMyxcbiAgICBFWUVTX0NIQVJBQ1RFUklTVElDUzogNCxcbiAgICBTSEFET1dTX0FORF9MSUdIVE5JTkc6IDUsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTjogNixcbiAgICBIRUFEX09DQ0xVU0lPTjogNyxcbiAgICBCQUNLR1JPVU5EOiA4LFxuICAgIFVOS05PV046IDksXG59XG5cbmV4cG9ydCBjb25zdCBMaWNlbnNpbmdSZXN1bHRDb2RlID0ge1xuICAgIE9LOiAwLFxuICAgIExJQ0VOU0VfQ09SUlVQVEVEOiAxLFxuICAgIElOVkFMSURfREFURTogMixcbiAgICBJTlZBTElEX1ZFUlNJT046IDMsXG4gICAgSU5WQUxJRF9ERVZJQ0VfSUQ6IDQsXG4gICAgSU5WQUxJRF9TWVNURU1fT1JfQVBQX0lEOiA1LFxuICAgIE5PX0NBUEFCSUxJVElFUzogNixcbiAgICBOT19BVVRIRU5USUNJVFk6IDcsXG4gICAgTElDRU5TRV9BQlNFTlQ6IDgsXG4gICAgTk9fSU5URVJORVQ6IDksXG4gICAgTk9fREFUQUJBU0U6IDEwLFxuICAgIERBVEFCQVNFX0lOQ09SUkVDVDogMTEsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogMCxcbiAgICBGUl9GQUNFX05PVF9ERVRFQ1RFRDogMSxcbiAgICBGQUNFUl9OT19MSUNFTlNFOiAyLFxuICAgIEZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRDogMyxcbiAgICBGQUNFUl9DT01NQU5EX0lTX05PVF9TVVBQT1JURUQ6IDQsXG4gICAgRkFDRVJfQ09NTUFORF9QQVJBTVNfUkVBRF9FUlJPUjogNSxcbiAgICBQUk9DRVNTSU5HX0ZBSUxFRDogNixcbiAgICBSRVFVRVNUX0ZBSUxFRDogNyxcbiAgICBBUElfQ0FMTF9GQUlMRUQ6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBJbml0RXJyb3JDb2RlID0ge1xuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDAsXG4gICAgTUlTU0lOR19DT1JFOiAxLFxuICAgIElOVEVSTkFMX0NPUkVfRVJST1I6IDIsXG4gICAgQkFEX0xJQ0VOU0U6IDMsXG4gICAgVU5BVkFJTEFCTEU6IDQsXG4gICAgQ09OVEVYVF9JU19OVUxMOiAxMDAsXG4gICAgUkVTT1VSQ0VfREFUX0FCU0VOVDogMTAxLFxuICAgIExJQ0VOU0VfSVNfTlVMTDogMTAyLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTdGF0dXMgPSB7XG4gICAgUEFTU0VEOiBcIlBBU1NFRFwiLFxuICAgIFVOS05PV046IFwiVU5LTk9XTlwiLFxufVxuXG5leHBvcnQgY29uc3QgQ2FtZXJhRXJyb3JDb2RlID0ge1xuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiBcIkNBTUVSQV9OT1RfQVZBSUxBQkxFXCIsXG4gICAgQ0FNRVJBX05PX1BFUk1JU1NJT046IFwiQ0FNRVJBX05PX1BFUk1JU1NJT05cIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzRXJyb3JDb2RlID0ge1xuICAgIE5PVF9JTklUSUFMSVpFRDogMCxcbiAgICBOT19MSUNFTlNFOiAxLFxuICAgIEFQSV9DQUxMX0ZBSUxFRDogMixcbiAgICBTRVNTSU9OX1NUQVJUX0ZBSUxFRDogMyxcbiAgICBDQU5DRUxMRUQ6IDQsXG4gICAgUFJPQ0VTU0lOR19USU1FT1VUOiA1LFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiA2LFxuICAgIFBST0NFU1NJTkdfRlJBTUVfRkFJTEVEOiA3LFxuICAgIEFQUExJQ0FUSU9OX0lOQUNUSVZFOiA4LFxuICAgIENPTlRFWFRfSVNfTlVMTDogOSxcbiAgICBJTl9QUk9HUkVTU19BTFJFQURZOiAxMCxcbiAgICBaT09NX05PVF9TVVBQT1JURUQ6IDExLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiAxMixcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogMTMsXG59XG5cbmV4cG9ydCBjb25zdCBSZWNvcmRpbmdQcm9jZXNzID0ge1xuICAgIEFTWU5DSFJPTk9VU19VUExPQUQ6IFwiQVNZTkNIUk9OT1VTX1VQTE9BRFwiLFxuICAgIFNZTkNIUk9OT1VTX1VQTE9BRDogXCJTWU5DSFJPTk9VU19VUExPQURcIixcbiAgICBOT1RfVVBMT0FEOiBcIk5PVF9VUExPQURcIixcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzQmFja2VuZEVycm9yQ29kZSA9IHtcbiAgICBGUl9GQUNFX05PVF9ERVRFQ1RFRDogMixcbiAgICBGQUNFUl9OT19MSUNFTlNFOiAyMDAsXG4gICAgRkFDRVJfSVNfTk9UX0lOSVRJQUxJWkVEOiAyMDEsXG4gICAgRkFDRVJfQ09NTUFORF9JU19OT1RfU1VQUE9SVEVEOiAyMDIsXG4gICAgRkFDRVJfQ09NTUFORF9QQVJBTVNfUkVBRF9FUlJPUjogMjAzLFxuICAgIFVOREVGSU5FRDogLTEsXG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaEZhY2VzRXJyb3JDb2RlID0ge1xuICAgIElNQUdFX0VNUFRZOiAwLFxuICAgIEZBQ0VfTk9UX0RFVEVDVEVEOiAxLFxuICAgIExBTkRNQVJLU19OT1RfREVURUNURUQ6IDIsXG4gICAgRkFDRV9BTElHTkVSX0ZBSUxFRDogMyxcbiAgICBERVNDUklQVE9SX0VYVFJBQ1RPUl9FUlJPUjogNCxcbiAgICBJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERUQ6IDUsXG4gICAgQVBJX0NBTExfRkFJTEVEOiA2LFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiA3LFxuICAgIE5PX0xJQ0VOU0U6IDgsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY05hbWUgPSB7XG4gICAgSU1BR0VfV0lEVEg6IFwiSW1hZ2VXaWR0aFwiLFxuICAgIElNQUdFX0hFSUdIVDogXCJJbWFnZUhlaWdodFwiLFxuICAgIElNQUdFX1dJRFRIX1RPX0hFSUdIVDogXCJJbWFnZVdpZHRoVG9IZWlnaHRcIixcbiAgICBJTUFHRV9DSEFOTkVMU19OVU1CRVI6IFwiSW1hZ2VDaGFubmVsc051bWJlclwiLFxuICAgIEFSVF9GQUNFOiBcIkFydEZhY2VcIixcbiAgICBQQURESU5HX1JBVElPOiBcIlBhZGRpbmdSYXRpb1wiLFxuICAgIEZBQ0VfTUlEX1BPSU5UX0hPUklaT05UQUxfUE9TSVRJT046IFwiRmFjZU1pZFBvaW50SG9yaXpvbnRhbFBvc2l0aW9uXCIsXG4gICAgRkFDRV9NSURfUE9JTlRfVkVSVElDQUxfUE9TSVRJT046IFwiRmFjZU1pZFBvaW50VmVydGljYWxQb3NpdGlvblwiLFxuICAgIEhFQURfV0lEVEhfUkFUSU86IFwiSGVhZFdpZHRoUmF0aW9cIixcbiAgICBIRUFEX0hFSUdIVF9SQVRJTzogXCJIZWFkSGVpZ2h0UmF0aW9cIixcbiAgICBFWUVTX0RJU1RBTkNFOiBcIkV5ZXNEaXN0YW5jZVwiLFxuICAgIFlBVzogXCJZYXdcIixcbiAgICBQSVRDSDogXCJQaXRjaFwiLFxuICAgIFJPTEw6IFwiUm9sbFwiLFxuICAgIEJMVVJfTEVWRUw6IFwiQmx1ckxldmVsXCIsXG4gICAgTk9JU0VfTEVWRUw6IFwiTm9pc2VMZXZlbFwiLFxuICAgIFVOTkFUVVJBTF9TS0lOX1RPTkU6IFwiVW5uYXR1cmFsU2tpblRvbmVcIixcbiAgICBGQUNFX0RZTkFNSUNfUkFOR0U6IFwiRmFjZUR5bmFtaWNSYW5nZVwiLFxuICAgIEVZRV9SSUdIVF9DTE9TRUQ6IFwiRXllUmlnaHRDbG9zZWRcIixcbiAgICBFWUVfTEVGVF9DTE9TRUQ6IFwiRXllTGVmdENsb3NlZFwiLFxuICAgIEVZRV9SSUdIVF9PQ0NMVURFRDogXCJFeWVSaWdodE9jY2x1ZGVkXCIsXG4gICAgRVlFX0xFRlRfT0NDTFVERUQ6IFwiRXllTGVmdE9jY2x1ZGVkXCIsXG4gICAgRVlFU19SRUQ6IFwiRXllc1JlZFwiLFxuICAgIEVZRV9SSUdIVF9DT1ZFUkVEX1dJVEhfSEFJUjogXCJFeWVSaWdodENvdmVyZWRXaXRoSGFpclwiLFxuICAgIEVZRV9MRUZUX0NPVkVSRURfV0lUSF9IQUlSOiBcIkV5ZUxlZnRDb3ZlcmVkV2l0aEhhaXJcIixcbiAgICBPRkZfR0FaRTogXCJPZmZHYXplXCIsXG4gICAgVE9PX0RBUks6IFwiVG9vRGFya1wiLFxuICAgIFRPT19MSUdIVDogXCJUb29MaWdodFwiLFxuICAgIEZBQ0VfR0xBUkU6IFwiRmFjZUdsYXJlXCIsXG4gICAgU0hBRE9XU19PTl9GQUNFOiBcIlNoYWRvd3NPbkZhY2VcIixcbiAgICBTSE9VTERFUlNfUE9TRTogXCJTaG91bGRlcnNQb3NlXCIsXG4gICAgRVhQUkVTU0lPTl9MRVZFTDogXCJFeHByZXNzaW9uTGV2ZWxcIixcbiAgICBNT1VUSF9PUEVOOiBcIk1vdXRoT3BlblwiLFxuICAgIFNNSUxFOiBcIlNtaWxlXCIsXG4gICAgREFSS19HTEFTU0VTOiBcIkRhcmtHbGFzc2VzXCIsXG4gICAgUkVGTEVDVElPTl9PTl9HTEFTU0VTOiBcIlJlZmxlY3Rpb25PbkdsYXNzZXNcIixcbiAgICBGUkFNRVNfVE9PX0hFQVZZOiBcIkZyYW1lc1Rvb0hlYXZ5XCIsXG4gICAgRkFDRV9PQ0NMVURFRDogXCJGYWNlT2NjbHVkZWRcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURfUEhPTkVTOiBcIkhlYWRwaG9uZXNcIixcbiAgICBNRURJQ0FMX01BU0s6IFwiTWVkaWNhbE1hc2tcIixcbiAgICBCQUNLR1JPVU5EX1VOSUZPUk1JVFk6IFwiQmFja2dyb3VuZFVuaWZvcm1pdHlcIixcbiAgICBTSEFET1dTX09OX0JBQ0tHUk9VTkQ6IFwiU2hhZG93c09uQmFja2dyb3VuZFwiLFxuICAgIE9USEVSX0ZBQ0VTOiBcIk90aGVyRmFjZXNcIixcbiAgICBCQUNLR1JPVU5EX0NPTE9SX01BVENIOiBcIkJhY2tncm91bmRDb2xvck1hdGNoXCIsXG4gICAgVU5LTk9XTjogXCJVbmtub3duXCIsXG4gICAgSU1BR0VfQ0hBUkFDVEVSSVNUSUNfQUxMX1JFQ09NTUVOREVEOiBcIkltYWdlQ2hhcmFjdGVyaXN0aWNcIixcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJIZWFkU2l6ZUFuZFBvc2l0aW9uXCIsXG4gICAgRkFDRV9JTUFHRV9RVUFMSVRZX0FMTF9SRUNPTU1FTkRFRDogXCJGYWNlSW1hZ2VRdWFsaXR5XCIsXG4gICAgRVlFU19DSEFSQUNURVJJU1RJQ1NfQUxMX1JFQ09NTUVOREVEOiBcIkV5ZXNDaGFyYWN0ZXJpc3RpY3NcIixcbiAgICBTSEFET1dfQU5EX0xJR0hUSU5HX0FMTF9SRUNPTU1FTkRFRDogXCJTaGFkb3dzQW5kTGlnaHRuaW5nXCIsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTl9BTExfUkVDT01NRU5ERUQ6IFwiUG9zZUFuZEV4cHJlc3Npb25cIixcbiAgICBIRUFEX09DQ0xVU0lPTl9BTExfUkVDT01NRU5ERUQ6IFwiSGVhZE9jY2x1c2lvblwiLFxuICAgIFFVQUxJVFlfQkFDS0dST1VORF9BTExfUkVDT01NRU5ERUQ6IFwiUXVhbGl0eUJhY2tncm91bmRcIixcbn1cblxuZXhwb3J0IGNvbnN0IFNjcmVlbk9yaWVudGF0aW9uID0ge1xuICAgIFBPUlRSQUlUOiAxLFxuICAgIExBTkRTQ0FQRTogMixcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblRhZyA9IHtcbiAgICBDTE9TRTogMTAwMSxcbiAgICBUT1JDSDogMTAwMixcbiAgICBDQU1FUkFfU1dJVENIOiAxMDAzLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkZvbnQgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25Gb250Lk9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTlwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMOiBcIkN1c3RvbWl6YXRpb25Gb250Lk9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1VCVElUTEVfTEFCRUw6IFwiQ3VzdG9taXphdGlvbkZvbnQuT05CT0FSRElOR19TQ1JFRU5fU1VCVElUTEVfTEFCRUxcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMUzogXCJDdXN0b21pemF0aW9uRm9udC5PTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMU1wiLFxuICAgIENBTUVSQV9TQ1JFRU5fSElOVF9MQUJFTDogXCJDdXN0b21pemF0aW9uRm9udC5DQU1FUkFfU0NSRUVOX0hJTlRfTEFCRUxcIixcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25Gb250LlJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT05cIixcbiAgICBSRVRSWV9TQ1JFRU5fVElUTEVfTEFCRUw6IFwiQ3VzdG9taXphdGlvbkZvbnQuUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMXCIsXG4gICAgUkVUUllfU0NSRUVOX1NVQlRJVExFX0xBQkVMOiBcIkN1c3RvbWl6YXRpb25Gb250LlJFVFJZX1NDUkVFTl9TVUJUSVRMRV9MQUJFTFwiLFxuICAgIFJFVFJZX1NDUkVFTl9ISU5UX0xBQkVMUzogXCJDdXN0b21pemF0aW9uRm9udC5SRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFNcIixcbiAgICBQUk9DRVNTSU5HX1NDUkVFTjogXCJDdXN0b21pemF0aW9uRm9udC5QUk9DRVNTSU5HX1NDUkVFTlwiLFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNTY2VuYXJpbyA9IHtcbiAgICBDUk9QX0NFTlRSQUxfRkFDRTogXCJDcm9wQ2VudHJhbEZhY2VcIixcbiAgICBDUk9QX0FMTF9GQUNFUzogXCJDcm9wQWxsRmFjZXNcIixcbiAgICBUSFVNQk5BSUw6IFwiVGh1bWJuYWlsXCIsXG4gICAgQVRUUklCVVRFU19BTEw6IFwiQXR0cmlidXRlc0FsbFwiLFxuICAgIFFVQUxJVFlfRlVMTDogXCJRdWFsaXR5RnVsbFwiLFxuICAgIFFVQUxJVFlfSUNBTzogXCJRdWFsaXR5SUNBT1wiLFxuICAgIFFVQUxJVFlfVklTQV9TQ0hFTkdFTjogXCJRdWFsaXR5VmlzYVNjaGVuZ2VuXCIsXG4gICAgUVVBTElUWV9WSVNBX1VTQTogXCJRdWFsaXR5VmlzYVVTQVwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NQcm9jZXNzU3RhdHVzID0ge1xuICAgIFNUQVJUOiBcIlNUQVJUXCIsXG4gICAgUFJFUEFSSU5HOiBcIlBSRVBBUklOR1wiLFxuICAgIE5FV19TRVNTSU9OOiBcIk5FV19TRVNTSU9OXCIsXG4gICAgTkVYVF9TVEFHRTogXCJORVhUX1NUQUdFXCIsXG4gICAgU0VDVE9SX0NIQU5HRUQ6IFwiU0VDVE9SX0NIQU5HRURcIixcbiAgICBQUk9HUkVTUzogXCJQUk9HUkVTU1wiLFxuICAgIExPV19CUklHSFRORVNTOiBcIkxPV19CUklHSFRORVNTXCIsXG4gICAgRklUX0ZBQ0U6IFwiRklUX0ZBQ0VcIixcbiAgICBNT1ZFX0FXQVk6IFwiTU9WRV9BV0FZXCIsXG4gICAgTU9WRV9DTE9TRVI6IFwiTU9WRV9DTE9TRVJcIixcbiAgICBUVVJOX0hFQUQ6IFwiVFVSTl9IRUFEXCIsXG4gICAgUFJPQ0VTU0lORzogXCJQUk9DRVNTSU5HXCIsXG4gICAgRkFJTEVEOiBcIkZBSUxFRFwiLFxuICAgIFJFVFJZOiBcIlJFVFJZXCIsXG4gICAgU1VDQ0VTUzogXCJTVUNDRVNTXCIsXG59XG5cbmV4cG9ydCBjb25zdCBPdXRwdXRJbWFnZUNyb3BBc3BlY3RSYXRpbyA9IHtcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fM1g0OiAwLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT180WDU6IDEsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzJYMzogMixcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fMVgxOiAzLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT183WDk6IDQsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc1R5cGUgPSB7XG4gICAgQUNUSVZFOiBcIkFDVElWRVwiLFxuICAgIFBBU1NJVkU6IFwiUEFTU0lWRVwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTa2lwU3RlcCA9IHtcbiAgICBPTkJPQVJESU5HX1NURVA6IDEsXG4gICAgU1VDQ0VTU19TVEVQOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzID0ge1xuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19GQUxTRTogMCxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVFJVRTogMSxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVU5ERVRFUk1JTkVEOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VUeXBlID0ge1xuICAgIFBSSU5URUQ6IDEsXG4gICAgUkZJRDogMixcbiAgICBMSVZFOiAzLFxuICAgIERPQ1VNRU5UX1dJVEhfTElWRTogNCxcbiAgICBFWFRFUk5BTDogNSxcbiAgICBHSE9TVF9QT1JUUkFJVDogNixcbiAgICBCQVJDT0RFOiA3LFxufVxuXG5leHBvcnQgY29uc3QgRmFjZUNhcHR1cmVFcnJvckNvZGUgPSB7XG4gICAgQ0FOQ0VMOiAwLFxuICAgIFRJTUVPVVQ6IDEsXG4gICAgTk9UX0lOSVRJQUxJWkVEOiAyLFxuICAgIFNFU1NJT05fU1RBUlRfRkFJTEVEOiAzLFxuICAgIENBTUVSQV9OT1RfQVZBSUxBQkxFOiA0LFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiA1LFxuICAgIElOX1BST0dSRVNTX0FMUkVBRFk6IDYsXG4gICAgQ09OVEVYVF9JU19OVUxMOiA3LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NCYWNrZW5kRXJyb3JDb2RlID0ge1xuICAgIFVOREVGSU5FRDogLTEsXG4gICAgTk9fTElDRU5TRTogMjAwLFxuICAgIExPV19RVUFMSVRZOiAyMzEsXG4gICAgVFJBQ0tfQlJFQUs6IDI0NixcbiAgICBDTE9TRURfRVlFU19ERVRFQ1RFRDogMjMwLFxuICAgIEhJR0hfQVNZTU1FVFJZOiAyMzIsXG4gICAgRkFDRV9PVkVSX0VNT1RJT05BTDogMjMzLFxuICAgIFNVTkdMQVNTRVNfREVURUNURUQ6IDIzNCxcbiAgICBTTUFMTF9BR0U6IDIzNSxcbiAgICBIRUFERFJFU1NfREVURUNURUQ6IDIzNixcbiAgICBNRURJQ0lORV9NQVNLX0RFVEVDVEVEOiAyMzksXG4gICAgT0NDTFVTSU9OX0RFVEVDVEVEOiAyNDAsXG4gICAgRk9SRUhFQURfR0xBU1NFU19ERVRFQ1RFRDogMjQyLFxuICAgIE1PVVRIX09QRU5FRDogMjQzLFxuICAgIEFSVF9NQVNLX0RFVEVDVEVEOiAyNDQsXG4gICAgTk9UX01BVENIRUQ6IDIzNyxcbiAgICBJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERUQ6IDIzOCxcbiAgICBFTEVDVFJPTklDX0RFVklDRV9ERVRFQ1RFRDogMjQ1LFxuICAgIFdST05HX0dFTzogMjQ3LFxuICAgIFdST05HX09GOiAyNDgsXG4gICAgV1JPTkdfVklFVzogMjQ5LFxufVxuXG5leHBvcnQgY29uc3QgUHJvY2Vzc2luZ01vZGUgPSB7XG4gICAgT05MSU5FOiBcIk9OTElORVwiLFxuICAgIE9GRkxJTkU6IFwiT0ZGTElORVwiLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkltYWdlID0ge1xuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0NMT1NFX0JVVFRPTjogXCJDdXN0b21pemF0aW9uSW1hZ2UuT05CT0FSRElOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fSUxMVU1JTkFUSU9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5PTkJPQVJESU5HX1NDUkVFTl9JTExVTUlOQVRJT05cIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9BQ0NFU1NPUklFUzogXCJDdXN0b21pemF0aW9uSW1hZ2UuT05CT0FSRElOR19TQ1JFRU5fQUNDRVNTT1JJRVNcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9DQU1FUkFfTEVWRUw6IFwiQ3VzdG9taXphdGlvbkltYWdlLk9OQk9BUkRJTkdfU0NSRUVOX0NBTUVSQV9MRVZFTFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX0NMT1NFX0JVVFRPTlwiLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfT05fQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX0xJR0hUX09OX0JVVFRPTlwiLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfT0ZGX0JVVFRPTjogXCJDdXN0b21pemF0aW9uSW1hZ2UuQ0FNRVJBX1NDUkVFTl9MSUdIVF9PRkZfQlVUVE9OXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TV0lUQ0hfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX1NXSVRDSF9CVVRUT05cIixcbiAgICBSRVRSWV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5SRVRSWV9TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfRU5WSVJPTk1FTlQ6IFwiQ3VzdG9taXphdGlvbkltYWdlLlJFVFJZX1NDUkVFTl9ISU5UX0VOVklST05NRU5UXCIsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfU1VCSkVDVDogXCJDdXN0b21pemF0aW9uSW1hZ2UuUkVUUllfU0NSRUVOX0hJTlRfU1VCSkVDVFwiLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX0NMT1NFX0JVVFRPTjogXCJDdXN0b21pemF0aW9uSW1hZ2UuUFJPQ0VTU0lOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgU1VDQ0VTU19TQ1JFRU5fSU1BR0U6IFwiQ3VzdG9taXphdGlvbkltYWdlLlNVQ0NFU1NfU0NSRUVOX0lNQUdFXCIsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0F0dHJpYnV0ZSA9IHtcbiAgICBBR0U6IFwiQWdlXCIsXG4gICAgRVlFX1JJR0hUOiBcIkV5ZVJpZ2h0XCIsXG4gICAgRVlFX0xFRlQ6IFwiRXllTGVmdFwiLFxuICAgIEVNT1RJT046IFwiRW1vdGlvblwiLFxuICAgIFNNSUxFOiBcIlNtaWxlXCIsXG4gICAgR0xBU1NFUzogXCJHbGFzc2VzXCIsXG4gICAgSEVBRF9DT1ZFUklORzogXCJIZWFkQ292ZXJpbmdcIixcbiAgICBGT1JFSEVBRF9DT1ZFUklORzogXCJGb3JlaGVhZENvdmVyaW5nXCIsXG4gICAgTU9VVEg6IFwiTW91dGhcIixcbiAgICBNRURJQ0FMX01BU0s6IFwiTWVkaWNhbE1hc2tcIixcbiAgICBPQ0NMVVNJT046IFwiT2NjbHVzaW9uXCIsXG4gICAgU1RST05HX01BS0VVUDogXCJTdHJvbmdNYWtldXBcIixcbiAgICBIRUFEUEhPTkVTOiBcIkhlYWRwaG9uZXNcIixcbn1cblxuZXhwb3J0IGNvbnN0IEVudW0gPSB7XG4gICBGb250U3R5bGUsXG4gICBDdXN0b21pemF0aW9uQ29sb3IsXG4gICBJbWFnZVF1YWxpdHlHcm91cE5hbWUsXG4gICBMaWNlbnNpbmdSZXN1bHRDb2RlLFxuICAgRGV0ZWN0RmFjZXNFcnJvckNvZGUsXG4gICBJbml0RXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NTdGF0dXMsXG4gICBDYW1lcmFFcnJvckNvZGUsXG4gICBMaXZlbmVzc0Vycm9yQ29kZSxcbiAgIFJlY29yZGluZ1Byb2Nlc3MsXG4gICBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUsXG4gICBNYXRjaEZhY2VzRXJyb3JDb2RlLFxuICAgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWNOYW1lLFxuICAgU2NyZWVuT3JpZW50YXRpb24sXG4gICBCdXR0b25UYWcsXG4gICBDdXN0b21pemF0aW9uRm9udCxcbiAgIERldGVjdEZhY2VzU2NlbmFyaW8sXG4gICBMaXZlbmVzc1Byb2Nlc3NTdGF0dXMsXG4gICBPdXRwdXRJbWFnZUNyb3BBc3BlY3RSYXRpbyxcbiAgIExpdmVuZXNzVHlwZSxcbiAgIExpdmVuZXNzU2tpcFN0ZXAsXG4gICBJbWFnZVF1YWxpdHlSZXN1bHRTdGF0dXMsXG4gICBJbWFnZVR5cGUsXG4gICBGYWNlQ2FwdHVyZUVycm9yQ29kZSxcbiAgIExpdmVuZXNzQmFja2VuZEVycm9yQ29kZSxcbiAgIFByb2Nlc3NpbmdNb2RlLFxuICAgQ3VzdG9taXphdGlvbkltYWdlLFxuICAgRGV0ZWN0RmFjZXNBdHRyaWJ1dGUsXG59XG5cbi8qKlxuICogQG5hbWUgRmFjZVNES1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRmFjZSBTREsuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlU0RLIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRmFjZVNESzogRmFjZVNESykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRmFjZVNESycsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZS1hcGknLFxuICAgIHBsdWdpblJlZjogJ0ZhY2VTREtQbHVnaW4uRmFjZVNESycsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRmFjZUFwaS1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZVNESyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2VydmljZVVybCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRGYWNlU2RrVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcEZhY2VDYXB0dXJlQWN0aXZpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0aWFsaXplKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgU3RyaW5nIGxpY2Vuc2UgLSBsaWNlbnNlIGJhc2U2NFxuICAgICAqICBib29sZWFuIGxpY2Vuc2VVcGRhdGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGluaXRpYWxpemVXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlaW5pdGlhbGl6ZSgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGlzSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzdG9wTGl2ZW5lc3NQcm9jZXNzaW5nKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgc2V0cyBoZWFkZXJzIGZvciBodHRwIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bWFwfSBoZWFkZXJzIGtleSAtIGhlYWRlciBuYW1lXG4gICAgICogIHZhbHVlIC0gaGVhZGVyIHZhbHVlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRSZXF1ZXN0SGVhZGVycyhoZWFkZXJzOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIGludCBjYW1lcmFJZCAtIHNldCBjYW1lcmEgb24gQW5kcm9pZFxuICAgICAqICBDYW1lcmFQb3NpdGlvbiBjYW1lcmFQb3NpdGlvbklPUyAtIHNldCBjYW1lcmEgb24gaU9TXG4gICAgICogIGJvb2xlYW4gY2FtZXJhU3dpdGNoRW5hYmxlZFxuICAgICAqICBib29sZWFuIHNob3dIZWxwVGV4dEFuaW1hdGlvblxuICAgICAqICBib29sZWFuIGZvcmNlVG9Vc2VIdWF3ZWlWaXNpb25cbiAgICAgKiAgYm9vbGVhbiBjbG9zZUJ1dHRvbkVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiB0b3JjaEJ1dHRvbkVuYWJsZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5V2l0aENvbmZpZyhjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0Y2hGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFByb2Nlc3NpbmdNb2RlIHByb2Nlc3NpbmdNb2RlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBtYXRjaEZhY2VzV2l0aENvbmZpZyhyZXF1ZXN0OiBhbnksIGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBpbnQgY2FtZXJhSWQgLSBzZXQgY2FtZXJhIG9uIEFuZHJvaWRcbiAgICAgKiAgQ2FtZXJhUG9zaXRpb24gY2FtZXJhUG9zaXRpb25JT1MgLSBzZXQgY2FtZXJhIG9uIGlPU1xuICAgICAqICBib29sZWFuIGNhbWVyYVN3aXRjaEVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiBzaG93SGVscFRleHRBbmltYXRpb25cbiAgICAgKiAgYm9vbGVhbiBsb2NhdGlvblRyYWNraW5nRW5hYmxlZFxuICAgICAqICBib29sZWFuIGZvcmNlVG9Vc2VIdWF3ZWlWaXNpb25cbiAgICAgKiAgYm9vbGVhbiBjbG9zZUJ1dHRvbkVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiB0b3JjaEJ1dHRvbkVuYWJsZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3NXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0U2VydmljZVVybCh1cmw6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNFbmFibGUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldExvZ3MoaXNFbmFibGU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTYXZlTG9nIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRTYXZlTG9ncyhpc1NhdmVMb2c6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF0aCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0TG9nc0ZvbGRlcihwYXRoOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hdGNoRmFjZXNSZXF1ZXN0fSByZXF1ZXN0IGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBtYXRjaEZhY2VzKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGV0ZWN0RmFjZXNSZXF1ZXN0fSByZXF1ZXN0IGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZXRlY3RGYWNlcyhyZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgVUlDdXN0b21pemF0aW9uTGF5ZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBqc29uIGN1c3RvbSBVSSBsYXllciBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRVaUN1c3RvbWl6YXRpb25MYXllcihqc29uOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIFVzZSB0aGlzIG1ldGhvZCB0byBzZXQgVWlDb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFVpQ29uZmlndXJhdGlvbiBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRVaUNvbmZpZ3VyYXRpb24oY29uZmlnOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGljdGlvbmFyeSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0TG9jYWxpemF0aW9uRGljdGlvbmFyeShkaWN0aW9uYXJ5OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFjZXMgZmFjZXNBcnJheTogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyW11cbiAgICAgKiAgZmFjZXMgPSBKU09OLnN0cmluZ2lmeShmYWNlc0FycmF5KVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaW1pbGFyaXR5IGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBtYXRjaEZhY2VzU2ltaWxhcml0eVRocmVzaG9sZFNwbGl0KGZhY2VzOiBhbnksIHNpbWlsYXJpdHk6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uKHBlcnNvbklkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGdyb3VwSWRzIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjcmVhdGVQZXJzb24obmFtZTogYW55LCBncm91cElkczogYW55LCBtZXRhZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtQZXJzb259IHBlcnNvbiBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlUGVyc29uKHBlcnNvbjogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWxldGVQZXJzb24ocGVyc29uSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2VzKHBlcnNvbklkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25JbWFnZXNGb3JQYWdlKHBlcnNvbklkOiBhbnksIHBhZ2U6IGFueSwgc2l6ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtJbWFnZVVwbG9hZH0gaW1hZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGFkZFBlcnNvbkltYWdlKHBlcnNvbklkOiBhbnksIGltYWdlOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VJZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uSW1hZ2UocGVyc29uSWQ6IGFueSwgaW1hZ2VJZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZVBlcnNvbkltYWdlKHBlcnNvbklkOiBhbnksIGltYWdlSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0R3JvdXBzKCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldEdyb3Vwc0ZvclBhZ2UocGFnZTogYW55LCBzaXplOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkdyb3VwcyhwZXJzb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uR3JvdXBzRm9yUGFnZShwZXJzb25JZDogYW55LCBwYWdlOiBhbnksIHNpemU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBjcmVhdGVHcm91cChuYW1lOiBhbnksIG1ldGFkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0R3JvdXAoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtQZXJzb25Hcm91cH0gZ3JvdXAgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHVwZGF0ZUdyb3VwKGdyb3VwOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7RWRpdEdyb3VwUGVyc29uc1JlcXVlc3R9IGVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0IGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBlZGl0UGVyc29uc0luR3JvdXAoZ3JvdXBJZDogYW55LCBlZGl0R3JvdXBQZXJzb25zUmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbnNJbkdyb3VwKGdyb3VwSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uc0luR3JvdXBGb3JQYWdlKGdyb3VwSWQ6IGFueSwgcGFnZTogYW55LCBzaXplOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVsZXRlR3JvdXAoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNlYXJjaFBlcnNvblJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNlYXJjaFBlcnNvbihzZWFyY2hQZXJzb25SZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG5cbn0iXX0=