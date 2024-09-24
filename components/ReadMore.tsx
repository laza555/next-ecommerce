import { useState } from "react";

type Props = {
  text: string,
}

export default function ReadMore({ text }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <p className={`transition-all overflow-hidden ${isExpanded ? 'max-h-fit' : `max-h-10`}`}>{text}</p>
      <button
        onClick={toggleExpansion}
        className="w-fit custom-border border-custom-orange p-1 px-4 text-custom-orange"
      >
        {isExpanded ? 'Less' : 'More'}
      </button>
    </div>
  );
}