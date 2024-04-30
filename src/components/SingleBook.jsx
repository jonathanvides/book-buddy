/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Card from "./Card"
import { fetchSingleBook } from "../API"

function SingleBook() {
    const [book, setBook] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { bookId } = useParams()

    useEffect(() => {
        const getBookByID = async () => {
            const book = await fetchSingleBook(bookId)
            setBook(book)
            setIsLoading(false)
        }
        getBookByID()
    }, [])

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (!book) {
        return (
            <>
                <h3>404: Book not found</h3>
            </>
        )
    }

    return (
        <>
            <Card key={book.id} book={book} />
        </>
    )
}

export default SingleBook