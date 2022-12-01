import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Alumno } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private miColeccion = "alumnos";
  constructor(private firebase: AngularFirestore) { }

  //CRUD

  //Read a single one
  getAlumno(id: string){
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  //Read all
  getAllAlumnos(){
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }

  //Create
  newAlumno(alumno: Alumno){
    return this.firebase.collection(this.miColeccion).add(alumno);
  }

  //Update
  updateAlumno(documentId: string, alumno: Alumno){
    return this.firebase.collection(this.miColeccion).doc(documentId).update(alumno);
  }

  //Delete
  deleteAlumnos(documentId: string){
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

}
