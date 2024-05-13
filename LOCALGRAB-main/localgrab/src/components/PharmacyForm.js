import React from 'react'

function PharmacyForm() {
  return (
    <div className="form">
        <div className="order">
            <b>
            <h1>Pharmacy Order</h1>
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
                <option value="Paracetamol">Paracetamol</option>
                <option value="Gelusil">Gelusil</option>
                <option value="Montair">Montair</option>
                <option value="Dolo-65">Dolo-65</option>
                <option value="Eno">Eno</option>
                <option value="Omni">Omni</option>
                <option value="Sinerest">Sinerest</option>
                <option value="Zandu-balm">Zandu-balm</option>
                <option value="Shellcal">Shellcal</option>
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

export default PharmacyForm
