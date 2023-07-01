import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
    console.log(data)
  };

  const clearFormValues = (values) => {
    setData({});
    console.log(data)
  };

  return (
    <FormContext.Provider value={{ data, setFormValues, clearFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
