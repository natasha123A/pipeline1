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
export class StudentResultService {
  private studentSubject: BehaviorSubject<Student>;
  public student: Observable<Student>;
  constructor( private router: Router,
    private http: HttpClient)
     { 
     
    }

    private data:any;

    setData(data:any){
      this.data = data;
    }
  
    getData(){
      let temp = this.data;
      return temp;
    }



    public get studentValue(): Student {
      return this.studentSubject.value;
     }
    search(student:Student){
      return this.http.post<Student[]>(`${environment.apiUrl}/result`,student);
    }
}
