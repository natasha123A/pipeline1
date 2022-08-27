import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherLoginService } from 'src/app/services/teacher-login.service';


@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {
  registerationForm: UntypedFormGroup;
  loading = false;
  public teachers: any = null;
  constructor(private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: TeacherLoginService) { }

  ngOnInit(): void {
    this.registerationForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.warn(this.registerationForm.value);
    this.loginService.register(this.registerationForm.value)
      .subscribe(teachers => {
        console.log(teachers)
        this.teachers = teachers;
        this.router.navigate(['/login']);
      });
  }

}
