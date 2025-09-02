import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [TestComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  staticInput:string='static two-way binding';
  dynamicInput:string='dynamic two-way binding'
  }

  

  

