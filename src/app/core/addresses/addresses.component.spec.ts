import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AddressesComponent } from './addresses.component';
import {AddressesService, Address} from '../services/api/addresses.service';
import { Input, Component } from '@angular/core';

describe('AddressesComponent', () => {
  let component: AddressesComponent;
  let fixture: ComponentFixture<AddressesComponent>;
  const inputData =         [
    {
      "id": 1,
      "name": "Dallas Cummings",
      "streetAddress": "55740 Marc Inlet",
      "city": "Johnsmouth",
      "state": "Massachusetts",
      "zipCode": "93672-3151",
      "phone": "416.463.4001"
    },
    {
        "id": 2,
        "name": "Dovie Koelpin",
        "streetAddress": "3804 Michele Walks",
        "city": "Lake Keyon",
        "state": "Maryland",
        "zipCode": "44244-5625",
        "phone": "(226) 675-0409 x0899"
    },
  ];

  beforeEach(async(() => {
    // AddressesService mock
    const addressesServiceMock = jasmine.createSpyObj('apiAddresses', ['list']);
    addressesServiceMock.list = jasmine.createSpy('apiAddresses.list')
      .and.returnValue(of(inputData));

    TestBed.configureTestingModule({
      declarations: [ AddressesComponent, AddressComponentMock ],
      providers: [
        {provide: AddressesService, useValue: addressesServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be declared with values', () => {
    component.addresses.subscribe(
      data => {
        expect(data).toEqual(inputData);
      }
    );
  });
});

/**
 * Child component mock
 */
@Component({
  selector: 'app-address',
  template: '<div></div>'
})
class AddressComponentMock {
  @Input() address: Address;
}