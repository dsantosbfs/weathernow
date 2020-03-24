import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() error = false;
  @Input() loading = false;
  @Input() temperature: number;
  @Input() title: string;

  @Output() $retry: EventEmitter<any> = new EventEmitter();

  get temperatureColor(): string {
    if (this.temperature > 25) {
      return 'high-temperature';
    }

    if (this.temperature < 5) {
      return 'low-temperature';
    }
  }

  public retry(): void {
    this.$retry.emit();
  }
}
