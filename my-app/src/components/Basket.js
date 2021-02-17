import React from 'react';

export default function Basket(props) {
    const {cartItems} = props;
    return (
        <aside className="col-1 asidebox">
            {/* <h3>Cart Items</h3> */}
            <input placeholder="Search..."></input>
            <h3 className="mid">YOUR CART DETAILS</h3>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
        </aside>
    );
}