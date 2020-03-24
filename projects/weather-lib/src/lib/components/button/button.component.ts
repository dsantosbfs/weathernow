import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() type = 'button';

  @Output() $click: EventEmitter<any> = new EventEmitter();

  public onClick($event): void {
    this.$click.emit($event);
  }
}
