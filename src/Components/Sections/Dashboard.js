import React, { useState, useEffect }  from 'react'
import { useAuth } from "../../Contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button } from '../Button';
import './BackendSections.css';

function Dashboard(){

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/sign-in")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <div className='dash-container'>

                <div className = 'dashboard-main'>

                    <div className = 'heading-dash'>
                        <h1>Welcome! &#129321;</h1>
                    </div>
                    <div className='logout'>    
                        <Button buttonSize='btn--large' buttonColor='primary' onClick={handleLogout}> 
                            Log Out
                        </Button>
                    </div>
                    <div className = 'main'>
                        <h2 className = 'sub-heading'>Current Balance</h2>
                        <div className='balance'>
                            <p className = 'account-amount'><b>$0.00</b></p>
                        </div>
                    </div>
                    <div className = 'analytics'>
                        <h2 className = 'sub-heading'>Analytics</h2>
                    </div>
                    <div className = 'sidebar'>
                        <h2 className = 'profile-heading'>My Profile</h2>
                        <h3 className='heading-name'>{currentUser.email}</h3>
                        <Link to='/update-profile'>
                            <Button buttonSize='btn--large' buttonColor='primary'>
                                Edit Profile
                            </Button>
                        </Link>
                        <div className ='transactions'>
                            <h3>Transfer</h3>
                            <Link className ='link'>View details</Link>
                            <h3>Transfer</h3>
                            <Link className ='link'>View details</Link>
                            <h3>Transfer</h3>
                            <Link className ='link'>View details</Link>
                        </div>
                    </div>
                </div>
                
            </div>
    
        </>       
    )
}

export default Dashboard;