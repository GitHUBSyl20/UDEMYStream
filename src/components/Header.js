import { Link } from 'react-router-dom'
import React from 'react';
import GoogleAuth from './GoogleAuth'
import RefactAuth from './OLDGoogleAuth'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">    
                <Link to="/" className="item">
                    all stream
            </Link>
            <GoogleAuth/>
            </div>
        </div>
    )
}

export default Header
