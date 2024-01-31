import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import useTheme, { ThemeProvider } from './Context/Themecontext'

function App() {

  const {themecolor}=useTheme()
 

useEffect(()=>{

document.querySelector('html').classList.remove('light', 'dark')

document.querySelector('html').classList.add(themecolor)

},[themecolor])


  return (
   
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* <ThemeBtn /> */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* <Card /> */}
            <Card />
          </div>
        </div>
      </div>
   
  )
}

export default App



