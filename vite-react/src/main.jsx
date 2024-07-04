import React from 'react'
import ReactDOM from 'react-dom/client'
import { Props } from './Components/Props'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Props numero = {5}/>
  </React.StrictMode>,
)
