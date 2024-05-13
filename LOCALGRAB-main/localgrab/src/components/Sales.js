import React from 'react'

function Sales() {
  return (
    <>
        <div id="container">
            <div id="sideMenu">
                <h1 className='sales'>Sales Report</h1>
            </div>
            <div id="content">
                <div id="titleBar">
                <h2 className='sales'>Total sales</h2>
                <div id="profilePic"></div>
                </div>
                <div className="mainChart">
                <div>
                    <img src="../images/saless.png" alt='sales'/>
                </div>
                <div className="clearFix" />
                <br />
                <table>
                    <tbody>
                    <tr>
                        <th>yearly Sales</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>grocery shop 1</td>
                        <td>20</td>
                        <td>₹1,342</td>
                    </tr>
                    <tr>
                        <td>grocery shop2</td>
                        <td>18</td>
                        <td>₹1,550</td>
                    </tr>
                    <tr>
                        <td>grocery shop 3</td>
                        <td>15</td>
                        <td>₹4,170</td>
                    </tr>
                    <tr>
                        <td>grocery shop 4</td>
                        <td>25</td>
                        <td>₹2,974</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sales
