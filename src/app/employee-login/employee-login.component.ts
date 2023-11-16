import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {
  logo="../assets/astreya-logo.jpeg"
  constructor(private router: Router) {}
  onsave(){

    this.router.navigate(['/welcome-employee']);
    }

}
