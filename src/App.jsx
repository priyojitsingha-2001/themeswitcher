import {useEffect, useState} from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeProvider } from './context/Theme'

export default function App() {

  const [themeMode,setThemeMode]=useState('Light');
  const darkTheme=()=>{
    setThemeMode("dark");
  };
  const lightTheme=()=>{
    setThemeMode("light");
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="dark:bg-slate-700">
      <h2 className="bg-blue-300 dark:bg-blue-500 text-3xl p-4 text-center font-bold font-mono">Theme Switcher</h2>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
      </div>
    </ThemeProvider>
  )
}
