import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  updateMessage="note refresh"


  constructor(private note: NoteService, public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  title: any
  description: any


  ngOnInit(): void {
    this.title = this.data.title;
    this.description = this.data.description;
    console.log(this.data)
  }
  onNoClick(): void {
    let data =
    {
      "title": this.title,
      "description": this.description,
      "bgColor": "string",
      "isArchive": false,
      "isReminder": false,
      "isPin": false,
      "isTrash": false,
      "registerdDate": "2022-05-17T13:10:53.328Z"
    }
    this.note.updateService(data, this.data.noteId).subscribe((res: any) => 
    {
      console.log("update response=", res);
      this.dialogRef.close(res);
    })
  }
  receiveMessage($event:any){
    this.onNoClick()
  }
}
