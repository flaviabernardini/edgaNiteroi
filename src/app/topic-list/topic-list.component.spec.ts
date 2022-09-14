import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaTableComponent } from './topic-list.component';

describe('CriteriaTableComponent', () => {
  let component: CriteriaTableComponent;
  let fixture: ComponentFixture<CriteriaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriteriaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
