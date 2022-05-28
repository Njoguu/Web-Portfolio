import { Component } from '@angular/core';

declare var name: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {
    new name();
  }

  title = 'Alan Njogu';
}
