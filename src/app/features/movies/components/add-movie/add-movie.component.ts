import { Component } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonList,
  IonText,
  IonButton,
  IonInput,
  IonItem,
  IonContent,
  IonThumbnail,
  ToastController,
} from "@ionic/angular/standalone";
import { OmdbService } from '../../../../core/services/omdb.service';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MovieDbService } from '../../../../core/services/movie-db.service';
import { mapOmdbToMovie, Movie } from 'src/app/core/models/index-interfaces';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  imports: [
    IonIcon,
    CommonModule,
    ReactiveFormsModule,
    IonLabel,
    IonList,
    IonText,
    IonButton,
    IonInput,
    IonItem,
    IonContent,
    IonThumbnail,
  ]
})

export class AddMovieComponent {

  controlTitle = new FormControl('');
  controlYear = new FormControl('');
  results: Movie[] = [];
  error = '';

  constructor(
    private movieDbService: MovieDbService,
    private omdbService: OmdbService,
    private toastController: ToastController
  ) { }

  findOmdb() {

    const title = this.controlTitle.value?.trim();
    const year = this.controlYear.value ? String(this.controlYear.value) : undefined;
    if (!title) return;

    this.omdbService.searchMovies(title, year).subscribe({
      next: (data) => {
        if (data.Response === 'True') {
          this.results = (data.Search ?? []).map(mapOmdbToMovie);
          this.error = '';
        } else {
          this.results = [];
          this.error = data.Error ?? 'Error desconocido';
        }
      },
      error: () => {
        this.results = [];
        this.error = 'Error al buscar películas.';
      }
    });
  }

  async addMovie(movie: Movie) {
    // Eliminamos campos undefined
    const cleanMovie = {} as Movie;
    Object.entries(movie).forEach(([k, v]) => {
      if (v !== undefined) (cleanMovie as any)[k] = v;
    });

    try {
      await this.movieDbService.addMovie(cleanMovie);
      const toast = await this.toastController.create({
        message: 'Película añadida a la base de datos',
        duration: 1500,
        color: 'success'
      });
      toast.present();
    } catch (error) {
      console.error('Error al añadir película:', error);
    }
  }

  ngOnInit() { }

}
