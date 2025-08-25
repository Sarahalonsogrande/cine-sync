import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Movie } from 'src/app/core/models/index-interfaces';
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
  ]
})

export class HomeTabPage implements OnInit {

  // Example movies array, replace with your actual data source
  private readonly moviesData: Movie[] = [];

  // titles = signal<Movie[]>(this.titles);
  movies = signal<Movie[]>(this.moviesData);
  recentAddedMovies = signal<Movie[]>(this.moviesData.slice(0, 3));
  // featuredGenres = signal<Genre[]>(this.genres);

  constructor() { }

  ngOnInit() {
  }

}
