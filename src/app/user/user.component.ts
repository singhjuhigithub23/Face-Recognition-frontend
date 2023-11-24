import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  bell="../assets/bell.jpeg"
  boy_icon="../assets/user-icon.png"
  constructor(private router: Router) {}

  onsave() {
    // Perform your authentication logic here.
    // For simplicity, let's assume validation always succeeds.
    // In a real application, you'd check user credentials against a backend service.

    // Redirect to the home page upon successful login.
    this.router.navigate(['/details']);
  }
  onsave1(){

    this.router.navigate(['/add-user']);
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
