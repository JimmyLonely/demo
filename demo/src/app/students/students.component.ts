import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) { }

  studentForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    age: ['']
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

  save(): void {
    if (this.studentForm.invalid) {
      return;
    }
    const formModel = this.studentForm.value;
    const saveStudent: Student = {
      id: formModel.id,
      name: formModel.name,
      age: formModel.age
    };

    this.studentService.create(saveStudent).then(student => {
      this.students.push(saveStudent);
      this.studentForm.reset();
    })
  }

  reset(): void {
    this.studentForm.reset();
  }

  delete(student: Student): void {
    this.studentService.delete(student).then(respone => {
      this.students = this.students.filter(s => s !== student);
    })
  }
}
