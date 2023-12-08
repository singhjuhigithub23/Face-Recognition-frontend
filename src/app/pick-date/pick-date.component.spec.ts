import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDateComponent } from './pick-date.component';

describe('PickDateComponent', () => {
  let component: PickDateComponent;
  let fixture: ComponentFixture<PickDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickDateComponent]
    });
    fixture = TestBed.createComponent(PickDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
