import React from "react";
import CustomButton from "./CustomButton";

interface OneThingProps {
  thing?: string;
  setThing?: (thing: string) => void;
  completedThing?: () => void;
}

const OneThing = (props: OneThingProps) => {
  const handleCompletedThing = props.completedThing || (() => {});
  return (
    <>
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
        {props.thing}
      </h1>
      <CustomButton
        text="Done !"
        onClick={handleCompletedThing}
      />
    </>
  );
};

export default OneThing;