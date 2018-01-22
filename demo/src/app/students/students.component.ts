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
  selectedHero: Student;
  students: Student[];

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(student: Student): void {
    this.selectedHero = student;
  }

  getHeroes(): void {
    this.studentService.getAll().then(students => {
      this.students = students;
    });
  }

  add(name: string): void {
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
      this.students = this.students.filter(h => h !== student);
    })
  }
}
