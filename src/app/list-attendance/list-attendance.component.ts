import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-attendance',
  templateUrl: './list-attendance.component.html',
  styleUrls: ['./list-attendance.component.css']
})
export class ListAttendanceComponent {
  boy_icon="../assets/user-icon.png"

  constructor(private router: Router) {}
  onsave(){

  this.router.navigate(['/calendar-details']);
  }
}
