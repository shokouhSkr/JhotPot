export const formatStat = (stat: number): string => {
  const result = stat / 1000;
  if (result >= 1) {
    return result + "k";
  } else {
    return (result * 1000).toString();
  }
};
