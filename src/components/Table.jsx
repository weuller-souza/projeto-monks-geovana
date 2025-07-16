import React from "react";
const cards = [
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    title: "Lorem ipsum dolor",
    text: "Lorem çlajslkdjalkjdsadipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

const Table = () => {
  return (
    <div className="flex flex-col items-center container-paddingx container-paddingy pb-16 lg:pb-24 gap-10">
      <p className="text-[#2571B7] text-2xl lg:text-[40px] font-semibold">
        Lorem ipsum dolor
      </p>
      <div className="flex flex-col md:flex-row w-full">
        {cards.map((card, index) => (
          <div key={index} className="border-4 p-8 text-center flex flex-col gap-4">
            <h3 className="text-[#EB4A24] font-semibold mb-2 text-xl">{card.title}</h3>
            <p className="text-[#737373] text-sm md:text-[16px]">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Table;
