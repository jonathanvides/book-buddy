import { useState, useEffect } from "react"
import Card from "./Card"
import { fetchAllBooks } from "../API"

function Books() {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            try {
                const booksInfo = await fetchAllBooks()
                setBooks(booksInfo)
                setFilteredBooks(booksInfo)
            } catch (error) {
                console.error("Failed to fetch books!", error)
            }
        }
        getBooks()
    }, [])

    const onInputChange = (event) => {
        const searchTerm = event.target.value.toLowerCase()
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm))

        setFilteredBooks(filteredBooks)
    }

    return (
        <>
            <h2 className="search">Search</h2>
            <input className="searchTerm" label="Search" onChange={onInputChange} />
            <div className="books">
                {filteredBooks.map(book => <Card key={book.id} book={book} />)}
            </div>
        </>
    )

}

export default Books