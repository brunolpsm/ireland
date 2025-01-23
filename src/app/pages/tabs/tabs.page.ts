import { Component } from '@angular/core';


import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  constructor() {
    addIcons({ library, playCircle, radio, search });

  }

}
