import React from 'react'
import { Link } from 'react-router-dom'
import './UserPage.css'

function UserPage() {
    return (
        <div className="user__page">
            <Link to="/">
                <button>Back to home</button>
            </Link>
        </div>
    )
}

export default UserPage
