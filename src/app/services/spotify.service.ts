import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCFrjv4HWp1pS719OqdpZwf7HUrCo6Nmu38ZIM5C2ODqcWMa9b8ScBTi1jKOWWrdVnwjfhuYKIzvZu8Z4U'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
                .pipe( map( data => data['albums'].items ));
  }

  getArtista(termino: string) {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCFrjv4HWp1pS719OqdpZwf7HUrCo6Nmu38ZIM5C2ODqcWMa9b8ScBTi1jKOWWrdVnwjfhuYKIzvZu8Z4U'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
                    .pipe( map( data => data['artists'].items ));
  }
}
