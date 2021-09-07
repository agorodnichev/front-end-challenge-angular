import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Address } from '../../../services/api/addresses.service';

/**
 * Component represents single address card
 */
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent implements OnInit {
  @Input() address: Address; // Asserted in OnInit

  constructor() { }

  ngOnInit(): void {
    if (!this.address) {
      throw new Error('address should be defined');
    }
  }

}
