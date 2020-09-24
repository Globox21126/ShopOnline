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

        const newProduct = {
            name: name,
            brand: brand,
            price: price
        }
        addOneProduct(newProduct);
    }


    return (
        <div className="wrapper">
            <h2>Dodaj produkt poniżej</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={changeBrand} value={brand} name="brand" placeholder="Producent"/>
                <input onChange={changeName} value={name} name="name" placeholder="Nazwa"/>
                <input onChange={changePrice} value={price} name="price" placeholder="Cena"/>
                <button>Dodaj</button>
            </form>
        </div>
    )
}

export default AddProduct
