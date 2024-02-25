import { BRAND } from "../../types/brands";
import Image from "next/image";
import Experience from "./experience";

const brandData: BRAND[] = [
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    name: "React",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
    name: "Next.js",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "Javascript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    name: "Typescript",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    name: "HTML",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    name: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-plain.svg",
    name: "Material UI",
  },
  {
    logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    name: "Figma",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    name: "MongoDB",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    name: "MongoDB",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 place-items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 bg-[#4238d3] dark:bg-[#F58A51] h-full p-20 rounded-tl-[80px] rounded-br-[80px]">
          {brandData.map((brand, key) => (
            <div
              key={key}
              className={`flex flex-col items-center xl:p-3 ${
                key !== brandData.length - 1
                  ? "border-b border-stroke dark:border-strokedark"
                  : ""
              }`}
            >
              <div className="h-5 w-5 sm:h-8 sm:w-8">
                <Image src={brand.logo} width={50} height={50} alt="Brand" />
              </div>
              <p className="text-white text-sm  dark:text-white">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
        <div className="sm:col-span-1">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Skills;
