import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {SharedModule} from "../shared/shared.module";
import {IvyCarouselModule} from "angular-responsive-carousel";


@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IvyCarouselModule,
  ]
})
export class PagesModule { }
