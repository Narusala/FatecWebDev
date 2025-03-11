import { Routes } from '@angular/router';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import path from 'path';


export const routes: Routes = [
    {path: "faleconosco", component: FaleConoscoComponent},
    {path: "contato", redirectTo: "faleconosco"},
    {path: "vitrine", component: VitrineComponent},
    {path: "", component: VitrineComponent},

];
