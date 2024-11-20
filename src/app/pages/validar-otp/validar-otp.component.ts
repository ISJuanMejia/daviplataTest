import { Component } from '@angular/core';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { FormFooterComponent } from '../../components/form-footer/form-footer.component';
import { TextboxComponent } from '../../components/textbox/textbox.component';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-validar-otp',
  standalone: true,
  imports: [FormHeaderComponent, FormFooterComponent, TextboxComponent],
  templateUrl: './validar-otp.component.html',
  styleUrl: './validar-otp.component.css',
})
export class ValidarOtpComponent {
  icon = faLock;

  public validarOtp(): void {
    console.log('Validar OTP');
  }
}
