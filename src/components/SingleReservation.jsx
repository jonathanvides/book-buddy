import { useState } from "react"

function SingleReservation({ token, reservation, reservations, setReservations, reservationIndex }) {
    const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservation.id}`;
    const [error, setError] = useState(null);

    const deleteReservation = async () => {

        try {
            const response = await fetch(APIURL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            const result = await response.json();
            console.log(result);
            const filteredReservations = reservations.filter((reservation, i) => i !== reservationIndex);
            setReservations(filteredReservations);
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    };

    return (
        <>
            <h2 className="res-title">{reservation.title}</h2>
            <h2 className="res-author">{reservation.author}</h2>
            <img className="res-image" src={reservation.coverimage} alt={`photo of ${reservation.title} by ${reservation.author}`} />
            <button className="res-button" onClick={deleteReservation}>Return Book</button>
        </>
    )
}

export default SingleReservation