import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-data-label',
  templateUrl: './data-label.component.html',
  styleUrls: ['./data-label.component.scss']
})
export class DataLabelComponent {
  @Input() data: any;
  @Input() label: string;
}
