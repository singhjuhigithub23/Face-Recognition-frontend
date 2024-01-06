import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit{
  girl_icon="../assets/girl-icon.png"
  emp_name!: string;
  
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(){
    this.emp_name = history.state.data;
    console.log(this.emp_name);

  }

  ngOnInit(): void { 
    
  }

}
