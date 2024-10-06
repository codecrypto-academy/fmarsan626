import { FC, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient, useQuery } from 'react-query'

interface IAppProps{
  id:number
}

const APP: FC<IAppProps> = ({id}) => {
  const {isLoading, data} = useQuery(["post"], async () =>{
    const datos=await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json()
    return datos
  })
  if (isLoading) return <p>Cargando...</p>
  return <div>{JSON.stringify(data)}</div>
}
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
      <APP id={99}/>

  </QueryClientProvider>

)
