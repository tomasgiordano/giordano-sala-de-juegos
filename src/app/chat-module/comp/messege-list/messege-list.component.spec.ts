import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegeListComponent } from './messege-list.component';

describe('MessegeListComponent', () => {
  let component: MessegeListComponent;
  let fixture: ComponentFixture<MessegeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessegeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessegeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
