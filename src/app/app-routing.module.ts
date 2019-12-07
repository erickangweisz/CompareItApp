import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  { path: 'searchForm', component: SearchFormComponent },
  //{ path: 'search', component: ProductListComponent },
  { path: '**', redirectTo: 'searchForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
