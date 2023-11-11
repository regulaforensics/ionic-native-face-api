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
var FaceSDKOriginal = /** @class */ (function (_super) {
    __extends(FaceSDKOriginal, _super);
    function FaceSDKOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceSDKOriginal.prototype.getServiceUrl = function () { return cordova(this, "getServiceUrl", {}, arguments); };
    FaceSDKOriginal.prototype.startLiveness = function () { return cordova(this, "startLiveness", {}, arguments); };
    FaceSDKOriginal.prototype.getFaceSdkVersion = function () { return cordova(this, "getFaceSdkVersion", {}, arguments); };
    FaceSDKOriginal.prototype.presentFaceCaptureActivity = function () { return cordova(this, "presentFaceCaptureActivity", {}, arguments); };
    FaceSDKOriginal.prototype.stopFaceCaptureActivity = function () { return cordova(this, "stopFaceCaptureActivity", {}, arguments); };
    FaceSDKOriginal.prototype.init = function () { return cordova(this, "init", {}, arguments); };
    FaceSDKOriginal.prototype.deinit = function () { return cordova(this, "deinit", {}, arguments); };
    FaceSDKOriginal.prototype.isInitialized = function () { return cordova(this, "isInitialized", {}, arguments); };
    FaceSDKOriginal.prototype.stopLivenessProcessing = function () { return cordova(this, "stopLivenessProcessing", {}, arguments); };
    FaceSDKOriginal.prototype.setRequestHeaders = function (headers) { return cordova(this, "setRequestHeaders", {}, arguments); };
    FaceSDKOriginal.prototype.presentFaceCaptureActivityWithConfig = function (config) { return cordova(this, "presentFaceCaptureActivityWithConfig", {}, arguments); };
    FaceSDKOriginal.prototype.startLivenessWithConfig = function (config) { return cordova(this, "startLivenessWithConfig", {}, arguments); };
    FaceSDKOriginal.prototype.setServiceUrl = function (url) { return cordova(this, "setServiceUrl", {}, arguments); };
    FaceSDKOriginal.prototype.matchFaces = function (request) { return cordova(this, "matchFaces", {}, arguments); };
    FaceSDKOriginal.prototype.detectFaces = function (request) { return cordova(this, "detectFaces", {}, arguments); };
    FaceSDKOriginal.prototype.setUiCustomizationLayer = function (json) { return cordova(this, "setUiCustomizationLayer", {}, arguments); };
    FaceSDKOriginal.prototype.setUiConfiguration = function (config) { return cordova(this, "setUiConfiguration", {}, arguments); };
    FaceSDKOriginal.prototype.setLocalizationDictionary = function (dictionary) { return cordova(this, "setLocalizationDictionary", {}, arguments); };
    FaceSDKOriginal.prototype.matchFacesSimilarityThresholdSplit = function (faces, similarity) { return cordova(this, "matchFacesSimilarityThresholdSplit", {}, arguments); };
    FaceSDKOriginal.prototype.getPerson = function (personId) { return cordova(this, "getPerson", {}, arguments); };
    FaceSDKOriginal.prototype.createPerson = function (name, groupIds, metadata) { return cordova(this, "createPerson", {}, arguments); };
    FaceSDKOriginal.prototype.updatePerson = function (person) { return cordova(this, "updatePerson", {}, arguments); };
    FaceSDKOriginal.prototype.deletePerson = function (personId) { return cordova(this, "deletePerson", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImages = function (personId) { return cordova(this, "getPersonImages", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImagesForPage = function (personId, page, size) { return cordova(this, "getPersonImagesForPage", {}, arguments); };
    FaceSDKOriginal.prototype.addPersonImage = function (personId, image) { return cordova(this, "addPersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonImage = function (personId, imageId) { return cordova(this, "getPersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.deletePersonImage = function (personId, imageId) { return cordova(this, "deletePersonImage", {}, arguments); };
    FaceSDKOriginal.prototype.getGroups = function () { return cordova(this, "getGroups", {}, arguments); };
    FaceSDKOriginal.prototype.getGroupsForPage = function (page, size) { return cordova(this, "getGroupsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonGroups = function (personId) { return cordova(this, "getPersonGroups", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonGroupsForPage = function (personId, page, size) { return cordova(this, "getPersonGroupsForPage", {}, arguments); };
    FaceSDKOriginal.prototype.createGroup = function (name, metadata) { return cordova(this, "createGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getGroup = function (groupId) { return cordova(this, "getGroup", {}, arguments); };
    FaceSDKOriginal.prototype.updateGroup = function (group) { return cordova(this, "updateGroup", {}, arguments); };
    FaceSDKOriginal.prototype.editPersonsInGroup = function (groupId, editGroupPersonsRequest) { return cordova(this, "editPersonsInGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsInGroup = function (groupId) { return cordova(this, "getPersonsInGroup", {}, arguments); };
    FaceSDKOriginal.prototype.getPersonsInGroupForPage = function (groupId, page, size) { return cordova(this, "getPersonsInGroupForPage", {}, arguments); };
    FaceSDKOriginal.prototype.deleteGroup = function (groupId) { return cordova(this, "deleteGroup", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmFjZS1hcGkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7Ozs7SUFPakYsNkJBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLG9CQUFvQixDQUFBO1FBRXZDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7K0JBaEJMOzs7Ozs7SUF1Qlcsc0JBQVEsR0FBZixVQUFnQixVQUFnQjtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxJQUFJLFNBQVM7WUFBRSxPQUFPLFNBQVMsQ0FBQTtRQUNuRSxJQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQTtRQUVoQyxNQUFNLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV0QyxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO3dCQS9CTDs7Ozs7O0lBdUNXLCtCQUFRLEdBQWYsVUFBZ0IsVUFBZ0I7UUFDNUIsSUFBSSxVQUFVLElBQUksSUFBSSxJQUFJLFVBQVUsSUFBSSxTQUFTO1lBQUUsT0FBTyxTQUFTLENBQUE7UUFDbkUsSUFBTSxNQUFNLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQTtRQUV6QyxNQUFN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Qiw2QkFBVyxhQUFDLE9BQVk7SUFTeEIseUNBQXVCLGFBQUMsSUFBUztJQVNqQyxvQ0FBa0IsYUFBQyxNQUFXO0lBUzlCLDJDQUF5QixhQUFDLFVBQWU7SUFXekMsb0RBQWtDLGFBQUMsS0FBVSxFQUFFLFVBQWU7SUFTOUQsMkJBQVMsYUFBQyxRQUFhO0lBV3ZCLDhCQUFZLGFBQUMsSUFBUyxFQUFFLFFBQWEsRUFBRSxRQUFhO0lBU3BELDhCQUFZLGFBQUMsTUFBVztJQVN4Qiw4QkFBWSxhQUFDLFFBQWE7SUFTMUIsaUNBQWUsYUFBQyxRQUFhO0lBVzdCLHdDQUFzQixhQUFDLFFBQWEsRUFBRSxJQUFTLEVBQUUsSUFBUztJQVUxRCxnQ0FBYyxhQUFDLFFBQWEsRUFBRSxLQUFVO0lBVXhDLGdDQUFjLGFBQUMsUUFBYSxFQUFFLE9BQVk7SUFVMUMsbUNBQWlCLGFBQUMsUUFBYSxFQUFFLE9BQVk7SUFRN0MsMkJBQVM7SUFVVCxrQ0FBZ0IsYUFBQyxJQUFTLEVBQUUsSUFBUztJQVNyQyxpQ0FBZSxhQUFDLFFBQWE7SUFXN0Isd0NBQXNCLGFBQUMsUUFBYSxFQUFFLElBQVMsRUFBRSxJQUFTO0lBVTFELDZCQUFXLGFBQUMsSUFBUyxFQUFFLFFBQWE7SUFTcEMsMEJBQVEsYUFBQyxPQUFZO0lBU3JCLDZCQUFXLGFBQUMsS0FBVTtJQVV0QixvQ0FBa0IsYUFBQyxPQUFZLEVBQUUsdUJBQTRCO0lBUzdELG1DQUFpQixhQUFDLE9BQVk7SUFXOUIsMENBQXdCLGFBQUMsT0FBWSxFQUFFLElBQVMsRUFBRSxJQUFTO0lBUzNELDZCQUFXLGFBQUMsT0FBWTtJQVN4Qiw4QkFBWSxhQUFDLG1CQUF3Qjs7Ozs7O2tCQW5vRHpDO0VBd3dDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgRmFjZUNhcHR1cmVFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IHN0cmluZ1xuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWNlQ2FwdHVyZUV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW5pdEV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogc3RyaW5nXG4gICAgbWVzc2FnZT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbml0RXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgSW5pdEV4Y2VwdGlvblxuXG4gICAgICAgIHJlc3VsdC5lcnJvckNvZGUgPSBqc29uT2JqZWN0W1wiZXJyb3JDb2RlXCJdXG4gICAgICAgIHJlc3VsdC5tZXNzYWdlID0ganNvbk9iamVjdFtcIm1lc3NhZ2VcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NFcnJvckV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogc3RyaW5nXG4gICAgdW5kZXJseWluZ0V4Y2VwdGlvbj86IExpdmVuZXNzQmFja2VuZEV4Y2VwdGlvblxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NFcnJvckV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzRXJyb3JFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0V4Y2VwdGlvbiA9IExpdmVuZXNzQmFja2VuZEV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0V4Y2VwdGlvblwiXSlcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc0JhY2tlbmRFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTGl2ZW5lc3NCYWNrZW5kRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRXhjZXB0aW9uIHtcbiAgICBlcnJvckNvZGU/OiBzdHJpbmdcbiAgICBtZXNzYWdlPzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNFeGNlcHRpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYWNlQ2FwdHVyZVJlc3BvbnNlIHtcbiAgICBleGNlcHRpb24/OiBGYWNlQ2FwdHVyZUV4Y2VwdGlvblxuICAgIGltYWdlPzogSW1hZ2VcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRmFjZUNhcHR1cmVSZXNwb25zZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZhY2VDYXB0dXJlUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gRmFjZUNhcHR1cmVFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4Y2VwdGlvblwiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlID0gSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaXZlbmVzc1Jlc3BvbnNlIHtcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICBsaXZlbmVzcz86IHN0cmluZ1xuICAgIHRhZz86IHN0cmluZ1xuICAgIHRyYW5zYWN0aW9uSWQ/OiBzdHJpbmdcbiAgICBlc3RpbWF0ZWRBZ2U/OiBudW1iZXJcbiAgICBleGNlcHRpb24/OiBMaXZlbmVzc0Vycm9yRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IExpdmVuZXNzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBMaXZlbmVzc1Jlc3BvbnNlXG5cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICAgICAgcmVzdWx0LmxpdmVuZXNzID0ganNvbk9iamVjdFtcImxpdmVuZXNzXCJdXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC50cmFuc2FjdGlvbklkID0ganNvbk9iamVjdFtcInRyYW5zYWN0aW9uSWRcIl1cbiAgICAgICAgcmVzdWx0LmVzdGltYXRlZEFnZSA9IGpzb25PYmplY3RbXCJlc3RpbWF0ZWRBZ2VcIl1cbiAgICAgICAgcmVzdWx0LmV4Y2VwdGlvbiA9IExpdmVuZXNzRXJyb3JFeGNlcHRpb24uZnJvbUpzb24oanNvbk9iamVjdFtcImV4Y2VwdGlvblwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWF0Y2hGYWNlc1Jlc3BvbnNlIHtcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBleGNlcHRpb24/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG4gICAgZGV0ZWN0aW9ucz86IE1hdGNoRmFjZXNEZXRlY3Rpb25bXVxuICAgIHJlc3VsdHM/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXJbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzUmVzcG9uc2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVzcG9uc2VcblxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuICAgICAgICByZXN1bHQuZGV0ZWN0aW9ucyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImRldGVjdGlvbnNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0RldGVjdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0ZWN0aW9uc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5kZXRlY3Rpb25zLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVzdWx0cyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicmVzdWx0c1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInJlc3VsdHNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJyZXN1bHRzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnJlc3VsdHMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlIHtcbiAgICBpbWFnZVR5cGU/OiBudW1iZXJcbiAgICBiaXRtYXA/OiBzdHJpbmdcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBpbWFnZURhdGE/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBJbWFnZVxuXG4gICAgICAgIHJlc3VsdC5pbWFnZVR5cGUgPSBqc29uT2JqZWN0W1wiaW1hZ2VUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5iaXRtYXAgPSBqc29uT2JqZWN0W1wiYml0bWFwXCJdXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG4gICAgICAgIHJlc3VsdC5pbWFnZURhdGEgPSBqc29uT2JqZWN0W1wiaW1hZ2VEYXRhXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNSZXF1ZXN0IHtcbiAgICBpbWFnZXM/OiBNYXRjaEZhY2VzSW1hZ2VbXVxuICAgIGN1c3RvbU1ldGFkYXRhPzogYW55XG4gICAgdGh1bWJuYWlscz86IGJvb2xlYW5cbiAgICB0YWc/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5pbWFnZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImltYWdlc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImltYWdlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jdXN0b21NZXRhZGF0YSA9IGpzb25PYmplY3RbXCJjdXN0b21NZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQudGh1bWJuYWlscyA9IGpzb25PYmplY3RbXCJ0aHVtYm5haWxzXCJdXG4gICAgICAgIHJlc3VsdC50YWcgPSBqc29uT2JqZWN0W1widGFnXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNJbWFnZSB7XG4gICAgaW1hZ2VUeXBlPzogbnVtYmVyXG4gICAgZGV0ZWN0QWxsPzogYm9vbGVhblxuICAgIGJpdG1hcD86IHN0cmluZ1xuICAgIGlkZW50aWZpZXI/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0ltYWdlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgTWF0Y2hGYWNlc0ltYWdlXG5cbiAgICAgICAgcmVzdWx0LmltYWdlVHlwZSA9IGpzb25PYmplY3RbXCJpbWFnZVR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmRldGVjdEFsbCA9IGpzb25PYmplY3RbXCJkZXRlY3RBbGxcIl1cbiAgICAgICAgcmVzdWx0LmJpdG1hcCA9IGpzb25PYmplY3RbXCJiaXRtYXBcIl1cbiAgICAgICAgcmVzdWx0LmlkZW50aWZpZXIgPSBqc29uT2JqZWN0W1wiaWRlbnRpZmllclwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXIge1xuICAgIGZpcnN0PzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZVxuICAgIHNlY29uZD86IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VcbiAgICBzaW1pbGFyaXR5PzogbnVtYmVyXG4gICAgc2NvcmU/OiBudW1iZXJcbiAgICBleGNlcHRpb24/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VzUGFpclxuXG4gICAgICAgIHJlc3VsdC5maXJzdCA9IE1hdGNoRmFjZXNDb21wYXJlZEZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZpcnN0XCJdKVxuICAgICAgICByZXN1bHQuc2Vjb25kID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZS5mcm9tSnNvbihqc29uT2JqZWN0W1wic2Vjb25kXCJdKVxuICAgICAgICByZXN1bHQuc2ltaWxhcml0eSA9IGpzb25PYmplY3RbXCJzaW1pbGFyaXR5XCJdXG4gICAgICAgIHJlc3VsdC5zY29yZSA9IGpzb25PYmplY3RbXCJzY29yZVwiXVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlIHtcbiAgICBmYWNlPzogTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2VcbiAgICBpbWFnZT86IE1hdGNoRmFjZXNJbWFnZVxuICAgIGZhY2VJbmRleD86IG51bWJlclxuICAgIGltYWdlSW5kZXg/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNDb21wYXJlZEZhY2VcblxuICAgICAgICByZXN1bHQuZmFjZSA9IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlLmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2UgPSBNYXRjaEZhY2VzSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlXCJdKVxuICAgICAgICByZXN1bHQuZmFjZUluZGV4ID0ganNvbk9iamVjdFtcImZhY2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VJbmRleCA9IGpzb25PYmplY3RbXCJpbWFnZUluZGV4XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlIHtcbiAgICBmYWNlSW5kZXg/OiBudW1iZXJcbiAgICBsYW5kbWFya3M/OiBQb2ludFtdXG4gICAgZmFjZVJlY3Q/OiBSZWN0XG4gICAgcm90YXRpb25BbmdsZT86IG51bWJlclxuICAgIHRodW1ibmFpbD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBNYXRjaEZhY2VzRGV0ZWN0aW9uRmFjZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlXG5cbiAgICAgICAgcmVzdWx0LmZhY2VJbmRleCA9IGpzb25PYmplY3RbXCJmYWNlSW5kZXhcIl1cbiAgICAgICAgcmVzdWx0LmxhbmRtYXJrcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFBvaW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGFuZG1hcmtzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZmFjZVJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJmYWNlUmVjdFwiXSlcbiAgICAgICAgcmVzdWx0LnJvdGF0aW9uQW5nbGUgPSBqc29uT2JqZWN0W1wicm90YXRpb25BbmdsZVwiXVxuICAgICAgICByZXN1bHQudGh1bWJuYWlsID0ganNvbk9iamVjdFtcInRodW1ibmFpbFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzRGV0ZWN0aW9uIHtcbiAgICBpbWFnZT86IE1hdGNoRmFjZXNJbWFnZVxuICAgIGltYWdlSW5kZXg/OiBudW1iZXJcbiAgICBmYWNlcz86IE1hdGNoRmFjZXNEZXRlY3Rpb25GYWNlW11cbiAgICBleGNlcHRpb24/OiBNYXRjaEZhY2VzRXhjZXB0aW9uXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE1hdGNoRmFjZXNEZXRlY3Rpb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBNYXRjaEZhY2VzRGV0ZWN0aW9uXG5cbiAgICAgICAgcmVzdWx0LmltYWdlID0gTWF0Y2hGYWNlc0ltYWdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJpbWFnZVwiXSlcbiAgICAgICAgcmVzdWx0LmltYWdlSW5kZXggPSBqc29uT2JqZWN0W1wiaW1hZ2VJbmRleFwiXVxuICAgICAgICByZXN1bHQuZmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0RldGVjdGlvbkZhY2UuZnJvbUpzb24oanNvbk9iamVjdFtcImZhY2VzXCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuZXhjZXB0aW9uID0gTWF0Y2hGYWNlc0V4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZXhjZXB0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb2ludCB7XG4gICAgeD86IG51bWJlclxuICAgIHk/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUG9pbnQgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQb2ludFxuXG4gICAgICAgIHJlc3VsdC54ID0ganNvbk9iamVjdFtcInhcIl1cbiAgICAgICAgcmVzdWx0LnkgPSBqc29uT2JqZWN0W1wieVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgICBib3R0b20/OiBudW1iZXJcbiAgICB0b3A/OiBudW1iZXJcbiAgICBsZWZ0PzogbnVtYmVyXG4gICAgcmlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUmVjdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlY3RcblxuICAgICAgICByZXN1bHQuYm90dG9tID0ganNvbk9iamVjdFtcImJvdHRvbVwiXVxuICAgICAgICByZXN1bHQudG9wID0ganNvbk9iamVjdFtcInRvcFwiXVxuICAgICAgICByZXN1bHQubGVmdCA9IGpzb25PYmplY3RbXCJsZWZ0XCJdXG4gICAgICAgIHJlc3VsdC5yaWdodCA9IGpzb25PYmplY3RbXCJyaWdodFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNYXRjaEZhY2VzU2ltaWxhcml0eVRocmVzaG9sZFNwbGl0IHtcbiAgICBtYXRjaGVkRmFjZXM/OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgIHVubWF0Y2hlZEZhY2VzPzogTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyW11cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogTWF0Y2hGYWNlc1NpbWlsYXJpdHlUaHJlc2hvbGRTcGxpdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE1hdGNoRmFjZXNTaW1pbGFyaXR5VGhyZXNob2xkU3BsaXRcblxuICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJtYXRjaGVkRmFjZXNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubWF0Y2hlZEZhY2VzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQudW5tYXRjaGVkRmFjZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInVubWF0Y2hlZEZhY2VzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1widW5tYXRjaGVkRmFjZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gTWF0Y2hGYWNlc0NvbXBhcmVkRmFjZXNQYWlyLmZyb21Kc29uKGpzb25PYmplY3RbXCJ1bm1hdGNoZWRGYWNlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51bm1hdGNoZWRGYWNlcy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNSZXF1ZXN0IHtcbiAgICB0YWc/OiBzdHJpbmdcbiAgICBzY2VuYXJpbz86IHN0cmluZ1xuICAgIGltYWdlPzogc3RyaW5nXG4gICAgY29uZmlndXJhdGlvbj86IERldGVjdEZhY2VzQ29uZmlndXJhdGlvblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc1JlcXVlc3QgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEZXRlY3RGYWNlc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQudGFnID0ganNvbk9iamVjdFtcInRhZ1wiXVxuICAgICAgICByZXN1bHQuc2NlbmFyaW8gPSBqc29uT2JqZWN0W1wic2NlbmFyaW9cIl1cbiAgICAgICAgcmVzdWx0LmltYWdlID0ganNvbk9iamVjdFtcImltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5jb25maWd1cmF0aW9uID0gRGV0ZWN0RmFjZXNDb25maWd1cmF0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJjb25maWd1cmF0aW9uXCJdKVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc0NvbmZpZ3VyYXRpb24ge1xuICAgIGF0dHJpYnV0ZXM/OiBzdHJpbmdbXVxuICAgIGN1c3RvbVF1YWxpdHk/OiBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY1tdXG4gICAgb3V0cHV0SW1hZ2VQYXJhbXM/OiBPdXRwdXRJbWFnZVBhcmFtc1xuICAgIG9ubHlDZW50cmFsRmFjZT86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNDb25maWd1cmF0aW9uXG5cbiAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImF0dHJpYnV0ZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmF0dHJpYnV0ZXMucHVzaChqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY3VzdG9tUXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiY3VzdG9tUXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImN1c3RvbVF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWMuZnJvbUpzb24oanNvbk9iamVjdFtcImN1c3RvbVF1YWxpdHlcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuY3VzdG9tUXVhbGl0eS5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0Lm91dHB1dEltYWdlUGFyYW1zID0gT3V0cHV0SW1hZ2VQYXJhbXMuZnJvbUpzb24oanNvbk9iamVjdFtcIm91dHB1dEltYWdlUGFyYW1zXCJdKVxuICAgICAgICByZXN1bHQub25seUNlbnRyYWxGYWNlID0ganNvbk9iamVjdFtcIm9ubHlDZW50cmFsRmFjZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPdXRwdXRJbWFnZVBhcmFtcyB7XG4gICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nXG4gICAgY3JvcD86IE91dHB1dEltYWdlQ3JvcFxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBPdXRwdXRJbWFnZVBhcmFtcyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE91dHB1dEltYWdlUGFyYW1zXG5cbiAgICAgICAgcmVzdWx0LmJhY2tncm91bmRDb2xvciA9IGpzb25PYmplY3RbXCJiYWNrZ3JvdW5kQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LmNyb3AgPSBPdXRwdXRJbWFnZUNyb3AuZnJvbUpzb24oanNvbk9iamVjdFtcImNyb3BcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE91dHB1dEltYWdlQ3JvcCB7XG4gICAgdHlwZT86IG51bWJlclxuICAgIHNpemU/OiBTaXplXG4gICAgcGFkQ29sb3I/OiBzdHJpbmdcbiAgICByZXR1cm5PcmlnaW5hbFJlY3Q/OiBib29sZWFuXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IE91dHB1dEltYWdlQ3JvcCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IE91dHB1dEltYWdlQ3JvcFxuXG4gICAgICAgIHJlc3VsdC50eXBlID0ganNvbk9iamVjdFtcInR5cGVcIl1cbiAgICAgICAgcmVzdWx0LnNpemUgPSBTaXplLmZyb21Kc29uKGpzb25PYmplY3RbXCJzaXplXCJdKVxuICAgICAgICByZXN1bHQucGFkQ29sb3IgPSBqc29uT2JqZWN0W1wicGFkQ29sb3JcIl1cbiAgICAgICAgcmVzdWx0LnJldHVybk9yaWdpbmFsUmVjdCA9IGpzb25PYmplY3RbXCJyZXR1cm5PcmlnaW5hbFJlY3RcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5Q2hhcmFjdGVyaXN0aWMge1xuICAgIGNoYXJhY3RlcmlzdGljTmFtZT86IHN0cmluZ1xuICAgIGltYWdlUXVhbGl0eUdyb3VwPzogbnVtYmVyXG4gICAgcmVjb21tZW5kZWRSYW5nZT86IEltYWdlUXVhbGl0eVJhbmdlXG4gICAgY3VzdG9tUmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpYyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljXG5cbiAgICAgICAgcmVzdWx0LmNoYXJhY3RlcmlzdGljTmFtZSA9IGpzb25PYmplY3RbXCJjaGFyYWN0ZXJpc3RpY05hbWVcIl1cbiAgICAgICAgcmVzdWx0LmltYWdlUXVhbGl0eUdyb3VwID0ganNvbk9iamVjdFtcImltYWdlUXVhbGl0eUdyb3VwXCJdXG4gICAgICAgIHJlc3VsdC5yZWNvbW1lbmRlZFJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJlY29tbWVuZGVkUmFuZ2VcIl0pXG4gICAgICAgIHJlc3VsdC5jdXN0b21SYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJjdXN0b21SYW5nZVwiXSlcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VRdWFsaXR5UmFuZ2Uge1xuICAgIG1pbj86IG51bWJlclxuICAgIG1heD86IG51bWJlclxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVF1YWxpdHlSYW5nZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eVJhbmdlXG5cbiAgICAgICAgcmVzdWx0Lm1pbiA9IGpzb25PYmplY3RbXCJtaW5cIl1cbiAgICAgICAgcmVzdWx0Lm1heCA9IGpzb25PYmplY3RbXCJtYXhcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2l6ZSB7XG4gICAgd2lkdGg/OiBudW1iZXJcbiAgICBoZWlnaHQ/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2l6ZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNpemVcblxuICAgICAgICByZXN1bHQud2lkdGggPSBqc29uT2JqZWN0W1wid2lkdGhcIl1cbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGpzb25PYmplY3RbXCJoZWlnaHRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNSZXNwb25zZSB7XG4gICAgZGV0ZWN0aW9uPzogRGV0ZWN0RmFjZVJlc3VsdFxuICAgIHNjZW5hcmlvPzogc3RyaW5nXG4gICAgZXJyb3I/OiBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uXG4gICAgYWxsRGV0ZWN0aW9ucz86IERldGVjdEZhY2VSZXN1bHRbXVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBEZXRlY3RGYWNlc1Jlc3BvbnNlIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNSZXNwb25zZVxuXG4gICAgICAgIHJlc3VsdC5kZXRlY3Rpb24gPSBEZXRlY3RGYWNlUmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJkZXRlY3Rpb25cIl0pXG4gICAgICAgIHJlc3VsdC5zY2VuYXJpbyA9IGpzb25PYmplY3RbXCJzY2VuYXJpb1wiXVxuICAgICAgICByZXN1bHQuZXJyb3IgPSBEZXRlY3RGYWNlc0Vycm9yRXhjZXB0aW9uLmZyb21Kc29uKGpzb25PYmplY3RbXCJlcnJvclwiXSlcbiAgICAgICAgcmVzdWx0LmFsbERldGVjdGlvbnMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImFsbERldGVjdGlvbnNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJhbGxEZXRlY3Rpb25zXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IERldGVjdEZhY2VSZXN1bHQuZnJvbUpzb24oanNvbk9iamVjdFtcImFsbERldGVjdGlvbnNcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQuYWxsRGV0ZWN0aW9ucy5wdXNoKGl0ZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0RmFjZXNFcnJvckV4Y2VwdGlvbiB7XG4gICAgZXJyb3JDb2RlPzogc3RyaW5nXG4gICAgdW5kZXJseWluZ0V4Y2VwdGlvbj86IERldGVjdEZhY2VzQmFja2VuZEV4Y2VwdGlvblxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNFcnJvckV4Y2VwdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VzRXJyb3JFeGNlcHRpb25cblxuICAgICAgICByZXN1bHQuZXJyb3JDb2RlID0ganNvbk9iamVjdFtcImVycm9yQ29kZVwiXVxuICAgICAgICByZXN1bHQudW5kZXJseWluZ0V4Y2VwdGlvbiA9IERldGVjdEZhY2VzQmFja2VuZEV4Y2VwdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1widW5kZXJseWluZ0V4Y2VwdGlvblwiXSlcbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlc0JhY2tlbmRFeGNlcHRpb24ge1xuICAgIGVycm9yQ29kZT86IG51bWJlclxuICAgIG1lc3NhZ2U/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNCYWNrZW5kRXhjZXB0aW9uXG5cbiAgICAgICAgcmVzdWx0LmVycm9yQ29kZSA9IGpzb25PYmplY3RbXCJlcnJvckNvZGVcIl1cbiAgICAgICAgcmVzdWx0Lm1lc3NhZ2UgPSBqc29uT2JqZWN0W1wibWVzc2FnZVwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXRlY3RGYWNlUmVzdWx0IHtcbiAgICBxdWFsaXR5PzogSW1hZ2VRdWFsaXR5UmVzdWx0W11cbiAgICBhdHRyaWJ1dGVzPzogRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHRbXVxuICAgIGxhbmRtYXJrcz86IFBvaW50W11cbiAgICBjcm9wPzogc3RyaW5nXG4gICAgZmFjZVJlY3Q/OiBSZWN0XG4gICAgb3JpZ2luYWxSZWN0PzogUmVjdFxuICAgIGlzUXVhbGl0eUNvbXBsaWFudD86IGJvb2xlYW5cblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRGV0ZWN0RmFjZVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IERldGVjdEZhY2VSZXN1bHRcblxuICAgICAgICByZXN1bHQucXVhbGl0eSA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wicXVhbGl0eVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInF1YWxpdHlcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gSW1hZ2VRdWFsaXR5UmVzdWx0LmZyb21Kc29uKGpzb25PYmplY3RbXCJxdWFsaXR5XCJdW2ldKVxuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnF1YWxpdHkucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJhdHRyaWJ1dGVzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBEZXRlY3RGYWNlc0F0dHJpYnV0ZVJlc3VsdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiYXR0cmlidXRlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5hdHRyaWJ1dGVzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQubGFuZG1hcmtzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gUG9pbnQuZnJvbUpzb24oanNvbk9iamVjdFtcImxhbmRtYXJrc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYW5kbWFya3MucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5jcm9wID0ganNvbk9iamVjdFtcImNyb3BcIl1cbiAgICAgICAgcmVzdWx0LmZhY2VSZWN0ID0gUmVjdC5mcm9tSnNvbihqc29uT2JqZWN0W1wiZmFjZVJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5vcmlnaW5hbFJlY3QgPSBSZWN0LmZyb21Kc29uKGpzb25PYmplY3RbXCJvcmlnaW5hbFJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5pc1F1YWxpdHlDb21wbGlhbnQgPSBqc29uT2JqZWN0W1wiaXNRdWFsaXR5Q29tcGxpYW50XCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEltYWdlUXVhbGl0eVJlc3VsdCB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGdyb3VwPzogbnVtYmVyXG4gICAgc3RhdHVzPzogbnVtYmVyXG4gICAgcmFuZ2U/OiBJbWFnZVF1YWxpdHlSYW5nZVxuICAgIHZhbHVlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEltYWdlUXVhbGl0eVJlc3VsdCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlUXVhbGl0eVJlc3VsdFxuXG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwID0ganNvbk9iamVjdFtcImdyb3VwXCJdXG4gICAgICAgIHJlc3VsdC5zdGF0dXMgPSBqc29uT2JqZWN0W1wic3RhdHVzXCJdXG4gICAgICAgIHJlc3VsdC5yYW5nZSA9IEltYWdlUXVhbGl0eVJhbmdlLmZyb21Kc29uKGpzb25PYmplY3RbXCJyYW5nZVwiXSlcbiAgICAgICAgcmVzdWx0LnZhbHVlID0ganNvbk9iamVjdFtcInZhbHVlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0IHtcbiAgICBhdHRyaWJ1dGU/OiBzdHJpbmdcbiAgICB2YWx1ZT86IHN0cmluZ1xuICAgIHJhbmdlPzogSW1hZ2VRdWFsaXR5UmFuZ2VcbiAgICBjb25maWRlbmNlPzogbnVtYmVyXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IERldGVjdEZhY2VzQXR0cmlidXRlUmVzdWx0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRGV0ZWN0RmFjZXNBdHRyaWJ1dGVSZXN1bHRcblxuICAgICAgICByZXN1bHQuYXR0cmlidXRlID0ganNvbk9iamVjdFtcImF0dHJpYnV0ZVwiXVxuICAgICAgICByZXN1bHQudmFsdWUgPSBqc29uT2JqZWN0W1widmFsdWVcIl1cbiAgICAgICAgcmVzdWx0LnJhbmdlID0gSW1hZ2VRdWFsaXR5UmFuZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcInJhbmdlXCJdKVxuICAgICAgICByZXN1bHQuY29uZmlkZW5jZSA9IGpzb25PYmplY3RbXCJjb25maWRlbmNlXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvbnQge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBzdHlsZT86IG51bWJlclxuICAgIHNpemU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogRm9udCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZvbnRcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5zdHlsZSA9IGpzb25PYmplY3RbXCJzdHlsZVwiXVxuICAgICAgICByZXN1bHQuc2l6ZSA9IGpzb25PYmplY3RbXCJzaXplXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbiB7XG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGdyb3Vwcz86IHN0cmluZ1tdXG4gICAgdXBkYXRlZEF0Pzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBQZXJzb24gfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25cblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5ncm91cHMgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcImdyb3Vwc1wiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImdyb3Vwc1wiXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5ncm91cHMucHVzaChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC51cGRhdGVkQXQgPSBqc29uT2JqZWN0W1widXBkYXRlZEF0XCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uR3JvdXAge1xuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBpZD86IHN0cmluZ1xuICAgIG1ldGFkYXRhPzogYW55XG4gICAgY3JlYXRlZEF0Pzogc3RyaW5nXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IFBlcnNvbkdyb3VwIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgUGVyc29uR3JvdXBcblxuICAgICAgICByZXN1bHQubmFtZSA9IGpzb25PYmplY3RbXCJuYW1lXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uSW1hZ2Uge1xuICAgIHBhdGg/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbiAgICBjb250ZW50VHlwZT86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogUGVyc29uSW1hZ2UgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoanNvbk9iamVjdCA9PSBudWxsIHx8IGpzb25PYmplY3QgPT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQZXJzb25JbWFnZVxuXG4gICAgICAgIHJlc3VsdC5wYXRoID0ganNvbk9iamVjdFtcInBhdGhcIl1cbiAgICAgICAgcmVzdWx0LnVybCA9IGpzb25PYmplY3RbXCJ1cmxcIl1cbiAgICAgICAgcmVzdWx0LmNvbnRlbnRUeXBlID0ganNvbk9iamVjdFtcImNvbnRlbnRUeXBlXCJdXG4gICAgICAgIHJlc3VsdC5pZCA9IGpzb25PYmplY3RbXCJpZFwiXVxuICAgICAgICByZXN1bHQubWV0YWRhdGEgPSBqc29uT2JqZWN0W1wibWV0YWRhdGFcIl1cbiAgICAgICAgcmVzdWx0LmNyZWF0ZWRBdCA9IGpzb25PYmplY3RbXCJjcmVhdGVkQXRcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQge1xuICAgIGltYWdlRGF0YT86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBJbWFnZVVwbG9hZCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEltYWdlVXBsb2FkXG5cbiAgICAgICAgcmVzdWx0LmltYWdlRGF0YSA9IGpzb25PYmplY3RbXCJpbWFnZURhdGFcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWRpdEdyb3VwUGVyc29uc1JlcXVlc3Qge1xuICAgIHBlcnNvbklkc1RvQWRkPzogc3RyaW5nW11cbiAgICBwZXJzb25JZHNUb1JlbW92ZT86IHN0cmluZ1tdXG5cbiAgICBzdGF0aWMgZnJvbUpzb24oanNvbk9iamVjdD86IGFueSk6IEVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRWRpdEdyb3VwUGVyc29uc1JlcXVlc3RcblxuICAgICAgICByZXN1bHQucGVyc29uSWRzVG9BZGQgPSBbXVxuICAgICAgICBpZiAoanNvbk9iamVjdFtcInBlcnNvbklkc1RvQWRkXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucGVyc29uSWRzVG9BZGQucHVzaChqc29uT2JqZWN0W1wicGVyc29uSWRzVG9BZGRcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvUmVtb3ZlID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJwZXJzb25JZHNUb1JlbW92ZVwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBlcnNvbklkc1RvUmVtb3ZlLnB1c2goanNvbk9iamVjdFtcInBlcnNvbklkc1RvUmVtb3ZlXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvblJlcXVlc3Qge1xuICAgIG91dHB1dEltYWdlUGFyYW1zPzogT3V0cHV0SW1hZ2VQYXJhbXNcbiAgICBncm91cElkc0ZvclNlYXJjaD86IHN0cmluZ1tdXG4gICAgdGhyZXNob2xkPzogbnVtYmVyXG4gICAgbGltaXQ/OiBudW1iZXJcbiAgICBpbWFnZVVwbG9hZD86IEltYWdlVXBsb2FkXG4gICAgZGV0ZWN0QWxsPzogYm9vbGVhblxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25SZXF1ZXN0IHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uUmVxdWVzdFxuXG4gICAgICAgIHJlc3VsdC5vdXRwdXRJbWFnZVBhcmFtcyA9IE91dHB1dEltYWdlUGFyYW1zLmZyb21Kc29uKGpzb25PYmplY3RbXCJvdXRwdXRJbWFnZVBhcmFtc1wiXSlcbiAgICAgICAgcmVzdWx0Lmdyb3VwSWRzRm9yU2VhcmNoID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJncm91cElkc0ZvclNlYXJjaFwiXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4ganNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3VwSWRzRm9yU2VhcmNoLnB1c2goanNvbk9iamVjdFtcImdyb3VwSWRzRm9yU2VhcmNoXCJdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC50aHJlc2hvbGQgPSBqc29uT2JqZWN0W1widGhyZXNob2xkXCJdXG4gICAgICAgIHJlc3VsdC5saW1pdCA9IGpzb25PYmplY3RbXCJsaW1pdFwiXVxuICAgICAgICByZXN1bHQuaW1hZ2VVcGxvYWQgPSBJbWFnZVVwbG9hZC5mcm9tSnNvbihqc29uT2JqZWN0W1wiaW1hZ2VVcGxvYWRcIl0pXG4gICAgICAgIHJlc3VsdC5kZXRlY3RBbGwgPSBqc29uT2JqZWN0W1wiZGV0ZWN0QWxsXCJdXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFBlcnNvbiB7XG4gICAgZGV0ZWN0aW9uPzogU2VhcmNoUGVyc29uRGV0ZWN0aW9uXG4gICAgaW1hZ2VzPzogU2VhcmNoUGVyc29uSW1hZ2VbXVxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBncm91cHM/OiBzdHJpbmdbXVxuICAgIHVwZGF0ZWRBdD86IHN0cmluZ1xuICAgIGlkPzogc3RyaW5nXG4gICAgbWV0YWRhdGE/OiBhbnlcbiAgICBjcmVhdGVkQXQ/OiBzdHJpbmdcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uXG5cbiAgICAgICAgcmVzdWx0LmRldGVjdGlvbiA9IFNlYXJjaFBlcnNvbkRldGVjdGlvbi5mcm9tSnNvbihqc29uT2JqZWN0W1wiZGV0ZWN0aW9uXCJdKVxuICAgICAgICByZXN1bHQuaW1hZ2VzID0gW11cbiAgICAgICAgaWYgKGpzb25PYmplY3RbXCJpbWFnZXNcIl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIGpzb25PYmplY3RbXCJpbWFnZXNcIl0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gU2VhcmNoUGVyc29uSW1hZ2UuZnJvbUpzb24oanNvbk9iamVjdFtcImltYWdlc1wiXVtpXSlcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5pbWFnZXMucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5uYW1lID0ganNvbk9iamVjdFtcIm5hbWVcIl1cbiAgICAgICAgcmVzdWx0Lmdyb3VwcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wiZ3JvdXBzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wiZ3JvdXBzXCJdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmdyb3Vwcy5wdXNoKGpzb25PYmplY3RbXCJncm91cHNcIl1baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnVwZGF0ZWRBdCA9IGpzb25PYmplY3RbXCJ1cGRhdGVkQXRcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQZXJzb25JbWFnZSB7XG4gICAgc2ltaWxhcml0eT86IG51bWJlclxuICAgIGRpc3RhbmNlPzogbnVtYmVyXG4gICAgcGF0aD86IHN0cmluZ1xuICAgIHVybD86IHN0cmluZ1xuICAgIGNvbnRlbnRUeXBlPzogc3RyaW5nXG4gICAgaWQ/OiBzdHJpbmdcbiAgICBtZXRhZGF0YT86IGFueVxuICAgIGNyZWF0ZWRBdD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBTZWFyY2hQZXJzb25JbWFnZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNlYXJjaFBlcnNvbkltYWdlXG5cbiAgICAgICAgcmVzdWx0LnNpbWlsYXJpdHkgPSBqc29uT2JqZWN0W1wic2ltaWxhcml0eVwiXVxuICAgICAgICByZXN1bHQuZGlzdGFuY2UgPSBqc29uT2JqZWN0W1wiZGlzdGFuY2VcIl1cbiAgICAgICAgcmVzdWx0LnBhdGggPSBqc29uT2JqZWN0W1wicGF0aFwiXVxuICAgICAgICByZXN1bHQudXJsID0ganNvbk9iamVjdFtcInVybFwiXVxuICAgICAgICByZXN1bHQuY29udGVudFR5cGUgPSBqc29uT2JqZWN0W1wiY29udGVudFR5cGVcIl1cbiAgICAgICAgcmVzdWx0LmlkID0ganNvbk9iamVjdFtcImlkXCJdXG4gICAgICAgIHJlc3VsdC5tZXRhZGF0YSA9IGpzb25PYmplY3RbXCJtZXRhZGF0YVwiXVxuICAgICAgICByZXN1bHQuY3JlYXRlZEF0ID0ganNvbk9iamVjdFtcImNyZWF0ZWRBdFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hQZXJzb25EZXRlY3Rpb24ge1xuICAgIGxhbmRtYXJrcz86IFBvaW50W11cbiAgICByZWN0PzogUmVjdFxuICAgIGNyb3BJbWFnZT86IHN0cmluZ1xuICAgIHJvdGF0aW9uQW5nbGU/OiBudW1iZXJcblxuICAgIHN0YXRpYyBmcm9tSnNvbihqc29uT2JqZWN0PzogYW55KTogU2VhcmNoUGVyc29uRGV0ZWN0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgU2VhcmNoUGVyc29uRGV0ZWN0aW9uXG5cbiAgICAgICAgcmVzdWx0LmxhbmRtYXJrcyA9IFtdXG4gICAgICAgIGlmIChqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBqc29uT2JqZWN0W1wibGFuZG1hcmtzXCJdKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IFBvaW50LmZyb21Kc29uKGpzb25PYmplY3RbXCJsYW5kbWFya3NcIl1baV0pXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQubGFuZG1hcmtzLnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucmVjdCA9IFJlY3QuZnJvbUpzb24oanNvbk9iamVjdFtcInJlY3RcIl0pXG4gICAgICAgIHJlc3VsdC5jcm9wSW1hZ2UgPSBqc29uT2JqZWN0W1wiY3JvcEltYWdlXCJdXG4gICAgICAgIHJlc3VsdC5yb3RhdGlvbkFuZ2xlID0ganNvbk9iamVjdFtcInJvdGF0aW9uQW5nbGVcIl1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGl2ZW5lc3NOb3RpZmljYXRpb24ge1xuICAgIHN0YXR1cz86IHN0cmluZ1xuICAgIHJlc3BvbnNlPzogTGl2ZW5lc3NSZXNwb25zZVxuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBMaXZlbmVzc05vdGlmaWNhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChqc29uT2JqZWN0ID09IG51bGwgfHwganNvbk9iamVjdCA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IExpdmVuZXNzTm90aWZpY2F0aW9uXG5cbiAgICAgICAgcmVzdWx0LnN0YXR1cyA9IGpzb25PYmplY3RbXCJzdGF0dXNcIl1cbiAgICAgICAgcmVzdWx0LnJlc3BvbnNlID0gTGl2ZW5lc3NSZXNwb25zZS5mcm9tSnNvbihqc29uT2JqZWN0W1wicmVzcG9uc2VcIl0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZpZGVvRW5jb2RlckNvbXBsZXRpb24ge1xuICAgIHN1Y2Nlc3M/OiBib29sZWFuXG4gICAgdHJhbnNhY3Rpb25JZD86IHN0cmluZ1xuXG4gICAgc3RhdGljIGZyb21Kc29uKGpzb25PYmplY3Q/OiBhbnkpOiBWaWRlb0VuY29kZXJDb21wbGV0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGpzb25PYmplY3QgPT0gbnVsbCB8fCBqc29uT2JqZWN0ID09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgVmlkZW9FbmNvZGVyQ29tcGxldGlvblxuXG4gICAgICAgIHJlc3VsdC5zdWNjZXNzID0ganNvbk9iamVjdFtcInN1Y2Nlc3NcIl1cbiAgICAgICAgcmVzdWx0LnRyYW5zYWN0aW9uSWQgPSBqc29uT2JqZWN0W1widHJhbnNhY3Rpb25JZFwiXVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBGb250U3R5bGUgPSB7XG4gICAgTk9STUFMOiAwLFxuICAgIEJPTEQ6IDEsXG4gICAgSVRBTElDOiAyLFxuICAgIEJPTERfSVRBTElDOiAzLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkNvbG9yID0ge1xuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTl9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5PTkJPQVJESU5HX1NDUkVFTl9TVEFSVF9CVVRUT05fQkFDS0dST1VORFwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTl9USVRMRTogXCJDdXN0b21pemF0aW9uQ29sb3IuT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OX1RJVExFXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuT05CT0FSRElOR19TQ1JFRU5fQkFDS0dST1VORFwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLk9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFRcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLk9OQk9BUkRJTkdfU0NSRUVOX01FU1NBR0VfTEFCRUxfVEVYVFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fU1RST0tFX05PUk1BTDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9TVFJPS0VfTk9STUFMXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TVFJPS0VfQUNUSVZFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX1NUUk9LRV9BQ1RJVkVcIixcbiAgICBDQU1FUkFfU0NSRUVOX1NFQ1RPUl9UQVJHRVQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fU0VDVE9SX1RBUkdFVFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fU0VDVE9SX0FDVElWRTogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9TRUNUT1JfQUNUSVZFXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fRlJPTlRfSElOVF9MQUJFTF9CQUNLR1JPVU5EXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9GUk9OVF9ISU5UX0xBQkVMX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fRlJPTlRfSElOVF9MQUJFTF9URVhUXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9CQUNLX0hJTlRfTEFCRUxfQkFDS0dST1VORFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fQkFDS19ISU5UX0xBQkVMX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLkNBTUVSQV9TQ1JFRU5fQkFDS19ISU5UX0xBQkVMX1RFWFRcIixcbiAgICBDQU1FUkFfU0NSRUVOX0xJR0hUX1RPT0xCQVJfVElOVDogXCJDdXN0b21pemF0aW9uQ29sb3IuQ0FNRVJBX1NDUkVFTl9MSUdIVF9UT09MQkFSX1RJTlRcIixcbiAgICBDQU1FUkFfU0NSRUVOX0RBUktfVE9PTEJBUl9USU5UOiBcIkN1c3RvbWl6YXRpb25Db2xvci5DQU1FUkFfU0NSRUVOX0RBUktfVE9PTEJBUl9USU5UXCIsXG4gICAgUkVUUllfU0NSRUVOX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9CQUNLR1JPVU5EXCIsXG4gICAgUkVUUllfU0NSRUVOX1JFVFJZX0JVVFRPTl9CQUNLR1JPVU5EOiBcIkN1c3RvbWl6YXRpb25Db2xvci5SRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX0JBQ0tHUk9VTkRcIixcbiAgICBSRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX1RJVExFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5SRVRSWV9TQ1JFRU5fUkVUUllfQlVUVE9OX1RJVExFXCIsXG4gICAgUkVUUllfU0NSRUVOX1RJVExFX0xBQkVMX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9USVRMRV9MQUJFTF9URVhUXCIsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfTEFCRUxTX1RFWFQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlJFVFJZX1NDUkVFTl9ISU5UX0xBQkVMU19URVhUXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU5fQkFDS0dST1VORDogXCJDdXN0b21pemF0aW9uQ29sb3IuUFJPQ0VTU0lOR19TQ1JFRU5fQkFDS0dST1VORFwiLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX1BST0dSRVNTOiBcIkN1c3RvbWl6YXRpb25Db2xvci5QUk9DRVNTSU5HX1NDUkVFTl9QUk9HUkVTU1wiLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX1RJVExFOiBcIkN1c3RvbWl6YXRpb25Db2xvci5QUk9DRVNTSU5HX1NDUkVFTl9USVRMRVwiLFxuICAgIFNVQ0NFU1NfU0NSRUVOX0JBQ0tHUk9VTkQ6IFwiQ3VzdG9taXphdGlvbkNvbG9yLlNVQ0NFU1NfU0NSRUVOX0JBQ0tHUk9VTkRcIixcbn1cblxuZXhwb3J0IGNvbnN0IEltYWdlUXVhbGl0eUdyb3VwTmFtZSA9IHtcbiAgICBJTUFHRV9DSEFSQUNURVJJU1RJQ1M6IDEsXG4gICAgSEVBRF9TSVpFX0FORF9QT1NJVElPTjogMixcbiAgICBGQUNFX1FVQUxJVFk6IDMsXG4gICAgRVlFU19DSEFSQUNURVJJU1RJQ1M6IDQsXG4gICAgU0hBRE9XU19BTkRfTElHSFROSU5HOiA1LFxuICAgIFBPU0VfQU5EX0VYUFJFU1NJT046IDYsXG4gICAgSEVBRF9PQ0NMVVNJT046IDcsXG4gICAgQkFDS0dST1VORDogOCxcbiAgICBVTktOT1dOOiA5LFxufVxuXG5leHBvcnQgY29uc3QgRGV0ZWN0RmFjZXNFcnJvckNvZGUgPSB7XG4gICAgSU1BR0VfRU1QVFk6IFwiSU1BR0VfRU1QVFlcIixcbiAgICBGUl9GQUNFX05PVF9ERVRFQ1RFRDogXCJGUl9GQUNFX05PVF9ERVRFQ1RFRFwiLFxuICAgIEZBQ0VSX05PX0xJQ0VOU0U6IFwiRkFDRVJfTk9fTElDRU5TRVwiLFxuICAgIEZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRDogXCJGQUNFUl9JU19OT1RfSU5JVElBTElaRURcIixcbiAgICBGQUNFUl9DT01NQU5EX0lTX05PVF9TVVBQT1JURUQ6IFwiRkFDRVJfQ09NTUFORF9JU19OT1RfU1VQUE9SVEVEXCIsXG4gICAgRkFDRVJfQ09NTUFORF9QQVJBTVNfUkVBRF9FUlJPUjogXCJGQUNFUl9DT01NQU5EX1BBUkFNU19SRUFEX0VSUk9SXCIsXG4gICAgUFJPQ0VTU0lOR19GQUlMRUQ6IFwiUFJPQ0VTU0lOR19GQUlMRURcIixcbiAgICBSRVFVRVNUX0ZBSUxFRDogXCJSRVFVRVNUX0ZBSUxFRFwiLFxuICAgIEFQSV9DQUxMX0ZBSUxFRDogXCJBUElfQ0FMTF9GQUlMRURcIixcbn1cblxuZXhwb3J0IGNvbnN0IEluaXRFcnJvckNvZGUgPSB7XG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogXCJJTl9QUk9HUkVTU19BTFJFQURZXCIsXG4gICAgQ09OVEVYVF9JU19OVUxMOiBcIkNPTlRFWFRfSVNfTlVMTFwiLFxuICAgIE1JU1NJTkdfQ09SRTogXCJNSVNTSU5HX0NPUkVcIixcbiAgICBJTlRFUk5BTF9DT1JFX0VSUk9SOiBcIklOVEVSTkFMX0NPUkVfRVJST1JcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzU3RhdHVzID0ge1xuICAgIFBBU1NFRDogXCJQQVNTRURcIixcbiAgICBVTktOT1dOOiBcIlVOS05PV05cIixcbn1cblxuZXhwb3J0IGNvbnN0IENhbWVyYUVycm9yQ29kZSA9IHtcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogXCJDQU1FUkFfTk9UX0FWQUlMQUJMRVwiLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiBcIkNBTUVSQV9OT19QRVJNSVNTSU9OXCIsXG59XG5cbmV4cG9ydCBjb25zdCBMaXZlbmVzc0Vycm9yQ29kZSA9IHtcbiAgICBDT05URVhUX0lTX05VTEw6IFwiQ09OVEVYVF9JU19OVUxMXCIsXG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogXCJJTl9QUk9HUkVTU19BTFJFQURZXCIsXG4gICAgWk9PTV9OT1RfU1VQUE9SVEVEOiBcIlpPT01fTk9UX1NVUFBPUlRFRFwiLFxuICAgIE5PX0xJQ0VOU0U6IFwiTk9fTElDRU5TRVwiLFxuICAgIENBTkNFTExFRDogXCJDQU5DRUxMRURcIixcbiAgICBQUk9DRVNTSU5HX1RJTUVPVVQ6IFwiUFJPQ0VTU0lOR19USU1FT1VUXCIsXG4gICAgQVBJX0NBTExfRkFJTEVEOiBcIkFQSV9DQUxMX0ZBSUxFRFwiLFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiBcIlBST0NFU1NJTkdfRkFJTEVEXCIsXG4gICAgTk9UX0lOSVRJQUxJWkVEOiBcIk5PVF9JTklUSUFMSVpFRFwiLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiBcIkNBTUVSQV9OT19QRVJNSVNTSU9OXCIsXG4gICAgQ0FNRVJBX05PVF9BVkFJTEFCTEU6IFwiQ0FNRVJBX05PVF9BVkFJTEFCTEVcIixcbiAgICBQUk9DRVNTSU5HX0ZSQU1FX0ZBSUxFRDogXCJQUk9DRVNTSU5HX0ZSQU1FX0ZBSUxFRFwiLFxuICAgIFNFU1NJT05fU1RBUlRfRkFJTEVEOiBcIlNFU1NJT05fU1RBUlRfRkFJTEVEXCIsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0JhY2tlbmRFcnJvckNvZGUgPSB7XG4gICAgRlJfRkFDRV9OT1RfREVURUNURUQ6IDIsXG4gICAgRkFDRVJfTk9fTElDRU5TRTogMjAwLFxuICAgIEZBQ0VSX0lTX05PVF9JTklUSUFMSVpFRDogMjAxLFxuICAgIEZBQ0VSX0NPTU1BTkRfSVNfTk9UX1NVUFBPUlRFRDogMjAyLFxuICAgIEZBQ0VSX0NPTU1BTkRfUEFSQU1TX1JFQURfRVJST1I6IDIwMyxcbiAgICBVTkRFRklORUQ6IC0xLFxufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hGYWNlc0Vycm9yQ29kZSA9IHtcbiAgICBJTUFHRV9FTVBUWTogXCJJTUFHRV9FTVBUWVwiLFxuICAgIEZBQ0VfTk9UX0RFVEVDVEVEOiBcIkZBQ0VfTk9UX0RFVEVDVEVEXCIsXG4gICAgTEFORE1BUktTX05PVF9ERVRFQ1RFRDogXCJMQU5ETUFSS1NfTk9UX0RFVEVDVEVEXCIsXG4gICAgRkFDRV9BTElHTkVSX0ZBSUxFRDogXCJGQUNFX0FMSUdORVJfRkFJTEVEXCIsXG4gICAgREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1I6IFwiREVTQ1JJUFRPUl9FWFRSQUNUT1JfRVJST1JcIixcbiAgICBOT19MSUNFTlNFOiBcIk5PX0xJQ0VOU0VcIixcbiAgICBJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERUQ6IFwiSU1BR0VTX0NPVU5UX0xJTUlUX0VYQ0VFREVEXCIsXG4gICAgQVBJX0NBTExfRkFJTEVEOiBcIkFQSV9DQUxMX0ZBSUxFRFwiLFxuICAgIFBST0NFU1NJTkdfRkFJTEVEOiBcIlBST0NFU1NJTkdfRkFJTEVEXCIsXG59XG5cbmV4cG9ydCBjb25zdCBJbWFnZVF1YWxpdHlDaGFyYWN0ZXJpc3RpY05hbWUgPSB7XG4gICAgSU1BR0VfV0lEVEg6IFwiSW1hZ2VXaWR0aFwiLFxuICAgIElNQUdFX0hFSUdIVDogXCJJbWFnZUhlaWdodFwiLFxuICAgIElNQUdFX1dJRFRIX1RPX0hFSUdIVDogXCJJbWFnZVdpZHRoVG9IZWlnaHRcIixcbiAgICBJTUFHRV9DSEFOTkVMU19OVU1CRVI6IFwiSW1hZ2VDaGFubmVsc051bWJlclwiLFxuICAgIEFSVF9GQUNFOiBcIkFydEZhY2VcIixcbiAgICBQQURESU5HX1JBVElPOiBcIlBhZGRpbmdSYXRpb1wiLFxuICAgIEZBQ0VfTUlEX1BPSU5UX0hPUklaT05UQUxfUE9TSVRJT046IFwiRmFjZU1pZFBvaW50SG9yaXpvbnRhbFBvc2l0aW9uXCIsXG4gICAgRkFDRV9NSURfUE9JTlRfVkVSVElDQUxfUE9TSVRJT046IFwiRmFjZU1pZFBvaW50VmVydGljYWxQb3NpdGlvblwiLFxuICAgIEhFQURfV0lEVEhfUkFUSU86IFwiSGVhZFdpZHRoUmF0aW9cIixcbiAgICBIRUFEX0hFSUdIVF9SQVRJTzogXCJIZWFkSGVpZ2h0UmF0aW9cIixcbiAgICBFWUVTX0RJU1RBTkNFOiBcIkV5ZXNEaXN0YW5jZVwiLFxuICAgIFlBVzogXCJZYXdcIixcbiAgICBQSVRDSDogXCJQaXRjaFwiLFxuICAgIFJPTEw6IFwiUm9sbFwiLFxuICAgIEJMVVJfTEVWRUw6IFwiQmx1ckxldmVsXCIsXG4gICAgTk9JU0VfTEVWRUw6IFwiTm9pc2VMZXZlbFwiLFxuICAgIFVOTkFUVVJBTF9TS0lOX1RPTkU6IFwiVW5uYXR1cmFsU2tpblRvbmVcIixcbiAgICBGQUNFX0RZTkFNSUNfUkFOR0U6IFwiRmFjZUR5bmFtaWNSYW5nZVwiLFxuICAgIEVZRV9SSUdIVF9DTE9TRUQ6IFwiRXllUmlnaHRDbG9zZWRcIixcbiAgICBFWUVfTEVGVF9DTE9TRUQ6IFwiRXllTGVmdENsb3NlZFwiLFxuICAgIEVZRV9SSUdIVF9PQ0NMVURFRDogXCJFeWVSaWdodE9jY2x1ZGVkXCIsXG4gICAgRVlFX0xFRlRfT0NDTFVERUQ6IFwiRXllTGVmdE9jY2x1ZGVkXCIsXG4gICAgRVlFU19SRUQ6IFwiRXllc1JlZFwiLFxuICAgIEVZRV9SSUdIVF9DT1ZFUkVEX1dJVEhfSEFJUjogXCJFeWVSaWdodENvdmVyZWRXaXRoSGFpclwiLFxuICAgIEVZRV9MRUZUX0NPVkVSRURfV0lUSF9IQUlSOiBcIkV5ZUxlZnRDb3ZlcmVkV2l0aEhhaXJcIixcbiAgICBPRkZfR0FaRTogXCJPZmZHYXplXCIsXG4gICAgVE9PX0RBUks6IFwiVG9vRGFya1wiLFxuICAgIFRPT19MSUdIVDogXCJUb29MaWdodFwiLFxuICAgIEZBQ0VfR0xBUkU6IFwiRmFjZUdsYXJlXCIsXG4gICAgU0hBRE9XU19PTl9GQUNFOiBcIlNoYWRvd3NPbkZhY2VcIixcbiAgICBTSE9VTERFUlNfUE9TRTogXCJTaG91bGRlcnNQb3NlXCIsXG4gICAgRVhQUkVTU0lPTl9MRVZFTDogXCJFeHByZXNzaW9uTGV2ZWxcIixcbiAgICBNT1VUSF9PUEVOOiBcIk1vdXRoT3BlblwiLFxuICAgIFNNSUxFOiBcIlNtaWxlXCIsXG4gICAgREFSS19HTEFTU0VTOiBcIkRhcmtHbGFzc2VzXCIsXG4gICAgUkVGTEVDVElPTl9PTl9HTEFTU0VTOiBcIlJlZmxlY3Rpb25PbkdsYXNzZXNcIixcbiAgICBGUkFNRVNfVE9PX0hFQVZZOiBcIkZyYW1lc1Rvb0hlYXZ5XCIsXG4gICAgRkFDRV9PQ0NMVURFRDogXCJGYWNlT2NjbHVkZWRcIixcbiAgICBIRUFEX0NPVkVSSU5HOiBcIkhlYWRDb3ZlcmluZ1wiLFxuICAgIEZPUkVIRUFEX0NPVkVSSU5HOiBcIkZvcmVoZWFkQ292ZXJpbmdcIixcbiAgICBTVFJPTkdfTUFLRVVQOiBcIlN0cm9uZ01ha2V1cFwiLFxuICAgIEhFQURfUEhPTkVTOiBcIkhlYWRwaG9uZXNcIixcbiAgICBNRURJQ0FMX01BU0s6IFwiTWVkaWNhbE1hc2tcIixcbiAgICBCQUNLR1JPVU5EX1VOSUZPUk1JVFk6IFwiQmFja2dyb3VuZFVuaWZvcm1pdHlcIixcbiAgICBTSEFET1dTX09OX0JBQ0tHUk9VTkQ6IFwiU2hhZG93c09uQmFja2dyb3VuZFwiLFxuICAgIE9USEVSX0ZBQ0VTOiBcIk90aGVyRmFjZXNcIixcbiAgICBCQUNLR1JPVU5EX0NPTE9SX01BVENIOiBcIkJhY2tncm91bmRDb2xvck1hdGNoXCIsXG4gICAgVU5LTk9XTjogXCJVbmtub3duXCIsXG4gICAgSU1BR0VfQ0hBUkFDVEVSSVNUSUNfQUxMX1JFQ09NTUVOREVEOiBcIkltYWdlQ2hhcmFjdGVyaXN0aWNcIixcbiAgICBIRUFEX1NJWkVfQU5EX1BPU0lUSU9OX0FMTF9SRUNPTU1FTkRFRDogXCJIZWFkU2l6ZUFuZFBvc2l0aW9uXCIsXG4gICAgRkFDRV9JTUFHRV9RVUFMSVRZX0FMTF9SRUNPTU1FTkRFRDogXCJGYWNlSW1hZ2VRdWFsaXR5XCIsXG4gICAgRVlFU19DSEFSQUNURVJJU1RJQ1NfQUxMX1JFQ09NTUVOREVEOiBcIkV5ZXNDaGFyYWN0ZXJpc3RpY3NcIixcbiAgICBTSEFET1dfQU5EX0xJR0hUSU5HX0FMTF9SRUNPTU1FTkRFRDogXCJTaGFkb3dzQW5kTGlnaHRuaW5nXCIsXG4gICAgUE9TRV9BTkRfRVhQUkVTU0lPTl9BTExfUkVDT01NRU5ERUQ6IFwiUG9zZUFuZEV4cHJlc3Npb25cIixcbiAgICBIRUFEX09DQ0xVU0lPTl9BTExfUkVDT01NRU5ERUQ6IFwiSGVhZE9jY2x1c2lvblwiLFxuICAgIFFVQUxJVFlfQkFDS0dST1VORF9BTExfUkVDT01NRU5ERUQ6IFwiUXVhbGl0eUJhY2tncm91bmRcIixcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvblRhZyA9IHtcbiAgICBDTE9TRTogMTAwMSxcbiAgICBUT1JDSDogMTAwMixcbiAgICBDQU1FUkFfU1dJVENIOiAxMDAzLFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkZvbnQgPSB7XG4gICAgT05CT0FSRElOR19TQ1JFRU5fU1RBUlRfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25Gb250Lk9OQk9BUkRJTkdfU0NSRUVOX1NUQVJUX0JVVFRPTlwiLFxuICAgIE9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMOiBcIkN1c3RvbWl6YXRpb25Gb250Lk9OQk9BUkRJTkdfU0NSRUVOX1RJVExFX0xBQkVMXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fTUVTU0FHRV9MQUJFTDogXCJDdXN0b21pemF0aW9uRm9udC5PTkJPQVJESU5HX1NDUkVFTl9NRVNTQUdFX0xBQkVMXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9ISU5UX0xBQkVMOiBcIkN1c3RvbWl6YXRpb25Gb250LkNBTUVSQV9TQ1JFRU5fSElOVF9MQUJFTFwiLFxuICAgIFJFVFJZX1NDUkVFTl9SRVRSWV9CVVRUT046IFwiQ3VzdG9taXphdGlvbkZvbnQuUkVUUllfU0NSRUVOX1JFVFJZX0JVVFRPTlwiLFxuICAgIFJFVFJZX1NDUkVFTl9USVRMRV9MQUJFTDogXCJDdXN0b21pemF0aW9uRm9udC5SRVRSWV9TQ1JFRU5fVElUTEVfTEFCRUxcIixcbiAgICBSRVRSWV9TQ1JFRU5fSElOVF9MQUJFTFM6IFwiQ3VzdG9taXphdGlvbkZvbnQuUkVUUllfU0NSRUVOX0hJTlRfTEFCRUxTXCIsXG4gICAgUFJPQ0VTU0lOR19TQ1JFRU46IFwiQ3VzdG9taXphdGlvbkZvbnQuUFJPQ0VTU0lOR19TQ1JFRU5cIixcbn1cblxuZXhwb3J0IGNvbnN0IERldGVjdEZhY2VzU2NlbmFyaW8gPSB7XG4gICAgQ1JPUF9DRU5UUkFMX0ZBQ0U6IFwiQ3JvcENlbnRyYWxGYWNlXCIsXG4gICAgQ1JPUF9BTExfRkFDRVM6IFwiQ3JvcEFsbEZhY2VzXCIsXG4gICAgVEhVTUJOQUlMOiBcIlRodW1ibmFpbFwiLFxuICAgIEFUVFJJQlVURVNfQUxMOiBcIkF0dHJpYnV0ZXNBbGxcIixcbiAgICBRVUFMSVRZX0ZVTEw6IFwiUXVhbGl0eUZ1bGxcIixcbiAgICBRVUFMSVRZX0lDQU86IFwiUXVhbGl0eUlDQU9cIixcbiAgICBRVUFMSVRZX1ZJU0FfU0NIRU5HRU46IFwiUXVhbGl0eVZpc2FTY2hlbmdlblwiLFxuICAgIFFVQUxJVFlfVklTQV9VU0E6IFwiUXVhbGl0eVZpc2FVU0FcIixcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVuZXNzUHJvY2Vzc1N0YXR1cyA9IHtcbiAgICBTVEFSVDogXCJTVEFSVFwiLFxuICAgIFBSRVBBUklORzogXCJQUkVQQVJJTkdcIixcbiAgICBORVdfU0VTU0lPTjogXCJORVdfU0VTU0lPTlwiLFxuICAgIE5FWFRfU1RBR0U6IFwiTkVYVF9TVEFHRVwiLFxuICAgIFNFQ1RPUl9DSEFOR0VEOiBcIlNFQ1RPUl9DSEFOR0VEXCIsXG4gICAgUFJPR1JFU1M6IFwiUFJPR1JFU1NcIixcbiAgICBMT1dfQlJJR0hUTkVTUzogXCJMT1dfQlJJR0hUTkVTU1wiLFxuICAgIEZJVF9GQUNFOiBcIkZJVF9GQUNFXCIsXG4gICAgTU9WRV9BV0FZOiBcIk1PVkVfQVdBWVwiLFxuICAgIE1PVkVfQ0xPU0VSOiBcIk1PVkVfQ0xPU0VSXCIsXG4gICAgVFVSTl9IRUFEOiBcIlRVUk5fSEVBRFwiLFxuICAgIFBST0NFU1NJTkc6IFwiUFJPQ0VTU0lOR1wiLFxuICAgIEZBSUxFRDogXCJGQUlMRURcIixcbiAgICBSRVRSWTogXCJSRVRSWVwiLFxuICAgIFNVQ0NFU1M6IFwiU1VDQ0VTU1wiLFxufVxuXG5leHBvcnQgY29uc3QgT3V0cHV0SW1hZ2VDcm9wQXNwZWN0UmF0aW8gPSB7XG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzNYNDogMCxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fNFg1OiAxLFxuICAgIE9VVFBVVF9JTUFHRV9DUk9QX0FTUEVDVF9SQVRJT18yWDM6IDIsXG4gICAgT1VUUFVUX0lNQUdFX0NST1BfQVNQRUNUX1JBVElPXzFYMTogMyxcbiAgICBPVVRQVVRfSU1BR0VfQ1JPUF9BU1BFQ1RfUkFUSU9fN1g5OiA0LFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NTa2lwU3RlcCA9IHtcbiAgICBPTkJPQVJESU5HX1NURVA6IDEsXG4gICAgU1VDQ0VTU19TVEVQOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VRdWFsaXR5UmVzdWx0U3RhdHVzID0ge1xuICAgIElNQUdFX1FVQUxJVFlfUkVTVUxUX1NUQVRVU19GQUxTRTogMCxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVFJVRTogMSxcbiAgICBJTUFHRV9RVUFMSVRZX1JFU1VMVF9TVEFUVVNfVU5ERVRFUk1JTkVEOiAyLFxufVxuXG5leHBvcnQgY29uc3QgSW1hZ2VUeXBlID0ge1xuICAgIFBSSU5URUQ6IDEsXG4gICAgUkZJRDogMixcbiAgICBMSVZFOiAzLFxuICAgIERPQ1VNRU5UX1dJVEhfTElWRTogNCxcbiAgICBFWFRFUk5BTDogNSxcbiAgICBHSE9TVF9QT1JUUkFJVDogNixcbn1cblxuZXhwb3J0IGNvbnN0IEZhY2VDYXB0dXJlRXJyb3JDb2RlID0ge1xuICAgIENBTkNFTDogXCJDQU5DRUxcIixcbiAgICBDQU1FUkFfTk9UX0FWQUlMQUJMRTogXCJDQU1FUkFfTk9UX0FWQUlMQUJMRVwiLFxuICAgIENBTUVSQV9OT19QRVJNSVNTSU9OOiBcIkNBTUVSQV9OT19QRVJNSVNTSU9OXCIsXG4gICAgSU5fUFJPR1JFU1NfQUxSRUFEWTogXCJJTl9QUk9HUkVTU19BTFJFQURZXCIsXG4gICAgQ09OVEVYVF9JU19OVUxMOiBcIkNPTlRFWFRfSVNfTlVMTFwiLFxuICAgIFRJTUVPVVQ6IFwiVElNRU9VVFwiLFxuICAgIE5PVF9JTklUSUFMSVpFRDogXCJOT1RfSU5JVElBTElaRURcIixcbiAgICBTRVNTSU9OX1NUQVJUX0ZBSUxFRDogXCJTRVNTSU9OX1NUQVJUX0ZBSUxFRFwiLFxufVxuXG5leHBvcnQgY29uc3QgTGl2ZW5lc3NCYWNrZW5kRXJyb3JDb2RlID0ge1xuICAgIFVOREVGSU5FRDogLTEsXG4gICAgTk9fTElDRU5TRTogMjAwLFxuICAgIExPV19RVUFMSVRZOiAyMzEsXG4gICAgSElHSF9BU1lNTUVUUlk6IDIzMixcbiAgICBUUkFDS19CUkVBSzogMjQ2LFxuICAgIENMT1NFRF9FWUVTX0RFVEVDVEVEOiAyMzAsXG4gICAgRkFDRV9PVkVSX0VNT1RJT05BTDogMjMzLFxuICAgIFNVTkdMQVNTRVNfREVURUNURUQ6IDIzNCxcbiAgICBTTUFMTF9BR0U6IDIzNSxcbiAgICBIRUFERFJFU1NfREVURUNURUQ6IDIzNixcbiAgICBNRURJQ0lORV9NQVNLX0RFVEVDVEVEOiAyMzksXG4gICAgT0NDTFVTSU9OX0RFVEVDVEVEOiAyNDAsXG4gICAgRk9SRUhFQURfR0xBU1NFU19ERVRFQ1RFRDogMjQyLFxuICAgIE1PVVRIX09QRU5FRDogMjQzLFxuICAgIEFSVF9NQVNLX0RFVEVDVEVEOiAyNDQsXG4gICAgTk9UX01BVENIRUQ6IDIzNyxcbiAgICBJTUFHRVNfQ09VTlRfTElNSVRfRVhDRUVERUQ6IDIzOCxcbiAgICBFTEVDVFJPTklDX0RFVklDRV9ERVRFQ1RFRDogMjQ1LFxuICAgIFdST05HX0dFTzogMjQ3LFxuICAgIFdST05HX09GOiAyNDgsXG4gICAgV1JPTkdfVklFVzogMjQ5LFxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXphdGlvbkltYWdlID0ge1xuICAgIE9OQk9BUkRJTkdfU0NSRUVOX0NMT1NFX0JVVFRPTjogXCJDdXN0b21pemF0aW9uSW1hZ2UuT05CT0FSRElOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgT05CT0FSRElOR19TQ1JFRU5fSUxMVU1JTkFUSU9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5PTkJPQVJESU5HX1NDUkVFTl9JTExVTUlOQVRJT05cIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9BQ0NFU1NPUklFUzogXCJDdXN0b21pemF0aW9uSW1hZ2UuT05CT0FSRElOR19TQ1JFRU5fQUNDRVNTT1JJRVNcIixcbiAgICBPTkJPQVJESU5HX1NDUkVFTl9DQU1FUkFfTEVWRUw6IFwiQ3VzdG9taXphdGlvbkltYWdlLk9OQk9BUkRJTkdfU0NSRUVOX0NBTUVSQV9MRVZFTFwiLFxuICAgIENBTUVSQV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX0NMT1NFX0JVVFRPTlwiLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfT05fQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX0xJR0hUX09OX0JVVFRPTlwiLFxuICAgIENBTUVSQV9TQ1JFRU5fTElHSFRfT0ZGX0JVVFRPTjogXCJDdXN0b21pemF0aW9uSW1hZ2UuQ0FNRVJBX1NDUkVFTl9MSUdIVF9PRkZfQlVUVE9OXCIsXG4gICAgQ0FNRVJBX1NDUkVFTl9TV0lUQ0hfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5DQU1FUkFfU0NSRUVOX1NXSVRDSF9CVVRUT05cIixcbiAgICBSRVRSWV9TQ1JFRU5fQ0xPU0VfQlVUVE9OOiBcIkN1c3RvbWl6YXRpb25JbWFnZS5SRVRSWV9TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfRU5WSVJPTk1FTlQ6IFwiQ3VzdG9taXphdGlvbkltYWdlLlJFVFJZX1NDUkVFTl9ISU5UX0VOVklST05NRU5UXCIsXG4gICAgUkVUUllfU0NSRUVOX0hJTlRfU1VCSkVDVDogXCJDdXN0b21pemF0aW9uSW1hZ2UuUkVUUllfU0NSRUVOX0hJTlRfU1VCSkVDVFwiLFxuICAgIFBST0NFU1NJTkdfU0NSRUVOX0NMT1NFX0JVVFRPTjogXCJDdXN0b21pemF0aW9uSW1hZ2UuUFJPQ0VTU0lOR19TQ1JFRU5fQ0xPU0VfQlVUVE9OXCIsXG4gICAgU1VDQ0VTU19TQ1JFRU5fSU1BR0U6IFwiQ3VzdG9taXphdGlvbkltYWdlLlNVQ0NFU1NfU0NSRUVOX0lNQUdFXCIsXG59XG5cbmV4cG9ydCBjb25zdCBEZXRlY3RGYWNlc0F0dHJpYnV0ZSA9IHtcbiAgICBBR0U6IFwiQWdlXCIsXG4gICAgRVlFX1JJR0hUOiBcIkV5ZVJpZ2h0XCIsXG4gICAgRVlFX0xFRlQ6IFwiRXllTGVmdFwiLFxuICAgIEVNT1RJT046IFwiRW1vdGlvblwiLFxuICAgIFNNSUxFOiBcIlNtaWxlXCIsXG4gICAgR0xBU1NFUzogXCJHbGFzc2VzXCIsXG4gICAgSEVBRF9DT1ZFUklORzogXCJIZWFkQ292ZXJpbmdcIixcbiAgICBGT1JFSEVBRF9DT1ZFUklORzogXCJGb3JlaGVhZENvdmVyaW5nXCIsXG4gICAgTU9VVEg6IFwiTW91dGhcIixcbiAgICBNRURJQ0FMX01BU0s6IFwiTWVkaWNhbE1hc2tcIixcbiAgICBPQ0NMVVNJT046IFwiT2NjbHVzaW9uXCIsXG4gICAgU1RST05HX01BS0VVUDogXCJTdHJvbmdNYWtldXBcIixcbiAgICBIRUFEUEhPTkVTOiBcIkhlYWRwaG9uZXNcIixcbn1cblxuZXhwb3J0IGNvbnN0IEVudW0gPSB7XG4gICBGb250U3R5bGUsXG4gICBDdXN0b21pemF0aW9uQ29sb3IsXG4gICBJbWFnZVF1YWxpdHlHcm91cE5hbWUsXG4gICBEZXRlY3RGYWNlc0Vycm9yQ29kZSxcbiAgIEluaXRFcnJvckNvZGUsXG4gICBMaXZlbmVzc1N0YXR1cyxcbiAgIENhbWVyYUVycm9yQ29kZSxcbiAgIExpdmVuZXNzRXJyb3JDb2RlLFxuICAgRGV0ZWN0RmFjZXNCYWNrZW5kRXJyb3JDb2RlLFxuICAgTWF0Y2hGYWNlc0Vycm9yQ29kZSxcbiAgIEltYWdlUXVhbGl0eUNoYXJhY3RlcmlzdGljTmFtZSxcbiAgIEJ1dHRvblRhZyxcbiAgIEN1c3RvbWl6YXRpb25Gb250LFxuICAgRGV0ZWN0RmFjZXNTY2VuYXJpbyxcbiAgIExpdmVuZXNzUHJvY2Vzc1N0YXR1cyxcbiAgIE91dHB1dEltYWdlQ3JvcEFzcGVjdFJhdGlvLFxuICAgTGl2ZW5lc3NTa2lwU3RlcCxcbiAgIEltYWdlUXVhbGl0eVJlc3VsdFN0YXR1cyxcbiAgIEltYWdlVHlwZSxcbiAgIEZhY2VDYXB0dXJlRXJyb3JDb2RlLFxuICAgTGl2ZW5lc3NCYWNrZW5kRXJyb3JDb2RlLFxuICAgQ3VzdG9taXphdGlvbkltYWdlLFxuICAgRGV0ZWN0RmFjZXNBdHRyaWJ1dGUsXG59XG5cbi8qKlxuICogQG5hbWUgRmFjZVNES1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIGlzIGEgd3JhcHBlciBjb3Jkb3ZhIHBsdWdpbiBmb3IgUmVndWxhYHMgRmFjZSBTREsuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBGYWNlU0RLIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9mYWNlLWFwaS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgRmFjZVNESzogRmFjZVNESykgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnRmFjZVNESycsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmFjZS1hcGknLFxuICAgIHBsdWdpblJlZjogJ0ZhY2VTREtQbHVnaW4uRmFjZVNESycsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9yZWd1bGFmb3JlbnNpY3MvRmFjZUFwaS1Db3Jkb3ZhLVBsdWdpbicsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFjZVNESyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0U2VydmljZVVybCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3MoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRGYWNlU2RrVmVyc2lvbigpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHByZXNlbnRGYWNlQ2FwdHVyZUFjdGl2aXR5KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc3RvcEZhY2VDYXB0dXJlQWN0aXZpdHkoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBpbml0KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVpbml0KCk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgaXNJbml0aWFsaXplZCgpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0b3BMaXZlbmVzc1Byb2Nlc3NpbmcoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBzZXRzIGhlYWRlcnMgZm9yIGh0dHAgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIHttYXB9IGhlYWRlcnMga2V5IC0gaGVhZGVyIG5hbWVcbiAgICAgKiAgdmFsdWUgLSBoZWFkZXIgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFJlcXVlc3RIZWFkZXJzKGhlYWRlcnM6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgaW50IGNhbWVyYUlkIC0gc2V0IGNhbWVyYSBvbiBBbmRyb2lkXG4gICAgICogIENhbWVyYVBvc2l0aW9uIGNhbWVyYVBvc2l0aW9uSU9TIC0gc2V0IGNhbWVyYSBvbiBpT1NcbiAgICAgKiAgYm9vbGVhbiBjYW1lcmFTd2l0Y2hFbmFibGVkXG4gICAgICogIGJvb2xlYW4gc2hvd0hlbHBUZXh0QW5pbWF0aW9uXG4gICAgICogIGJvb2xlYW4gZm9yY2VUb1VzZUh1YXdlaVZpc2lvblxuICAgICAqICBib29sZWFuIGNsb3NlQnV0dG9uRW5hYmxlZFxuICAgICAqICBib29sZWFuIHRvcmNoQnV0dG9uRW5hYmxlZFxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgcHJlc2VudEZhY2VDYXB0dXJlQWN0aXZpdHlXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBpbnQgY2FtZXJhSWQgLSBzZXQgY2FtZXJhIG9uIEFuZHJvaWRcbiAgICAgKiAgQ2FtZXJhUG9zaXRpb24gY2FtZXJhUG9zaXRpb25JT1MgLSBzZXQgY2FtZXJhIG9uIGlPU1xuICAgICAqICBib29sZWFuIGNhbWVyYVN3aXRjaEVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiBzaG93SGVscFRleHRBbmltYXRpb25cbiAgICAgKiAgYm9vbGVhbiBsb2NhdGlvblRyYWNraW5nRW5hYmxlZFxuICAgICAqICBib29sZWFuIGZvcmNlVG9Vc2VIdWF3ZWlWaXNpb25cbiAgICAgKiAgYm9vbGVhbiBjbG9zZUJ1dHRvbkVuYWJsZWRcbiAgICAgKiAgYm9vbGVhbiB0b3JjaEJ1dHRvbkVuYWJsZWRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHN0YXJ0TGl2ZW5lc3NXaXRoQ29uZmlnKGNvbmZpZzogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgc2V0U2VydmljZVVybCh1cmw6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWF0Y2hGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIG1hdGNoRmFjZXMocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZXRlY3RGYWNlc1JlcXVlc3R9IHJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRldGVjdEZhY2VzKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBVSUN1c3RvbWl6YXRpb25MYXllclxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGpzb24gY3VzdG9tIFVJIGxheWVyIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFVpQ3VzdG9taXphdGlvbkxheWVyKGpzb246IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgVXNlIHRoaXMgbWV0aG9kIHRvIHNldCBVaUNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVWlDb25maWd1cmF0aW9uIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNldFVpQ29uZmlndXJhdGlvbihjb25maWc6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkaWN0aW9uYXJ5IGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBzZXRMb2NhbGl6YXRpb25EaWN0aW9uYXJ5KGRpY3Rpb25hcnk6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYWNlcyBmYWNlc0FycmF5OiBNYXRjaEZhY2VzQ29tcGFyZWRGYWNlc1BhaXJbXVxuICAgICAqICBmYWNlcyA9IEpTT04uc3RyaW5naWZ5KGZhY2VzQXJyYXkpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpbWlsYXJpdHkgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIG1hdGNoRmFjZXNTaW1pbGFyaXR5VGhyZXNob2xkU3BsaXQoZmFjZXM6IGFueSwgc2ltaWxhcml0eTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb24ocGVyc29uSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHthcnJheX0gZ3JvdXBJZHMgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNyZWF0ZVBlcnNvbihuYW1lOiBhbnksIGdyb3VwSWRzOiBhbnksIG1ldGFkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BlcnNvbn0gcGVyc29uIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICB1cGRhdGVQZXJzb24ocGVyc29uOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGRlbGV0ZVBlcnNvbihwZXJzb25JZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBlcnNvbklkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25JbWFnZXMocGVyc29uSWQ6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNpemUgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGdldFBlcnNvbkltYWdlc0ZvclBhZ2UocGVyc29uSWQ6IGFueSwgcGFnZTogYW55LCBzaXplOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge0ltYWdlVXBsb2FkfSBpbWFnZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgYWRkUGVyc29uSW1hZ2UocGVyc29uSWQ6IGFueSwgaW1hZ2U6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZUlkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25JbWFnZShwZXJzb25JZDogYW55LCBpbWFnZUlkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VJZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZGVsZXRlUGVyc29uSW1hZ2UocGVyc29uSWQ6IGFueSwgaW1hZ2VJZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cHMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2UgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0R3JvdXBzRm9yUGFnZShwYWdlOiBhbnksIHNpemU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJzb25JZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uR3JvdXBzKHBlcnNvbklkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGVyc29uSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25Hcm91cHNGb3JQYWdlKHBlcnNvbklkOiBhbnksIHBhZ2U6IGFueSwgc2l6ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGEgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGNyZWF0ZUdyb3VwKG5hbWU6IGFueSwgbWV0YWRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRHcm91cChncm91cElkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BlcnNvbkdyb3VwfSBncm91cCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgdXBkYXRlR3JvdXAoZ3JvdXA6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHBhcmFtIHtFZGl0R3JvdXBQZXJzb25zUmVxdWVzdH0gZWRpdEdyb3VwUGVyc29uc1JlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIGVkaXRQZXJzb25zSW5Hcm91cChncm91cElkOiBhbnksIGVkaXRHcm91cFBlcnNvbnNSZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXBJZCBkZXNjcmlwdGlvblxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcbiAgICAgKi9cbiAgICBAQ29yZG92YSgpXG4gICAgZ2V0UGVyc29uc0luR3JvdXAoZ3JvdXBJZDogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuIH1cblxuICAgIC8qKlxuICAgICAqICBkZXNjcmlwdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwSWQgZGVzY3JpcHRpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSBkZXNjcmlwdGlvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBnZXRQZXJzb25zSW5Hcm91cEZvclBhZ2UoZ3JvdXBJZDogYW55LCBwYWdlOiBhbnksIHNpemU6IGFueSk6IFByb21pc2U8YW55PiB7IHJldHVybiB9XG5cbiAgICAvKipcbiAgICAgKiAgZGVzY3JpcHRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBncm91cElkIGRlc2NyaXB0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxuICAgICAqL1xuICAgIEBDb3Jkb3ZhKClcbiAgICBkZWxldGVHcm91cChncm91cElkOiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG4gICAgLyoqXG4gICAgICogIGRlc2NyaXB0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1NlYXJjaFBlcnNvblJlcXVlc3R9IHNlYXJjaFBlcnNvblJlcXVlc3QgZGVzY3JpcHRpb25cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXG4gICAgICovXG4gICAgQENvcmRvdmEoKVxuICAgIHNlYXJjaFBlcnNvbihzZWFyY2hQZXJzb25SZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4geyByZXR1cm4gfVxuXG5cbn0iXX0=