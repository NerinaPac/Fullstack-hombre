import { Component, Input, OnInit } from '@angular/core';
import { ICarrucelItem } from './Icarrucel-item.metadata';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.scss']
})
export class CarrucelComponent implements OnInit {

  /* Custom Properties: Propiedades que vienen directo del Padre */

  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarrucelItem[] = [];

  /* Final properties */

  public finalHeight: string | number = 0;
  public currentPosition = 0;


  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
   }

   carrucel = [
    {
      imagen: "assets/carrucel/naruto.jpg",
      titulo: "Naruto Uzumaki",
      contenido: "Yo jamas de rendire, y jamas retrocedere a mi palabra, porque ese es mi camino ninja!"
    },
    {
      imagen: "assets/carrucel/hombre-depresivo.jpg",
      titulo: "La Depresion",
      contenido: "Es el asesino silencioso del cual el estado es complice y tiene como principal victima al hombre."
    },
    {
      imagen: "assets/carrucel/hombre-abs.jpg",
      titulo: "Naruto Uzumaki",
      contenido: "Yo jamas de rendire, y jamas retrocedere a mi palabra, porque ese es mi camino ninja!"
    }
    
    
   ]

  ngOnInit(): void {
    this.items.map( (i, index) =>{
      i.id = index;
      i.marginLeft = 0;
    });

  }

    setCurrentPosition(position: number){
      this.currentPosition = position;
      this.items.find((i) => i.id === 0)!.marginLeft = -100 * position;

    }

    setNext() {
      let finalPercentage = 0;
      let nextPosition = this.currentPosition + 1;
      
      if (nextPosition <= this.items.length - 1){
        finalPercentage = -100 * nextPosition;
      }else {
        nextPosition = 0;
      }
      this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
      this.currentPosition = nextPosition;
    }

    setBack() {
      let finalPercentage = 0;
      let backPosition = this.currentPosition - 1;
      if (backPosition >= 0) {
        finalPercentage = -100 * backPosition;
      }else{
        backPosition = this.items.length - 1;
        finalPercentage = -100 * backPosition;
      }
      this.items.find((i) => i.id === 0)!.marginLeft = finalPercentage;
      this.currentPosition = backPosition;
    }
}
