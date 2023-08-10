import Image from "next/image";
import img from "@/public/images/person.jpg";

const CardReview = () => {
  return (
    <div className="rounded-md bg-light-gray p-2.5 text-dark-gray">
      <div className="mb-3 flex items-start justify-between">
        {/* AVATAR */}
        <div className="mb-1 flex items-center gap-2">
          <div className="avatar">
            <div className="relative h-12 w-12 rounded-full">
              <Image src={img} alt="person" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="-mb-1 text-sm font-semibold">John Smith</p>
            <span className="text-xs font-medium text-main-gray">59 min ago</span>
          </div>
        </div>

        {/* STARS RATE */}
        <div className="rating rating-sm mt-1">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" disabled />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" disabled />
        </div>
      </div>

      {/* COMMENT */}
      <p className="text-[13px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae dolore inventore nulla
        magnam nisi!
      </p>
    </div>
  );
};

export default CardReview;
