import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  recipes : Recipe[]
  selectedRecipe$: Observable<Recipe>

  constructor(private service: RecipeService) { } 

  ngOnInit() {
    this.service.getRecipes().subscribe((response)=> {
      this.recipes = response
    })
  }

}
