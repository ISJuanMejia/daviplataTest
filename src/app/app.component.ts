import { Component } from '@angular/core';
import { ValidarOtpComponent } from './pages/validar-otp/validar-otp.component';
import { ValidarUsuarioComponent } from './pages/validar-usuario/validar-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValidarOtpComponent, ValidarUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
