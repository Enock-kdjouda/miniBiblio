
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  standalone: true,
  
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
  imports: []

})
export class libraryComponent {}
 interface Book {
  title: string;
  author: string;
  year: number;
}

  




//import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-library',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];

  constructor() {
    this.loadBooks();
  }

  addBook(book: Book): void {
    this.books.push(book);
    this.saveBooks();
  }

  findBookIndex(title: string): number {
    return this.books.findIndex(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  }

  updateBook(oldTitle: string, newTitle: string, newAuthor: string, newYear: number): void {
    const bookIndex = this.findBookIndex(oldTitle);
    if (bookIndex !== -1) {
      this.books[bookIndex] = {
        title: newTitle,
        author: newAuthor,
        year: newYear,
      };
      this.saveBooks();
    } else {
      console.error(`Book with title "${oldTitle}" not found.`);
    }
  }

  removeBook(title: string): void {
    const bookIndex = this.findBookIndex(title);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
      this.saveBooks();
    } else {
      console.error(`Book with title "${title}" not found.`);
    }
  }

  saveBooks(): void {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  loadBooks(): void {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  ngOnInit(): void {
    this.loadBooks();
  }
}



