import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {

  @Input()
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
