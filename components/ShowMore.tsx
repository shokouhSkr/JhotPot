"use client";

import { useState } from "react";
import { ShowMoreProps } from "@/types";

const ShowMore = ({ text, maxChars }: ShowMoreProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <p>
      {expanded ? text : text.slice(0, maxChars)}
      {/* ... */}
      {text.length > maxChars && !expanded && "."}
      {text.length > maxChars && (
        <button onClick={handleClick} className="ml-1 font-semibold">
          {expanded ? "less" : "more"}
        </button>
      )}
    </p>
  );
};

export default ShowMore;
