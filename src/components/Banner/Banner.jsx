import React from "react";
import Button_primary from "../Buttons/Button_primary";
import BannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="pt-[85px]">
      <div className="flex bg-[#f3f3f3] max-w-[1300px] mx-auto px-5 py-9 rounded-[10px]">
        <div className="w-1/2 flex flex-col items-start justify-center gap-3 pl-24">
      
          <h2 className="text-6xl">Books to freshen up <br /> your bookshelf</h2>
          <Button_primary buttonText={"View The List"}></Button_primary>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img className="object-cover" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
