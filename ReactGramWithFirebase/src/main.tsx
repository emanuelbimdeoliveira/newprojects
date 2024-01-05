import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import FirebaseAuthProvider from './context/FirebaseAuth'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthProvider>
      <App />
    </FirebaseAuthProvider>
  </React.StrictMode>,
)
