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

  disciplines = [
    {id: 1, name: "BTech"},
    {id: 2, name: "MTech"},
    {id: 3, name: "MCA"}
  ];
  discipline = null;
  departments = [
    {id: 1, name: "CSE"},
    {id: 2, name: "IT"},
    {id: 3, name: "ME"},
    {id: 4, name: "EE"},
    {id: 5, name: "ECE"},
    {id: 6, name: "MCA"}
  ];
  department = null;

  years = [
    {id: 1, name: "1st"},
    {id: 2, name: "2nd"},
    {id: 3, name: "3rd"},
    {id: 4, name: "4th"}
  ];
  year = null;



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
