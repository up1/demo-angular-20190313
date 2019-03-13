import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaconService {

  constructor(private http: HttpClient) { }

  getData(): Observable<string> {
    return this.http.get<string>('https://baconipsum.com/api/?type=all-meat&sentences=3');
  }
}
