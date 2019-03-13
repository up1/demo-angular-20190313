import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';

  save(input: string) {
    this.name = input;
  }

  // typeData(event: any) {
  //   this.temp = event.target.value;
  // }

}
