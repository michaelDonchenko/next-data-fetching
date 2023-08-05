"use client";

import React, {useCallback} from "react";
import {useRouter} from "next/navigation";

interface Props {
  count: number | undefined;
  next: string | null;
  previous: string | null;
}

const Pagination = ({count, next, previous}: Props) => {
  if (!count) {
    return <div>There was error with pagination</div>;
  }
  const router = useRouter();

  const onNext = useCallback(() => {
    if (!next) {
      return;
    }

    const queryString = next.split("?")[1];
    // return console.log(queryString);

    router.push(`?${queryString}`);
  }, [next]);

  const onPrevious = useCallback(() => {
    if (!previous) {
      return;
    }

    const queryString = previous.split("?")[1];
    router.push(`?${queryString}`);
  }, [previous]);

  return (
    <div>
      <button onClick={onPrevious}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Pagination;
