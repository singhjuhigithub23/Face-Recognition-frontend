import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regularize-attendance',
  templateUrl: './regularize-attendance.component.html',
  styleUrls: ['./regularize-attendance.component.css']
})
export class RegularizeAttendanceComponent {
  details: boolean = false;
  showNotification() {
    this.details = true
    if (this.details == true)
    {
      const admindetails = document.getElementById('admin-details') as HTMLDivElement;
      admindetails.style.display = 'block';
    }
  

  }
 hideNotification() {
   // Hide the notification box
   const admindetails = document.getElementById('admin-details') as HTMLDivElement;
   admindetails.style.display = 'none';
 }

}
