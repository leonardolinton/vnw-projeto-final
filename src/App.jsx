import Navbar from "./components/Navbar"
import Filmes from "./pages/Filmes"
import Series from "./pages/Series"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Filmes />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  </Router>
  )
}

export default App
