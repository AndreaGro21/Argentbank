import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setLogIn } from "../../redux/profileTokenSlice";

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false);

    const apiLogIn = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                })
            const data = await response.json()
            const token = data.body.token
            dispatch(setLogIn({ token }))
            if (rememberMe) {
                localStorage.setItem("token", token);
            }
            return navigate("/User")
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={apiLogIn}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Username
                        </label>
                        <input
                            type="text"
                            id="email"
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            autoComplete="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}
export default Login