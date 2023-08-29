import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTaskFormComponent } from './remove-task-form.component';

describe('RemoveTaskFormComponent', () => {
  let component: RemoveTaskFormComponent;
  let fixture: ComponentFixture<RemoveTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveTaskFormComponent]
    });
    fixture = TestBed.createComponent(RemoveTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
