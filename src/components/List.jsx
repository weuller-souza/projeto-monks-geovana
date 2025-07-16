import React from "react";

const colors = [
  "bg-[#0072C6]",
  "bg-[#2C5898]",
  "bg-[#207245]",
  "bg-[#CB4A32]",
  "bg-[#733781]",
  "bg-[#00AFF0]",
  "bg-[#094AB2] md:flex hidden",
  "bg-[#0073C6] md:flex hidden",
  "bg-[#0093BE] md:flex hidden",
  "bg-[#5558AF] md:flex hidden",
];

const List = () => {
  return (
    <div className="text-center flex flex-col container-paddingx container-paddingy gap-10">
      <p className="text-[#2571B7] text-2xl lg:text-[40px] font-semibold">Lorem Ipsum</p>
      <p className="text-[#737373] leading-relaxed text-lg lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </p>
      <div className="flex flex-row flex-wrap gap-7 justify-around items-center">
        {colors.map((bg, i) => (
          <div
            key={i}
            className={`${bg} text-start text-white py-5 px-8 flex gap-5 items-center rounded max-w-[768px] md:w-[48%]`}
          >
            <img src="./image-list.svg" alt="ícone de alvo" className="w-16" />
            <div>
              <p className="font-semibold text-xl">Lorem ipsum</p>
              <p className="text-sm md:text-[16px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
