import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceNewComponent } from './race-new.component';

describe('RaceNewComponent', () => {
  let component: RaceNewComponent;
  let fixture: ComponentFixture<RaceNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
