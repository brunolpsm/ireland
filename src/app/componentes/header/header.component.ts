import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'ie-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'Página'; // Título dinâmico
  showBackButton: boolean = true; // Controle de exibição do botão "Voltar"

  constructor(private navCtrl: NavController, private router: Router) {}
  
  ngOnInit(): void {
    this.checkIfRoot();
  }

  checkIfRoot() {
    const currentUrl = this.router.url;
    // console.log(currentUrl)
    if (currentUrl === '/tabs/tab1' || currentUrl === '') {
      this.showBackButton = false; // Oculta o botão "Voltar"
    } else {
      this.showBackButton = true; // Mostra o botão "Voltar"
    }



currentUrl === '/tabs/tab1'



  }
  goBack() {
    this.checkIfRoot();
    this.navCtrl.back();
  }


  console(){
    // console.log(this.navCtrl)
  }
}
