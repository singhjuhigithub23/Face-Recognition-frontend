import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
 
  constructor(private router: Router) {}
  onsave(){

  this.router.navigate(['/login']);
  }
  onsave1(){

    this.router.navigate(['/attendance']);
    }

}


