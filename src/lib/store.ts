import { writable } from 'svelte/store';
import type { RecipeItem } from './recipeItem';

export const theRecipe = writable<RecipeItem[]>([]);
