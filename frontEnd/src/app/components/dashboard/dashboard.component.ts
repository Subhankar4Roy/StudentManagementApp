import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students = []
  constructor(private studentsService : StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudents()
        .subscribe(
          res => this.students =res,
          err => console.log(err)
        )
  }

}
