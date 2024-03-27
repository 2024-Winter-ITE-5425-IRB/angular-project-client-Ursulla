import { Component } from '@angular/core';
import { NgForm, FormGroup,FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
    registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    },
    {
      validators: MustMatch('password', 'confirmPassword')
    }
    );
  
    onSubmit(form: NgForm) {
      console.log("form submitted");
      let email = form.value.email;
      let password = form.value.password;
      let confirmPassword = form.value.confirmPassword;
    }
}

export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = (formGroup as FormGroup).controls[controlName];
    const matchingControl = (formGroup as FormGroup).controls[matchingControlName];

    if (!control || !matchingControl || !control.value || !matchingControl.value) {
      return null;
    }

    return control.value === matchingControl.value ? null : { mustMatch: true };
  };
}

