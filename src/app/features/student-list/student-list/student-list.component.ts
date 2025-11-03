// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Student } from '../../../core/models/student.model';
// import { StudentService } from '../../../core/services/student.service';
// import { HttpClientModule } from '@angular/common/http';


// @Component({
//   selector: 'app-student-list',
//   standalone: true,
//   imports: [CommonModule, FormsModule, HttpClientModule],
//   providers: [StudentService], // ✅ Add this line
//   templateUrl: './student-list.component.html',
//   styleUrl: './student-list.component.css'
// })
// export class StudentListComponent implements OnInit {
//   students: Student[] = [];

//   constructor(private studentService: StudentService) { }

//   ngOnInit(): void {
//     this.loadStudents();
//   }

//   loadStudents(): void {
//     this.studentService.getAll().subscribe(data => {
//       this.students = data.map(s => ({ ...s, editing: false }));
//     });
//   }

//   editStudent(student: Student): void {
//     student.editing = true;
//   }

//   updateStudent(student: Student): void {
//     this.studentService.update(student).subscribe(() => {
//       student.editing = false;
//     });
//   }

//   deleteStudent(id: number): void {
//     this.studentService.delete(id).subscribe(() => {
//       this.students = this.students.filter(s => s.id !== id);
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../core/models/student.model';
import { StudentService } from '../../../core/services/student.service';
import { HttpClientModule } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [StudentService],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student = {
    id: 0, name: '', email: '', age: 0,
    editing: false
  };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

  openEditModal(student: Student): void {
    this.selectedStudent = { ...student };
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }

  openDeleteModal(student: Student): void {
    this.selectedStudent = { ...student };
    const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
    modal.show();
  }

  updateStudent(student: Student): void {
    this.studentService.update(student).subscribe(() => {
      this.loadStudents();
      bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
    });
  }

  deleteStudent(id: number): void {
    this.studentService.delete(id).subscribe(() => {
      this.loadStudents();
      bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
    });
  }
}
