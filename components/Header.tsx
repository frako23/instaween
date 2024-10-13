import React from "react";
import { MdHeartBroken } from "react-icons/md";

const Header = () => {
  return (
    <div className="h-20 px-2 bg-pumpkinOrange justify-around items-start gap-2 inline-flex w-full">
      <div className="grow shrink basis-0 h-20 py-4 justify-center items-center gap-1 flex text-5xl text-black w-3/4">
        InstaWEEEN
      </div>

      <div className="grow shrink basis-0 h-20 py-3 flex-col justify-center items-center gap-1 inline-flex w-1/4">
        <MdHeartBroken className="w-8 h-8 text-black" />
      </div>
    </div>
  );
};

export default Header;
