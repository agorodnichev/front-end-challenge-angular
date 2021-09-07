import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import {AddressesService, Address} from '../services/api/addresses.service';

/**
 * Component requests list of addresses from the server
 * and renderes it
 */
@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressesComponent {

  addresses: Observable<Array<Address>>;

  constructor(private readonly apiAddresses: AddressesService) {
    this.addresses = this.apiAddresses.list();
  }
}
