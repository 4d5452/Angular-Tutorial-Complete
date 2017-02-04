import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: [
    './item.component.css'
  ]
})
export class ItemComponent implements OnInit{
  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}
  selectedItem: Item;
  items: Item[];
  
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getItems(): void {
    this.itemService.getItems()
      .then((items) => {
        this.items = items;
      })
  }

  add(type: string): void {
    type = type.trim();
    if(!type){ return; }
    this.itemService.create(type)
      .then(item => {
        this.items.push(item);
        this.selectedItem = null;
      })
  }

  delete(item: Item): void {
    this.itemService
      .delete(item.id)
      .then(() => {
        this.items = this.items.filter(i => i !== item);
        if(this.selectedItem === item){ this.selectedItem = null; }
      })
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedItem.id]);
  }

  ngOnInit(): void {
    this.getItems();
  }
}
