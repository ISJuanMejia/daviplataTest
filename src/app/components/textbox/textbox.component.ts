import { Component, Input } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css',
})
export class TextboxComponent {
  @Input()
  title: string | null = null;

  value = '';

  @Input()
  icon: IconDefinition = faFaceSmile;

  @Input()
  disabled: boolean = false;
}
