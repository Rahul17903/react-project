import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext =createContext({
    thememode : "light",
    lightmode : ()=>{},
    darkmode : ()=>{}
})
export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}