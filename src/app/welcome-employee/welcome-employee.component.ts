import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent {
  constructor(private router: Router) {}
  onsave2(){

  this.router.navigate(['/notification']);
  }
  

}
