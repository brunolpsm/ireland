import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';
import { HeaderModule } from "../../../componentes/header/header.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    HeaderModule
],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
