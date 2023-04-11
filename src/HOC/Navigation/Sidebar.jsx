import React from "react";
import FocusButton from "../../components/UI/FocusButton";
import Button from "../../components/UI/Button";

const Sidebar = ({ refs, handleScroll }) => {
  return (
    <div className="h-full flex flex-col justify-evenly px-5 bg-blue-100">
      <FocusButton
        title={`connect wallet`}
        action={() => console.log("implement the api for this")}
      />

      {refs.map((button, index) => {
        console.log(button);
        return (
          <div>
            <Button
              key={index}
              title={button.name}
              action={handleScroll(button.ref)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
