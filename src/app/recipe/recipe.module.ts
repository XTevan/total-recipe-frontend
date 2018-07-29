import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { MasterComponent } from './master/master.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule
  ],
  declarations: [MasterComponent]
})
export class RecipeModule { }
