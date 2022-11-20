import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.scss'],
})
export class AppSignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    confpassword: new FormControl('', Validators.required),
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
      this.form.controls.password.value != this.form.controls.confpassword.value
    ) {
      alert("Password and Confirm Password doesn't match!");
      return;
    }
    alert(
      'USER REGISTERED SUCCESSFULLY :\n Username:' +
        this.form.controls.username.value
    );
    this.router
      .navigate(['ebooks/login'])
      .then((res) => {
        alert('Route success');
      })
      .catch((err) => {
        alert('ROute faile' + err.toString());
      });
  }
}
