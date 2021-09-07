import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addressesApiUrl } from '../../configs/uri';

export interface Address {
  id: number;
  name: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor(private http: HttpClient) {}

  list(): Observable<Array<Address>> {
    return this.http.get<Array<Address>>(addressesApiUrl);
  }
}
