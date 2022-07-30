import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

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