import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  isEdit: boolean;
  title: string;

  @Input() note: Note;

  constructor() {
    console.log('Called constructor');
  }

  ngOnInit() {
    console.log('Called ngOnInit');
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
