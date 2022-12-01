import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumno';
import { AlumnosService } from '../../services/alumnos.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent implements OnInit {

  alumno?: Alumno;
  nuevoAlumno = true;
  // Aqui crear el formulario con el form builder 

  constructor(
    private alumnosService: AlumnosService,
    private ruta: ActivatedRoute,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    if(this.ruta.snapshot.paramMap.get('documentId')){
      this.nuevoAlumno = false;
      // Cargar los datos del alumno en el formulario
    } else {
      this.nuevoAlumno = true;
    }
  }

}
