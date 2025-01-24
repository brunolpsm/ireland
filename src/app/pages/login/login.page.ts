import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({});
  lastSubmittedValue: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) {}

  // ngOnInit: Inicializa o formulário ao carregar o componente
  ngOnInit() {
    console.log('ngOnInit: O componente foi inicializado');
    this.loginForm = this.formBuilder.group({
      // username: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(0)]],
      username: ['', []],
      password: ['', []],
    });
  }

  // ngOnChanges: Chamado quando as entradas (@Input) mudam. (Não temos no caso atual, mas útil para outros componentes)
  ngOnChanges() {
    // console.log('ngOnChanges: Uma entrada foi alterada');
  }

  // ngDoCheck: Chamado sempre que Angular verifica mudanças, útil para verificações personalizadas.
  ngDoCheck() {
    // console.log('ngDoCheck: O Angular verificou mudanças');
  }

  // ngAfterViewInit: Chamado depois que a visualização do componente foi inicializada.
  ngAfterViewInit() {
    // console.log('ngAfterViewInit: A visualização foi inicializada');
  }

  // ngAfterViewChecked: Chamado após cada verificação de visualização.
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked: A visualização foi verificada');
  }

  // ngOnDestroy: Chamado quando o componente está prestes a ser destruído (útil para limpar recursos).
  ngOnDestroy() {
    // console.log('ngOnDestroy: O componente está prestes a ser destruído');
  }

  // onSubmit: Processa o envio do formulário
  onSubmit() {
    if (this.loginForm.valid) {
      // Mock login process
      const { username, password } = this.loginForm.value;
      console.log('Username:', username);
      console.log('Password:', password);

      this.navCtrl.navigateRoot('/tabs', { animated: true });
    } else {
      console.log('Formulário inválido');
    }

    // Salva o último valor enviado (demonstrando o uso de um hook)
    this.lastSubmittedValue = JSON.stringify(this.loginForm.value);
  }
}
