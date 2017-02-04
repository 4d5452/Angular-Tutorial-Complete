import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Item } from './item';

@Injectable()
export class ItemSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Item[]> {
    return this.http
      .get(`app/items/?type=${term}`)
      .map(response => response.json().data as Item[]);
  }
}