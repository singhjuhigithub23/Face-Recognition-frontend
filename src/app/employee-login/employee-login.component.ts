import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MyserviceService } from '../myservice.service';
import { EmployeeserviceService } from '../employee.service';


@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  logo="../assets/astreya-logo.jpeg"
  username : string = '';
  password : string = '';
  users!: number;
  arr: number[] = [];
  constructor(private router: Router,private employeeService:EmployeeserviceService) {}
  onsave(){
    this.employeeService.login(this.username,this.password).subscribe((response) => {
      console.log(this.username)
      this.users = Number(response)
      console.log(this.users)
      console.log(response)

    this.router.navigate(['/welcome-employee'],{state:{data: this.users}});
    })
    
}
}

