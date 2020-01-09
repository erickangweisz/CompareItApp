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
        MatCardModule,
        MatDividerModule } from '@angular/material';

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
  MatCardModule,
  MatDividerModule
];

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule {}
