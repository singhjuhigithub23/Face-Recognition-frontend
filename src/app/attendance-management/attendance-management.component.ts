import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.css']
})
export class AttendanceManagementComponent {
  name: string = '';
  id!: number;
  status: string ='';

  boy_icon="../assets/user-icon.png"
  details: boolean = false;

  constructor(private router: Router,private attendanceService: AttendanceService) {}
  onsave(){
    const datajson = {
      emp_id: this.id,
      emp_name: this.name,
      status: this.status,
    }
    this.attendanceService.post_attendance(datajson).subscribe((response) => {console.log(response)})
  }
  onsave2(){

    this.router.navigate(['/login']);
    }
  showNotification() {
    this.details = !this.details
    if (this.details == true)
    {
      const admindetails = document.getElementById('admin-details') as HTMLDivElement;
      admindetails.style.display = 'block';
    }
    else{
      this.hideNotification();
    }

  }
 hideNotification() {
   // Hide the notification box
   const admindetails = document.getElementById('admin-details') as HTMLDivElement;
   admindetails.style.display = 'none';
 }

}
