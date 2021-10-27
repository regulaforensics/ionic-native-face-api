import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IonicModule } from '@ionic/angular'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { ImagePicker } from "@ionic-native/image-picker/ngx"
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx'
import { FaceSDK } from '@regulaforensics/ionic-native-face-api/ngx'
import { Dialogs } from "@ionic-native/dialogs/ngx"

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
  providers:[
    ImagePicker,
    Dialogs,
    AndroidPermissions,
    FaceSDK
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
