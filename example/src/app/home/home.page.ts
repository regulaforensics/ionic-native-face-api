import { Component, ViewChild, ElementRef } from '@angular/core'
import { File } from '@awesome-cordova-plugins/file'
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx'
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx'
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx'
import { Platform } from '@ionic/angular'
import { Enum, FaceCaptureResponse, LivenessResponse, MatchFacesResponse, MatchFacesRequest, MatchFacesImage, FaceSDK, MatchFacesSimilarityThresholdSplit } from '@regulaforensics/ionic-native-face-api/ngx'

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

  constructor(public FaceSDK: FaceSDK, public platform: Platform, private imagePicker: ImagePicker, private dialogs: Dialogs, private androidPermissions: AndroidPermissions) {
  }

  ionViewDidEnter() {
    var app = this
    var FaceSDK = this.FaceSDK

    app.img1.nativeElement.onclick = function () { pickImage(true) }
    app.img2.nativeElement.onclick = function () { pickImage(false) }
    app.matchFacesButton.nativeElement.addEventListener("click", matchFaces)
    app.livenessButton.nativeElement.addEventListener("click", liveness)
    app.clearResultsButton.nativeElement.addEventListener("click", clearResults)
    
    app.platform.ready().then(() => {
      FaceSDK.init().then(json => {
        var response = JSON.stringify(json)
        if (response["success"] == false) {
          console.log("Init failed: ");
          console.log(json);
        } else {
          console.log("Init complete")
        }
      })
    })

    function liveness() {
      FaceSDK.startLiveness().then(result => {
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
      FaceSDK.matchFaces(JSON.stringify(request)).then(response => {
        response = MatchFacesResponse.fromJson(JSON.parse(response))
        FaceSDK.matchFacesSimilarityThresholdSplit(JSON.stringify(response.results), 0.75).then(str => {
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
      app.dialogs.confirm("Choose the option", "", ["Use camera", "Use gallery"]).then((button) => {
        if (button == 1)
        FaceSDK.presentFaceCaptureActivity().then(result => setImage(first, FaceCaptureResponse.fromJson(JSON.parse(result)).image.bitmap, Enum.ImageType.LIVE))
        else if (button == 2)
          if (app.platform.is("android"))
            useGalleryAndroid(first)
          else if (app.platform.is("ios"))
            useGallery(first)
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

    function useGallery(first: boolean) {
      app.imagePicker.getPictures({ maximumImagesCount: 1 }).then((results) => {
        if (results.length == 0) {
        }
        File.readAsDataURL(
          (app.platform.is("ios") ? "file://" : "") + results[0].substring(0, (results[0] as string).lastIndexOf("/")),
          results[0].substring((results[0] as string).lastIndexOf("/") + 1)).then(
            (file => setImage(first, (file as string).substring(23), Enum.ImageType.PRINTED))
          )
      })
    }

    function useGalleryAndroid(first: boolean) {
      app.androidPermissions.checkPermission(app.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
        if (result.hasPermission)
          useGallery(first)
        else
          app.androidPermissions.requestPermission(app.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
            if (result.hasPermission)
              useGallery(first)
            else
              console.log("storage permission denied")
          }, err => console.log(JSON.stringify(err)))
      }, err => console.log(JSON.stringify(err)))
    }
  }
}
