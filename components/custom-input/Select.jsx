"use client";

import { forwardRef, useState } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import useOutsideClick from "@hooks/useOutsideClick";

import getSelectClasses from "@styles/components/selectClasses";

import Icon from "@components/elements/Icon";
import { Menu, MenuItem } from "@components/elements/Menu";

const Select = forwardRef(
  function Select({
    label,
    name,
    placeholder,
    value,
    options,
    size = "base",
    validation,
    rounded = false,
    className,
    style,
    onChange,
    disabled = false,
    ...rest
  }, selectRef) {
    const [isFocused, setFocused] = useState(false);
    const [isFilled, setFill] = useState(false);
    const [isInvalid, setInvalid] = useState(false);

    const {
      isModalOpen,
      setModalOpen,
      modalRef
    } = useOutsideClick();

    function handleFocus(event) {
      setFocused(true);

      if (event.target.value) setFill(true);

      setInvalid(false);
    }

    function handleBlur(event) {
      setFocused(false);

      if (!event.target.value) {
        setFill(false);

        setInvalid(true);
      } else {
        setFill(true);
      }
    }

    function handleClick(event) {
      event.preventDefault();

      // event.target.focus();

      setModalOpen(!isModalOpen);
    }

    function handleOptionClick(val) {
      onChange({
        target: {
          name: name,
          value: val
        }
      });

      setModalOpen(false);
    }

    const selectClasses = getSelectClasses(
      value, size, rounded, disabled,
      isFocused, isFilled, isInvalid,
      className
    );

    const hasValidSize = inputTypes?.sizes?.[size];

    const isValid = options && hasValidSize;

    if (!isValid) return null;

    return (
      <div
        ref={modalRef}
        className={selectClasses?.selectWrapper}
        style={style}
        {...rest}
      >
        <span className={selectClasses?.labelWrapper}>
          <label
            htmlFor={name}
            className={selectClasses?.label}
          >
            {label}
          </label>
        </span>

        {/* <button
          type="button"
          role="combobox"
          aria-expanded={isModalOpen}
          aria-haspopup="menubox"
          className={selectClasses?.button}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => setModalOpen(!isModalOpen)}
          disabled={disabled}
        >
          {
            value ? (
              options.find(
                option => option.value === value
              )?.label
            ) : placeholder
          }

          <span className={selectClasses?.caret}>
            <Icon
              name="caret-down"
              size={size}
              className={
                classNames(
                  { "-rotate-180": isModalOpen },
                  "duration-[inherit]",
                )
              }
            />
          </span>
        </button> */}

        <select
          ref={selectRef}
          role="combobox"
          aria-expanded={isModalOpen}
          aria-haspopup="menubox"
          aria-label="select"
          aria-labelledby={name}
          className={selectClasses?.button}
          name={name}
          id={name}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
        // disabled
        >
          {options?.map((option) => (
            <option
              key={option.id}
              value={option.value}
              selected={option.value === value}
            >
              {option.label}
            </option>
          ))}
        </select>

        {isModalOpen && (
          <Menu
            role="listbox"
            aria-label="Options Menu"
            aria-orientation="vertical"
            className="origin-top"
          >
            {options?.map((option) => (
              (option) && (
                <MenuItem
                  uniqueKey={option.id}
                  role="option"
                  aria-selected={option.value === value}
                  aria-hidden={option.hidden || false}
                  selected={option.value === value}
                  tabIndex={0}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                </MenuItem>
              )
            ))}
          </Menu>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool
};

export default Select;
