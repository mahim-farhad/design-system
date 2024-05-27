import {
  useState,
  useEffect,
  useRef
} from "react";

function useOutsideClick() {
  const [isOpen, setIsOpen] = useState(null);

  const modalRef = useRef(null);

  function handleClickOutside(event) {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    setIsOpen,
    modalRef
  };
}

export default useOutsideClick;
