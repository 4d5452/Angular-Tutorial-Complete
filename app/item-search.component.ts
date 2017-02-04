import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ItemSearchService } from './item-search.service';
import { Item } from './item';

@Component({
  moduleId: module.id,
  selector: 'item-search',
  templateUrl: './item-search.component.html',
  styleUrls: [ './item-search.component.css' ]
})
export class ItemSearchComponent implements OnInit {
  items: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private itemSearchService: ItemSearchService,
    private router: Router) {}
  
  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items = this.searchTerms
      .debounceTime(300) // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged() // ignore if next search term is same as previous
      .switchMap(term => term //switch to new observable each time the term changes
        //return the http search observable
        ? this.itemSearchService.search(term)
        // or the observable of empty itmes if there was no search term
        : Observable.of<Item[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Item[]>([]);
      });
  }

  gotoDetail(item: Item): void {
    let link = ['/detail', item.id];
    this.router.navigate(link);
  }
}
