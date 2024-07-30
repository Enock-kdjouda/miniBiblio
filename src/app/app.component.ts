import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibraryComponent, libraryComponent } from './book/book.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [libraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titre ="Amour impossible"
  Auteur = "Enock Djoudas"
  Année= 2005

}
