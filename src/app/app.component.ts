import { Component, Input } from '@angular/core';
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

  public getFormatedTime(time): string {
    return dayjs(time).format('h:mm:ss A');
  }
}
