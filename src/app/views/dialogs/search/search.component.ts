import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {BycicleService} from "../../../core/services/bycicle.service";
import {BycicleRequestModel} from "../../../core/model/bycicleRequest.model";
import {UtilsService} from "../../../core/util/Utils.service";
import {BycicleModel} from "../../../core/model/bycicle.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchFormGroup: FormGroup;
  bycicleRequest: BycicleRequestModel;
  bycicles: BycicleModel[] = [];

  constructor(public dialogRef: MatDialogRef<SearchComponent>,
              private bycicleService: BycicleService,
              public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.searchFormGroup = new FormGroup({
      address: new FormControl(''),
      type: new FormControl('1'),
      date: new FormControl(''),
      dateStart: new FormControl(''),
      dateEnd: new FormControl(''),

    })
  }

  searchBike() {
    this.bycicleRequest = this.searchFormGroup.getRawValue();

    const request = {
      address: this.bycicleRequest.address,
      date: this.bycicleRequest.date ? this.utilsService.formatDate(this.bycicleRequest.date) : '',
      type: this.bycicleRequest.type,
      dateStart: this.bycicleRequest.dateStart ? this.utilsService.formatDate(this.bycicleRequest.dateStart) : '',
      dateEnd: this.bycicleRequest.dateEnd ? this.utilsService.formatDate(this.bycicleRequest.dateEnd) : '',
    }
    this.bycicleService.getByciclesWithParams(request).subscribe(response => {
      this.bycicles = response;
    })
  }


}
