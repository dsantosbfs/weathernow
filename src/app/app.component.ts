import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() nairobi$;
  @Input() nuuk$;
  @Input() urubici$;
}
