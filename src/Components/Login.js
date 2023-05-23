import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
const  navigate = useNavigate();
const [cred, setCred] = useState({
    username:"",
    password:""
})

const handleChange = (e) => {
setCred({
    ...cred,
    [e.target.name]:e.target.value
})
}
const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:9000/api/login', cred)
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        navigate("/friends")
    })
    .catch(err => console.error(err.message))
}


return (
    <div className="Login">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
                name="username"
                id="username"
                onChange={handleChange} 
            />
            &nbsp;
            <label htmlFor="password">Password:</label>
             <input 
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
            />
            &nbsp;
            <button type="submit">Submit</button>
        </form>
    </div>
)
}
