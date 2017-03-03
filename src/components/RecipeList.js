import React, {Component} from 'react';
import {connect} from 'react-redux';

import RecipeListRecipe from './RecipeListRecipe';

class RecipeList extends Component {
  render() {
    return <div className="row">
      {Object.keys(this.props.recipes).map(function(recipeId){
        var recipe = this.props.recipes[recipeId];
        return <RecipeListRecipe key={recipeId} id={recipeId} recipe={recipe}/>;
      }.bind(this))}
    </div>;
  }
}

export default connect(
  function(state) {
    return {
      recipes: state.recipes || {}
    };
  },
  function(dispatch) {
    return {};
  }
)(RecipeList);
