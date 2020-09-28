import React, {useState, useEffect} from 'react'

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

    const multiplyOneProduct = () => {
        console.log(data);
    }

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
                    </div>
                 )}
                 <button onClick={multiplyOneProduct}>ssssssssss</button>
            </div>
        </section>
    )
}

export default ShoppingCart
