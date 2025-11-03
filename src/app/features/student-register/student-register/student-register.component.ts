import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import this
import { StudentService } from '../../../core/services/student.service';
import { Student } from '../../../core/models/student.model';

@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule // ✅ Add this to imports
  ],
  providers: [StudentService], // ✅ Add this line
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  submit() {
    if (this.form.valid) {
      const student: Student = {
        name: this.form.value.name!,
        email: this.form.value.email!,
        age: Number(this.form.value.age!),
        editing: false
      };
      this.studentService.add(student).subscribe(() => {
        alert('Student registered!');
        this.form.reset();
      });
    }
  }
}
