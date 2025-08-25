import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonButton, IonItem, IonThumbnail, IonLabel, IonText, IonBadge, IonIcon, IonRow, IonCol } from "@ionic/angular/standalone";
import { InfoCardComponent } from "../info-card/info-card.component";
import { Movie } from 'src/app/core/models/index-interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  imports: [IonCol, IonRow, IonBadge, IonText, IonLabel, IonItem, IonCard, IonThumbnail, InfoCardComponent],
})
export class MovieCardComponent implements OnInit {

  // @Input() title?: string;
  // @Input() year?: string;
  // @Input() genre?: string;
  // @Input() director?: string;
  // @Input() actors?: string;
  // @Input() plot?: string;
  // @Input() poster?: string;
  // @Input() status?: string;

  movie = input<Movie>();

  title = input<string>('');
  year = input<string>('');
  genre = input<string>('');
  director = input<string>('');
  actors = input<string>('');
  plot = input<string>('');
  poster = input<string>('');
  status = input<boolean>(false);

  constructor() { }

  ngOnInit() { }

}
