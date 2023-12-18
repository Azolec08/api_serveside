import {
  createContext,
  useContext,
  ReactNode,
  Reducer,
  Dispatch,
  useReducer,
  useState,
} from "react";

import allData from "../api/allData.json";

import { stateType, actionType } from "../types";
type contextYpes = {
  state: stateType;
  dispatch: Dispatch<actionType>;
  data: any[];
  handleAdd: (itemId: number) => void;
  handleDelete: (itemId: number) => void;
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
    case "decrement":
      return { ...state, num: action.payload };
    case "mySwitch":
      return { ...state, switch: action.payload };
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

  const [data, setData] = useState(myData());

  function handleAdd(itemId: number) {
    setData((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function handleDelete(itemId: number) {
    setData((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const initialization = {
    num: 0,
    switch: false,
  };

  const [state, dispatch] = useReducer(reducer, initialization);

  const contextValue = {
    state,
    data,
    dispatch,
    handleDelete,
    handleAdd,
  };
  return (
    <myContext.Provider value={contextValue}>{children}</myContext.Provider>
  );
};
