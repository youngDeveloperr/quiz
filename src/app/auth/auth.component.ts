import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  isSignUpActive = false;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  onClickSignIn() {
    this.isSignUpActive = false;
  }

  onClickSignUp() {
    this.isSignUpActive = true;
  }

  onConfirmSignIn() {
    console.log(this.loginForm);
    
  }

  onConfirmSignUp() {}
}
