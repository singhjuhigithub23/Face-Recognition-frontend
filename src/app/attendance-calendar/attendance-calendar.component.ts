import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarView } from 'angular-calendar';
import { startOfYear,subYears } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-attendance-calendar',
  templateUrl: './attendance-calendar.component.html',
  styleUrls: ['./attendance-calendar.component.css']
})
export class AttendanceCalendarComponent implements OnInit {
  boy_icon="../assets/user-icon.png"
  details: boolean = false;
  view: CalendarView = CalendarView.Month;
  viewDate = startOfYear(subYears(new Date(), 1));
  events: CalendarEvent[] = [];
refresh!: Subject<any>;
  constructor(private router: Router) {}
  ngOnInit(): void {
     this.events =this.getHardcodedHolidays();
  }
  private getHardcodedHolidays(): CalendarEvent[] {
    // Hardcoded list of public holidays (example)
    const holidays: CalendarEvent[] = [
      {
        start: new Date('2023-01-01'),
        title: 'New Year\'s Day',
        allDay: true,
        meta: { type: 'public-holiday' },
      },
      {
        start: new Date('2023-07-04'),
        title: 'Independence Day',
        allDay: true,
        meta: { type: 'public-holiday' },
      },
      // Add more holidays as needed
    ];

    return holidays;
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
