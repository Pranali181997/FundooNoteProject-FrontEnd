import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
 note:any
  @Input() recievedNoteList: any;
 
  @Output() updateEvent = new EventEmitter<any>();
  @Output() archiveEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() trashEvent = new EventEmitter<any>();
  displayMessage="note refresh"
  filteredString: string = '';
  constructor(public dialog:MatDialog) {
    
  }
  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      data:note ,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' , result); 
      this.updateEvent.emit("Hello")  
     
    });
  }
    receivedMessage(event:any)
    {
      console.log(event);
      this.updateEvent.emit(this.displayMessage)   
    }
    archiveMessage(event:any)
    {
      console.log(event);
      this.archiveEvent.emit("hello")     
    }
    deleteMessage(event:any)
    {     
      this.deleteEvent.emit("hello")     
    }
    trashMessage(event:any)
    { 
      this.trashEvent.emit("hello")     
    }
    updateMessage(event:any)
    { 
      this.trashEvent.emit("hello")     
    }
  }