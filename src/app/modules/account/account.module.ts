import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountRoutingModule } from "./account-routing.module";
import { LoginComponent } from "./login/login.component";
import { ClarityModule } from "@clr/angular";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
})
export class AccountModule {}