import Link from "next/link";
import Image from "next/image";
import { CardItemProps } from "@/types/cards";

const CardsItemTwo: React.FC<CardItemProps> = ({
  cardImageSrc,
  cardTitle,
  cardContent,
  projectUrl
}) => {
  const handleButtonClick = () => {
    window.location.href = projectUrl || ""; 
  };

  return (
    <div className="border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark w-full sm:w-1/2 lg:w-2/3">
    <Link href="#" className="flex p-1">
      <div className="w-full h-full relative">
        {cardImageSrc ? (
          <Image width={300} height={128} src={cardImageSrc} alt="Cards" />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 text-white">
          <p className="text-center">Your Text Here</p>
        </div>
      </div>
    </Link>
  
    <div className="p-2">
      <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
        <Link href="#">{cardTitle}</Link>
      </h4>
      <p>{cardContent}</p>
      <button onClick={handleButtonClick}>View Project</button>
    </div>
  </div>
  
  );
};

export default CardsItemTwo;
