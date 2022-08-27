import { Component, OnInit } from '@angular/core';
import { TeacherViewService } from 'src/app/services/teacher-view.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {
students:any=null;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private viewService:TeacherViewService) { }

  ngOnInit(): void {
    this.viewService.getAll()
    .subscribe(students => this.students = students);
  }
  edit(rollno:number){
    this.viewService.edit(rollno)
    .subscribe(students =>{ 
      this.students = students
      this.viewService.setData(this.students)
      this.router.navigate(['/edit/rollno']);
    });
   
  }
  delete(rollno:number){
    console.log(rollno);
    this.viewService.delete(rollno)
    .subscribe(students => this.students = students);
    this.router.navigate(['/teacher',{students:this.students}]);
  }

 
  
}


