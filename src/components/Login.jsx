import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export default function Login() {
    // state for the controlled form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for flash messages from the server
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            console.log('do axios call')
            //post to the backend with axios
            const requestBody = {
                email: email,
                password: password
            }

            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)

            console.log(response)

            // save the response to localstorage

        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>  
            <h3>Login to your account</h3>

            <p>{message}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor={'email-input'}>email:</label>

                <input 
                    id='email-input'
                    type='email'
                    placeholder='user@domain.com'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />

                <label htmlFor={'password-inout'}>password:</label>

                <input 
                    id='password-input'
                    type='password'
                    placeholder='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <input 
                    type='submit'
                    value='login'
                />

            </form>
        </div>
    )
}