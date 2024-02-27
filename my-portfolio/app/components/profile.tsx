"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <>
    <div className="flex justify-center dark:bg-boxdark h-full">
  <div className="max-w-7xl w-full flex flex-col sm:flex-row justify-around p-8 pt-20">
    <div className="w-full sm:w-1/2 pt-10">
      <p className="text-2xl font-mono font-bold dark:text-white">
        Hello, It's Me
      </p>
      <h1 className="mb-2 text-3xl font-mono font-semibold text-primary dark:text-[#CD500C]">
        Zainab Jafari
      </h1>
      <p className="text-lg leading-loose">
        I am currently studying to become a frontend developer at KYH in
        Stockholm and will complete my education in May. With a passion for web
        development and a strong desire to contribute to exciting projects, I
        am now seeking opportunities to start my career as a junior front-end
        developer.
      </p>
    </div>
    <div className="w-full sm:w-1/2 flex justify-center">
      <div className="relative sm:h-80 sm:w-80">
        <Image
          src={"/images/Photo.jpg"}
          width={900}
          height={900}
          alt="profile"
          className="rounded-full w-full"
        />
      </div>
    </div>
  </div>
</div>;

    </>
  );
};

export default Profile;
