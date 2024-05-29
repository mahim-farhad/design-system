import { useState, useEffect, useRef } from "react";

function useOutsideClick() {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef(null);

  function handleClickOutside(event) {
    const isClickOutside = (
      modalRef.current && !modalRef.current.contains(event.target)
    );

    if (isClickOutside) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, modalRef };
}

export default useOutsideClick;
