import React from "react";
import "./petFilterStyle.css";

// don't repeat yourself 😌
const PetSelection = ({ handlePetSelection }) => {
  const petCategory = [
    {
      category: "all",
      image: "../img/animals-icon.svg",
      bgImage: "../img/pink-background.jpg",
    },
    {
      category: "cat",
      image: "../img/cat-icon.svg",
      bgImage: "../img/pink-background.jpg",
    },
    {
      category: "dog",
      image: "../img/dog-icon.svg",
      bgImage: "../img/pink-background.jpg",
    },
    {
      category: "horse",
      image: "../img/horse-icon.svg",
      bgImage: "../img/pink-background.jpg",
    },
    {
      category: "bird",
      image: "../img/bird-icon.svg",
      bgImage: "../img/pink-background.jpg",
    },
    {
      category: "fish",
      image: "../img/fish-icon.svg",
      bgImage: "../img/pink-background.jpg",
    },
  ];

  return (
    <div className="pet-selection">
      <ul className="pets-list">
        {petCategory.map(({ category, image, bgImage }) => {
          return (
            <li
              key={category}
              className="pet-item"
              title={category}
              onClick={(e) => handlePetSelection(category)}
            >
              <div className="category-background">
                <img
                  className="pet-icon"
                  src={image}
                  alt={category}
                  width="120px"
                />
              </div>
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default PetSelection;
