import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { TeacherViewService } from 'src/app/services/teacher-view.service';
import { TeacherViewComponent } from '../teacher-view/teacher-view.component';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editForm: UntypedFormGroup
  data = this.viewService.getData();
  students: any = null;
  submitted = false
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: TeacherViewService,
    private teacherViewComponent: TeacherViewComponent
  ) {
    console.log(this.data)
  }


  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      rollno: ['', Validators.required],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      dateOfBirth: ['', Validators.required],
      score: ['', [Validators.required, Validators.max(100), Validators.min(0)]]
    });

    // let dob:any
    // for(let s of this.data){ 
    //  dob=s.dateOfBirth
    //  console.log(dob)
    //  var date=new Date(dob)
    //  console.log(date)
    //  date.toLocaleDateString('en-ZA');
    //  console.log(date)
    // }


    for (let s of this.data) {
      this.editForm.setValue({
        rollno: s.rollno,
        name: s.name,
        dateOfBirth: s.dateOfBirth,
        score: s.score
      });
    }


  }
  get f() { return this.editForm.controls; }


  onSubmit() {
    this.submitted = true
    console.warn(this.editForm.value);
    this.viewService.update(this.editForm.value)
      .subscribe(students => {
        this.students = students
        this.router.navigate(['/teacher']);
      });

  }

}







