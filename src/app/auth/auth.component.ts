import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  isSignInActive = false;
  isSignUpActive = false;
  ngOnInit(): void {}

  onClickSignIn() {
    this.isSignInActive = !this.isSignInActive;
  }
  
  onClickSignUp(){
    this.isSignUpActive = !this.isSignUpActive;

  }
}
