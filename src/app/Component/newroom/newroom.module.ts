import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewroomRoutingModule } from './newroom-routing.module';
import { NewroomComponent } from './newroom.component';


@NgModule({
  declarations: [NewroomComponent],
  imports: [
    CommonModule,
    NewroomRoutingModule
  ]
})
export class NewroomModule { }
