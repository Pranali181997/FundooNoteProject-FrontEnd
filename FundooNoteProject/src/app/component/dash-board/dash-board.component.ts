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
  grid = false;
  formatGridList = false;
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

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  FormatView() {
    if (this.formatGridList == false) {
      this.formatGridList = true
      return this.formatGridList
    }
    else {
      this.formatGridList = false
      return this.formatGridList
    }
  }

  formatListView() {
    this.grid = true
    this.nextData.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }

  formatGridView() {
    this.grid = false
    this.nextData.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }

  filter(filteredString:any)
  {
      this.nextData.dataPipe(filteredString.target.value);
  }

  logout()
  {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
    console.log("logout sucessfully!!!");
  }
}


