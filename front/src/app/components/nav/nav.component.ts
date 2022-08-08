import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  activo:boolean = true;

  mostrarmenu () {
    this.activo = true;
    console.log("funciona");

  }

  ngOnInit(): void {
  }

}
