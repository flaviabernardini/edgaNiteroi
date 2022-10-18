import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRatingComponent } from './result-rating.component';

describe('ResultRatingComponent', () => {
  let component: ResultRatingComponent;
  let fixture: ComponentFixture<ResultRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
