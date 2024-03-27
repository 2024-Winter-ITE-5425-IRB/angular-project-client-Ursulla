import { Component } from '@angular/core';
import { FormsModule, NgForm, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(form: NgForm) {
    console.log("form submitted");
    let email = form.value.email;
    let password = form.value.password;
    console.log(email, password);
  }

}
