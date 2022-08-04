import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-cartel',
  templateUrl: './cartel.component.html',
  styleUrls: ['./cartel.component.scss']
})
export class CartelComponent implements OnInit {

  constructor() { }


  cartelAnima () {
  }

  ngOnInit(): void {
    AOS.init({
    duration: 1500, 
  });
  }

}
