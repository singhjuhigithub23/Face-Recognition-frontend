import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  girl_icon="../assets/girl-icon.png"
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  constructor(private router: Router) {}
  onsave(){

  this.router.navigate(['/user']);
  }
  onsave1(){

    this.router.navigate(['/attendance']);
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
