import { TestBed, inject } from '@angular/core/testing';

import { WebsocketContactService } from './websocket.contact.service';

describe('Websocket.ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketContactService]
    });
  });

  it('should be created', inject([WebsocketContactService], (service: WebsocketContactService) => {
    expect(service).toBeTruthy();
  }));
});
