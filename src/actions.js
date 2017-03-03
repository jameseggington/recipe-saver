const ATTEMPT_ADD_RECIPE = "ATTEMPT_ADD_RECIPE";
var attemptAddRecipe = function(recipe){
  return function(dispatch) {
    dispatch(addRecipeSuccess(Date.now() + Math.random(1000000) + "", recipe));
  };
};

const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
var addRecipeSuccess = function(id, recipe){
  return{
    type: ADD_RECIPE_SUCCESS,
    id: id,
    recipe: recipe
  };
};

const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";
var addRecipeFailure = function(error){
  return{
    type: ADD_RECIPE_FAILURE,
    error: error
  };
};

const SET_CURRENT_RECIPE_ID = "SET_CURRENT_RECIPE_ID";
var setCurrentRecipeId = function(id){
  return{
    type: SET_CURRENT_RECIPE_ID,
    id: id
  };
};

export {
  attemptAddRecipe,
  ADD_RECIPE_SUCCESS,
  ADD_RECIPE_FAILURE,
  setCurrentRecipeId,
  SET_CURRENT_RECIPE_ID
};
