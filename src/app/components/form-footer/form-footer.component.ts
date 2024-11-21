import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-form-footer",
  standalone: true,
  imports: [],
  templateUrl: "./form-footer.component.html",
  styleUrl: "./form-footer.component.css",
})
export class FormFooterComponent {
  @Input()
  value: string | null = null;

  @Input()
  disabled: boolean = false;

  @Output()
  actionEmitter = new EventEmitter<any>();

  public action(): void {
    console.log("hola mundo");
    this.actionEmitter.emit();
  }
}
