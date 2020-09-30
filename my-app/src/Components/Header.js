import React, {useState, useEffect} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Header() {

    const [data, setData] = useState([]);

    const howManyProducts = () => {
        fetch("http://localhost:3000/bought")
        .then(resp => resp.json())
        .then(products => setData(products))
    }

    // const boughtInterval = setInterval(() => {
    //     howManyProducts();
    //     clearInterval(boughtInterval);
    // }, 1000);

    useEffect(() => {
        howManyProducts()
    }, [])

    if(!data) {
        return <h1 className="wrapper">Loading...</h1>
    }

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
