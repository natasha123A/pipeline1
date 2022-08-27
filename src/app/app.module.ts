import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';
import { TeacherRegisterComponent } from './components/teacher-register/teacher-register.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentViewComponent,
    TeacherLoginComponent,
    StudentResultComponent,
    TeacherViewComponent,
    AddStudentComponent,
    EditStudentComponent,
    TeacherRegisterComponent
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // HttpClient,
   HttpClientModule,
    NgbModule
  ],
  providers: [DatePipe,TeacherViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
