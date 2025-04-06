import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/global.scss'
import { HomePage } from './pages/homePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
