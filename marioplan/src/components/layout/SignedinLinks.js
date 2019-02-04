import React from 'react'
import {Link} from 'react-router-dom'

const SignedinLinks = () =>{
    return (        
        <ul className="right">
            <li><Link to="/">New Project</Link></li>
            <li><Link to="/">Log Out</Link></li>
            <li><Link to="/" className="btn btn-floating pink lighten-1">NN</Link></li>
        </ul>     
    )
}
export default SignedinLinks