import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      if (username && password) {
        this.auth.login({ username, password }).subscribe(() => {
          this.router.navigate(['/students']);
        });
      }
    }
  }
}

