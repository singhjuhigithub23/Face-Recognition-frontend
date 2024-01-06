import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { EmployeeserviceService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  logo="../assets/astreya-logo.jpeg"
  username : string = '';
  password : string = '';
  users!: number;
  arr: number[] = [];
  constructor(private router: Router,private employeeService:MyserviceService) {}
  onsave(){
    this.employeeService.login(this.username,this.password).subscribe((response) => {
      console.log(this.username)
      this.users = Number(response)
      console.log("admin_id is :",this.users)
      console.log(response)

    this.router.navigate(['/welcome-admin'],{state:{data: this.users}});
    })
    
}
  // constructor(private router: Router, private authService: MyserviceService) {}

  // onsave() {
  //   // Perform your authentication logic here.
  //   this.authService.login(this.username, this.password).subscribe((response) => {
  //     // Handle the response from the backend, e.g., set user authentication status, navigate to another page, etc.
  //     console.log(response);
  //     this.router.navigate(['/welcome-admin']);
  //   });

  
  }


  

