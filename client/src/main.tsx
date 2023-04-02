import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/index.css'
import { Provider } from 'react-redux'
import { ConfigState } from '@reduxjs/toolkit/dist/query/core/apiState'
import {api} from "@/state/api"
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
export const store=configureStore({
  reducer:{[api.reducerPath]:api.reducer},
  middleware: (getDefault)=>getDefault().concat(api.middleware),
})

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
   <App />
  </Provider>
   
 
)
