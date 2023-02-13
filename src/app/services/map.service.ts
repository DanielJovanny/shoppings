import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private currentApiStatus: BehaviorSubject<Boolean>;
  obsCurrentApiStatus: Observable<Boolean>;

  constructor(httpClient: HttpClient) {
    this.currentApiStatus = new BehaviorSubject(new Boolean(false));
    this.obsCurrentApiStatus = this.currentApiStatus.asObservable();

    httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key='+ environment.apiKeyMaps, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      ).subscribe(loaded => {
        this.currentApiStatus.next(loaded);
      });
  }
}
