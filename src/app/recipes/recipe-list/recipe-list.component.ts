import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [ new Recipe('test', 'this is a test', 'http://www.greenderella.com/wp-content/uploads/2011/12/recipe-book.jpg'),
  new Recipe('test 2', 'this is a test 2', 'http://www.greenderella.com/wp-content/uploads/2011/12/recipe-book.jpg')];
  
  constructor() { }

  ngOnInit() {
  }

onRecipeSelected(recipeEl){
  this.recipeWasSelected.emit(recipeEl)
}



}
