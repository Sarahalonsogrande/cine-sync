import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models';

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    private movies: Movie[] = [];

    constructor() {
        const saved = localStorage.getItem('movies');
        this.movies = saved ? JSON.parse(saved) : [];
    }

    private saveMovies() {
        localStorage.setItem('movies', JSON.stringify(this.movies));
    }

    addMovie(movie: Movie) {
        const newMovie: Movie = {
            ...movie,
            id: Date.now().toString(),
            poster: movie.poster && movie.poster !== 'N/A' ? movie.poster : 'assets/imgs/avatar.png',
        };

        this.movies.push(newMovie);
        this.saveMovies();
        console.log('Movie added:', newMovie);
    }

    getMovies(): Observable<Movie[]> {
        return of(this.movies);
    }

    removeMovie(id: string) {
        this.movies = this.movies.filter(movie => movie.id !== id);
        this.saveMovies();
    }

}
