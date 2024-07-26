import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import React, { BaseSyntheticEvent } from "react";

interface FormProps {
  thing?: string;
  setThing?: (thing: string) => void;
  setIsCompleted?: (isCompleted: boolean) => void;
}

const Form = (props: FormProps) => {
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    props.setIsCompleted?.(false);
  };

  return (
    <form
      className="flex ring-4 rounded-md ring-[var(--ring-color)] focus-within:ring-[var(--ring-color)] focus-within:ring-offset-4 bg-[var(--bg-color)] ring-offset-[var(--bg-color)]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="bg-inherit rounded-md text-[var(--text-color)] font-sans py-2 pr-6 pl-2.5 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
        placeholder="Enter One Thing"
        autoFocus
        maxLength={64}
        value={props.thing}
        onInput={(event: BaseSyntheticEvent) => {
          props.setThing?.(event.target.value);
        }}
      ></input>
      <button
        className="bg-inherit rounded-md text-[var(--text-color)] font-sans py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600"
      >
        <ArrowRightCircleIcon className="w-12 h-12" />
      </button>
    </form>
  );
};

export default Form;