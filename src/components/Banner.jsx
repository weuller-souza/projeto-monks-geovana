import { SlArrowDown } from "react-icons/sl";

const Banner = () => {
  return (
    <div className="flex flex-col text-center lg:text-start justify-between py-40 container-paddingx bg-[url('/image-banner.png')] bg-cover bg-no-repeat bg-top h-screen w-full text-white">
      <div className="flex flex-col items-center lg:items-start gap-10">
        <p className="text-5xl lg:text-[106px] font-semibold">Lorem ipsum</p>
        <p className="text-2xl md:text-4xl mb-12 md:w-[17em] lg:w-auto leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <button className="text-2xl lg:text-[28px] w-60 py-4 bg-[#00A4EF]">Lorem ipsum</button>
      </div>
      <div className="flex justify-between">
        <SlArrowDown className="text-6xl lg:flex hidden" />
        <img
          className="w-32 cursor-pointer lg:flex hidden"
          src="./image-logo.svg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Banner;
