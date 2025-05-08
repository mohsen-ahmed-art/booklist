import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.acthions";

export const intialstate=0;
 export const counterReduser=createReducer(intialstate,
    
    
    on(increment,(state)=> state+1),
    on(decrement,(state)=> state-1),
    on(reset,()=> intialstate),


)