import { Component } from "@angular/core";
import { FormHeaderComponent } from "../../components/form-header/form-header.component";
import { FormFooterComponent } from "../../components/form-footer/form-footer.component";
import { TextboxComponent } from "../../components/textbox/textbox.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faAddressCard,
  faDollarSign,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-validar-usuario",
  standalone: true,
  imports: [
    FormHeaderComponent,
    FormFooterComponent,
    TextboxComponent,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: "./validar-usuario.component.html",
  styleUrl: "./validar-usuario.component.css",
})
export class ValidarUsuarioComponent {
  valueIcon = faDollarSign;

  value: number | null = null;

  clientIdIcon = faIdCard;

  dropdownIcon = faAddressCard;

  idTypeSelected: string | null = null;

  dropdownOptions = [
    { key: "Cédula de ciudadanía", value: "01" },
    { key: "Cédula de extranjería", value: "02" },
    { key: "Tarjeta de identidad", value: "03" },
  ];

  dropdownCanShowEmptyError = false;

  constructor(private router: Router) {}

  public onDropdownValueChange(value: string | null): void {
    if (!this.dropdownCanShowEmptyError) {
      this.dropdownCanShowEmptyError = true;
    }
  }

  public validarUsuario(): void {
    Swal.fire({
      title: "Validando información del cliente",
      html: "Espere un momento",
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
          title: "Código enviado correctamente!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigate(["/validar-otp"]);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "No se pudo enviar el código",
          text: "Error 404: Not Found",
          icon: "error",
        });
      }
    });
  }
}
