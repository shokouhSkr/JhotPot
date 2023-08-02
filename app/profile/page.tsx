import { Header } from "@/components";
import { BsBellFill } from "react-icons/bs";

const Profile = () => {
  return (
    <section className="p-4">
      <Header
        component={
          <span className="pr-2">
            <BsBellFill />
          </span>
        }
      />
    </section>
  );
};

export default Profile;
