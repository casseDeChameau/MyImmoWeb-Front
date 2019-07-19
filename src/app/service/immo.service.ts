import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Immo } from '../domain/immo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImmoService {

  URL : string = 'http://localhost:8080/immo';

  constructor(private client: HttpClient) { } //

  public getAllImmo(): Observable<Immo[]>{
    return this.client.get<Immo[]>(this.URL);
  }


}
