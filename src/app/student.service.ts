import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  getStudent(){
    return this.http.get<Student[]>('https://abdulaziz94.000webhostapp.com/angular_crud/angular_crud/angular_crud/list.php');
  }
  deleteStudent(id:number){
    return this.http.delete<Student[]>('https://abdulaziz94.000webhostapp.com/angular_crud/angular_crud/angular_crud/delete.php?id=' + id);
  }
  createStudent(student: Student){
    return this.http.post('https://abdulaziz94.000webhostapp.com/angular_crud/angular_crud/angular_crud/insert.php', student);
  }
  gteById(id:number){
    return this.http.get<Student[]>('https://abdulaziz94.000webhostapp.com/angular_crud/angular_crud/angular_crud/getById.php?id=' + id);
  }

  updateStudent(student: Student){

  return this.http.put('https://abdulaziz94.000webhostapp.com/angular_crud/angular_crud/angular_crud/update.php' + '?id=' + student.sId, student);
  }
}
