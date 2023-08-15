import { Header, Upload } from "@/components";
import { PiCaretLeftBold } from "react-icons/pi";

const MyRecipe = () => {
  return (
    <section className="bg-navbar p-4">
      <Header icon={<PiCaretLeftBold />} title="Upload new recipe" />
      <Upload />
    </section>
  );
};

export default MyRecipe;
