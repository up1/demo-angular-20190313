import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnChanges {
  isEdit: boolean;
  title: string;

  @Input() note: Note;

  constructor() {
    console.log('Called constructor');
  }

  ngOnChanges(changes: any): void {
    this.title = this.note.title;
  }

  onEdit() {
    console.log('Called onEdit');
    this.isEdit = true;
  }

  onSave(newTitle: string) {
    console.log('Called onSave');
    this.isEdit = false;
    this.title = newTitle;
  }
}
