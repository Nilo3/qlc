
import './App.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Register from "./views/Register/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Trivia from './views/Trivia/Trivia'
import Ranking from './views/Ranking/Ranking'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/ranking" element={<Ranking />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/trivia" element={<Trivia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
