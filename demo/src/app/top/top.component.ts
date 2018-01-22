import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'my-dashboard',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})

export class TopComponent implements OnInit {
    constructor(
        private router: Router,
        private studentService: StudentService
    ){}

    students: Array<Student>;

    ngOnInit(): void {
        this.studentService.getAll().then(students => {
            this.students = students.sort(this.sortById).slice(0, 3);
        })
    }

    sortById(studentA:Student, studentB:Student): number{
        return studentA.id - studentB.id
    }

    goDetail(id: number): void {
        this.router.navigate([`/student/${id}`])
    }
}