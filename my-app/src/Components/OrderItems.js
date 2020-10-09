import React, {useState, useEffect} from 'react'


function OrderItems() {

    const [data, setData] = useState("");

    const [name, setName] = useState("")
    const changeName = (e) => {
        setName(e.target.value);
    }

    const [email, setEmail] = useState("")
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const [adress, setAdress] = useState("")
    const changeAdress = (e) => {
        setAdress(e.target.value);
    }

    const [code, setCode] = useState("")
    const changeCode = (e) => {
        setCode(e.target.value);
    }

    const fetchAllBought = () => {
        fetch("http://localhost:3000/bought")
        .then(resp => resp.json())
        .then(order => setData(order))
    }

    useEffect(() => {
        fetchAllBought();
    }, []);

    const addOrder = (newOrder) => {
        fetch("http://localhost:3000/orders", {
            method: "POST",
            body: JSON.stringify(newOrder),
            headers: {
                "Content-type" : "application/json"
            }
        }).then(fetchAllBought);
    }

    console.log(data)

    function handleSubmitOrder(e) {

        e.preventDefault();

        const newOrder = {
            name: name,
            email: email,
            adress: adress,
            code: code,
            bought: {
                data
            }
        };
        addOrder(newOrder);
    }

    return (
        <section className="order">
            <form onSubmit={handleSubmitOrder} className="wrapper order_form">
                <input onChange={changeName} value={name} placeholder="Name and surname"/>
                <input onChange={changeEmail} value={email} placeholder="email"/> 
                <input onChange={changeAdress} value={adress} placeholder="shipping adress"/>
                <input onChange={changeCode} value={code} placeholder="postal code"/>
                <button>Order!</button>
            </form>
        </section>
    )
}

export default OrderItems
  
