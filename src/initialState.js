/*
 * Application state, including individual state for each page.
 */

const initialState = {
  recipes: {
    1: {
      title: "Pizza Dough",
      prepTime: 50,
      cookTime: 0,
      serves: 3,
      ingredients: {
        1: "375ml (1 1/2 cups) warm water",
        2: "Pinch of caster sugar",
        3: "2 teaspoons (7g/1 sachet) dried yeast",
        4: "600g (4 cups) plain flour, plus extra for dusting",
        5: "1 teaspoon salt",
        6: "60ml (1/4 cup) olive oil, plus extra for brushing"
      },
      steps: {
        1: "Combine the water, yeast and sugar in a small bowl. Set aside for 5 minutes or until foamy. Combine the flour and salt in a large bowl and make a well in the centre. Add the yeast mixture and oil. Use a round-bladed knife in a cutting motion to mix until the mixture is combined. Use your hands to bring the dough together in the bowl.",
        2: "Brush a bowl lightly with oil. Turn the dough onto a lightly floured surface and knead for 10 minutes or until smooth and elastic. Place in the prepared bowl and turn to coat in oil. Cover with plastic wrap and set aside in a warm, draught-free place to rise for 30 minutes or until dough doubles in size.",
        3: "Dust work surface with flour. Knead dough and form into a long cylinder. Divide into thirds. Use a rolling pin to roll each third into a 20cm disc, then add your favourite toppings and bake."
      },
      notes: {}
    },
    2: {
      title: "Pizza Sauce",
      prepTime: 5,
      cookTime: 40,
      ingredients: {
        1: "1/4 cup (60ml) olive oil",
        2: "2 x 400g cans crushed tomatoes",
        3: "2 garlic cloves, crushed",
        4: "1 teaspoon dried oregano",
        5: "1/2 teaspoon sugar"
      },
      steps: {
        1: "Heat the oil in a large saucepan over medium heat. Add remaining ingredients, turn heat to low and simmer for 40 minutes. Press sauce through a sieve, discarding solids, and season with salt and pepper. Keep refrigerated until ready to use."
      },
      serves: 3,
      notes: {}
    }
  },
  errors: {
    addRecipeError: ""
  },
  pages: {
    home: {},
    recipe: {}
  }
};

const recipeTemplate = {
  title: "",
  prepTime: 0,
  cookTime: 0,
  ingredients: {},
  steps: {},
  serves: 0,
  notes: {}
};

export {
  initialState,
  recipeTemplate
};
