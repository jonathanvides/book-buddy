/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const APIURL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login"

function Login({ setToken }) {
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
                body: JSON.stringify({email, password}),
            })
            const result = await response.json();
            setToken(result.token);
            console.log("result", result);
            navigate("/books");
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Login!</h2>
            {
                error && <p>{error}</p>
            }
            <form onSubmit={handleSubmit}>
                <label>
                    Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login