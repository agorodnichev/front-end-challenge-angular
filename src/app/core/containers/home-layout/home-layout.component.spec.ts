import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HomeLayoutComponent} from './home-layout.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {MatIconModule} from '@angular/material/icon';
import {AppComponent} from 'src/app/app.component';
import {Component} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  @Component({ selector: 'app-app-progress-spinner', template: '' })
  class ProgressSpinnerStubComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatIconModule,
        HttpClientModule,
      ],
      declarations: [
        HomeLayoutComponent,
        AppComponent,
        ProgressSpinnerStubComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
