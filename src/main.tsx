import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HelmetProvider>
      <Toaster />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
)
