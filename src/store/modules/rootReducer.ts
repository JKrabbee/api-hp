import { combineReducers } from "@reduxjs/toolkit";
import personagensSlice from "./apiHP/personagensSlice";

export const rootReducer = combineReducers({
  personagens: personagensSlice,
});

export default rootReducer;
