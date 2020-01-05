import { NgModule } from '@angular/core';
import { MatButtonModule,
        MatButtonToggleModule,
        MatIconModule, 
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatCardModule } from '@angular/material';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatCardModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule {}
