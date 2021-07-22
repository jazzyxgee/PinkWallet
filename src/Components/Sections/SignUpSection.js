import React, { useRef, useState } from "react"
import { Button } from '../Button';
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import './SignSections.css';

function SignUpSection(){

    const emailRef = useRef()
    const nameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (

        <div className='sign-container'>
            
            <div className = 'signup-card'>
                <div className ='card-content'>

                    <h1 className='heading-card'>Sign Up for Free</h1>
                    
                    <div className = 'form-section'>
                        <div className = 'error'>{error}</div>
                        <form onSubmit={handleSubmit}>
                            {/*
                            <div className = 'item'>
                                <label for="name">Name </label>
                                <input type="text" ref={nameRef} id ="name" required></input>
                            </div>*/}
                            <div>
                                <label for="email">Email </label>
                                <input type="email" ref={emailRef} id ="email" required></input>
                            </div>
                            <div>
                                <label for="password">Password </label>
                                <input type="password" ref={passwordRef} required></input>
                            </div>
                            <div>
                                <label for="password">Confirm Password </label>
                                <input type="password" ref={passwordConfirmRef} required></input>
                            </div>
                            <div className='cnt-button'>
                                <Button disabled={loading} buttonSize='btn--wide' buttonColor='maroon' type="submit">
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className="exist-login">
                Already have an account? <Link className = 'link' to="/sign-in">Sign In</Link>
            </div>
        </div>
    
        
    );
}

export default SignUpSection;