import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import {MatDialog} from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [];
  selectedStudent;
  showStudents;

  constructor(private studentsService : StudentsService,public dialog: MatDialog) { }
  
 
  ngOnInit(): void {
    this.studentsService.getStudents()
        .subscribe(
          res => this.students =res,
          err => console.log(err)
        )
  }
  openDialog() {
    this.dialog.open(AddStudentComponent,{
      // width:'620px'
    });
  }

  openDialogToView(student){
   let dialogRef = this.dialog.open(StudentDetailsComponent, {
     width:'500px',
     data:student
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result ${result}`)
   })
  }

}
