import { Component } from '@angular/core';
import { FormHeaderComponent } from '../../components/form-header/form-header.component';
import { FormFooterComponent } from '../../components/form-footer/form-footer.component';
import { TextboxComponent } from '../../components/textbox/textbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validar-usuario',
  standalone: true,
  imports: [
    FormHeaderComponent,
    FormFooterComponent,
    TextboxComponent,
    FontAwesomeModule,
  ],
  templateUrl: './validar-usuario.component.html',
  styleUrl: './validar-usuario.component.css',
})
export class ValidarUsuarioComponent {
  dropdownIcon = faIdCard;

  public validarUsuario(): void {
    Swal.fire({
      title: 'Validando información del cliente',
      html: 'Espere un momento',
      allowOutsideClick: false,
      allowEscapeKey: false,
      timer: 4000,
      didOpen: () => {
        Swal.showLoading();
        //Resultado exitoso
        Swal.clickConfirm();
        //Resuktado erroneo
        //Swal.clickCancel();
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Código enviado correctamente!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'No se pudo enviar el código',
          text: 'Error 404: Not Found',
          icon: 'error',
        });
      }
    });
  }
}
