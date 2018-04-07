import { Component, OnInit } from '@angular/core';
import { ClientContactListComponent } from './client-contact-list/client-contact-list.component'; 
import { ClientContactDetailComponent } from './client-contact-detail/client-contact-detail.component'; 

@Component({
  selector: 'app-client-contact',
  templateUrl: './client-contact.component.html',
  styleUrls: ['./client-contact.component.scss']
})
export class ClientContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
