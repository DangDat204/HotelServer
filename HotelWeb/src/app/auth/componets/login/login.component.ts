import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UserStorageService } from '../../services/storage/use-storage.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private message: NzMessageService,
              private router: Router) {}
  
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }
  
  submitForm() {
    this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
            console.log(res);
            if(res.userId != null){
              const user = {
                id :res.userId,
                role :res.userRole,
                
              }
              UserStorageService.saveUser(user);
              UserStorageService.saveToken(res.jwt);
            }
        },
        error: () => {
            this.message.error('Bad credentials', { nzDuration: 5000 });
        }
    });
}

  

}
