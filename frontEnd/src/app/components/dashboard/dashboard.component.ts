import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  total;
  students =[];
  chartOptions = {};
  Highcharts = Highcharts;
  constructor(private studentsService : StudentsService) { }
  
  getTotalStudents(){
    this.studentsService.getStudents().subscribe(
      // res => this.students =res,
      res =>{console.log(res.length) 
      this.total = res.length} ,
      err => console.log(err),
    )
     //this.total = this.students.length;
  }
  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Total Students in each Departments'
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: 'Total students Department-Wise'
          }
  
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y}'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
      },
  
      series: [
          {
              name: "Department",
              colorByPoint: true,
              data: [
                  {
                      name: "CSE",
                      y: this.total,
                  },
                  {
                      name: "IT",
                      y: 10,
                  },
                  {
                      name: "EE",
                      y: 7,
                  },
                  {
                      name: "ME",
                      y: 5,
                  },
                  {
                      name: "ECE",
                      y: 4,
                  },
                  {
                      name: "MCA",
                      y: 1,
                  }
              ]
          }
      ]
  };

  this.total = this.getTotalStudents()
  
  }


  
}
