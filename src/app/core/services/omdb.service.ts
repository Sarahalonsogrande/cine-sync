import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { secrets } from 'src/environments/secrets';
import { OmdbMovie, OmdbSearchResponse } from '../models';

@Injectable({
    providedIn: 'root'
})

export class OmdbService {
    private readonly apiUrl = 'https://www.omdbapi.com/';
    private readonly apiKey = secrets.omdbApiKey;

    constructor(private http: HttpClient) { }

    searchMovies(title: string, year?: string | number): Observable<OmdbSearchResponse> {
        let url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}`;
        if (year && String(year).trim() !== '') {
            url += `&y=${encodeURIComponent(String(year))}`;
        }
        return this.http.get<OmdbSearchResponse>(url).pipe(
            catchError(error => throwError(() => error))
        );
    }

    getMovieById(imdbID: string): Observable<OmdbMovie> {
        const url = `${this.apiUrl}?apikey=${this.apiKey}&i=${imdbID}`;
        return this.http.get<OmdbMovie>(url).pipe(
            catchError(error => throwError(() => error))
        );
    }

    // getMovieByYear(Year: number): Observable<OmdbMovie> {
    //     const url = `${this.apiUrl}?apikey=${this.apiKey}&y=${Year}`;
    //     return this.http.get<OmdbMovie>(url).pipe(
    //         catchError(error => throwError(() => error))
    //     );
    // }
}
