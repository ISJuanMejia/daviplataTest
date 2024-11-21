import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { ValidarUsuarioComponent } from "./app/pages/validar-usuario/validar-usuario.component";
import { ValidarOtpComponent } from "./app/pages/validar-otp/validar-otp.component";
import { AppComponent } from "./app/app.component";

const routes: Routes = [
  { path: "validar-usuario", component: ValidarUsuarioComponent },
  { path: "validar-otp", component: ValidarOtpComponent },
  { path: "", redirectTo: "validar-usuario", pathMatch: "full" },
  { path: "**", redirectTo: "validar-usuario" },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
