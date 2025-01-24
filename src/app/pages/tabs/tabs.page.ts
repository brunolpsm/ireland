import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  previousUrl: string = '';

  constructor(private navCtrl: NavController, private router: Router) {
    addIcons({ library, playCircle, radio, search });
  }

  navigate() {
    this.navCtrl.navigateRoot('/tabs/tab5');

    this.router.events.subscribe((event) => {
      console.log(event);
    });

    let numb: number = 2;

    if (numb % 2 === 0) {
      console.log('');
    }

    




  }
}
