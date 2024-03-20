import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Crew } from '../types/crew.type';
import { Destination } from '../types/destination.type';
import { Technology } from '../types/technology.type';

type Data = {
  destinations: Destination[];
  crew: Crew[];
  technologies: Technology[];
};

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly httpClient = inject(HttpClient);

  getDestinatios(): Observable<Destination[]> {
    return this.httpClient
      .get<Data>('/assets/data.json')
      .pipe(map((data) => data.destinations));
  }

  getCrew(): Observable<Crew[]> {
    return this.httpClient
      .get<Data>('/assets/data.json')
      .pipe(map((data) => data.crew));
  }

  getTechnologies(): Observable<Technology[]> {
    return this.httpClient
      .get<Data>('/assets/data.json')
      .pipe(map((data) => data.technologies));
  }
}
