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

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
    imports: [
    IonIcon,
    IonButton,
    IonText,
    IonLabel,
    IonItem,
    IonBadge,
    IonCard,
    IonThumbnail,
],
})

export class MovieItemComponent implements OnInit {

  movie = input<Movie>();
  isViewAll = input<boolean>(false);

  constructor() {}

  ngOnInit() {}

}
