import { Component, OnInit } from '@angular/core';
import { TdiContactListComponent } from './tdi-contact-list/tdi-contact-list.component';
import { TdiContactDetailComponent } from './tdi-contact-detail/tdi-contact-detail.component';

@Component({
  selector: 'app-tdi-contact',
  templateUrl: './tdi-contact.component.html',
  styleUrls: ['./tdi-contact.component.scss']
})
export class TdiContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
