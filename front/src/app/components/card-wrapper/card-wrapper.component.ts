import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor() { }

  noticias = [
    {
      imagen: "assets/noticias/lucio-dupuy.webp",
      titulo: "Lucio: Un padre que lucho por su tenencia, y un descarrador final.",
      contenido: "Lorem ipsum sarasa blah Lorem ipsum sarasa blah Lorem ipsum sarasa blah",
    },
    {
      imagen: "assets/noticias/jonny.webp",
      titulo: "Jhonny Depp: Victima de violencia de genero femenino.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
    },
    {
      imagen: "assets/noticias/padre-ucrania-nene.webp",
      titulo: "Ucrania: Los hombres estan obligados a ir a la guerra.",
      contenido: "Lorem ipsum sarasa blah sa Lorem ipsum sarasa blah sa",
      
    },
  ];


  ngOnInit(): void {
  }

}
