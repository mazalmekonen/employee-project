import { Injectable } from '@angular/core';
import { sendmailService } from './sendmail';

@Injectable({
  providedIn: 'root'
})
export class SendmailMessegeService {
  add(Sendmail: string) {
    this.Sendmail.push(Sendmail);
   }
 clear() {
    this.Sendmail = [];
    }
   

  constructor() { }
}
