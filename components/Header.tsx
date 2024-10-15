"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdHeartBroken } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="h-20 px-2 bg-pumpkinOrange justify-around items-start gap-2 inline-flex w-full fixed z-10">
      <div className=" shrink basis-0 h-20 py-4 justify-center items-center flex text-5xl text-black w-3/4 gap-4">
        <Image
          src="/instaWEEN.png"
          width={48}
          height={48}
          alt="instaWEEN logo"
        />
        InstaWEEEN
      </div>

      <div className=" shrink basis-0 h-20 py-3 gap-4 justify-center items-center inline-flex w-1/4">
        {session ? (<MdHeartBroken className="w-8 h-8 text-black" />) : null}
        {session ? (<RiLogoutBoxFill onClick={() => signOut()} className="w-8 h-8 text-black" />) : (<Link href="/"><RiLoginBoxFill className="w-8 h-8 text-black" /></Link>)}
      </div>
    </div>
  );
};

export default Header;
