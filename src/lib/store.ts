import {writable} from "svelte/store"
import { Recipe } from "./recipe"

export const theRecipe = writable(new Recipe())
