import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center container-paddingy container-paddingx gap-10">
      <p className="text-center text-[#737373] text-[16px] md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="bg-gray-200 p-8 w-full max-w-md rounded-sm">
        <form className="flex flex-col gap-5">
          {[...Array(5)].map((_, index) => (
            <div key={index}>
              <label className="block text-[#737373] text-[12px] md:text-sm mb-1">
                Lorem ipsum
              </label>
              <input
                type="text"
                className="w-full p-3 text-sm md:text-xl font-normal border border-#2571B7 focus:outline-none focus:ring-2 focus:#2571B7"
                placeholder="Lorem ipsum"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-[#00A4EF] text-white font-normal text-xl md:text-2xl py-3 hover:bg-[#004dd1] transition-colors mt-6"
          >
            Lorem ipsum
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
