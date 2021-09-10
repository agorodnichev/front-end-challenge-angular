import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import {MaterialModule} from '../../../../shared/material/material.module';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [ AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    component.address = {
      "id": 1,
      "name": "Dallas Cummings",
      "streetAddress": "55740 Marc Inlet",
      "city": "Johnsmouth",
      "state": "Massachusetts",
      "zipCode": "93672-3151",
      "phone": "416.463.4001"
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
