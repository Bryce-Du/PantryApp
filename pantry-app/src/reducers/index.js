import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import usersReducer from './users'
import ingredientsReducer from './ingredients'
import pantryReducer from './pantry'
import makeablesReducer from './makeable'

export default combineReducers({
  recipesReducer,
  usersReducer,
  ingredientsReducer,
  pantryReducer,
  makeablesReducer
});