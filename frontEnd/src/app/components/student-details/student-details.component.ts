import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { StudentComponent } from '../student/student.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  name:string;
  constructor(public dialogRef:MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any)
    {if(data){
      this.name = data.name
    } 
     
    }

  ngOnInit(): void {
  }

}
