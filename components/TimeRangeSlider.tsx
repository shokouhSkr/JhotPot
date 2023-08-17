// import classNames from "classnames";

const TimeRangeSlider = () => {
  return (
    // text-xs & sm, font-semibold & medium,
    // <div className={classNames(className, "text-xs font-semibold")}>
    <div className="text-sm font-medium">
      <div className="flex-between">
        <span className="text-main-gray">Time to cook</span>
        <span className="text-dark-gray">50 min</span>
      </div>

      <input
        type="range"
        min={1}
        max={5}
        // step="1"
        // value={3}
        // onChange={updatePrice}
        className="h-[4px] w-full appearance-none rounded-md bg-orange accent-orange "
      />
    </div>
  );
};

export default TimeRangeSlider;
