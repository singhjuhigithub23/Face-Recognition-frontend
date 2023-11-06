import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { FaceNotRecognisedComponent } from './face-not-recognised/face-not-recognised.component';
import { FaceRecognisedComponent } from './face-recognised/face-recognised.component';


@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    FaceNotRecognisedComponent,
    FaceRecognisedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
