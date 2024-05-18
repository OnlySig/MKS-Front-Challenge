import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import ProviderQuery from './providers/ProviderQuery.tsx'
import store from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderQuery>
        <App />
      </ProviderQuery>
    </Provider>
  </React.StrictMode>,
)
