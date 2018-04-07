import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdiContactListComponent } from './tdi-contact-list.component';

describe('TdiContactListComponent', () => {
  let component: TdiContactListComponent;
  let fixture: ComponentFixture<TdiContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdiContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdiContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
