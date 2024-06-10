import { useState } from "react";

import clsx from "clsx";

import { twMerge } from "tailwind-merge";

const FormInput = (props) => {
  const [isFocused, setFocused] = useState(false);
  const [isFilled, setFill] = useState(false);
  const [isInvalid, setInvalid] = useState(false);

  const {
    name,
    label,
    errorMessage,
    onChange,
    id,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div
      className={twMerge(
        clsx(
          "flex",
          "flex-col",
        )
      )}
    >
      <label
        htmlFor={name}
        className={twMerge(
          clsx(
            "py-0.5",
            "px-1.5",
            "font-sans",
            "text-base",
            "leading-[16px]",
            "font-medium",
            "bg-transparent",
            "rounded-sm",
            "transition-all",
            "duration-300",
            "ease-in-out"
          )
        )}
      >
        {label}
      </label>

      <input
        {...inputProps}
        className={twMerge(
          clsx(
            "h-14",
            "py-3",
            "px-4",
            "mt-2",
            "mb-1",
            "font-sans",
            "leading-[25px]",
            "font-medium",
            "uppercase",
            "peer",
            "whitespace-nowrap",
            "appearance-none",
            "cursor-pointer",
            "text-gray-400",
            "bg-transparent",
            "outline-none",
            "border-[1px]",
            "border-gray-400",
            "valid:border-success",
            "invalid:border-error",
            "rounded-lg",
            "disabled:pointer-events-none",
            "disabled:cursor-not-allowed",
            "disabled:opacity-50",
            "transition-all",
            "duration-300",
            "ease-in-out"
          )
        )}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          setFocused(true)
        }
        focused={isFocused.toString()}
      />

      {errorMessage && (
        <span
          className={twMerge(
            clsx(
              "hidden",
              "font-sans",
              "text-xs",
              "font-medium",
            )
          )}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default FormInput;
