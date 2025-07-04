import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";



function App() {

  const [thememode,setThememode] = useState("light")

  const lightmode = ()=>{
    setThememode("light")
  }

  const darkmode = ()=>{
    setThememode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
  },[thememode])

  return (
    <ThemeProvider value={{lightmode,darkmode,thememode}}>

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
    </ThemeProvider>
    
  );
}

export default App;
