import { Component, OnInit } from '@angular/core';
import { MovieDbService } from 'src/app/core/services/movie-db.service';
import { Movie } from 'src/app/core/models';
import { IonList, IonContent, IonItem, IonLabel, IonButton, IonIcon, IonThumbnail } from "@ionic/angular/standalone";
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { InfoCardComponent } from "src/app/shared/components/layout-iu/info-card/info-card.component";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
  imports: [IonContent, IonList, IonItem, IonLabel, AsyncPipe, IonButton, IonIcon, IonThumbnail, InfoCardComponent],
})

export class ListMovieComponent implements OnInit {

  movies$: Observable<Movie[]> = this.movieDbService.getMovies();

  constructor(private movieDbService: MovieDbService) {

  }

  removeMovie(movie: Movie) {
    this.movieDbService.removeMovie(movie.id);
  }

  ngOnInit() { }

}
