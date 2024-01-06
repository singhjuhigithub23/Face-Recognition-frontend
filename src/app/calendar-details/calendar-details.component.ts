import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeserviceService } from '../employee.service';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-calendar-details',
  templateUrl: './calendar-details.component.html',
  styleUrls: ['./calendar-details.component.css']
})
export class CalendarDetailsComponent implements OnInit {
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  emp_name!: string;
  attendance!:string;
  employees: any = [];
  employeeid = 1;
  route: ActivatedRoute = inject(ActivatedRoute);
  attendances: any[] =[]
  constructor(private router: Router,private attendanceService:AttendanceService, private cdr: ChangeDetectorRef) {
    this.employeeid = Number(this.route.snapshot.params['emp_id']);
  }
  ngOnInit(): void {
      
      this.attendanceService.get_attendance_by_id(this.employeeid).subscribe((response) => {
        
        this.employees = response;
        this.emp_name = response[0].emp_name
        
        console.log("var value is :",this.employees[0].emp_name)
        console.log("response value is :",response)
        this.cdr.detectChanges();

    });
    
  }
  onsave2(){

  this.router.navigate(['/calendar-details']);
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
