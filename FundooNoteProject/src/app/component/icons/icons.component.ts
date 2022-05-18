import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId:any
  @Input() notedata:any
  @Output() archiveEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();

  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  archive() {
    this.note.archiveNoteService(this.notedata.noteId).subscribe((res: any) => {
      console.log(res);
      this.archiveEvent.emit("Hello") 
    })
  }
  delete(){
    this.note.deleteNote(this.notedata.noteId).subscribe((res: any) => {
      console.log(res);
      this.deleteEvent.emit("Hello") 
  })
}
}
