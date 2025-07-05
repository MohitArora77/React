import React from "react";
import ChildA from "./ChildA";
import { createContext } from "react";

// Step-1 : create context

export const store = createContext(); // created a store which contains a key called provider

const Parent = () => {
  let data = "Hii";
  return (
    <div>
      Parent
      <store.Provider value={data}>
        {/* Provider contains a in-build prop called value where our data will be stored */}
        <ChildA />
      </store.Provider>
    </div>
  );
};

export default Parent;
