import { InfoCardProps } from "@/types";

const InfoCard = ({ icon, text }: InfoCardProps) => (
  <div className="flex items-center gap-1">
    <span className="text-lg">{icon}</span>
    <span className="text-xs">{text}</span>
  </div>
);

export default InfoCard;
