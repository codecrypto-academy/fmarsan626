import React, { FC, memo, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";



interface IItemProps {
  item: IRegistro,
  deleteRegistro: (id: string) => void
}
const Item: React.FC<IItemProps> = memo(({ item, deleteRegistro }) => {
  useEffect(() => {

  })
  return <li>{item.id} {item.nombre}<button onClick={() => deleteRegistro(item.id)}> delete </button></li>
})

interface IListaProps {
  registros: IRegistro[]
  deleteRegistro: (id: string) => void

}


interface IRegistro {
  id: string,
  nombre: string
}
const Lista: FC<IListaProps> = memo(({ deleteRegistro, registros }) => {

  return <ul>

    {
      registros.map((item: IRegistro, index: number) =>
        <Item key={index} deleteRegistro={deleteRegistro} item={item}></Item>
      )
    }
  </ul>
})

const valIniciales: IRegistro[] = [
  {
    id: "1",
    nombre: "Producto1"
  }, {
    id: "2",
    nombre: "Producto2"
  }
]


const App = () => {
  const [texto, setTexto] = useState("")
  const [productos, setProductos] = useState<IRegistro[]>(valIniciales)
  const addRegistro = () => {
    const nuevo: IRegistro = {
      id: new Date().getTime().toString(),
      nombre: texto
    }
    setProductos([...productos, nuevo])
  }
const deleteRegistro =(id:string)=>{
  setProductos(productos.filter(item=>item.id !=id))
}
  return <div>
    <input type='text' value={texto} onChange={(e) => setTexto(e.target.value)}></input>
    <button onClick={() => addRegistro()}>Add</button>
    <Lista registros={productos} deleteRegistro={deleteRegistro} /></div>
}

createRoot(document.getElementById('root')!).render(
  <App />

)
