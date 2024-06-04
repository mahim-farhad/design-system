"use client";

import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getTextfieldClasses from "@styles/components/textfieldClasses";

const CustomField = forwardRef(
  function CustomField({
    type = "text",
    label,
    name,
    placeholder,
    value,
    size = "base",
    // variant = "outlined",
    validation,
    rounded = false,
    className,
    style,
    onChange,
    disabled = false,
    ...rest
  }, inputRef) {
    const [isFocused, setFocus] = useState(false);
    const [isFilled, setFill] = useState(false);
    const [isInvalid, setInvalid] = useState(false);

    function handleFocus(event) {
      setFocus(true);

      if (event.target.value) setFill(true);

      setInvalid(false);
    }

    function handleBlur(event) {
      setFocus(false);

      if (!event.target.value) {
        setFill(false);

        setInvalid(true);
      } else {
        setFill(true);
      }
    }

    const textfiledClasses = getTextfieldClasses(
      value, size,
      rounded, disabled,
      isFocused, isFilled, isInvalid,
      className
    );

    const hasValidType = !(!inputTypes.types?.[type]);
    const hasValidSize = !(!inputTypes.sizes?.[size]);

    const isValid = hasValidType && hasValidSize;

    if (!isValid) return null;

    return (
      <div class="relative w-full min-w-[200px] h-10">
        <button
          type="button"
          class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all border-2 text-sm px-3 py-2.5 rounded-[7px] border-gray-900 border-t-transparent"
          aria-expanded="true"
          aria-haspopup="listbox"
          role="combobox"
        >
          <span class="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5"></span>

          <div class="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all rotate-180 mt-px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              >
              </path>
            </svg>
          </div>
        </button>

        <label
          class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-[11px] peer-disabled:text-transparent before:border-t-2 before:border-l-2 after:border-t-2 after:border-r-2 leading-tight text-gray-900 before:border-gray-900 after:border-gray-900"
        >
          Select Version
        </label>

        <ul
          tabindex="-1"
          role="listbox"
          class="w-full max-h-96 bg-white p-3 border border-blue-gray-50 rounded-md shadow-lg shadow-blue-gray-500/10 font-sans text-sm font-normal text-blue-gray-500 overflow-auto focus:outline-none"
          id=":R13n9km:"
          aria-orientation="vertical"
        >
          <li
            id="material-tailwind-select-0"
            role="option"
            class="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
            tabindex="1"
            aria-selected="false"
            data-selected="false"
          >
            Material Tailwind HTML
          </li>

          <li id="material-tailwind-select-0"
            role="option"
            class="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
            tabindex="1"
            aria-selected="false"
            data-selected="false"
          >
            Material Tailwind HTML
          </li>
        </ul>
      </div >
    );
  }
);

CustomField.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes.types)),
  size: PropTypes.oneOf(Object.keys(inputTypes.sizes)),
  // variant: PropTypes.oneOf(Object.keys(inputTypes.variants)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

export default CustomField;
