import { useState, useEffect } from "react"
import SingleReservation from "./SingleReservation"

function Reservations({ token }) {
    const APIURL = `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations`;
	const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReservation = async () => {
            if (!token) {
                console.log("Failed to fetch book reservation.");
            }
            try {
                const response = await fetch(APIURL, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                });
                const { reservation } = await response.json();
                setReservations(reservation);
            } catch (error) {
                setError(error.message)
                console.log(error)
            }
        };
        getReservation();
    }, [token])

    return (
        <>
            {token && reservations.length > 0 ? (
                <>
                    <h2>Reservations</h2>
                    {reservations.map((reservation, index) => (
						<SingleReservation key={reservation.id} token={token} index={index} reservation={reservation} reservations={reservations} setReservations={setReservations} />
					))}
                </>
            ) : !token ? (
                <h2>Login to view your book reservations.</h2>
            ) : (
                <h2>No book reservations.</h2>
            )}
        </>
    )
}

export default Reservations