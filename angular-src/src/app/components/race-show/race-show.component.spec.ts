import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceShowComponent } from './race-show.component';

describe('RaceShowComponent', () => {
  let component: RaceShowComponent;
  let fixture: ComponentFixture<RaceShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
