import { useState } from "react";

export const useInput = (initialValue, type) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  }

  const bind = {
    type : type,
    value,
    onChange : e => {
        setValue(e.target.value)
    }
  }
  
  return [value, bind, reset];
}
