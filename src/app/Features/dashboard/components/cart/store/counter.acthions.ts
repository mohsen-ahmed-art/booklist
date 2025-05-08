import { createAction } from "@ngrx/store";

export const increment =createAction('[counter component] Increment');
export const decrement =createAction('[counter component] decrement');
export const reset =createAction('[counter component] reset');