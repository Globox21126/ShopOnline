import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

function ShoppingCart() {

    const [data, setData] = useState(false);

    const fetchAllBought = () => {
        fetch("http://localhost:3000/bought")
        .then(resp => resp.json())
        .then(bought => setData(bought))
    }

    const removeProduct = (id) => {
        fetch(`http://localhost:3000/bought/${id}`, {
            method: "DELETE"
        }).then(fetchAllBought);
    }

    useEffect(() => {
        fetchAllBought();
    }, []);

    const totalPrice = () => {
        if(data.length === 0) {
            return <h1>No items in your cart!</h1>;
        } else {
            let price = data.map((el) => parseInt(el.price)).reduce((a, b) => a + b);
            return price + "$";
        }
    }

    if(!data) {
        return <h1 className="wrapper">Loading...</h1>
    }


    return (
        <section>
            <div className="wrapper cart_items">
                <div className="items_container">
                {data.map((el) => 
                    <div className="bought_products" key={el.id}>
                        <span className="brand_name">{el.brand}, {el.name}</span>
                        <span className="price">Price: {el.price}$</span>
                        <i>Remove: <FontAwesomeIcon  onClick={() => removeProduct(el.id)} className="remove_product" icon={faTrashAlt}/></i>
                    </div>
                 )}
                 </div>
                <span className="total_price">Total price: {totalPrice()}</span>
            </div>
            <Link to="/orderitems">
                <p className="wrapper">Order your items!</p>  
            </Link>
        </section>
    )
}

export default ShoppingCart
