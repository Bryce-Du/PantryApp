import { combineReducers } from 'redux';
import recipesReducer from './recipes';
import usersReducer from './users'

export default combineReducers({
  recipesReducer,
  usersReducer
});