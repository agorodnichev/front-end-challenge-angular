import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AddressesService } from './addresses.service';

describe('AddressesService', () => {
  let service: AddressesService;
  const httpClientMock = jasmine.createSpyObj('http', ['get']);
  httpClientMock.get = jasmine.createSpy('http.get');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientMock}
      ]
    });
    service = TestBed.inject(AddressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method', () => {
    service.list();
    expect(httpClientMock.get).toHaveBeenCalledTimes(1);
  });
});
