import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { Home } from './componentes/Home.jsx'
import { Lista } from './componentes/Lista.jsx'
import { Tx } from './componentes/Tx.jsx'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home> </Home>}>
            <Route index element={<h2>index componente</h2>} />
            <Route path="productos" element={<h2>productos</h2>} />
            <Route path="clientes" element={<h2>clientes</h2>} />
            <Route path="lista" element={<Lista></Lista>} />
            <Route path="tx" element={<Tx></Tx>} />
            <Route path="*" element={<h2>Ruta no valida</h2>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>

  </StrictMode>,
)
