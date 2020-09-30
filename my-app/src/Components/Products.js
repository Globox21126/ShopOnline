import React, {useEffect, useState} from 'react'
import AddProduct from "./AddProduct";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

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

    const buyProduct = (id, itemBrand, itemName, itemPrice) => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(resp => resp.json())
        .then(fetch("http://localhost:3000/bought", {
            method: "POST",
            body: JSON.stringify({
                "brand": itemBrand,
                "name": itemName,
                "price": itemPrice
            }),
            headers: {
                "Content-Type" : "application/json"
            }
        }));
    }

    useEffect(() => {
        fetchAllProducts();
    }, []);

    if(!data) {
        return <h1 className="wrapper">Loading...</h1>
    }

    return (
        <section>
            <div className="wrapper products">
                {data.map((el) => 
                    <span key={el.id}>
                        <ul style={{listStyle:"none"}}>
                            <li>
                                {el.brand}
                            </li>
                            <li>
                                {el.name}
                            </li>
                            <li>
                                {el.price}
                            </li>
                            <i onClick={() => buyProduct(el.id, el.brand, el.name, el.price)}>Add to cart <FontAwesomeIcon className="plus_product" size="lg" icon={faPlusSquare}/></i>
                        </ul>
                    </span>
                 )}
            </div>
            <AddProduct addOneProduct={addOneProduct}/>
        </section>
    )
}

export default Products
