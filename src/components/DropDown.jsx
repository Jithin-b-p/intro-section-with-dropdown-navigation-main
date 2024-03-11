// import DropDownItem from "./DropDownItem";

import DropDownItem from "./DropDownItem";

/* eslint-disable react/prop-types */
function DropDown({ items, isMenuOpen, customStyle = "" }) {
  console.log(items);
  return (
    <ul
      className={`${
        isMenuOpen
          ? "!translate-y-0 static visible sm:h-auto sm:opacity-100"
          : "absolute invisible"
      } sm:absolute sm:h-0 sm:overflow-hidden ${customStyle} sm:rounded-lg sm:shadow-3xl sm:bg-white flex flex-col gap-[1.6rem] sm:gap-[0.7rem] sm:opacity-0 sm:text-[0.825rem] sm:w-max transition-visibility`}
    >
      {items.map((item) => (
        <DropDownItem key={item.id} url={item.iconUrl} listItem={item.name} />
      ))}
    </ul>
  );
}

export default DropDown;
