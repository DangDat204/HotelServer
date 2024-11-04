import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      name: [null, Validators.required]
    });
  }
  submitForm() {
    this.authService.register(this.registerForm.value).subscribe(res => {
      if (res.id != null) {
        this.message.success('Signup successful', { nzDuration: 5000 });
        this.router.navigateByUrl('/');
      } else {
        this.message.error(`${res.message}`, { nzDuration: 5000 });
      }
    });
  }
  
}
