import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { Balance } from './Balance'
import { Tx } from './Tx'
import { Bloque } from './Bloque'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="balance/:address" element={<Balance />} />
          <Route path="tx/:tx" element={<Tx />} />
          <Route path="bloque/:bloque" element={<Bloque />} />
          <Route
            path="noencontrada"
            element={<h2>El dato no se puede procesar</h2>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
