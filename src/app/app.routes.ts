import { Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { administrateurGuard } from './administrateur.guard';
import { gestionnaireGuard } from './gestionnaire.guard';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { etudiantGuard } from './etudiant.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'add-user',
    component: EditUserComponent,
    canActivate: [administrateurGuard],
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
    canActivate: [administrateurGuard],
  },
  {
    path: 'manage-user',
    component: ManageUserComponent,
    canActivate: [gestionnaireGuard],
  },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'add-ticket',
    component: AddTicketComponent,
    canActivate: [etudiantGuard],

  },
  { path: '**', component: NotFoundComponent },
];
