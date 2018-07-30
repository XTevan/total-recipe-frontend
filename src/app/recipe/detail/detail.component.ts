import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() recipe: Recipe

  constructor() { }

  ngOnInit() {
  }

  parseDate(date: string) {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleDateString()
  }

}
