import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  moduleId: module.id,
  selector: 'item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: [ './item-detail.component.css' ]
})

export class ItemDetailComponent implements OnInit{
  item: Item;
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
        return this.itemService.getItem(+params['id'])
      }).subscribe(item => this.item = item);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.itemService.update(this.item)
      .then(() => this.goBack());
  }
}