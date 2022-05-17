import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  // showImage:boolean;
  @Input() recievedNoteList: any;
  constructor() {
    // this.showImage=false;
  }

  ngOnInit(): void {
  }

}
