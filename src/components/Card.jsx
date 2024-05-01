import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Card({ book, token, viewDetails }) {
    const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const checkoutBook = async (isAvailable) => {
        try {
            const response = await fetch(APIURL, {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({available: isAvailable}),
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            setError(error.message);
            console.log(error)
        }
    }

    return (
        <div className="book-card">
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            <p className="description">{book.description}</p>
            <img className="coverimage" src={book.coverimage} alt={`photo of ${book.title} by ${book.author}`} />
            {viewDetails && token && book.available ? (
                <button onClick={() => checkoutBook(false)}>Checkout Book</button>

            ) : viewDetails && token && !book.available ? (
                <button onClick={() => checkoutBook(true)}>Return Book</button>
            ) : (
                <p className="available">{book.available ? "Available" : "Not Available"}</p>
            )}
            <button className="detail-button" data-id={book.id} onClick={() => navigate(`/books/${book.id}`)}>View Details</button>
            <button className="back-button" data-id={book.id} onClick={() => navigate("../")}>Back</button>
        </div>
    )
}

export default Card