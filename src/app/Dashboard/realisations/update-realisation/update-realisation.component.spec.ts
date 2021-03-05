import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRealisationComponent } from './update-realisation.component';

describe('UpdateRealisationComponent', () => {
  let component: UpdateRealisationComponent;
  let fixture: ComponentFixture<UpdateRealisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRealisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
