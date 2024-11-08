import Link from 'next/link';
export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href={'/recipe-list'}> Go to recipe list </Link>
      <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto'>
        <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='w-full lg:sticky top-0 sm:flex gap-2'>
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className='w-4/5 rounded object-cover'
              alt={getRecipeDetails?.title || 'Recipe Image'}
            />
          </div>
          <div>
            <h2 className='text-3xl  font-extrabold text-gray-950'>
              {getRecipeDetails?.title}{' '}
            </h2>
            <div className='flex flex-wrap gap-4 mt-5'>
              <p className='text-3xl  font-extrabold text-gray-950'>
                {getRecipeDetails?.mealType?.[0] || 'Meal type not available'}
              </p>
            </div>
            <div className='mt-5'>
              <p className='text-2xl text-gray-800'>
                {' '}
                {getRecipeDetails?.cuisine || 'Cuisine not available'}{' '}
              </p>
            </div>
            <div className='mt-5 '>
              <h3 className='text-lg font-bold  text-gray-700'>Ingredients</h3>
              <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>
                {getRecipeDetails?.extendedIngredients?.length > 0 ? (
                  getRecipeDetails.extendedIngredients.map(
                    (ingredient, index) => (
                      <li key={index}>
                        {ingredient.original || 'Ingredient info not available'}
                      </li>
                    )
                  )
                ) : (
                  <li>No ingredients available</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
