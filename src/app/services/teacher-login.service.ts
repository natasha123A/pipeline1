import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Teacher } from '../models/teacher';
const baseUrl = 'http://localhost:5000';
@Injectable({
  providedIn: 'root'
})
export class TeacherLoginService {
  private teacherSubject: BehaviorSubject<Teacher>;
  public teacher: Observable<Teacher>;

  constructor(
    private router:Router,
    private http:HttpClient
  ) { 
    this.teacherSubject=new BehaviorSubject<Teacher>(JSON.parse(localStorage.getItem('teacher')||'{}'));
    this.teacher=this.teacherSubject.asObservable();
  }
  public get teacherValue():Teacher{
    return this.teacherSubject.value;
  }
  login(teacher:Teacher){
    return this.http.post<Teacher[]>(`${environment.apiUrl}/getTeacher`,teacher);
  }
  register(teacher:Teacher){
    return this.http.post<Teacher[]>(`${environment.apiUrl}/addTeacher`,teacher);
  }
}
