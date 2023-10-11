import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  etapa: 'cpf' | 'senha' = 'cpf';
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }


  submitForm() {
    if (this.etapa === 'cpf') {
      this.etapa = 'senha';
    } else {
      // Implemente a lógica de autenticação (verificar CPF e senha).
      // Você pode fazer isso aqui e fornecer feedback ao usuário.
    }
  }

}
