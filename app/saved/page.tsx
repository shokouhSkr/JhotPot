import { Category, Header, SavedCardRecipe } from "@/components";

const Saved = () => {
  return (
    <section>
      <div className="sticky left-0 right-0 top-0 z-20 bg-white p-4">
        <Header title="Saved" component={<span className="pr-2 text-xs">22 recipes</span>} />
        <Category />
      </div>

      <div className="flex flex-col gap-9 p-6">
        <SavedCardRecipe />
        <SavedCardRecipe />
        <SavedCardRecipe />
        <SavedCardRecipe />
      </div>
    </section>
  );
};

export default Saved;
