"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center dark:bg-boxdark h-screen">
        <div className="max-w-7xl w-full flex justify-around p-8 pt-20">
          <div className="w-1/2 pt-10">
            <p className="text-2xl font-mono font-bold dark:text-white">
              Hello, It's Me
            </p>
            <h1 className="mb-2 text-3xl font-mono font-semibold text-primary dark:text-[#CD500C]">
              Zainab Jafari
            </h1>
            <p className="text-lg leading-loose">
              I am an ambitious and dedicated front-end developer student at
              KYH. I'm currently seeking opportunities to enhance my skills and
              contribute to exciting projects. I'm graduating soon and eager to
              start a career in web development. 
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="relative sm:h-80 sm:w-80">
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
    </>
  );
};

export default Profile;
