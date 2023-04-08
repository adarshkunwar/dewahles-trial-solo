import React from "react";
import FocusButton from "../../components/UI/FocusButton";
import Button from "../../components/UI/Button";

const buttonAndLinks = [
  {
    title: `Home`,
    action: () => console.log(`Home`),
  },
  {
    title: `Contact`,
    action: () => console.log(`Contact`),
  },
  {
    title: `Vision`,
    action: () => console.log(`Vision`),
  },
  {
    title: `About`,
    action: () => console.log(`About`),
  },
];

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col justify-evenly px-5 bg-blue-100">
      <FocusButton
        title={`connect wallet`}
        action={() => console.log("implement the api for this")}
      />

      {buttonAndLinks.map((button, index) => {
        return (
          <Button key={index} title={button.title} action={button.action} />
        );
      })}
    </div>
  );
};

export default Sidebar;
