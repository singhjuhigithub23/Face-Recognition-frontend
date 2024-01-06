import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from '../employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  girl_icon="../assets/girl-icon.png"
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  employeeid = -1;
  emp_name!: string;
  job!: string;
  emp_id!: number;
  json: any;
  email!: string;
  gender!: string;
 route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private router: Router,private employeeservice:EmployeeserviceService) {
    this.employeeid = Number(this.route.snapshot.params['emp_id']);
    
  }
  ngOnInit(): void {
    this.employeeservice.getEmployeeById(this.employeeid).subscribe((response) => {
    this.emp_name = response.emp_name;
    this.job = response.job_position;
    this.gender = response.gender;
    this.emp_id = response.emp_id;
    this.email = response.email;
    this.job=response.job_position;

  }
    )
    
}

  onsave(){

  this.router.navigate(['/login']);
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
