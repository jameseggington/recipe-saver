import React, {Component} from 'react';
import {Link} from 'react-router';

class RecipeListRecipe extends Component {
  render() {
    return <div className="col-md-3">
      <div className="panel panel-default">
        <div className="panel-body">
          <Link to={"/recipe/" + this.props.id}>{this.props.recipe.title}</Link>
        </div>
      </div>
    </div>;
  }
}

export default RecipeListRecipe;
