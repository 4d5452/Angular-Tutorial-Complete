import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ItemComponent } from './item.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemSearchComponent } from './item-search.component';

import { ItemService } from './item.service';
import { ItemSearchService } from './item-search.service';



@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    ItemComponent,
    DashboardComponent,
    ItemDetailComponent,
    ItemSearchComponent
  ],
  providers: [
    ItemService,
    ItemSearchService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


