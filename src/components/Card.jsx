import React from "react"
import { useNavigate } from "react-router-dom"

function Card({ book }) {
    const navigate = useNavigate()

    return (
        <div className="book-card">
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            <p className="description">{book.description}</p>
            <img className="coverimage" src={book.coverimage} alt={`photo of ${book.title} by ${book.author}`} />
            <p className="available">{book.available}</p>
            <button className="detail-button" data-id={book.id} onClick={() => navigate(`/books/${book.id}`)}>View Details</button>
            <button className="back-button" data-id={book.id} onClick={() => navigate("../")}>Back</button>
        </div>
    )
}

export default Card