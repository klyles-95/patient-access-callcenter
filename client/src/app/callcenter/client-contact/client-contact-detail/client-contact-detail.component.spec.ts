import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientContactDetailComponent } from './client-contact-detail.component';

describe('ClientContactDetailComponent', () => {
  let component: ClientContactDetailComponent;
  let fixture: ComponentFixture<ClientContactDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientContactDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
