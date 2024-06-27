import { useState, useCallback } from "react";

const useForm = (initialValues, validate) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleFocus(event) {
    const { name } = event.target;

    setErrors(prev => ({
      ...prev,
      [name]: "",
    }));
  }

  const handleBlur = useCallback((event) => {
    const { name } = event.target;

    const validationErrors = validate(inputValues);

    setErrors(prev => ({
      ...prev,
      [name]: validationErrors ? validationErrors[name] : "",
    }));
  }, [inputValues, validate]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const validationErrors = validate(inputValues);

    setErrors(validationErrors);
  }, [inputValues, validate]);

  return {
    inputValues,
    errors,
    handleFocus,
    handleBlur,
    handleChange,
    handleSubmit
  };
};

export default useForm;
