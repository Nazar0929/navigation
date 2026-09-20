
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login () {

    const[isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(true)

    }

    if (isLogin) {
         return <Navigate to="/profile"/>
    }

    return(
        <>
       <h1>Login Page</h1>
        <button type="button" onClick={handleLogin}>Login BTN</button>
        </>
    )
}
export default Login




// import { useNavigate } from "react-router-dom"

// function Login () {
//     const navigate = useNavigate()
//     const handleLogin = () => {
//         navigate("/profile")
//     }
//     return(
//         <>
//         <h1>Login Page</h1>
//         <button type="button" onClick={handleLogin}>Login BTN</button>
//         </>
//     )
// }
// export default Login