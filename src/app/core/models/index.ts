// Model for the direct OMDB API Movie response
export interface OmdbMovie {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;
    imdbID: string;
    Response: true;
    Search: string;
    Error: true;
}

// Model for the OMDB API response
export interface OmdbSearchResponse {
    Search?: OmdbMovie[];
    totalResults?: string;
    Response: 'True' | 'False';
    Error?: string;
}

// Internal app model
export interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
    director?: string;
    actors?: string;
    plot?: string;
    poster?: string;
    status?: boolean;
}

// Utility function to map from OmdbMovie to Movie
export function mapOmdbToMovie(omdb: OmdbMovie): Movie {
    return {
        id: omdb.imdbID,
        title: omdb.Title,
        year: Number(omdb.Year),
        genre: omdb.Genre,
        director: omdb.Director,
        actors: omdb.Actors,
        plot: omdb.Plot,
        poster: omdb.Poster !== 'N/A' ? omdb.Poster : undefined
    };
}

export interface User {
    id: string;
    email: string;
    name: string;
}

// Model for Members
export interface Member {
    id: number;
    name: string;
    photo: string;
    phone: string;
    gender: string;
    address: string;
    batchName: string;
    batchTime: string;
    trainingType: string;
    package: {
        plan: string;
        totalAmount: string;
        discount: string;
        purchaseDate: string;
        planExpiryDate: string;
        paid: string;
        dueAmount: string;
        daysRemaining: number;
    };
}

export interface Genre {
    id: string;
    name: string;
}

export interface Banner {
    title: string;
    description: string;
    image: string;
}
