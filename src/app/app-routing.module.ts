import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { FaceRecognisedComponent } from './face-recognised/face-recognised.component';
import { FaceNotRecognisedComponent } from './face-not-recognised/face-not-recognised.component';

const routes: Routes = [
  { path: '', redirectTo: '/attendance', pathMatch: 'full' },
  {path: 'attendance', component: AttendanceComponent},
  {path: 'face-recognised',component:FaceRecognisedComponent},
  {path: 'face-not-recognised',component:FaceNotRecognisedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
