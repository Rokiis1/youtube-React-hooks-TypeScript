import { createContext } from "react";

const inistialState = {
  phone: "",
  series: "",
};

export type PhoneState = typeof inistialState;

const context = createContext<typeof inistialState>(inistialState);

export default context;
