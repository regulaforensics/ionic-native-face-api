import { Component, ViewChild, ElementRef } from '@angular/core'
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx'
import { File } from '@awesome-cordova-plugins/file'
import { Camera, DestinationType, MediaType, PictureSourceType } from '@awesome-cordova-plugins/camera/ngx'
import { Platform } from '@ionic/angular'
import { Enum, FaceCaptureResponse, LivenessResponse, MatchFacesResponse, MatchFacesRequest, MatchFacesImage, FaceSDK, MatchFacesSimilarityThresholdSplit, InitializationConfiguration } from '@regulaforensics/ionic-native-face-api-beta/ngx'

var image1 = new MatchFacesImage()
var image2 = new MatchFacesImage()

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('img1', { static: true }) img1: ElementRef
  @ViewChild('img2', { static: true }) img2: ElementRef
  @ViewChild('matchFacesButton', { static: true }) matchFacesButton: ElementRef
  @ViewChild('livenessButton', { static: true }) livenessButton: ElementRef
  @ViewChild('clearResultsButton', { static: true }) clearResultsButton: ElementRef
  @ViewChild('similarityResult', { static: true }) similarityResult: ElementRef
  @ViewChild('livenessResult', { static: true }) livenessResult: ElementRef

  constructor(public FaceSDK: FaceSDK, public platform: Platform, private dialogs: Dialogs, private camera: Camera) {
  }

  ionViewDidEnter() {
    var app = this
    var FaceSDK = this.FaceSDK

    app.img1.nativeElement.onclick = function () { pickImage(true) }
    app.img2.nativeElement.onclick = function () { pickImage(false) }
    app.matchFacesButton.nativeElement.addEventListener("click", matchFaces)
    app.livenessButton.nativeElement.addEventListener("click", liveness)
    app.clearResultsButton.nativeElement.addEventListener("click", clearResults)

    var onInit = (json: any) => {
      var response = JSON.stringify(json)
      if (response["success"] == false) {
        console.log("Init failed: ");
        console.log(json);
      } else {
        console.log("Init complete")
      }
    }

    app.platform.ready().then(() => {
      File.resolveDirectoryUrl(File.applicationDirectory + "www/assets").then(dir => File.getFile(dir, "regula.license", null).then(fileEntry => fileEntry.file(file => {
        var reader = new FileReader()
        reader.onloadend = (_) => {
          var license = reader.result as String
          var config = new InitializationConfiguration()
          config.license = license.substring(license.indexOf(',') + 1)
          FaceSDK.initializeWithConfig(config).then(onInit)
        }
        reader.readAsDataURL(file)
      })).catch(_ => {
        FaceSDK.initialize().then(onInit)
      }))
    })

    function liveness() {
      FaceSDK.startLiveness().then((result: any) => {
        result = LivenessResponse.fromJson(JSON.parse(result))
        if (result.bitmap == null) return
        image1.bitmap = result.bitmap
        image1.imageType = Enum.ImageType.LIVE
        app.img1.nativeElement.src = "data:image/png;base64," + result.bitmap
        app.livenessResult.nativeElement.innerHTML = result["liveness"] == Enum.LivenessStatus.PASSED ? "passed" : "not passed"
      })
    }

    function matchFaces() {
      if (image1 == null || image1.bitmap == null || image1.bitmap == "" || image2 == null || image2.bitmap == null || image2.bitmap == "")
        return
      app.similarityResult.nativeElement.innerHTML = "Processing..."
      var request = new MatchFacesRequest()
      request.images = [image1, image2]
      FaceSDK.matchFaces(JSON.stringify(request)).then((response: any) => {
        response = MatchFacesResponse.fromJson(JSON.parse(response))
        FaceSDK.matchFacesSimilarityThresholdSplit(JSON.stringify(response.results), 0.75).then((str: any) => {
          var split = MatchFacesSimilarityThresholdSplit.fromJson(JSON.parse(str))
          app.similarityResult.nativeElement.innerHTML = split.matchedFaces.length > 0 ? ((split.matchedFaces[0].similarity * 100).toFixed(2) + "%") : "error"
        })
      })
    }

    function clearResults() {
      app.img1.nativeElement.src = "assets/img/portrait.png"
      app.img2.nativeElement.src = "assets/img/portrait.png"
      image1 = new MatchFacesImage()
      image2 = new MatchFacesImage()
      app.similarityResult.nativeElement.innerHTML = "nil"
      app.livenessResult.nativeElement.innerHTML = "nil"
    }

    function pickImage(first: boolean) {
      app.dialogs.confirm("Choose the option", "", ["Use camera", "Use gallery"]).then((button: number) => {
        if (button == 1)
          FaceSDK.presentFaceCaptureActivity().then((result: any) => setImage(
            first,
            FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap,
            Enum.ImageType.LIVE
          ))
        else app.camera.getPicture({
          destinationType: DestinationType.DATA_URL,
          mediaType: MediaType.PICTURE,
          sourceType: PictureSourceType.PHOTOLIBRARY
        }).then((result: string) => setImage(first, result, Enum.ImageType.PRINTED))
      })
    }

    function setImage(first: boolean, base64: string, type: number) {
      if (base64 == null) return
      app.similarityResult.nativeElement.innerHTML = "nil"
      if (first) {
        image1.bitmap = base64
        image1.imageType = type
        app.img1.nativeElement.src = "data:image/png;base64," + base64
        app.livenessResult.nativeElement.innerHTML = "nil"
      }
      else {
        image2.bitmap = base64
        image2.imageType = type
        app.img2.nativeElement.src = "data:image/png;base64," + base64
      }
    }
  }
}
