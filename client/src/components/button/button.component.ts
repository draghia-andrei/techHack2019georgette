import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Output() clicked = new EventEmitter();

  public clickButton() {
    console.log('in btn');
    this.clicked.emit();
  }
}
