import Link from "next/link";
import Image from "next/image";
import { CardItemProps } from "@/types/cards";

const CardsItemTwo: React.FC<CardItemProps> = ({
  cardImageSrc,
  cardTitle,
  cardContent,
  projectUrl,
  icon,
}) => {
  const handleButtonClick = () => {
    window.location.href = projectUrl || "";
  };

  return (
    <div className="border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark w-full sm:w-1/2 lg:w-2/3">
        <div className="w-full h-full relative">
          {cardImageSrc ? (
            <Image width={300} height={128} src={cardImageSrc} alt="Cards" />
          ) : null}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 text-white">
          <p>{cardContent}</p>
          </div>
        </div>
      <div className="p-2">
        <h4 className="font-semibold text-black hover:text-primary dark:text-white dark:hover:text-[#CD500C]">
          {cardTitle}
        </h4>
        <div className="h-5 w-5 sm:h-8 sm:w-8">
          <div className="h-5 w-5 sm:h-8 sm:w-8">
            {icon && icon.length > 0 ? (
              <div className="h-5 w-5 flex sm:h-8 sm:w-8">
                {icon.map((iconSrc, index) => (
                  <Image
                    key={index}
                    src={iconSrc}
                    width={50}
                    height={50}
                    alt="Brand"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="flex justify-center rounded bg-primary py-1 px-3  font-small dark:bg-[#CD500C] text-gray hover:bg-opacity-95"
          type="submit"
          onClick={handleButtonClick}
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default CardsItemTwo;
