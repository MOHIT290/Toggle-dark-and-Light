import React, { createContext, useContext, useState } from 'react'

export const themecontext=createContext({
    themecolor:'',
    lightheme:()=>{},
    darktheme:()=>{}
})


export const ThemeProvider=({children})=>{
    // themecontext.Provider

const [themecolor,setthemecolor]=useState('light')

const lightheme=()=>{

setthemecolor('light')
}

const darktheme=()=>{

    setthemecolor('dark')
}

return <themecontext.Provider value={{themecolor, lightheme, darktheme}}>{children}</themecontext.Provider>

}


export default function useTheme (){

return useContext(themecontext)

}



