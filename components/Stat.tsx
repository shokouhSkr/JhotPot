import { formatStat } from "@/helpers/utils";

const Stat = ({ title, stat }: { title: string; stat: number }) => {
  return (
    <div className="flex h-[90px] w-[75px] flex-col gap-2.5 rounded-lg bg-light-gray p-3 text-center">
      <span className="mt-1.5 text-[22px] font-semibold ">{formatStat(stat)}</span>
      <span className="text-xs capitalize text-dark-gray">{title}</span>
    </div>
  );
};

export default Stat;
