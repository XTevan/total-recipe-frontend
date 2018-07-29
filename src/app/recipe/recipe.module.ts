import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RecipeRoutingModule } from './recipe-routing.module';
import { MasterComponent } from './master/master.component';

@NgModule({
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule
  ],
  declarations: [MasterComponent]
})
export class RecipeModule { }
