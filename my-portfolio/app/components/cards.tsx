import CardsItemTwo from "./cardItems";

const cardsItemTwoData = [
    {
      cardImageSrc: "/images/projec.png",
      cardTitle: "jskddjsjsj",
      projectUrl: "https://github.com/ZainabJafari/Front-End_project",
    },
  
    {
      cardImageSrc: "/images/project2.png",
      cardTitle: "Shopping Cart",
      projectUrl: "https://github.com/ZainabJafari/ProjectWithTypescript",
    },
  
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
    },
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
    },
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
    },
    {
      cardImageSrc: "/images/project3.png",
      cardTitle: "Content Management System",
      projectUrl: "https://github.com/ZainabJafari/CMS-project",
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
              projectUrl={card.projectUrl}
          
            />
          ))}
        </div>
      </>
    );
  };
  
  export default Cards;
  