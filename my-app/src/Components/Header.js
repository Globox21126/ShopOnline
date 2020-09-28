import React, {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Header() {

    const [data, setData] = useState(false);

    const howManyProducts = () => {
        fetch("http://localhost:3000/bought")
        .then(resp => resp.json())
        .then(products => setData(products))
    }

    const dataChange = () => {
        setInterval(howManyProducts(), 1000 )
        console.log("e")
    }

    useEffect(() => {
        
    }, [])



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
                    <p><FontAwesomeIcon size="lg" icon={faShoppingCart}/> ({data.length})</p>
                </Link>
            </div>
        </section>
    )
}

export default Header
