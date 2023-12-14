import {
  createContext,
  useContext,
  ReactNode,
  Reducer,
  Dispatch,
  useReducer,
} from "react";

import allData from "../api/allData.json";

import { stateType, actionType } from "../types";
type contextYpes = {
  state: stateType;
  dispatch: Dispatch<actionType>;
};

type childrenType = {
  children: ReactNode;
};

const myContext = createContext<contextYpes | undefined>(undefined);

export function globalContext() {
  const context = useContext(myContext);
  if (!context) {
    throw new Error("Plese Use globalContext");
  }

  return context;
}

const reducer: Reducer<stateType, actionType> = (state, action) => {
  switch (action.type) {
    case "plus":
      return { ...state, num: state.num + 1 };
    case "mySwitch":
      return { ...state, switch: action.payload };
    case "myApi":
      return { ...state, api: action.payload };
    case "switchClick":
      return { ...state, switchTwo: action.item };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: childrenType) => {
  const myData = () => {
    let data = [];
    for (let i = 0; i < allData.length + 1; i++) {
      data[i] = 0;
    }

    return data;
  };

  const initialization = {
    num: 0,
    switch: false,
    switchTwo: false,
    api: myData(),
  };

  const [state, dispatch] = useReducer(reducer, initialization);

  const contextValue = {
    state,
    dispatch,
  };
  return (
    <myContext.Provider value={contextValue}>{children}</myContext.Provider>
  );
};
