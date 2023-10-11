import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CpfValidator } from 'src/app/validators/cpf.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  etapa: 'cpf' | 'senha' = 'cpf';
  isCPFValid: boolean | undefined = undefined;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [
        Validators.required,
        Validators.minLength(11),
        CpfValidator.isValidCpf(),
        , ,]],
      senha: ['', [Validators.required]]
    });

    console.log("CPF válido: " + this.loginForm.get('cpf')?.valid);


    this.loginForm.get('cpf')?.valueChanges.subscribe(() => {
      this.isCPFValid = this.loginForm.get('cpf')?.valid;
      console.log(this.isCPFValid);

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
