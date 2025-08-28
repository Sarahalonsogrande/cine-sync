import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';
import { Movie } from 'src/app/core/models';
import { moviesData } from 'src/app/data/mock/movies-data';
import { ListHeaderComponent } from "src/app/shared/components/layout-iu/list-header/list-header.component";
import { HorizontalListComponent } from "src/app/shared/components/layout-iu/horizontal-list/horizontal-list.component";
import { MovieItemComponent } from "src/app/shared/components/layout-iu/movie-item/movie-item.component";
// import { Movie, mapOmdbToMovie, Banner } from 'src/app/core/models/index-interfaces';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ListHeaderComponent,
    IonList,
    HorizontalListComponent,
    MovieItemComponent
  ]
})

export class HomeTabPage implements OnInit {

  movies = signal<Movie[]>(moviesData);
  recentAddedMovies = signal<Movie[]>(moviesData.slice(0, 3));

  constructor() { }

  ngOnInit() {
  }

}
