import { useState } from "react";
import Image from "next/image";

//assets
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import RemindersIcon from "@/components/icons/RemindersIcon";
import PlanningIcon from "@/components/icons/PlanningIcon";
import TodoIcon from "@/components/icons/TodoIcon";

const ItemExpand = ({ items, title }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="relative">
      <button className="flex gap-2 items-center" onClick={handleExpand}>
        <span className="font-semibold">{title}</span>

        <span>
          <ArrowDownIcon className={`${expand && "rotate-180"} duration-300`} />
        </span>
      </button>

      <div
        className={`${
          expand ? "block" : "hidden"
        } static md:absolute top-0 md:top-7 right-0 bg-transparent md:bg-white rounded-none md:rounded-lg text-sm shadow-none md:shadow-lg flex flex-col p-6`}
      >
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              className="flex gap-2 text-medium-gray font-medium"
              key={item.name}
            >
              {item.icon && (
                <Image
                  src={`src/assets/${item.icon}.svg`}
                  width={16}
                  height={16}
                  alt="img"
                />
              )}

              <span className={`${item.name.length > 7 && "truncate"}`}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemExpand;
