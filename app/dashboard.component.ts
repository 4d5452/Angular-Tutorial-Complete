import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent {
  items: Item[] = [];

  constructor(private itemService: ItemService) {  }

  ngOnInit(): void {
    this.itemService.getItems()
      .then((items) => {
        this.items = items.slice(0,3);
      })
  }
}