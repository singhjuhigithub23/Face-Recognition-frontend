import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  bell="../assets/bell.jpeg"
  boy_icon="../assets/user-icon.png"
  employees: any = [];
  details: boolean = false;
  
  
  constructor(private router: Router, private employeeservice:EmployeeserviceService) {
  
  }
  ngOnInit(): void {
    this.employeeservice.getAllEmployee().subscribe((response) =>{
      this.employees = response
      


    })
  }

 
  
 


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
    onsave2(){

      this.router.navigate(['/login']);
      }
      onsave3(){

        this.router.navigate(['/edit-details']);
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
