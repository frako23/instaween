import FacebookIcon from "@/utils/icons/FacebookIcon";
import GoogleIcon from "@/utils/icons/GoogleIcon";
import { SiGhostery } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full px-7 py-6 bg-pumpkinOrange rounded-lg border border-[#6a94c4] flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-center text-black text-8xl font-bold leading-loose">
              InstaWEEN
            </div>
            <div className="self-stretch text-center text-black text-2xl font-bold leading-loose py-5">
              An Instagram Powered by Cloudfare HalloWeen AI
            </div>
            <div className="self-stretch  px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-ghostGreen text-3xl font-semibold leading-[18px]">
                    Sign in with Facebook
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <FacebookIcon />
                </div>
              </div>
            </div>
            <div className="self-stretch  px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-ghostGreen text-3xl font-semibold leading-[18px]">
                    Sign in with Google
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <GoogleIcon />
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-1 inline-flex">
              <div className="grow shrink basis-0 text-center text-[#464749] text-3xl font-semibold uppercase leading-none tracking-wide">
                Or
              </div>
            </div>
            <div className="self-stretch h-[62px] px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-ghostGreen text-3xl font-semibold leading-[18px]">
                    Ghost Sign in
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <SiGhostery className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
