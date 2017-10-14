import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceUpdateComponent } from './race-update.component';

describe('RaceUpdateComponent', () => {
  let component: RaceUpdateComponent;
  let fixture: ComponentFixture<RaceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
