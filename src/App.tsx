import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import { HomePage } from './pages/homePage'
import { Layout } from './components/Layout'
import { ProductPage } from './components/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
