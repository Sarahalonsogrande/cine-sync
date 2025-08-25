import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ListMovieComponent } from "src/app/features/movies/components/list-movie/list-movie.component";

@Component({
  selector: 'app-list-tab',
  templateUrl: 'list-tab.page.html',
  styleUrls: ['list-tab.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ListMovieComponent],
})

export class ListTabPage {
  constructor() {

  }
}
