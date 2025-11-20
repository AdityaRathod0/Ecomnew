import { createContext, useState } from "react";


export const Themecontext =createContext();

const ThemeProvider = (props)=>{
    const[theme,setTheme] = useState('Light');

    return(
        <Themecontext.Provider value={{theme,setTheme}}>
            {props.children}
        </Themecontext.Provider>
    )
}
export default ThemeProvider;