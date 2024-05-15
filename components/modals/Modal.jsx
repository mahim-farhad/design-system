"use client"

import { useState } from "react"

import { twMerge } from "tailwind-merge"

import classNames from "classnames"

import { useToggleModal } from "@contexts/ModalProvider"

import Typography from "@components/elements/Typography"
import Textfield from "@components/inputs/Textfield"
import Counter from "@components/inputs/Counter"
import Button from "@components/elements/Button"

import Flex from "@components/layouts/Flex"

import Backdrop from "@components/overlays/Backdrop"

function Modal() {
  const {
    modalRef,
    showModal,
    showBackdrop,
    closeModal
  } = useToggleModal()

  const initialValues = {
    name: "Mahim Farhad",
  }

  const [inputValues, setInputValues] = useState(initialValues)
  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    const { name, value } = event.target

    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  // console.log(inputValues)

  const modalClasses = twMerge(
    classNames(
      "z-[1000]",
      "fixed",
      "top-1/2",
      "left-1/2",
      "-translate-x-1/2",
      "flex",
      "flex-col",
      "gap-8",
      "justify-center",
      "w-full",
      "max-w-[320px] sm:max-w-[600px]",
      "max-h-[600px]",
      "p-16",
      "overflow-y-auto",
      "overflow-x-hidden",
      { "-translate-y-[40%] invisible opacity-0": !showModal },
      { "-translate-y-1/2 visible opacity-1": showModal },
      "bg-surface-light",
      "border",
      "rounded-xl",
      "transition-all",
      "duration-300",
      "ease-in-out",
    )
  )

  return (
    <>
      <Flex
        ref={modalRef}
        className={modalClasses}
      >
        <Flex
          className={classNames(
            "items-center",
            "justify-between",
          )}
        >
          <Typography
            type="p"
          >
            Create a New Task
          </Typography>

          <Button
            onClick={closeModal}
            icon="cross-small"
            size="xs"
            variant="text"
            color="secondary"
          />
        </Flex>

        <Textfield
          type="text"
          name="name"
          label="Name"
          value={inputValues.name}
          onChange={handleChange}
          disabled
        />

        <Flex
          className={classNames(
            "flex-nowrap",
            "gap-4",
            "items-center",
            "w-full",
          )}
        >
          <Textfield
            type="email"
            name="email"
            label="Email"
            onChange={handleChange}
          />

          <Textfield
            type="tel"
            name="phone"
            label="Phone"
            onChange={handleChange}
          />
        </Flex>

        <Flex
          className={classNames(
            "flex-nowrap",
            "gap-4",
            "items-center",
            "w-full",
          )}
        >
          <Textfield
            type="text"
            name="date"
            label="Date of Birth"
            onChange={handleChange}
          />

          <Counter
            name="quantity"
            label="Quantity"
            onChange={handleChange}
            counter={quantity}
            setCounter={setQuantity}
            value={"dfgdgfd"}
          />
        </Flex>

        <Textfield
          type="password"
          label="Password"
        />
      </Flex>

      {showBackdrop && <Backdrop />}
    </>
  )
}

export default Modal
