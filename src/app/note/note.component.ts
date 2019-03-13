import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
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
  @Output() savedNoteEvent: EventEmitter<Note> =
       new EventEmitter<Note>();

  onSave(newTitle: string) {
    console.log('Called onSave');
    this.isEdit = false;
    this.title = newTitle;
    // Raise event
    const savedNote = new Note(this.note.id, newTitle);
    this.savedNoteEvent.emit(savedNote);
  }

  ngOnChanges(changes: any): void {
    this.title = this.note.title;
  }

  onEdit() {
    console.log('Called onEdit');
    this.isEdit = true;
  }


}
