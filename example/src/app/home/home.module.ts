import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { FaceApi } from '@regulaforensics/ionic-native-face-api-beta/ngx';

import { HomePage } from './home.page';

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
    AndroidPermissions,
    FaceApi
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
