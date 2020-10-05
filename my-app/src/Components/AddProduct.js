import React, {useState} from 'react'


function AddProduct({addOneProduct}) {

    const [name, setName] = useState("");
    const changeName = (e) => {
        setName(e.target.value);
    }

    const [brand, setBrand] = useState("");
    const changeBrand = (e) => {
        setBrand(e.target.value);
    }

    const [price, setPrice] = useState("");
    const changePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const addItem = {
            name: name,
            brand: brand,
            price: price
        }
        addOneProduct(addItem);
    }


    return (
        <section className="wrapper add_product">
            <div>
                <h2>Add new product below!</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={changeBrand} value={brand} name="brand" placeholder="Brand"/>
                    <input onChange={changeName} value={name} name="name" placeholder="Product name"/>
                    <input type="number" onChange={changePrice} value={price} name="price" placeholder="Price in $"/>
                    <button>Add!</button>
                </form>
            </div>
        </section>
    )
}

export default AddProduct
