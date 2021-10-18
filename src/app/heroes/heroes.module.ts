import { NzResultModule } from 'ng-zorro-antd/result';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PrimengModule,
    FormsModule,
    NzResultModule,
    NzListModule
  ],
  exports: [
    CardComponent
  ]
})
export class HeroesModule { }
