import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { FaceSDK } from '@regulaforensics/ionic-native-face-api/ngx'
import { Dialogs } from "@awesome-cordova-plugins/dialogs/ngx"
import { Camera } from "@awesome-cordova-plugins/camera/ngx"

import { HomePage } from './home.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  providers: [
    Dialogs,
    Camera,
    FaceSDK
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
