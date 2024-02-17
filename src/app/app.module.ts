import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { FormEstudianteComponent } from './estudiantes/form-estudiante.component';

const routes:Routes=[
  {
    path:'', redirectTo:'/estudiantes', pathMatch:'full'
  },
  {
    path:'estudiantes', component:EstudiantesComponent
  },
  {
    path:'estudiantes/form', component:FormEstudianteComponent
  },
  {
    path:'estudiantes/form/:id', component:FormEstudianteComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    FormEstudianteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
