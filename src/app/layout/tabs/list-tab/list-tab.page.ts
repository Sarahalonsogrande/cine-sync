import { Component } from '@angular/core';
import { IonContent, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ListMovieComponent } from "src/app/features/movies/components/list-movie/list-movie.component";

@Component({
  selector: 'app-list-tab',
  templateUrl: 'list-tab.page.html',
  styleUrls: ['list-tab.page.scss'],
  imports: [IonButton, IonInput, IonContent, ListMovieComponent, IonIcon],
})

export class ListTabPage {
  constructor() {

  }
}
