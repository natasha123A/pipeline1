import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { StudentResultService } from 'src/app/services/student-result.service';
@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  studentForm: UntypedFormGroup;
  students:any=null;
  constructor(private formBuilder:UntypedFormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private viewService:StudentResultService) { }

  ngOnInit(): void {
    
    this.studentForm = this.formBuilder.group({
      rollno: ['', Validators.required],
      name: ['', Validators.required]
  });
  }
  get f() { return this.studentForm.controls; }

  onSubmit(){
    console.warn(this.studentForm.value);
   this.viewService.search(this.studentForm.value)
    .subscribe(students =>
      {
        this.students = students
        console.log(this.students)
        this.viewService.setData(this.students)
        if (students.length != 0) {
          this.router.navigate(['/result']);
        }
        else {
          // alert("no record found ")
          this.router.navigate(['/student']);
        }
      } );
     
    
  }

}
