import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul className='navbar'>
                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'blue' } }}
                    className="navbar-link" to='/' >Home</NavLink> </li>
                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'blue' } }}
                    className="navbar-link" to='/about'>About Us</NavLink> </li>
                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'blue' } }}
                    className="navbar-link" to='/contact'>Contact Us</NavLink> </li>

                <li> <NavLink
                    style={({ isActive }) => { return { color: isActive ? 'green' : 'blue' } }}
                    className="navbar-link" to='/filter'>Filter</NavLink> </li>

            </ul>




        </div>
    )
}

export default Navbar