import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class TeacherViewService {
  private studentSubject: BehaviorSubject<Student>;
  public student: Observable<Student>;
  constructor(
    private router: Router,
        private http: HttpClient
  ) {

   }
   public get studentValue(): Student {
    return this.studentSubject.value;
   }

   
   private data:any;

   setData(data:any){
     this.data = data;
   }
 
   getData(){
     let temp = this.data;
     return temp;
   }

   
   getAll() {
    return this.http.get<Student[]>(`${environment.apiUrl}/getall`);
   }
   create(student:Student){
     return this.http.post<Student[]>(`${environment.apiUrl}/add`,student);
   }
   delete(rollno:number){
    return this.http.get<Student[]>(`${environment.apiUrl}/delete/${rollno}`);
   }
   edit(rollno:number){
    return this.http.get<Student[]>(`${environment.apiUrl}/edit/${rollno}`);
   }
   update(student:Student){
    return this.http.post<Student[]>(`${environment.apiUrl}/update`,student);
   }
}
