import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepportComponent } from './add-repport.component';

describe('AddRepportComponent', () => {
  let component: AddRepportComponent;
  let fixture: ComponentFixture<AddRepportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRepportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
