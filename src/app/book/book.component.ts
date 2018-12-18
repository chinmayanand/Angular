import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {
  books: any;
  id:string=Math.random().toString();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/book').subscribe(data => {
      //  console.log(data);
      this.books = data;
    });
  }
}