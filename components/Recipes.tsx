import { CardRecipe } from "@/components";

const Recipes = () => {
  return (
    <section className="hide-scrollbar mt-6 flex h-[420px] items-end overflow-scroll">
      <div className="flex items-start space-x-8">
        <CardRecipe />
        <CardRecipe />
        <CardRecipe />
      </div>
    </section>
  );
};

export default Recipes;
