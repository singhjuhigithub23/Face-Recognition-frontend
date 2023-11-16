import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  girl_icon="../assets/girl-icon.png"
  constructor(private router: Router) {}
  onsave(){

  this.router.navigate(['/login']);
  }
  

}
