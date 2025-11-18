import { Routes, Route } from 'react-router-dom'
import { Home, Leistungen, Web, Lab, Ueber, Kontakt } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leistungen" element={<Leistungen />} />
      <Route path="/web" element={<Web />} />
      <Route path="/lab" element={<Lab />} />
      <Route path="/ueber" element={<Ueber />} />
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
  )
}

export default App
