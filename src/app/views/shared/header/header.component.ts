import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SearchComponent} from "../../dialogs/search/search.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }


  openSearchDialog() {
    const dialogRef = this.dialog.open(SearchComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
