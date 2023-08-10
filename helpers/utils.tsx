import moment from "moment";

export const formatStat = (stat: number): string => {
  const result = stat / 1000;
  if (result >= 1) {
    return result + "k";
  } else {
    return (result * 1000).toString();
  }
};

export const getGreetingPeriod = () => {
  const now: number = Number(moment().format("HH"));

  if (now >= 6 && now < 12) return "Morning";
  else if (now >= 12 && now < 18) return "Noon";
  else if (now >= 18 && now < 21) return "Evening";
  else return "Night";
};
