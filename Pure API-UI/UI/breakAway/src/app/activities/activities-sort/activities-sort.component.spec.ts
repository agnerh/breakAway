import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSortComponent } from './activities-sort.component';

describe('ActivitiesSortComponent', () => {
  let component: ActivitiesSortComponent;
  let fixture: ComponentFixture<ActivitiesSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
