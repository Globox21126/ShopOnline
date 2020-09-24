import React, {useEffect, useState} from 'react'
import AddProduct from "./AddProduct";

function Products() {

    const [data, setData] = useState(false);

    const fetchAllProducts = () => {
        fetch("http://localhost:3000/products")
        .then(resp => resp.json())
        .then(products => setData(products))
    }

    // json-server --watch ./src/database/products.json

    const addOneProduct = (newProduct) => {

        fetch("http://localhost:3000/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                "Content-Type" : "application/json"
            }

        }).then(fetchAllProducts);
    }

    useEffect(() => {
        fetchAllProducts();
    }, []);

    if(!data){
        return <h1 className="wrapper">Loading...</h1>
    }

    return (
        <section>
            <div className="wrapper products">
                {data.map((el, i) => 
                <>
                    <span>
                        <ul style={{listStyle:"none"}}>
                            <li key={el[i]}>
                                {el.brand}
                            </li>
                            <li key={el[i]}>
                                {el.name}
                            </li>
                            <li key={el[i]}>
                                {el.price}
                            </li>
                        </ul>
                    </span>
                </>
                 )}
            </div>
            <AddProduct addOneProduct={addOneProduct}/>
        </section>
    )
}

export default Products
