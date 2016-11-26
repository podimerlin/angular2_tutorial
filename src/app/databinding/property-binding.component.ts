import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-property-binding',
  template: `
    {{result}}
    <br>
    <button (click)="onClicked()">Click Me!</button>
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() result: number = 0;

  @Output() clicked =  new EventEmitter<string>();

  onClicked() {
    this.clicked.emit('It Works!');
  }

}
