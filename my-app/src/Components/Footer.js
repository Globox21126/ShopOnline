import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/fontawesome-free-brands'

function Footer() {
    return (
        <section className="footer wrapper">
            <div className="footer_left">
                <h3>ShopOnline®</h3>
            </div>
            <div className="footer_right">
                Find us: 
                <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FontAwesomeIcon size="2x" icon={faFacebookSquare}/></a>
                <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=uE-1RPDqJAY" target="_blank"><FontAwesomeIcon size="2x" icon={faInstagram}/></a>
            </div>
        </section>
    )
}

export default Footer
