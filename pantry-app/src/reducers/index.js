import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import usersReducer from './users'
import ingredientsReducer from './ingredients'
import pantryReducer from './pantry'

export default combineReducers({
  recipesReducer,
  usersReducer,
  ingredientsReducer,
  pantryReducer
});