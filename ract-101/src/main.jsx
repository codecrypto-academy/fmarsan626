import { useContext } from 'react'
import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'


const root =document.getElementById("root")
const rootReact = createRoot(root)
const GlobalContext = createContext()

const AppGLobal=({children}) =>{
  const [estado, setEstado]=useState({
    usuario :'usu1'
  })
  return <GlobalContext.Provider value={[estado, setEstado]}>
    {children}
  </GlobalContext.Provider>
}

const Hijo=()=>{
  const [global, setGlobal]= useContext(GlobalContext)
  return <div>
    Usuario: {global.usuario} 
  </div>
}

rootReact.render(
  <AppGLobal>
    <h1>Hola</h1>
    <h2>Otra vez</h2>
    <Hijo/>
  </AppGLobal>
)