import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = []

  constructor(private studentsService : StudentsService) { }
  

  ngOnInit(): void {
    this.studentsService.getStudens()
        .subscribe(
          res => this.students =res,
          err => console.log(err)
        )
  }

}
