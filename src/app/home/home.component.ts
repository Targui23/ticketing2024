import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { Utilisateur } from '../models/Utilisateur.type';
import { MatButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTable, RouterLink, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  http: HttpClient = inject(HttpClient);
  snackBar: MatSnackBar = inject(MatSnackBar);
  authentification: AuthentificationService = inject(AuthentificationService);

  listeUtilisateur: Utilisateur[] = [];
  

  ngOnInit() {
    this.refresh();

  }

  refresh() {

    this.http
      .get<Utilisateur[]>(
        'http://localhost/backend_ticketing_dw2/list-user.php ' 
      )
      .subscribe((resultat) => (this.listeUtilisateur = resultat));

  }

}
