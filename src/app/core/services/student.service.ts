// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Student } from '../models/student.model';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class StudentService {
//   constructor(private http: HttpClient) {}

//   getAll(): Observable<Student[]> {
//     return this.http.get<Student[]>('/api/student');
//   }

//   getById(id: number): Observable<Student> {
//     return this.http.get<Student>(`/api/student/${id}`);
//   }

//   add(student: Student): Observable<Student> {
//     debugger;
//     return this.http.post<Student>('https://localhost:7174/api/student', student);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://localhost:7174/api/student';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  add(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  update(student: Student): Observable<void> {
  debugger;
  return this.http.put<void>(`${this.apiUrl}/${student.id}`, student);
}


  delete(id: number): Observable<void> {
    debugger
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
