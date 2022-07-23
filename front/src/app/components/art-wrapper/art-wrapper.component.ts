import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-wrapper',
  templateUrl: './art-wrapper.component.html',
  styleUrls: ['./art-wrapper.component.scss']
})
export class ArtWrapperComponent implements OnInit {

  constructor() { }

  articulos = [
    {
      imagen: "assets/noticias/aborto-masculino.jpg",
      titulo: "La obligacion de los padres de cumplir con la Demanda por Alimentos",
      contenido: "Lorem ipsum sarasa blah Lorem ipsum sarasa blah Lorem ipsum sarasa blah",
    },
    {
      imagen: "assets/noticias/hombre-cayendo.jpg",
      titulo: "Lorem ipsu.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
    },
    {
      imagen: "assets/noticias/nueva-izquierda.jpg",
      titulo: "El libro negro de la Nueva izquierda, de Nicolas Marquez y Agustin Laje.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
      
    },
  ];

  ngOnInit(): void {
  }

}
