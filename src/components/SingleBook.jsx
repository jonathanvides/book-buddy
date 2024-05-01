import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Card from "./Card"
import { fetchSingleBook } from "../API"

function SingleBook({ token }) {
    const [book, setBook] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [viewDetails, setViewDetails] = useState(true);
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
            <Card key={book.id} book={book} token={token} viewDetails={setViewDetails} />
        </>
    )
}

export default SingleBook