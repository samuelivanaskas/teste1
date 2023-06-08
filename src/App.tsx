import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import Perfil from './pages/Perfil'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
      <Perfil />
      <Footer />
    </BrowserRouter>
  )
}

export default App
