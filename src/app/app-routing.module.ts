import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { FaceRecognisedComponent } from './face-recognised/face-recognised.component';
import { FaceNotRecognisedComponent } from './face-not-recognised/face-not-recognised.component';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './details/details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { NotificationComponent } from './notification/notification.component';
import { ListAttendanceComponent } from './list-attendance/list-attendance.component';
import { CalendarDetailsComponent } from './calendar-details/calendar-details.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { WelcomeEmployeeComponent } from './welcome-employee/welcome-employee.component';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component';
import { SentRequestComponent } from './sent-request/sent-request.component';
import { RegularizeAttendanceComponent } from './regularize-attendance/regularize-attendance.component';
import { AttendanceManagementComponent } from './attendance-management/attendance-management.component';
import { PickDateComponent } from './pick-date/pick-date.component';
const routes: Routes = [
  { path: '', redirectTo: '/attendance', pathMatch: 'full' },
  {path: 'attendance', component: AttendanceComponent},
  {path: 'face-recognised',component:FaceRecognisedComponent},
  {path: 'face-not-recognised',component:FaceNotRecognisedComponent},
  {path:'popup',component:PopupComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'details',component:DetailsComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'welcome-admin',component:WelcomeAdminComponent},
  {path:'notification',component:NotificationComponent},
  {path:'list_attendance',component:ListAttendanceComponent},
  {path:'calendar-details',component:CalendarDetailsComponent},
  {path:'employee-login',component:EmployeeLoginComponent},
  {path:'welcome-employee',component:WelcomeEmployeeComponent},
  { path: 'attendance-calendar', component: AttendanceCalendarComponent },
  {path: 'sent-request',component:SentRequestComponent},
  {path:'regularize-attendance',component:RegularizeAttendanceComponent},
  {path: 'attendance-management',component:AttendanceManagementComponent},
  {path: 'pick-date',component:PickDateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
