/* eslint-disable react/prop-types */
function DropDownItem({ url = "", listItem }) {
  return (
    <li className="flex justify-start items-center gap-4 h-[1.1rem]">
      {url && (
        <div className="w-[15%]">
          <img src={url} alt="" width={20} height={10} />
        </div>
      )}
      <span>{listItem}</span>
    </li>
  );
}

export default DropDownItem;
