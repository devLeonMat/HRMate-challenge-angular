import {Component, OnInit} from '@angular/core';
import {BycicleService} from "../../../core/services/bycicle.service";
import {BycicleModel} from "../../../core/model/bycicle.model";

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  byciclesList: BycicleModel[] = []
  images: any[] = []

  constructor(private bycicleService: BycicleService) {
  }

  ngOnInit() {
    this.bycicleService.getAllBycicles().subscribe(response => {
      this.byciclesList = response;
      this.byciclesList.forEach(b => {
        this.images.push({path: b.photo});
      })
    })


  }



}
