import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent {
  bell_icon="&#x1F514"
  bell="../assets/bell_icon1.jpg"
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  selectedLevel: any;

  employees: employee[] = [
    {value: 'Juhi', viewValue: 'Juhi'},
    {value: 'Yash', viewValue: 'Yash'},
    {value: 'Sahith', viewValue: 'Sahith'},
  ];
  
  constructor(private router: Router) {}
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
            console.log(this.selectedLevel)


            
            this.router.navigate(['/absence', this.selectedLevel]);
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
