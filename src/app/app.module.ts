import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material/material.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sidenavReducer } from './store/sidenav/sidenav.reducer';
import { searchParamsReducer } from './store/search-params/search-params.reducer';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './_components/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductListItemComponent } from './_components/product-list-item/product-list-item.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import { environment } from 'src/environments/environment';

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
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ 
      sidenav: sidenavReducer,
      searchParams: searchParamsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
