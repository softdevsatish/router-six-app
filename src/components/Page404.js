import React from 'react'
import { Link } from 'react-router-dom'
function Page404() {
    return (
        <div>
            <p>Page Not Found!!</p>
            <p>Go To Main Page <Link to='/'>Home Page</Link></p>
        </div>
    )
}

export default Page404