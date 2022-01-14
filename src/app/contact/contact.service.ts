import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Contact {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  sendMessage(contact: Contact) {
    this.http.post("http://localhost:8080/contact", contact).subscribe(() => {
      console.log("Contact successfully submitted");
      console.log(contact);
    });
  }
}
