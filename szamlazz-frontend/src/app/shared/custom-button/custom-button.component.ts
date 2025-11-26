import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '../enums/button-type.enum';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  imports: [NgClass],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent {
  @Input() title: string = "OK"
  @Input() disabled: boolean = false;
  @Input() type: ButtonType = ButtonType.PRIMARY
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
