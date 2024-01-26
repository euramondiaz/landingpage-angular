import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input ("btn-text") btnText: string = "";
  @Output("submit") onSubmit = new EventEmitter ();

  submit() {
    this.onSubmit.emit();
  }
}
