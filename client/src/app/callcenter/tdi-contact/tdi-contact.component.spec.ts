import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdiContactComponent } from './tdi-contact.component';

describe('TdiContactComponent', () => {
  let component: TdiContactComponent;
  let fixture: ComponentFixture<TdiContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdiContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdiContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
