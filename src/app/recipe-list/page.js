import RecipeList from '@/components/recipe-list';

async function fetchListOfRecipes(retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const apiResponse = await fetch(
        'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian,dessert&number=2000&addRecipeInformation=true', // Fetch 20 recipes
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host':
              'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'x-rapidapi-key':
              'a747ee0c3cmsh8ea59c25241a4b3p11b86bjsn92453847423b', // Replace with your API key
          },
        }
      );

      if (!apiResponse.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const data = await apiResponse.json();
      console.log(data);
      return data?.recipes || [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  console.log(recipeList);
  return <RecipeList recipeList={recipeList} />;
}
