import {NgModule} from '@angular/core';
import {AddressesComponent} from './addresses.component';
import {AddressComponent} from './components/address/address.component';

@NgModule({
  declarations: [
    AddressesComponent, AddressComponent,
  ],
  exports: [
    AddressesComponent
  ]
})
export class AddressesModule { }
