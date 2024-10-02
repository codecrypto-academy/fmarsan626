import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './componentes/Home'
import { Productos } from './componentes/Productos'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Balance } from './componentes/Balance'
//import './index.css'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
            <Route path='/productos' element={<Productos />} />
            <Route path='/balance' element={<Balance/>} />
          </Route>


        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
