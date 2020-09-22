import React, {useEffect, useState} from 'react'

function Products() {

    const [data, setData] = useState(false);

    const fetchAllProducts = () => {
        fetch("http://localhost:3000/products")
        .then(resp => resp.json())
        .then(products => setData(products))
    }

    useEffect(() => {
        fetchAllProducts();
    }, []);

    if(!data){
        return <h1 className="wrapper">Loading...</h1>
    }


    return (
        <section>
            {data.map((el) => 

            )}
        </section>
    )
}

export default Products
