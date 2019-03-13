import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note';
import {BaconService} from '../services/bacon.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  notes = [];

  constructor(private baconService: BaconService) {
    // this.notes.push(new Note(1, 'Note 1'));
    // this.notes.push(new Note(2, 'Note 2'));
    // this.notes.push(new Note(3, 'Note 3'));
    this.baconService.getData()
      .subscribe(data => this.processData(data));
  }

  private processData(data: string) {
    console.table(data);
    // TODO add data to notes[]
  }

  ngOnInit() {
  }

  onSavedNote(savednote: Note) {
    console.table(savednote);
    // TODO :: Edit
    this.notes = this.notes.map(note =>
                    note.id === savednote.id ? savednote : note);
    console.table(this.notes);
  }

  onDeletedNote(deletedId: number) {
    this.notes = this.notes.filter(note => note.id !== deletedId);
  }


}
