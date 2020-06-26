import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  private studentsUrl = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  // form:FormGroup = new FormGroup({
  //   name : new FormControl('')
  // })
  
  getStudents(){
    return this.http.get<any>(this.studentsUrl)
  }
  addStudent(student){
    return this.http.post<any>(this.studentsUrl, student)
  }
}
