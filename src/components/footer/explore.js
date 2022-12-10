import React from 'react'
import { Link } from 'react-router-dom'
const Explore = ({title, links}) =>{
    return(
        <>
            <h1>{title}</h1>
            <div className='App-link'>
                {
                    links.map((link, i) => <div key={i}>
                        <Link to={link.path} style={{display: 'block'}}>{link.name}</Link>
                    </div>
                    )
                }
            </div>
        </>
    )
}
export default Explore