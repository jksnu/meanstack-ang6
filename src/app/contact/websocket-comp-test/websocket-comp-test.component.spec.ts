import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketCompTestComponent } from './websocket-comp-test.component';

describe('WebsocketCompTestComponent', () => {
  let component: WebsocketCompTestComponent;
  let fixture: ComponentFixture<WebsocketCompTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsocketCompTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketCompTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
