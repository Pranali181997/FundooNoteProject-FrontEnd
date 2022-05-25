import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
 
  filteredString: string = '';

  fillerNav = Array.from({ length: 1}, (_, i) => `Note ${i + 1}`);

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         .`,
  );

  private _mobileQueryListener: () => void;
  nextData: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  // filter(filteredString:any)
  // {
  //     this.nextData.dataPipe(filteredString.target.value);
  // }
  keyFun(event:any){
    console.log("event" ,event.target.value) 
   //  console.log("event" ,event) 
   }
  }


