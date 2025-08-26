import React from "react";
import Button from "./Button";
const ButttonList = () => {
  const buttonNames = [
    "Music",
    "Podcasts",
    "Mixes",
    "English(United Kingdom)",
    "Strum",
    "Tamil Cinema",
    "Computer Programming",
    "Romantic Comedies",
    "Dramedy",
  ];

  return (
    <div className="flex gap-3 p-3">
      <button className="bg-black text-white px-2 py-1 rounded-lg">All</button>
      {buttonNames.map((name, index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  );
};

export default ButttonList;
