import React, {useEffect, useState} from "react";

interface Props {
  value: string;
  delay?: number;
}

const useDebounce = ({value, delay = 500}: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
