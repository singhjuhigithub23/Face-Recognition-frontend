import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent {
  bell_icon="&#x1F514"
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
      
    

}
