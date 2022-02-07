import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faKey = faKey;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login(loginForm: NgForm) {
    this.router.navigate(['profile']);
    console.log(loginForm.value);
  }
}
