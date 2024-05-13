import React from 'react'

function ClothingForm() {
  return (
    <div className="form">
        <div className="order">
            <b>
            <h1>Clothing Order</h1>
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
                <option value="">Select Product Name</option>
                <option value="TShirt">T-Shirt</option>
                <option value="Full-Sleeve-Shirt">Full-Sleeve-Shirt</option>
                <option value="Sweat-Shirt">Sweat-Shirt</option>
                <option value="Formal-Pant">Formal-Pant</option>
                <option value="Half-Sleeve-Shirt">Half-Sleeve-Shirt</option>
                <option value="Jeans-Pant">Jeans-Pant</option>
                <option value="Pullover">Pullover</option>
                <option value="Denim-Jackets">Denim-Jackets</option>
                <option value="Sweaters">Sweaters</option>
                <option value="Hoodie">Hoodie</option>
                <option value="Slippers">Slippers</option>
                <option value="Shoes">Shoes</option>
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

export default ClothingForm