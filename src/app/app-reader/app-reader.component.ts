import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-reader',
  templateUrl: './app-reader.component.html',
  styleUrls: ['./app-reader.component.scss'],
})
export class AppReaderComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
    releasedate: new FormControl(''),
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
      this.form.controls.title.value == '' &&
      this.form.controls.author.value == '' &&
      this.form.controls.publisher.value == '' &&
      this.form.controls.releasedate.value == ''
    ) {
      window.alert(
        'ERROR SELECT ATLEAST ONE SEARCH PARAMETER TO PERFORM SEARCH'
      );
    } else {
      window.alert(
        'GOING TO SEARCH WITH PARAMERTES:: Title =' +
          this.form.controls.title.value +
          ' AUTHOR=' +
          this.form.controls.author.value +
          ' PUBLISHER=' +
          this.form.controls.publisher.value +
          ' RELEASE DATE=' +
          this.form.controls.releasedate.value
      );
    }
  }
}
