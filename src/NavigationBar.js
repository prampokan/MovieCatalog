import './App.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    
    };
    return (
        <div className='navwrapper'>
            <div className='brand'><a href=''>WeMovies</a></div>
            <ul>
                <li className='navlink'>
                    <Link to="/">Popular</Link>
                </li>
                <li className='navlink'>
                    <Link to="/nowplaying">Now Playing</Link>
                </li>
                <li className='navlink'>
                    <Link to="/upcoming">Upcoming</Link>
                </li>
                <li className='navlink'>
                    <Link to="/toprated">Top Rated</Link>
                </li>
                <li className="dropdown">
                    <button className="dropdown-btn" onClick={toggleDropdown}>=</button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="/">Popular</Link>
                                </li>
                                <li>
                                    <Link to="/nowplaying">Now Playing</Link>
                                </li>
                                <li>
                                    <Link to="/upcoming">Upcoming</Link>
                                </li>
                                <li>
                                    <Link to="/toprated">Top Rated</Link>
                                </li>
                            </ul>
                        )}
                </li>
            </ul>
        </div>
    )
}

export default NavigationBar