import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from '../employee.service';
import { MyserviceService } from '../myservice.service';

interface employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {
  datas: any = [];
  bell_icon="&#x1F514"
  bell="../assets/bell_icon1.jpg"
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  selectedLevel: any;
  emp_id!: number;
  emp_name!: string;
  username!: string;
  user_id!: string

  employees: employee[] = [
    {value: 'Juhi', viewValue: 'Juhi'},
    {value: 'Yash', viewValue: 'Yash'},
    {value: 'Sahith', viewValue: 'Sahith'},
  ];
  
  constructor(private router: Router,private myservice: MyserviceService) {}
  
  
  ngOnInit(): void {
    this.emp_id= history.state.data;
    console.log(this.emp_id)
    // console.log(state.data) ;
    this.myservice.get_attendance_by_id(this.emp_id).subscribe((response)=>{
      
      this.emp_name = response.username;
    })
   
    
    
  }
  onsave(){

  this.router.navigate(['/notification']);
  }
  onsave1(){

    this.router.navigate(['/login']);
    }
    onsave2(){

      this.router.navigate(['/user']);
      }
      onsave3(){

        this.router.navigate(['/list_attendance']);
        }
        onsave4(){

          this.router.navigate(['/attendance-management']);
          }
          onsave5() {
            


            
            this.router.navigate(['/absence'], {state:{data:this.selectedLevel}});
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
