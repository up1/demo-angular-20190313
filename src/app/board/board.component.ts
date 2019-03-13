import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notes = [];

  constructor() {
    this.notes.push(new Note(1, 'Note 1'));
    this.notes.push(new Note(2, 'Note 2'));
  }

  ngOnInit() {
  }

}
