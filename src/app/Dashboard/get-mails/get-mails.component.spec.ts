import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMailsComponent } from './get-mails.component';

describe('GetMailsComponent', () => {
  let component: GetMailsComponent;
  let fixture: ComponentFixture<GetMailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetMailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
