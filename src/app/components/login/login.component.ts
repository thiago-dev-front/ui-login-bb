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
  steps: 'cpf' | 'password' = 'cpf';
  isCPFValid: boolean | undefined = undefined;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [
        Validators.required,
        Validators.minLength(11),
        CpfValidator.isValidCpf(),
        , ,]],
        password: ['', [Validators.required , Validators.minLength(6)]],
        stayConnected: [false],
    });

    this.loginForm.get('cpf')?.valueChanges.subscribe(() => {
      this.isCPFValid = this.loginForm.get('cpf')?.valid;
    });
  }

  ngOnInit(): void {
  }

  formatCPF(event: any) {
    const value = event.target.value;
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 11) {
      event.target.value = digits
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
  }

  submitForm() {
    if (this.steps === 'cpf') {
      this.steps = 'password';
    } else {
      // Verifique se o formulário é válido antes de prosseguir
      if (this.loginForm.valid) {
        // Recupere os valores do formulário
        const cpf = this.loginForm.get('cpf')?.value;
        const senha = this.loginForm.get('senha')?.value;
        const stayConnected = this.loginForm.get('stayConnected')?.value;
        const message = `CPF: ${cpf}\nSenha: ${senha}\nMantendo Conectado: ${stayConnected ? 'Sim' : 'Não'}`;

        alert(message)
        // Aqui você pode enviar os valores para um serviço de autenticação
        // Substitua este trecho de código pela lógica de autenticação real
        // Exemplo de como enviar os dados usando um serviço fictício:
        // this.authService.authenticate(cpf, senha, manterConectado)
        //   .subscribe((response) => {
        //     // Faça algo com a resposta do serviço, como redirecionar o usuário ou exibir mensagens
        //   });
      } else {
        // O formulário não é válido, você pode exibir mensagens de erro ou realizar outras ações
      }
    }
  }


}
