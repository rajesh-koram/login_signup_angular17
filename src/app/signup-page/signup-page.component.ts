import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  loginFormGroup!: FormGroup;
  constructor(private loginFormBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.loginFormGroup = this.loginFormBuilder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() { 
    if(this.loginFormGroup?.valid) {
      console.log("formGroup IVALID", this.loginFormGroup.value);
    } else {
      console.log("formGroup IVALID", this.loginFormGroup);
    }
  }
}
