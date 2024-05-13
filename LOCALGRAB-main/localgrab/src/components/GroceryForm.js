import React from 'react'

function GroceryForm() {
  return (
    <div className="form">
        <div className="order">
            <b>
            <h1>Order Here</h1>
            </b>
        </div>
        <form>
            <div className="abc">
            <div className="input">
                <label htmlFor="name">Name:</label>
                <input
                className="inputbox"
                type="text"
                name="name"
                required=""
                placeholder="Enter your name"
                />
            </div>
            <div className="input">
                <label htmlFor="address">Address:</label>
                <textarea
                className="inputbox"
                name="address"
                placeholder="Enter your address"
                id="address"
                cols={20}
                rows={1}
                defaultValue={""}
                />
            </div>
            <div className="input">
                <label htmlFor="mobile">Mobile:</label>
                <input
                className="inputbox"
                type="tel"
                name="mobile"
                required=""
                placeholder="Enter your number"
                />
            </div>
            <div className="input">
                <label htmlFor="email">Email:</label>
                <input
                className="inputbox"
                type="email"
                name="email"
                required=""
                placeholder="Enter your mail"
                />
            </div>
            <div className="input">
                <label htmlFor="productName">Product Name:</label>
                <select name="productName" id="productName" className="inputbox">
                <option value="gro">Select Product Name</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Chilli">Chilli</option>
                <option value="Mango">Mango</option>
                <option value="Broccoli">Broccoli</option>
                <option value="Cauliflower">Cauliflower</option>
                <option value="Cabbage">Cabbage</option>
                <option value="Potato">Potato</option>
                <option value="Avocado">Avocado</option>
                <option value="Chillipowder">Chillipowder</option>
                <option value="Salt">Salt</option>
                </select>
            </div>
            <div className="input">
                <label htmlFor="quantity">Quantity:</label>
                <input
                className="inputbox"
                type="number"
                name="quantity"
                required=""
                placeholder="Enter The Quantity"
                />
            </div>
            </div>
            <div className="btn">
            <button type="submit" ><a href="https://buy.stripe.com/test_9AQ8A3cpUdH8dqw147">CLICK TO PAY</a></button>
            </div>
        </form>
        </div>

  )
}

export default GroceryForm
