import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-blog-add',
  templateUrl: './add.component.html'
})
export class BlogAddComponent implements OnInit {
  constructor(private http: _HttpClient) {}

  ngOnInit(): void {
    console.log('Hello World!');
  }
}
