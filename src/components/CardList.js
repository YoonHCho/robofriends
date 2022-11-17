import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {
  const rederRobotsArray = robots.map((robots) => {
    return <Card key={robots.id} id={robots.id} name={robots.name} email={robots.email} />
  });

  return (
    <div>
      {rederRobotsArray}
      {/* {
        robots.map((robots) => {
          return (
            <Card 
              key={robots.id}
              id={robots.id}
              name={robots.name}
              email={robots.email} />
          );
        })
      } */}
    </div>
  );
};

export default CardList;