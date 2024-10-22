import CloudinaryButtonUpload from "../../components/CloudinaryButtomUpload";

export default function Login() {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 ">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full px-7 py-6 bg-pumpkinOrange rounded-lg border border-[#6a94c4] flex-col justify-start items-center inline-flex">
            <img
              src="/instaWEEN.png"
              width={96}
              height={96}
              alt="instaWEEN logo"
            />
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-center text-black text-8xl font-bold ">
                InstaWEEN
              </div>
              <div className="self-stretch text-center text-black text-2xl font-bold  py-5">
                An Instagram Powered by Cloudinary Spooky AI Creation
              </div>
              {/* <ButtonLogin text={"Sign in with Facebook"} icon={<FacebookIcon />} /> */}
              {/* <ButtonLogin text={"Sign in with Google"} icon={<GoogleIcon />} /> */}
              {/* <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-3xl font-semibold uppercase leading-none tracking-wide">
                  Or
                </div>
              </div> */}
              <CloudinaryButtonUpload />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
