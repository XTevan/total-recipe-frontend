import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  recipes: Recipe[]
  selectedRecipe$: Subject<Recipe> = new Subject()

  constructor(private service: RecipeService, private activeRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.service.getRecipes().subscribe((response) => {
      this.recipes = response
      const id = Number(this.activeRoute.snapshot.params.id)
      if (id) {
        this.selectRecipe(this.recipes.find((recipe) => recipe.id === id))
      }
    })

  }

  selectRecipe(recipe: Recipe | null) {
    this.selectedRecipe$.next(recipe)

    if(recipe == null) {
      this.router.navigate(["/"])
    }
  }

  onRecipeClick(event: MouseEvent, recipe: Recipe) {
    this.selectRecipe(recipe)
    event.preventDefault()
  }


}
