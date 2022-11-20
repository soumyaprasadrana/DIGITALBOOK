import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    role: new FormControl('reader', Validators.required),
  });
  submitted = false;
  showAlert: boolean = false;
  hideloginfooter: boolean = false;
  hide: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {}
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if (
      this.form.controls.username.value == 'soumya' &&
      this.form.controls.password.value == 'soumya'
    ) {
      window.alert('LOGIN SUCCESS');
      if (this.form.controls.role.value == 'author') {
        this.router
          .navigate(['ebooks/author'])
          .then((res) => {
            alert('Route success');
          })
          .catch((err) => {
            alert('ROute faile' + err.toString());
          });
      } else {
        this.router
          .navigate(['ebooks/reader'])
          .then((res) => {
            alert('Route success');
          })
          .catch((err) => {
            alert('ROute faile' + err.toString());
          });
      }
    } else {
      window.alert('LOGIN FAILED');
    }
  }
}
