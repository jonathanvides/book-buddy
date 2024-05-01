import { useNavigate } from "react-router-dom"
import User from "./User"

function Account({ token, setToken }) {
    const navigate = useNavigate();

    const handleClick = () => {
        setToken(null);
        navigate("/login")
    }

    return (
        <>
            <h1>Account</h1>
            {token ? (
                <>
                    <User token={token} />
                    <button onClick={() => handleClick()}>Log Out</button>
                </>
            ) : (
                <h2>Login to view your account information.</h2>
            )}
        </>
    )

}

export default Account