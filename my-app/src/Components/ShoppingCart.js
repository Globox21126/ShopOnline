import React, {useState, useEffect} from 'react'
import RemoveFromCart from "./RemoveFromCart";

function ShoppingCart() {

    const [data, setData] = useState(false);

    const fetchAllBought = () => {

        fetch("http://localhost:3000/bought")
        .then(resp => resp.json())
        .then(bought => setData(bought))

    }

    useEffect(() => {
        fetchAllBought();
    }, []);


    if(!data) {
        return <h1 className="wrapper">Loading...</h1>
    }

    return (
        <section>
            <div className="wrapper">
                {data.map((el) => 
                    <div className="bought_products" key={el.id}>
                        <span className="brand_name">{el.brand}, {el.name}</span>
                        <span className="price">Price: {el.price}</span>
                        <RemoveFromCart />
                    </div>
                 )}
            </div>
        </section>
    )
}

export default ShoppingCart
