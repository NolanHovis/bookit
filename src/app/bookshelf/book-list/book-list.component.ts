import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  myBooks: Book[] = [
    new Book(
      'The Road',
      'Cormac McCarthy',
      'Post-Apocolyptic',
      'http://source.unsplash.com/50x50/?apocolypse'
    ),
    new Book(
      'To Kill a Mocking Bird',
      'Cormac McCarthy',
      'Post-Apocolyptic',
      'http://source.unsplash.com/50x50/?apocolypse'
    ),
    new Book(
      'Twilight',
      'Cormac McCarthy',
      'Post-Apocolyptic',
      'http://source.unsplash.com/50x50/?apocolypse'
    ),
    new Book(
      'Catch-22',
      'Cormac McCarthy',
      'Post-Apocolyptic',
      'http://source.unsplash.com/50x50/?apocolypse'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
