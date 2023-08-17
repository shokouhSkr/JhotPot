import { Header, RecipeForm, UploadImage } from "@/components";
import { PiCaretLeftBold } from "react-icons/pi";

const MyRecipe = () => {
  return (
    <section className="bg-navbar p-4">
      <Header icon={<PiCaretLeftBold />} title="Upload new recipe" />
      <UploadImage />
      <RecipeForm />
    </section>
  );
};

export default MyRecipe;
