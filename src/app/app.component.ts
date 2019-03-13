import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  temp = '';

  // typeData(event: any) {
  //   this.temp = event.target.value;
  // }

  save() {
    this.name = this.temp;
  }
}
