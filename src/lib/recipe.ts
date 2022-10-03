/*
 ** Class to represent a recipe
 */

 import { SingleDB } from "./singledb"

 export interface RecipeItem {
   name: string
   amount: number
   units: string
 }
 
 export interface RecipeErrors {
   [key: string]: string
 }
 
 export class Recipe {
   private ingredients: SingleDB<RecipeItem>
 
   constructor() {
     this.ingredients = new SingleDB<RecipeItem>()
   }
 
   addIngredient(name: string, amount: number, units: string) {
     /*
      ** Add an ingredient to the Recipe.
      ** Each ingredient has a name (string),
      ** an amount (number), and units (string).
      ** e.g., ('milk', 0.5, 'cups')
      **
      ** The ingredients themselves are simple
      ** objects so:
      **  {name:'milk', amount:0.5, units:'cups'}
      **
      ** Note: names must be unique.
      **  if the user tries to add a new
      **  ingrediate that is already in
      **  the recipe, this method should
      **  throw an exception.
      */
     this.ingredients.setItem(name, {name, amount, units})
   }
 
   updateIngredient(name: string, newValue: Partial<RecipeItem>): void {
     /*
      ** Update an ingredient with a new information.
      */
     const oldItem = this.ingredients.getItem(name)
     if (oldItem) {
        this.ingredients.setItem(name, {...oldItem, ...newValue})
     }
   }
 
   deleteIngredient(name: string): void {
     /*
      ** Pretty obvious. Delete the ingredient
      ** with the given name.
      **
      ** if the name doesn't exist, throw.
      */
      this.ingredients.removeItem(name)
   }
 
   getIngredients(): RecipeItem[] {
     /*
      ** return an Array of ingredients which
      ** should be simple objects.
      */
     return this.ingredients.allItems()
   }
 
   numberOfIngredients(): number {
     /*
      ** Return the number of ingredients in the Recipe.
      */
     return this.ingredients.length
   }
 }