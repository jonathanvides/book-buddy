import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import bookLogo from './assets/books.png'
import Nav from "./components/Nav"
import Books from "./components/Books"
import SingleBook from "./components/SingleBook"
import Login from "./components/Login"
import Register from "./components/Register"
import Account from "./components/Account"
import './App.css'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <Nav token={token} />
      {/* <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */}

      <Routes>
        <Route path="/" element={<Books token={token} />} />
        <Route path="/books" element={<Books token={token}/>} />
        <Route path="/books/:bookId" element={<SingleBook token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account token={token} setToken={setToken} />} />
      </Routes>

    </>
  )
}

export default App
