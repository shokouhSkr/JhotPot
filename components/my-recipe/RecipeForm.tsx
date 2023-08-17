import { Input, SelectCuisine, TimeRangeSlider, AddIngredients, Calories } from "@/components";

const RecipeForm = () => {
  return (
    <form className="mx-2 space-y-5">
      <Input title="Name" />
      <Input title="Description" />

      <TimeRangeSlider />

      <SelectCuisine />

      <AddIngredients />

      <Calories />
    </form>
  );
};

export default RecipeForm;
