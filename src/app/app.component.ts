import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IoniconsService } from './shared/services/ionicons.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})

export class AppComponent {
  constructor( private ioniconsService: IoniconsService ) {
    this.ioniconsService.loadAllIcons();
    // this.ioniconsService.loadListIcons();
  }

}
