import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherLoginService } from 'src/app/services/teacher-login.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  loading = false;
  public teachers: any = null;
  submitted=false;

  constructor(private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: TeacherLoginService) { }

  ngOnInit(): void {
   
    this.loginForm = this.formBuilder.group({
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      password: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted=true

    if (this.loginForm.invalid) {
      return;
  }
    console.warn(this.loginForm.value);
    this.loginService.login(this.loginForm.value)
      .subscribe(teachers => {
        console.log(teachers)
        this.teachers = teachers;
        if (teachers.length != 0) {
          this.router.navigate(['/teacher']);
        }
        else {
          // alert("no record found ")
          this.router.navigate(['/login']);
        }
      });
  }
}
