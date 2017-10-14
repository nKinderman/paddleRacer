import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerEditComponent } from './racer-edit.component';

describe('RacerEditComponent', () => {
  let component: RacerEditComponent;
  let fixture: ComponentFixture<RacerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
