import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material/material.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SidenavReducer } from './store/sidenav/sidenav.reducer';
import { TermInputReducer } from './store/term-input/term-input.reducer';
import { SelectShopsReducer } from './store/select-shops/select-shops.reducer';
import { NProductsSlideReducer } from './store/nproducts-slide/nproducts-slide.reducer';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './_components/search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './_components/product-list/product-list.component';
import { ProductListItemComponent } from './_components/product-list-item/product-list-item.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
import { environment } from 'src/environments/environment';
import { SelectShopsComponent } from './_components/search-form/select-shops/select-shops.component';
import { TermInputComponent } from './_components/search-form/term-input/term-input.component';
import { NproductsSlideComponent } from './_components/search-form/nproducts-slide/nproducts-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchComponent,
    ProductListComponent,
    ProductListItemComponent,
    NavbarComponent,
    SidenavComponent,
    SelectShopsComponent,
    TermInputComponent,
    NproductsSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ 
      sidenav: SidenavReducer,
      termInput: TermInputReducer,
      selectShops: SelectShopsReducer,
      nProductsSlide: NProductsSlideReducer
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
