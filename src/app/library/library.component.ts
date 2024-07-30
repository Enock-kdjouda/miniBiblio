import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class BookComponent {
  Titre ="Amour impossible"
  Auteur = "Enock Djoudas"
  Annee= 2005

}