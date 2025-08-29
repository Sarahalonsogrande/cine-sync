import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';
import { Movie } from 'src/app/core/models/index-interfaces';
import { ListHeaderComponent } from "src/app/shared/components/layout-iu/list-header/list-header.component";
import { HorizontalListComponent } from "src/app/shared/components/layout-iu/horizontal-list/horizontal-list.component";
import { MovieItemComponent } from 'src/app/shared/components/layout-iu/movie-item/movie-item.component';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
  standalone: true,
  imports: [IonList,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule, ListHeaderComponent, HorizontalListComponent, MovieItemComponent]
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
