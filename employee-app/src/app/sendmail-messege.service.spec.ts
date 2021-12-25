import { TestBed } from '@angular/core/testing';

import { SendmailMessegeService } from './sendmail-messege.service';

describe('SendmailMessegeService', () => {
  let service: SendmailMessegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendmailMessegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
