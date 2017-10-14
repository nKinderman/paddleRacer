import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacerNewComponent } from './racer-new.component';

describe('RacerNewComponent', () => {
  let component: RacerNewComponent;
  let fixture: ComponentFixture<RacerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
