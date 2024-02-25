import CardsItemTwo from "./cardItems";

const cardsItemTwoData = [
    {
      cardImageSrc: "/images/projec.png",
      cardTitle: "jskddjsjsj",
      cardContent: "hehehe",
      projectUrl: "https://github.com/ZainabJafari/Front-End_project",
      icon: ["https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" ]
    },
  
    {
      cardImageSrc: "/images/project2.png",
      cardTitle: "Shopping Cart",
      projectUrl: "https://github.com/ZainabJafari/ProjectWithTypescript",
      icon: ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" , "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"]
    },
  
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },

    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
];


const Cards: React.FC = () => {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center">
          {cardsItemTwoData.map((card, key) => (
            <CardsItemTwo
              key={key}
              cardImageSrc={card.cardImageSrc}
              cardTitle={card.cardTitle}
              cardContent={card.cardContent}
              projectUrl={card.projectUrl}
              icon={Array.isArray(card.icon) ? card.icon : [card.icon]} // Konvertera en sträng till en array med en sträng om det behövs
              />
          ))}
        </div>
      </>
    );
  };
  
  export default Cards;
  