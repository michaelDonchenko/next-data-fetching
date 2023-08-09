"use client";

import React, {useCallback} from "react";
import {useRouter} from "next/navigation";

interface Props {
  next: string | null;
  previous: string | null;
}

const Pagination = ({next, previous}: Props) => {
  const router = useRouter();

  const handleNext = useCallback(() => {
    if (!next) {
      return;
    }

    const queryString = next.split("?")[1];
    router.push(`?${queryString}`);
  }, [next]);

  const handlePrev = useCallback(() => {
    if (!previous) {
      return;
    }

    const queryString = previous.split("?")[1];
    router.push(`?${queryString}`);
  }, [previous]);

  return (
    <div>
      <button style={{marginRight: "10px"}} onClick={handlePrev}>
        Prev
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
