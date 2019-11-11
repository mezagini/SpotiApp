import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDqvQJaI7UcQy4zB9UZqbWqGtRzDVocjODyViCc4ma7zrt3kty4GLlxZapr-Kwvzn7ydhCHl754jC1kfrQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDqvQJaI7UcQy4zB9UZqbWqGtRzDVocjODyViCc4ma7zrt3kty4GLlxZapr-Kwvzn7ydhCHl754jC1kfrQ'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=track%2Cartist&limit=10`, { headers });
  }
}
