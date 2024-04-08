import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router:Router){

  }


  //Inicializa o form
  loginForm:FormGroup = new FormGroup({
    usuario:new FormControl('',Validators.required),
    senha:new FormControl('',Validators.required)
  })

  //Tentando fazer login
  onSubmitLogin(){
    this.router.navigate(['/home'])
  }

}
