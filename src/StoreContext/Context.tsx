import {
  createContext,
  useContext,
  ReactNode,
  Reducer,
  Dispatch,
  useReducer,
} from "react";

import { stateType, actionType } from "../types";
type contextYpes = {
  state: stateType;
  dispatch: Dispatch<actionType>;
};

type childrenType = {
  children: ReactNode;
};

const myContext = createContext({} as contextYpes);

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
    default:
      return state;
  }
};

export const UserProvider = ({ children }: childrenType) => {
  const initialization = {
    num: 0,
    switch: false,
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
