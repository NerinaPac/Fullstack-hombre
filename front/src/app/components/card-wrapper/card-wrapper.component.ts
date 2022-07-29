import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  constructor(
    private noticia: NoticiasService
  ) { }


  data:any;

  mostrarInfoNoticias() {
    this.noticia.getNoticiasService().subscribe(respuesta => {
     this.data = respuesta;     
     
    });
        
  }

  ngOnInit(): void {
    this.mostrarInfoNoticias();

  }

}