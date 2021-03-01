import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './header/header.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { AddformStudentComponent } from './addform-student/addform-student.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    StudentsComponent,
    HeaderComponent,
    TableStudentsComponent,
    AddformStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }