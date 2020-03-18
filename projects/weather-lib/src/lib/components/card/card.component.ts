import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() loading = false;
  @Input() temperature: number;
  @Input() title: string;
}
