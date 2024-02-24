"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center dark:bg-boxdark h-screen">
        <div className="max-w-7xl w-full flex justify-around p-8 pt-20">
        <div className="w-1/2 pt-10">
  <p className="text-2xl font-mono font-bold text-[#118a7e] dark:text-white">
    Hello, It's Me
  </p>
  <h1 className="mb-2 text-3xl font-mono font-semibold text-[#118a7e] dark:text-white">
    Zainab Jafari
  </h1>
  <p className="text-lg leading-loose">
    An ambitious and dedicated front-end developer student at KYH. Currently actively seeking opportunities to enhance my skills and contribute to exciting projects. Graduating soon and eager to start a career in web development.
  </p>
</div>

          <div className="w-1/2 flex justify-center">
  <div className="relative sm:h-80 sm:w-80">
    {/* Cirkel bakom bilden */}
    <div className="absolute inset-0 flex items-center justify-center bg-blue-500 rounded-full overflow-hidden">
      {/* Bild */}
      <Image
        src={"/images/Photo.jpg"}
        width={900}
        height={900}
        alt="profile"
        className="rounded-full"
      />
    </div>
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default Profile;
