import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const CONSTANT = {
  AJAX: {
    STUDENT_SERVICE: 'api/studentes',
  }
}

@Injectable()
export class StudentService {
  constructor (
    private http: Http
  ) {}

  getAll(): Promise<Student[]> {
    return this.http.get(CONSTANT.AJAX.STUDENT_SERVICE).toPromise().then(response => {
      return response.json() as Student[];
    }, response => {
      return null;
    })
  }
  get(id: number): Promise<Student> {
    return this.http.get(`${CONSTANT.AJAX.STUDENT_SERVICE}/${id}`).toPromise().then(response => {
      return response.json()
    })
  }

  update(student: Student): Promise<Student> {
    return this.http
               .put(`${CONSTANT.AJAX.STUDENT_SERVICE}/${student.id}`, JSON.stringify(student))
               .toPromise()
               .then(respons => {
                 return student;
               })
  }

  create(student: Student): Promise<Student> {
    return this.http
               .post(CONSTANT.AJAX.STUDENT_SERVICE, JSON.stringify(student))
               .toPromise()
               .then(response => {
                 return response.json() as Student;
               })
  }

  delete(student: Student): Promise<void> {
    return this.http
               .delete(`${CONSTANT.AJAX.STUDENT_SERVICE}/${student.id}`)
               .toPromise()
               .then (response => {
                 return null;
               })
  }
}