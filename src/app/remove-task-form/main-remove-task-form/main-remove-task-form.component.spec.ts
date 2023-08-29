import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRemoveTaskFormComponent } from './main-remove-task-form.component';

describe('MainRemoveTaskFormComponent', () => {
  let component: MainRemoveTaskFormComponent;
  let fixture: ComponentFixture<MainRemoveTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainRemoveTaskFormComponent]
    });
    fixture = TestBed.createComponent(MainRemoveTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
