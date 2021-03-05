import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingPageComponent } from './standing-page.component';

describe('StandingPageComponent', () => {
  let component: StandingPageComponent;
  let fixture: ComponentFixture<StandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
