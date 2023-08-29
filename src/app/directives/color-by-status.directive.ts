import {Directive, ElementRef, Input} from '@angular/core';
import {Task, TaskStatus} from "../model/Task";

@Directive({
  selector: '[appColorByStatus]'
})
export class ColorByStatusDirective {
  @Input() appColorByStatus: TaskStatus = TaskStatus.DONE;

  constructor(private el: ElementRef) {

  }
  ngOnInit() {
    this.changeColor(this.appColorByStatus)
  }

  private changeColor(appColorChangeByState: TaskStatus) {
    if (appColorChangeByState === TaskStatus.TODO) {
      this.el.nativeElement.style.color = 'red'
    } else if (appColorChangeByState === TaskStatus.IN_PROGRESS) {
      this.el.nativeElement.style.color = 'yellow'
    } else {
      this.el.nativeElement.style.color = 'green'
    }
  }

}
