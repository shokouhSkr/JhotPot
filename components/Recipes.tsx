import { CardRecipe } from "@/components";
import { recipes } from "@/helpers/constants";

const Recipes = () => {
  return (
    <section className="hide-scrollbar mt-6 flex h-[420px] items-end overflow-scroll">
      <div className="flex items-start space-x-8">
        {recipes.map((recipe) => {
          return <CardRecipe key={recipe.title} {...recipe} />;
        })}
      </div>
    </section>
  );
};

export default Recipes;
