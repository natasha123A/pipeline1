import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder,UntypedFormGroup,FormControl,Validators } from '@angular/forms';
import { TeacherViewService } from 'src/app/services/teacher-view.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
addForm:UntypedFormGroup;
students:any=null;
submitted=false


  constructor(
    private formBuilder:UntypedFormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private viewService:TeacherViewService
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      rollno: ['',  [Validators.required,Validators.min(1)]],
      name: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      dateOfBirth: ['', Validators.required],
      score: ['', [Validators.required,Validators.max(100),Validators.min(0)]]
  });
  
  }
  get f() { return this.addForm.controls; }
  onSubmit(){
    this.submitted=true
    if (this.addForm.invalid) {
      return;
  }

    console.warn(this.addForm.value);
    this.viewService.create(this.addForm.value)
    .pipe(first())
    .subscribe(students => this.students = students);
    this.router.navigate(['/teacher',{students:this.students}]);
  }
}
