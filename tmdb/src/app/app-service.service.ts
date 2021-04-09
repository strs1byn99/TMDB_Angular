import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';

// const DOMAIN = "http://localhost:8000";
const DOMAIN = "https://bythemoviedb.wl.r.appspot.com"

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  getPlayingData() {
    return this.http.get(`${DOMAIN}/playing`)
  }

  getHomeData() {
    return this.http.get(`${DOMAIN}/home`)
  }
  
  getMovieDetail(id: any, type: any) {
    return this.http.get(`${DOMAIN}/${type}/${id}`)
  }

  getCastDetail(id: any) {
    return this.http.get(`${DOMAIN}/cast/${id}`)
  }

  search(query: any) {
    if (query === '') {
      return of([]);
    }
    let params = new HttpParams();
    params = params.append('query', query);
    return this.http.get(`${DOMAIN}/search?query=${query}`).pipe(
      map(response => response)
    );
  }

  
}
