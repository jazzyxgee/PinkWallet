import React, { useRef, useState } from "react"
import { Button } from '../Button';
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import './SignSections.css';

function SignInSection(){

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const { signup, currentUser } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/dashboard")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
    }

    return (

        <div className='sign-container'>
            
            <div className = 'signin-card'>
                <div className ='card-content'>

                    <h1 className='heading-card'>Sign In</h1>
                    
                    <div className = 'form-section'>
                        <div className = 'error'>{error}</div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label for="email">Email </label>
                                <input type="email" ref={emailRef} id ="email" required></input>
                            </div>
                            <div>
                                <label for="password">Password </label>
                                <input type="password" ref={passwordRef} required></input>
                            </div>
                            <div className='cnt-button'>
                                <Button disabled={loading} buttonSize='btn--wide' buttonColor='maroon' type="submit">
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="exist-login">
                Need an account? <Link className = 'link' to="/sign-up">Sign Up</Link>
            </div>
        </div>
    
        
    );
}

export default SignInSection;