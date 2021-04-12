import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegeSendComponent } from './messege-send.component';

describe('MessegeSendComponent', () => {
  let component: MessegeSendComponent;
  let fixture: ComponentFixture<MessegeSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessegeSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegeSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
