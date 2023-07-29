import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-sky-100">
      <div className="flex flex-col justify-center items-center bg-white rounded-xl">
        <div>
          <img
            className="img mt-5 mx-5 rounded-xl "
            src="/images/image-qr-code.png"
            alt="logo"
          />
        </div>
        <div className=" mt-5 flex flex-col justify-center items-center w-64 ">
          <h2 className="font-bold text-xl text-center">
            Improve your front-end skills by building projects
          </h2>
          <p className="text-center text-sm mt-5 pb-10 text-neutral-400 ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
