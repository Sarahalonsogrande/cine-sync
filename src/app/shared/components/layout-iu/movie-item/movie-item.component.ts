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
  IonIcon,
  IonButton,
  IonText,
  IonLabel,
  IonItem,
  IonCard,
  IonThumbnail
} from "@ionic/angular/standalone";
import { Movie } from 'src/app/core/models';
import { ViewAllCardComponent } from '../view-all-card/view-all-card.component';

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
    IonThumbnail,
    ViewAllCardComponent
  ],
})

export class MovieItemComponent implements OnInit {

  movie = input<Movie>();
  isViewAll = input<boolean>(false);

  constructor() {}

  ngOnInit() {}
  constructor() { }

  ngOnInit() { }

}
