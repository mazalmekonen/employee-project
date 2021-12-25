import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  @Input() employee?: Employee;

  constructor(private messageService: SendmailMessegeService) { }

  onSelect(employee: Employee): void {
    this.messageService.add('your message to ${employee.fname}) was sent!");
  }

  ngOnInit(): void {
  }

}
