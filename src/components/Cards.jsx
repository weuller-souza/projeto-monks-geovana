import React from "react";

const cards = [
  {
    color: "bg-[#7FBA00]",
    textColor: "text-[#7FBA00]",
    borderColor: "border-[#7FBA00]",
    hoverBg: "hover:bg-[#7FBA00]",
    icon: "./image-cards1.svg",
  },
  {
    color: "bg-[#00A4EF]",
    textColor: "text-[#00A4EF]",
    borderColor: "border-[#00A4EF]",
    hoverBg: "hover:bg-[#00A4EF]",
    icon: "./image-cards2.svg",
  },
  {
    color: "bg-[#FFB900]",
    textColor: "text-[#FFB900]",
    borderColor: "border-[#FFB900]",
    hoverBg: "hover:bg-[#FFB900]",
    icon: "./image-cards3.svg",
  },

];

const Cards = () => {
  return (
    <div className="text-center gap-14 flex flex-col justify-center items-center container-paddingx container-paddingy">
      <p className="text-[#2571B7] text-2xl lg:text-[40px] font-semibold">
        Lorem Ipsum
      </p>
      <div className="flex md:flex-row flex-col gap-10 justify-around w-full">
        {cards.map((card, i) => (
          <div key={i} className="flex justify-between border-b-4 pb-8 md:p-0 md:border-none md:flex-col flex-row-reverse md:items-center space-y-6">
            <div className="flex">
              <img src={card.icon} className="rounded-full md:w-[160px] w-[100px]" />
            </div>
            <div className="flex flex-col md:items-center items-start space-y-6">
              <h3 className={`${card.textColor} font-semibold text-[16px] md:text-xl`}>
                Lorem ipsum dolor
              </h3>
              <div className="w-10 h-1 bg-gray-200 rounded md:flex hidden"></div>
              <p className="text-[#737373] max-w-96 text-start md:text-center text-sm md:text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
              <button
                className={`border ${card.borderColor} ${card.textColor} text-[16px] font-normal px-4 py-1 rounded ${card.hoverBg} hover:text-white transition duration-500`}
              >
                Lorem ipsum
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
