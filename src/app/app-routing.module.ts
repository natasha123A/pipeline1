import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentResultComponent } from './components/student-result/student-result.component';
import { TeacherLoginComponent } from './components/teacher-login/teacher-login.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TeacherRegisterComponent } from './components/teacher-register/teacher-register.component';
const routes: Routes = [
  {
    path:'',component:HomeComponent
  },

  {
    path:'student',component:StudentViewComponent,
    
  },
  {
    path:'login',component:TeacherLoginComponent
  },

  {
    path:'result',component:StudentResultComponent
  },
  
  {
    path:'teacher',component:TeacherViewComponent
  },
  {
    path:'add',component:AddStudentComponent
  },
  {
    path:'edit/:id',component:EditStudentComponent
  },
  {
    path:'register',component:TeacherRegisterComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
