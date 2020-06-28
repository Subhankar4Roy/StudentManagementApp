import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentData =<any>{}

  constructor(private studentService : StudentsService,private router:Router) { }

  ngOnInit(): void {
  }
  addStudent(){
    this.studentService.addStudent(this.addStudentData)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/students'])
          },
          err => console.log(err)
        )
        
  }

}
