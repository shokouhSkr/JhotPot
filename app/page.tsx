import { Category, Sidebar, Recipes } from "@/components";

export default function Home() {
  return (
    <section className="ml-[60px] p-4">
      <h1 className="mb-6 mt-2 max-w-[230px]">
        Simple recipes with your <span className="text-orange">fridge's ingredients</span>
      </h1>
      <Category image />
      <Sidebar />
      <Recipes />
      {/* <div className="h-[calc(100dvh-50px) bg-red-200">ff</div> */}
    </section>
  );
}
