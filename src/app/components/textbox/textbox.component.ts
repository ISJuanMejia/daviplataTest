import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FontAwesomeModule,
  IconDefinition,
} from "@fortawesome/angular-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-textbox",
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, CommonModule],
  templateUrl: "./textbox.component.html",
  styleUrl: "./textbox.component.css",
})
export class TextboxComponent {
  @Input()
  title: string | null = null;

  @Input()
  value: number | null = null;

  @Input()
  icon: IconDefinition = faFaceSmile;

  @Input()
  disabled: boolean = false;

  @Output()
  valueEmitter = new EventEmitter<number | null>();

  @Input()
  type: string = "text";

  canShowEmptyError = false;

  public onInputChange(event: Event): void {
    if (!this.canShowEmptyError) {
      this.canShowEmptyError = true;
    }
    const input = event.target as HTMLInputElement;
  }
}
