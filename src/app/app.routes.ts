import { Routes } from '@angular/router';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';



export const routes: Routes = [
    {path: "fale-conosco", component: FaleConoscoComponent},
    {path: "contato", redirectTo: "faleconosco"},
    {path: "vitrine", component: VitrineComponent},
    {path: "", component: VitrineComponent},
    {path: "login", component: LoginComponent},
    {path: "cliente", component: ClienteComponent},

];
