import React, { PropTypes } from 'react';
import {connect} from 'react-redux';

import {setCurrentRecipeId} from './../actions.js';

class Recipe extends React.Component {
  componentWillMount() {
    this.props.setCurrentRecipeId(this.props.params.id);
  }

  render() {
    return <div>
      <h2 className="section">{this.props.title}</h2>
      <div className="section row">
        <div className="col-xs-12"><strong>Prep:</strong> {this.props.prepTime}m <strong>Cook:</strong> {this.props.cookTime}m <strong>Total:</strong> {this.props.prepTime + this.props.cookTime}m</div>
        <div className="col-xs-12"><strong>Serves:</strong> {this.props.serves}</div>
      </div>
      <div className="section">
        <h3>Ingredients</h3>
        <ul className="recipe-list">
          {Object.keys(this.props.ingredients).map(function(ingredientId){
            var ingredient = this.props.ingredients[ingredientId];
            return <li key={ingredientId}>{ingredient}</li>;
          }.bind(this))}
        </ul>
      </div>
      <div className="section">
        <h3>Steps</h3>
        <ol className="recipe-list">
          {Object.keys(this.props.steps).map(function(stepId){
            var step = this.props.steps[stepId];
            return <li key={stepId}>{step}</li>;
          }.bind(this))}
        </ol>
      </div>
      <div></div>
    </div>;
  }
}

export default connect(
  function(state) {
    var recipe = state.recipes[state.pages.recipe.id] || {};

    return {
      title: recipe.title || "",
      prepTime: recipe.prepTime || 0,
      cookTime: recipe.cookTime || 0,
      serves: recipe.serves || 0,
      ingredients: recipe.ingredients || {},
      steps: recipe.steps || {},
      notes: recipe.notes || {}
    };
  },
  function(dispatch) {
    return {
      setCurrentRecipeId: function(recipeId) {
        dispatch(setCurrentRecipeId(recipeId));
      }
    };
  }
)(Recipe);
