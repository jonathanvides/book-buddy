/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useNavigate } from "react-router-dom"

function Account({ token, setToken }) {
    const navigate = useNavigate(); 

    const handleClick = () => {
        if (token) {
            setToken(null);
            navigate("/login")
        } else {
            alert("Login to view your account.")
        }
    }

    return (
       <>
            <button onClick={() => handleClick()}>Log Out</button>
       </>
    )

}

export default Account