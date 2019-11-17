import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Listo');
  }


  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD_WBBM3rBvyUPjlauSElOrfINi77pCmYzC92CY8tPbNsZhljb0_N3EhHifT03XtEXY6adjXo2i5R2gETs'
    });
    return this.http.get(url, {headers});

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data.albums.items ));
  }

  getArtistas(termino: string) {

    if (termino != null) {
      return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                 .pipe( map( data => data.artists.items ));
    }
  }

  getArtista(id: string) {


      return this.getQuery(`artists/${ id }`);
                 // .pipe( map( data => data['artists'].items ));

  }

  getTopTracks(id: string) {

      return this.getQuery(`artists/${id}/top-tracks?country=us`)
                 .pipe( map( data => data.tracks ));

  }
}
