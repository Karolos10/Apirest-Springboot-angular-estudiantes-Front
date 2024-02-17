import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Estudiantes } from './estudiantes';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  private url:string= "http://localhost:8080/api/customers";

  constructor( private http:HttpClient) { }

  //Obtener estudiantes
  getAll():Observable<Estudiantes[]>{
    return this.http.get<Estudiantes[]>(this.url);
  }

  //Crear el estudiante
  create(estudiante:Estudiantes):Observable<Estudiantes>{
    return this.http.post<Estudiantes>(this.url, estudiante);
  }

  //Obtener un estudiante
  get(id:number):Observable<Estudiantes>{
    return this.http.get<Estudiantes>(this.url+'/'+id);
  }

  //Actualizar estduiantes
  update(estudiante: Estudiantes):Observable<Estudiantes>{
    return this.http.put<Estudiantes>(this.url, estudiante);
  }

  delete(id:number):Observable<Estudiantes>{
    return this.http.delete<Estudiantes>(this.url+'/'+id);
  }
}
