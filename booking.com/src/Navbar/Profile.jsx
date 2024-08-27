import { useState } from "react"
import styles from "./Profile.module.css"
import { useHistory } from "react-router-dom"
import { Logout } from "../components/Login/Loginn"

export const Profile = () => {
    const data = JSON.parse(localStorage.getItem("login"))
    const [logout, setLogout] = useState(false)
    const history = useHistory()
    let userData
    if (data) {
        userData = data
    }
    else {
        userData = {
            imageUrl: "#",
            name: ""
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("login")
        alert("Successfully Logged Out")
        history.push("/") // Redirect to home page
    }

    return <>
        <div className={styles.profile} onClick={() => setLogout(!Logout)}>
            <div>
                <img src={userData.imageUrl} alt="userprofile" />
            </div>
            <div>
                <h4>{userData.name}</h4>
            </div>
        </div>
        {
            logout && <div className={styles.logout} onClick={() => handleLogout()} >
                <Logout />
            </div>
        }
    </>
}
