import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../employee.service';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent implements OnInit {
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  username!: string
  user_id!: string
  emp_name!: string
  emp_id!: number


  constructor(private router: Router,private employeeServie: EmployeeserviceService, private route: ActivatedRoute) {}
  ngOnInit(): void {
       this.emp_id= history.state.data;
      // console.log(state.data) ;
      this.employeeServie.getEmployeeById(this.emp_id).subscribe((response)=>{
        this.emp_name = response.emp_name;
      })

  }
  onsave2(){

  this.router.navigate(['/notification']);
  }
  onsave3(){

    this.router.navigate(['/notification']);
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
