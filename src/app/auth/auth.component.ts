import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  isSignUpActive = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signInForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickSignIn() {
    this.isSignUpActive = false;
    this.signInForm.reset();
   
  }

  onClickSignUp() {
    this.isSignUpActive = true;
    this.loginForm.reset();
  }

  onConfirmSignIn() {
    console.log(this.loginForm.value);
    this.router.navigate(['/listing']);
  }

  onConfirmSignUp() {
    console.log(this.signInForm.value);
  }
}
