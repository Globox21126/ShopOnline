import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <section className="header wrapper">
            <div>
                <h3>ShopOnline</h3>
            </div>
            <div>
                <a>Products</a>
                <a>About us</a>
                <FontAwesomeIcon size="lg" icon={faShoppingCart} />
            </div>
        </section>
    )
}

export default Header
