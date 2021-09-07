// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';

// Containers
import { HomeLayoutComponent } from './containers/home-layout/home-layout.component';
import { HomeComponent } from './containers/home/home.component';

// Components
import { AppProgressSpinnerComponent } from './components/app-progress-spinner/app-progress-spinner.component';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './addresses/components/address/address.component';

@NgModule({
  declarations: [
    AppProgressSpinnerComponent,
    HomeLayoutComponent,
    HomeComponent,
    AddressesComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    AppProgressSpinnerComponent,
    HomeComponent,
    HomeLayoutComponent,
  ]
})
export class CoreModule { }
