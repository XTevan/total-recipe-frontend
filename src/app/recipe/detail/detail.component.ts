import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() recipe: Recipe
  @Output() close: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  parseDate(date: string) {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleDateString()
  }

  closeDetail() {
    this.close.emit();
  }

  formatIngredient(ingredient: any) {
    let formattedIngredient = new String()

    if (typeof ingredient  !== "string") {

      let keys = Object.keys(ingredient)
      for (let k of keys) {
        formattedIngredient += ingredient[k] + " "
      }
    } else {
      formattedIngredient = ingredient
    }
    return formattedIngredient
  }

}
