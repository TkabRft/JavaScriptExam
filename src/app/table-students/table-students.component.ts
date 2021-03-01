import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyStudent} from '../students.interface';
import { HttpStudentsService } from '../http-students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {

  constructor(private httpStudentsService: HttpStudentsService) {
   
   }
 
  @Input() students: MyStudent[] = [];
  @Output() deleteStudent = new EventEmitter<number>();
  @Output() editStudent = new EventEmitter();
  
  num = 0;
  studentId !: number;
  name!: string;
  surname!: string;
  group!: string;
  patronymic!: string;
  phone!: string;
  email!:string;
  birth!: string;
  course!: string;
  formChange!: FormGroup;

  ngOnInit(): void {
  this.getData();
  this.formChange = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      surname: new FormControl(null,[Validators.required]),
      patronymic: new FormControl(null,[Validators.required]),
      group: new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      birth: new FormControl(null,[Validators.required]),
      course: new FormControl(null,[Validators.required])
    });
    this.getData();
  }
  async getData(){
    try {
      this.students = await this.httpStudentsService.getStudents();
      
    } catch (error) {
      console.log(error);
    }
  }
  onDeleteStudent(id:number){
    this.deleteStudent.emit(id);
  }
  
}