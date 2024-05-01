import { useState } from "react"
import { useNavigate } from "react-router-dom"

const APIURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register"

function Register({ setToken }) {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(APIURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ firstname, lastname, email, password }),
            })
            const result = await response.json();
            setToken(result.token);
            navigate("/login");
        } catch (error) {
            setError(error.message);
            console.log(error);
        }
    }

    return (
        <>
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name: <input value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name: <input value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Register