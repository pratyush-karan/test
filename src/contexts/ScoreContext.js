"use client";
import React, { createContext, useContext, useState, useMemo } from "react";

export const ScoreContext = createContext();
export const useScoreContext = () => useContext(ScoreContext);

export const ScoreContextProvider = (props) => {
  const [negativeMarks, setNegativeMarks] = useState(0);
  const [positiveMarks, setPositiveMarks] = useState(0);

  //   const value = useMemo({
  //     positiveMarks,
  //     negativeMarks,
  //     setPositiveMarks,
  //     setNegativeMarks,
  //   });

  return (
    <ScoreContext.Provider
      value={{
        positiveMarks,
        negativeMarks,
        setPositiveMarks,
        setNegativeMarks,
      }}
    >
      {props.children}
    </ScoreContext.Provider>
  );
};
