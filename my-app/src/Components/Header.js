import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Header() {
    return (
        <section className="header wrapper">
            <div>
                <Link to="/">
                    <h3>ShopOnline</h3>
                </Link>
            </div>
            <div>
                <Link to="/products">
                    <p>Products</p>
                </Link>
                <Link to="/aboutus">
                    <p>About us</p>
                </Link>
                <Link to="/shoppingcart">
                    <p><FontAwesomeIcon size="lg" icon={faShoppingCart}/></p>
                </Link>
            </div>
        </section>
    )
}

export default Header
