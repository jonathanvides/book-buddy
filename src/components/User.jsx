import { useState, useEffect } from "react"
import { fetchUser } from "../API"

function User({ token }) {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            if (!token) {
                alert("Failed to fetch user details.");
            }
            try {
                const fetchedUser = await fetchUser(token);
                setUser(fetchedUser);
            } catch (error) {
                setError(error.message)
                console.log(error)
            }
        };
        getUser();
    }, [token]);

    return (
        <>
            <p>Name: {user.firstname} {user.lastname}</p>
            <p>Email: {user.email}</p>
        </>
    )
}

export default User