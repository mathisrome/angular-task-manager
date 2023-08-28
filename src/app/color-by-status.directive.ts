import {Directive, ElementRef, Input} from '@angular/core';
import {TaskStatus} from "./model/Task";

@Directive({
  selector: '[appColorByStatus]'
})
export class ColorByStatusDirective {
  @Input() appColorByStatus: string = TaskStatus.DONE;

  constructor(private el: ElementRef) {

  }
  ngOnInit() {
    this.changeColor(this.appColorByStatus)
  }

  private changeColor(appColorChangeByState: string) {
    if (appColorChangeByState === TaskStatus.TODO) {
      this.el.nativeElement.style.color = 'red'
    } else if (appColorChangeByState === TaskStatus.IN_PROGRESS) {
      this.el.nativeElement.style.color = 'yellow'
    } else {
      this.el.nativeElement.style.color = 'green'
    }
  }

}
