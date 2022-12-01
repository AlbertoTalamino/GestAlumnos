import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlumnosComponent } from './vistas/form-alumnos/form-alumnos.component';
import { ListaAlumnosComponent } from './vistas/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  {path: '', component: ListaAlumnosComponent},
  {path: 'editAlumno/:documentId', component: FormAlumnosComponent},
  {path: 'creaAlumno', component: FormAlumnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
