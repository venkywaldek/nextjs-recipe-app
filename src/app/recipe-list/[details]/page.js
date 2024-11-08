import RecipeDetailsItem from '@/components/recipe-details';

async function fetchRecipeDetails(currentRecipeId) {
  if (!currentRecipeId) {
    throw new Error('Recipe ID is required');
  }

  try {
    const apiResponse = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${currentRecipeId}/information`,
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
      throw new Error(
        `Failed to fetch recipe detals. Status: ${Response.status}`
      );
    }

    const data = await apiResponse.json();
    return data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
}

export default async function RecipeDetails({ params }) {
  const recipeId = params?.details;
  const getRecipeDetails = await fetchRecipeDetails(recipeId);
  if (!getRecipeDetails) {
    return <p>Error loading recipe details . Please try again later</p>;
  }
  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
}
