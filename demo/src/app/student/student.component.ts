//  Lib
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

//  Service
import { StudentService } from '../service/student.service';

//  Component
import { Student } from '../model/student';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  @Input() student: Student;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.studentService.get(+params.get('id')))
      .subscribe(student => this.student = student);
  }

  goBack(): void {
    this.location.back();
  }
}