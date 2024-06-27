import { forwardRef, useState, useCallback } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getSelectClasses from "@styles/components/selectClasses";

import Icon from "@components/elements/Icon";
import { Menu, MenuItem } from "@components/elements/Menu";

const Select = forwardRef(
  function Select({
    name,
    label,
    value,
    options,
    placeholder,
    size = "base",
    rounded = false,
    className = "",
    style = {},
    onFocus = () => { },
    onBlur = () => { },
    onChange = () => { },
    required,
    success,
    error,
    disabled = false,
    ...rest
  }, selectRef) {
    const [isFocused, setFocused] = useState(false);
    const [isFilled, setFilled] = useState(value);
    const [isModalOpen, setModalOpen] = useState(false);

    function handleClick() {
      setFocused(!isFocused);

      onFocus && onFocus({
        target: { name: name, }
      });

      onBlur && onBlur({
        target: { name: name, }
      });;

      setModalOpen(!isModalOpen);
    }

    function handleOptionClick(val) {
      onChange({
        target: {
          name: name,
          value: val
        }
      });

      setFocused(false);

      setModalOpen(false);
    }

    console.log(error)

    const selectClasses = getSelectClasses(
      size, rounded, isFocused, success,
      error, disabled
    );

    const hasValidSize = inputTypes?.sizes?.[size];

    const isValid = options && hasValidSize;

    if (!isValid) return null;

    return (
      <div
        className={selectClasses?.selectWrapper}
        style={style}
      >
        {label && (
          <span className={selectClasses?.labelWrapper}>
            <label
              htmlFor={name}
              className={selectClasses?.label}
            >
              {label}
            </label>
          </span>
        )}

        <button
          type="button"
          role="combobox"
          aria-expanded={isModalOpen}
          aria-haspopup="menubox"
          className={selectClasses?.button}
          onClick={handleClick}
          disabled={disabled}
        >
          {
            value ? (
              options.find(
                option => option.value === value
              )?.label
            ) : placeholder
          }
        </button>

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

        <span className={selectClasses?.caret}>
          <Icon
            name="sort"
            size={"sm"}
          />
        </span>
      </div>
    )
  }
);

Select.displayName = "Select";

Select.propTypes = {
  name: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any.isRequired,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  success: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
};

export default Select;
