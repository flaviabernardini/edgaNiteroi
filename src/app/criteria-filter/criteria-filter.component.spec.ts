import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaFilterComponent } from './criteria-filter.component';

describe('CriteriaFilterComponent', () => {
  let component: CriteriaFilterComponent;
  let fixture: ComponentFixture<CriteriaFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteriaFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
