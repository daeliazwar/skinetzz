import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Skinet';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => {
        console.log('req completed!');
        console.log('extra statement!');
      },
    });
  }
}
