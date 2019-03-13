import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  private isEdit: boolean;
  private title = 'New Note';

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
