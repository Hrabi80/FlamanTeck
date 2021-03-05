import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompressComponent } from './testcompress.component';

describe('TestcompressComponent', () => {
  let component: TestcompressComponent;
  let fixture: ComponentFixture<TestcompressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcompressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
