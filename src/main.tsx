import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react" // importando o tema do Chakra UI

import {RouterProvider} from "react-router-dom" // importando o provider do React Router

import routes from "./routes" // arquivo que contém as rotas da aplicação

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={routes} />    
    </ChakraProvider>
  </React.StrictMode>,
)