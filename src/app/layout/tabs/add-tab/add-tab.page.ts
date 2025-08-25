import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { AddMovieComponent } from 'src/app/features/movies/components/add-movie/add-movie.component';

@Component({
  selector: 'app-add-tab',
  templateUrl: 'add-tab.page.html',
  styleUrls: ['add-tab.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AddMovieComponent]
})
export class AddTabPage {

  constructor() {}

}
