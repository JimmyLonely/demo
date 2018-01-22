import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentService: StudentService
  ) { }

  studentForm = new FormGroup ({
    id: new FormControl(),
    name: new FormControl(),
    age: new FormControl()
  });

  title = '学生管理';
  selectedStudent: Student;
  students: Student[];

  ngOnInit(): void {
    this.getStudents();
  }


  getStudents(): void {
    this.studentService.getAll().then(students => {
      this.students = students;
    });
  }

  add(): void {
    const formModel = this.studentForm.value;
    const saveStudent: Student = {
      id: formModel.id.trim(),
      name: formModel.name.trim(),
      age: formModel.age.trim()
    };

    this.studentService.create(saveStudent).then(student => {
      this.students.push(saveStudent);
      this.studentForm.reset();
    })
  }

  delete(student: Student): void {
    this.studentService.delete(student).then(respone => {
      this.students = this.students.filter(s => s !== student);
    })
  }
}
