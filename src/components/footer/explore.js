import React from 'react'
import { Link } from 'react-router-dom'
const Explore = ({title, links}) =>{
    return(
        <>
        <h1>{title}</h1>
        <br />
        <div className='App-link'>
            {
                links.map((link, i) => <div>
                    <Link key={i} to={link.path} style={{display: 'block'}}>{link.name}</Link>
                    </div>
                    )
            }
        </div>
        </>
    )
}
export default Explore