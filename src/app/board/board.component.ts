import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  defaultTitle: Note;

  constructor() {
    this.defaultTitle = new Note(1, 'XXX');
  }

  ngOnInit() {
  }

}
