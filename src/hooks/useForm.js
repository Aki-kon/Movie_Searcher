import React, { useState } from "react";

const useForm = (init) => {
  const [values, setValues] = useState(init);
  const onChanging = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return { ...values, values, onChanging };
};

export default useForm;
