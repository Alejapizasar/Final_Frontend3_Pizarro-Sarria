import { createContext, useMemo, useReducer } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);


const contexReducer = (state, action) => {
  const casesObject = {
    "TOGGLE_THEME": {...state, theme: state.theme === "light" ? "dark" : "light"},
    "FAVORITES": {...state, data: action.payload}
  }
  return casesObject[action.type] ? casesObject[action.type] : state
}

const initContexReducer = () => ({
  theme: "light",
  data: localStorage.getItem("favoritesDentists") ? JSON.parse(localStorage.getItem("favoritesDentists")) : []
})

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [context, dispatch] = useReducer(contexReducer, initialState, initContexReducer)
  const memo = useMemo(()=>{
    localStorage.setItem('fav', JSON.stringify(context.data))
    return {context, dispatch}
  }, [context])

  return (
    <ContextGlobal.Provider value={memo}>
      {children}
    </ContextGlobal.Provider>
  );
};
