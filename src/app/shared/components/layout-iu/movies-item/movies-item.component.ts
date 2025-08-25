import { Component, input, OnInit, signal } from '@angular/core';
import {
    IonIcon,
    IonButton,
    IonText,
    IonLabel,
    IonItem,
    IonBadge,
    IonCard,
    IonThumbnail
} from "@ionic/angular/standalone";

import { Movie } from 'src/app/core/models/index-interfaces';
import { ViewAllCardComponent } from '../view-all-card/view-all-card.component';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss'],
    imports: [
    IonIcon,
    IonButton,
    IonText,
    IonLabel,
    IonItem,
    IonBadge,
    IonCard,
    IonThumbnail,
    ViewAllCardComponent
],
})
export class MoviesItemComponent implements OnInit {

  movie = input<Movie>();
  isViewAll = input<boolean>(false);

  constructor() {}

  ngOnInit() {}

}
