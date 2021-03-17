import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCustomerComponent } from './side-customer.component';

describe('SideCustomerComponent', () => {
  let component: SideCustomerComponent;
  let fixture: ComponentFixture<SideCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
