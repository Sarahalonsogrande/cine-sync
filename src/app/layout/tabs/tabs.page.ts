import { Component, OnInit, EnvironmentInjector, inject, signal } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage implements OnInit {

  public environmentInjector = inject(EnvironmentInjector);

  currentTab = signal<string>('home-tab');

  constructor() {

  }

  ngOnInit() {}

  getCurrentTab(event: { tab: string}) {

    this.currentTab.set(event.tab);

    console.log(event.tab);

  }
}
