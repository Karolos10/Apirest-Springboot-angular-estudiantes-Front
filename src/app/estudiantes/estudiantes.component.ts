import { Component, OnInit } from '@angular/core';
import { Estudiantes } from './estudiantes';
import { EstudiantesService } from './estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{

  titulo: String  = "Lista de estudiantes";

  estudiantes:Estudiantes[];

  constructor(private estudianteService: EstudiantesService){

  }

  ngOnInit(): void {

    this.estudianteService.getAll().subscribe(e => this.estudiantes=e)

  }

  delete(estudiante: Estudiantes):void{
    //console.log("Hello delete");
    this.estudianteService.delete(estudiante.id).subscribe( res=> this.estudianteService.getAll().subscribe(
      response=> this.estudiantes=response
    ));
  }

}
