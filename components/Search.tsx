"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import useDebounce from "@/hooks/useDebounce";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce({value: search});

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/${debouncedSearch}`);
    } else {
      router.push("/");
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search a pokemon..."
    />
  );
};

export default Search;
