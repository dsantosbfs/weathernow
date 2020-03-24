import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() nairobi$;
  @Input() nuuk$;
  @Input() urubici$;

  @Output() $retry: EventEmitter<any> = new EventEmitter();

  public getFormatedTime(time): string {
    return dayjs(time).format('h:mm:ss A');
  }

  public onRetry(cityCode): void {
    this.$retry.emit(cityCode);
  }
}
