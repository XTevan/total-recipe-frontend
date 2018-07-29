import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "",
  loadChildren: "./recipe/recipe.module#RecipeModule"
},{
  path: "**",
  redirectTo: ""
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
