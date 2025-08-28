import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Movie } from '../models';

@Injectable({
    providedIn: 'root'
})

export class MovieDbService {

    constructor(private firestore: Firestore) { }

    addMovie(movie: Movie) {
        const moviesRef = collection(this.firestore, 'movies');
        return addDoc(moviesRef, movie);
    }

    getMovies(): Observable<Movie[]> {
        const moviesRef = collection(this.firestore, 'movies');
        return collectionData(moviesRef, { idField: 'id' }) as Observable<Movie[]>;
    }

    removeMovie(id: string) {
        const movieDoc = doc(this.firestore, `movies/${id}`);
        return deleteDoc(movieDoc);
    }
}
