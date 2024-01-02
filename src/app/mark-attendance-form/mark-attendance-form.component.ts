import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-attendance-form',
  templateUrl: './mark-attendance-form.component.html',
  styleUrls: ['./mark-attendance-form.component.css']
})
export class MarkAttendanceFormComponent {
  details: boolean = false;
  


  constructor(private router: Router) {}
  onsave(){

    this.router.navigate(['/attendance']);
    }
    onsave1(){

      this.router.navigate(['/face-recognised']);
      }
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
