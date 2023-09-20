"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import useDebounce from "@/hooks/useDebounce";

const countries = [
  "Australia",
  "South Africa",
  "India",
  "New Zealand",
  "Afghanistan",
  "Sri lanka",
  "England",
];

const WorldCup = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");
  const [tableData, setTableData] = useState([]);
  const debounceValue = useDebounce(value, 2000);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    setTableData((prev) => [...prev, { country: country, player: value }]);
  };

  useEffect(() => {
    debounceValue && console.log("debouncedValue", debounceValue);
  });

  return (
    <div>
      {/* {console.log(tableData)} */}
      <div>
        <select name="dropdown" onChange={(e) => setCountry(e.target.value)}>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
      <lable>Search For:</lable>
      <input type="text" />
      <Table tableData={tableData} />
    </div>
  );
};

export default WorldCup;
