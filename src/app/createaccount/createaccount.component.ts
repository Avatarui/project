import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-createaccount',
  standalone: true,
  imports: [MatToolbarModule,RouterModule],
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.scss'
})
export class CreateaccountComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  async signup(name: string, username: string, password: string, comfirmpassword: string) {
    if(password != comfirmpassword){
       alert("กรุณากรอก password กับ comfirmpassword ให้เหมือนกัน");
        return;
    }else if(name.trim() === '' || username.trim() === '' || password.trim() === '' || comfirmpassword.trim() === ''){
      alert("กรุณากรอกให้ถูกต้อง");
      return;
    }
    
    try {
    await this.loginService.SignupUser(name, username, password);
    } catch (error) {
      console.error('Signup failed:', error);
      alert("Signup failed");
    }
  }
}
