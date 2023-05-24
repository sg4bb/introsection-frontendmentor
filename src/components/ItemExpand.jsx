import { useState } from "react";
import Image from "next/image";

//assets
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

const ItemExpand = ({ items, title, haveIcon }) => {
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
        } static md:absolute top-0 md:top-7 right-0 bg-transparent md:bg-white  rounded-none md:rounded-lg text-sm shadow-none md:shadow-lg flex flex-col p-6 md:px-6 md:py-8 ${
          haveIcon ? "md:w-[9.2rem]" : ""
        }`}
      >
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              className="flex gap-2 text-medium-gray font-medium"
              key={item.name}
            >
              {item.iconPath && (
                <span>
                  {item.iconPath && (
                    <Image
                      src={require(`src/assets/${item.iconPath || ""}.svg`)}
                      alt={`${item.location}Icon`}
                      width={16}
                      height={16}
                    />
                  )}
                </span>
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
