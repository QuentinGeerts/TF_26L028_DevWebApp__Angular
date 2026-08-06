import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01-profil-statique',
  imports: [],
  templateUrl: './exo01-profil-statique.html',
  styleUrl: './exo01-profil-statique.css',
})
export class Exo01ProfilStatique {
  email: string = 'quentin.geerts@bstorm.be';
  lastname: string = 'Geerts';
  firstname: string = 'Quentin';
  birthdate: Date = new Date('1996-04-03');
  imageUrl: string = 'https://images3.alphacoders.com/951/thumb-1920-95115.jpg';
  gender: 'M' | 'F' = 'M';
  languages: string[] = ['Français', 'Anglais', 'Néerlandais', 'Japonais'];
}
