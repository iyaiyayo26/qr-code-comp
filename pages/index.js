// import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-4 m-10 w-6/12 rounded-2xl bg-white">
        <img src="/image-qr-code.png" alt="qr code" className="rounded-lg" />
        <p className="font-bold lg:text-4xl sm:text-lg text-center lg:my-8 font-outfit sm:my-4">Improve your front-end skills by building projects</p>
        <p className="font-outfit sm:text-sm lg:text-2xl text-center text-slate-400 lg:mb-4">Scan the QR code to visit Frontend Mentor and take your coding skill to the next level</p>
      </div>
    </>
  );
}
