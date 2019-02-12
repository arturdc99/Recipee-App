import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();


  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public zoomClicked() {
    this.zoomIn.emit(this.recipe);
  }

  public userClicked() {
    this.userClick.emit(this.recipe.id);
  }
}
