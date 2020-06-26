import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import {MatDialog} from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = []

  constructor(private studentsService : StudentsService,public dialog: MatDialog) { }
  

  ngOnInit(): void {
    this.studentsService.getStudents()
        .subscribe(
          res => this.students =res,
          err => console.log(err)
        )
  }
  openDialog() {
    this.dialog.open(AddStudentComponent);
  }

}
