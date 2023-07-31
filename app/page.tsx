import { Category, Navbar, RecipeCard } from "@/components";

export default function Home() {
  return (
    <section className="ml-[60px]">
      <Navbar />
      <Category />
      <RecipeCard />
    </section>
  );
}
