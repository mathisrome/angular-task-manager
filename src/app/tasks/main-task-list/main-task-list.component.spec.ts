import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTaskListComponent } from './main-task-list.component';

describe('MainTaskListComponent', () => {
  let component: MainTaskListComponent;
  let fixture: ComponentFixture<MainTaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTaskListComponent]
    });
    fixture = TestBed.createComponent(MainTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
