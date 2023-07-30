const SingleRecipe = ({ params }: { params: { recipeId: string } }) => {
  return <div>SingleRecipe - {params.recipeId}</div>;
};

export default SingleRecipe;
