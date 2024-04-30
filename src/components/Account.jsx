/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUser } from "../API"

function Account({ token, setToken }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            if (!token) {
                console.log("Failed to fetch user details.");
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

    const handleClick = () => {
        setToken(null);
        navigate("/login")
    }

    return (
        <>
            <h1>Account</h1>
            {token ? (
                <>
                    {/* <p>Name: {user.firstname} {user.lastname}</p> */}
                    <p>Email: {user.email}</p>

                    <button onClick={() => handleClick()}>Log Out</button>
                </>
            ) : (
                <h2>Login to view your account information.</h2>
            )}
        </>
    )

}

export default Account