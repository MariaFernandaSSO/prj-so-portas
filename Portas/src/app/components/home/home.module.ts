import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { SectionDestaqueComponent } from './section-destaque/section-destaque.component';


@NgModule({
  declarations: [
    HomeComponent,
    DestaqueComponent,
    SectionDestaqueComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
