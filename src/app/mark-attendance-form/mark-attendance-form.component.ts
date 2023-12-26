import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mark-attendance-form',
  templateUrl: './mark-attendance-form.component.html',
  styleUrls: ['./mark-attendance-form.component.css']
})
export class MarkAttendanceFormComponent {
  constructor(private router: Router) {}
  onsave(){

    this.router.navigate(['/attendance']);
    }
    onsave1(){

      this.router.navigate(['/face-recognised']);
      }

}
