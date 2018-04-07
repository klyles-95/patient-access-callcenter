import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdiContactDetailComponent } from './tdi-contact-detail.component';

describe('TdiContactDetailComponent', () => {
  let component: TdiContactDetailComponent;
  let fixture: ComponentFixture<TdiContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdiContactDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdiContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
