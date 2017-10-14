import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceIndexComponent } from './race-index.component';

describe('RaceIndexComponent', () => {
  let component: RaceIndexComponent;
  let fixture: ComponentFixture<RaceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
