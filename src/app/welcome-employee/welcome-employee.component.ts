import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent {
  boy_icon="../assets/user-icon.png"

  constructor(private router: Router) {}
  onsave2(){

  this.router.navigate(['/notification']);
  }
  showadmindetails(){
    // Show the notification box
    const admindetails = document.getElementById('admin-details') as HTMLDivElement;
    admindetails.style.display = 'block';

 }
 hideNotification() {
  // Hide the notification box
  const admindetails = document.getElementById('admin-details') as HTMLDivElement;
  admindetails.style.display = 'none';
}
  

}
