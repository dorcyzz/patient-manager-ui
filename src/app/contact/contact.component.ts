import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import {Contact, ContactService} from "./contact.service";
import {debounceTime} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert!: NgbAlert;

  private _success = new Subject<string>();
  successMessage = '';

  name!: string;
  email!: string;
  message!: string;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close();
      }
    });
  }

  onSubmit() {
    const contact: Contact = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    this.contactService.sendMessage(contact);

    this.name = "";
    this.email = "";
    this.message = "";

    this._success.next(`Message envoyé avec succès`);
  }
}
