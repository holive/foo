import '@/presentation/styles/globals.scss'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import Router from './routes/router'

ReactDOM.render(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById('main')
)
