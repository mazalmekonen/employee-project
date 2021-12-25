import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  
  add(message: string) {
     this.messages.push(message);
    }
  clear() {
     this.messages = [];
     }
<<<<<<< HEAD
     constructor() { }  
=======
    
  constructor() { }
>>>>>>> 0ec57462bb1b7f37048cdef1b44071fed185e6ca
}
