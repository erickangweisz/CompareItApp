import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material/material.module';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './_components/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductListItemComponent } from './_components/product-list-item/product-list-item.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SidenavComponent } from './_components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    ProductListComponent,
    ProductListItemComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
