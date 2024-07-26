import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/16/solid";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      props.onClick();
    }
  };

  if (isClicked) {
    return null;
  }

  return (
    <button
      className={`flex items-center space-x-3 text-2xl px-6 py-3 rounded-md focus:outline-none focus-visible:ring-4 ring-[var(--ring-color)] ring-offset-4 ring-offset-[var(--bg-color)] hover:opacity-80 transition-opacity disabled:opacity-80 ${
        isClicked ? 'bg-[var(--button-bg-clicked)] text-[var(--button-text-clicked)]' : 'bg-[var(--button-bg)] text-[var(--button-text)]'
      }`}
      onClick={handleClick}
      autoFocus
      disabled={isClicked || props.disabled}
    >
      <span className="pointer-events-none">{props.text}</span>
      <CheckCircleIcon className="w-12 h-12 pointer-events-none" />
    </button>
  );
};

export default CustomButton;