import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")
    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  newTitle: string = ""
  newAuthor: string = ""

  books: BookModel[] = []

  addBook() {
    if (this.newTitle && this.newAuthor) {
      let newBook : BookModel = {
        id : Date.now(),
        title : this.newTitle,
        author : this.newAuthor
      }
      this.books.push(newBook);

      localStorage.setItem("books", JSON.stringify(this.books));

      this.newTitle = ""
      this.newAuthor = ""
    }
  }
  
  deleteBook(index: number) {
    this.books.splice(index, 1)
    localStorage.setItem("books", JSON.stringify(this.books))
  }
}
