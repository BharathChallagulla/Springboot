"use client";
import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface SearchBarProps {
  handleSearchChange: (searchParam: string) => void;
}

const SearchBarComponent = (props: SearchBarProps) => {
  const [searchParam, setSearchParam] = useState<string>("");

  const handleSearchChange = useDebouncedCallback((value: string) => {
    props.handleSearchChange(value);
  }, 500);

  return (
    <>
      <TextField
        type="string"
        // sx={{ width: "50%", margin: "2% auto" }}
        className="w-full margin-2-auto height-10"
        required
        onChange={(e) => {
          setSearchParam(e.target.value);
          handleSearchChange(e.target.value);
        }}
        placeholder="Search by Job Profile"
        variant="outlined"
        value={searchParam}
      />
    </>
  );
};

export default React.memo(SearchBarComponent);
