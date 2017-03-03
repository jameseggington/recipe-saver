import {
  initialState,
  recipeTemplate
} from './initialState';
import {
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  SET_CURRENT_RECIPE_ID
} from './actions';

function app(state, action) {
  if (typeof(state) === "undefined") {
    return Object.assign({}, initialState);
  }
  switch (action.type) {
    case ADD_RECIPE_SUCCESS:
      var newState = Object.assign({}, state);
      newState.recipes[action.id] = action.recipe;
      return newState;
    case ADD_RECIPE_FAILURE:
      var newState = Object.assign({}, state);
      newState.errors.addRecipeError = action.error;
      return newState;

    case SET_CURRENT_RECIPE_ID:
      var newState = Object.assign({}, state);
      newState.pages.recipe.id = action.id;
      return newState;

    default:
      return state;
  }
}

export default app;
