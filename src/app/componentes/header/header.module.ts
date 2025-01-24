import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],  // Declare o componente aqui
  imports: [CommonModule, IonicModule],  // Certifique-se de importar o IonicModule
  exports: [HeaderComponent],  // Exporte o componente para uso em outros módulos
})
export class HeaderModule {}
