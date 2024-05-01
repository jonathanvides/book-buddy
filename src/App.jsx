import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import bookLogo from './assets/books.png'
import Nav from "./components/Nav"
import Books from "./components/Books"
import SingleBook from "./components/SingleBook"
import Login from "./components/Login"
import Register from "./components/Register"
import Account from "./components/Account"
import Reservations from "./components/Reservations"
import './App.css'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo} />Library App</h1>
      <Nav token={token} />

      <Routes>
        <Route path="/" element={<Books token={token} />} />
        <Route path="/books" element={<Books token={token} />} />
        <Route path="/books/:bookId" element={<SingleBook token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account token={token} setToken={setToken} />} />
        <Route path="/reservations" element={<Reservations token={token} />} />
      </Routes>

    </>
  )
}

export default App
