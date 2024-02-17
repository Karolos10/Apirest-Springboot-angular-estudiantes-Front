import { Component, OnInit } from '@angular/core';
import { Estudiantes } from './estudiantes';
import { EstudiantesService } from './estudiantes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-estudiante',
  templateUrl: './form-estudiante.component.html',
  styleUrls: ['./form-estudiante.component.css']
})
export class FormEstudianteComponent implements OnInit{

  estudiante:Estudiantes = new Estudiantes();
  titulo:string = "Registro de Estudiante";

  constructor(private estudianteService: EstudiantesService,
              private router: Router,
              private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.estudianteService.get(id).subscribe(
            es => this.estudiante=es
          );
        }
      }
    );
  }

  create():void{
    //console.log(this.estudiante);
    this.estudianteService.create(this.estudiante).subscribe( res => this.router.navigate(['/estudiantes']));
  }

  update():void{
    this.estudianteService.update(this.estudiante).subscribe( e=> this.router.navigate(['/estudiantes']));
  }

}
