import React from 'react';
import logo from "./img/Logo-2.png";
import cart from "./img/shopping-cart.svg";
import user from "./img/noun_profile_2068277.svg";

export default function Header(props) {
    return (
        <header className="row block center">
            <div>
                <a href="#/"><img src={logo} alt="HashedIn" /></a>
            </div>
            <div>
                <a href="#" className="bold">COURSES</a>
                <a href="#" className="dull">MY WISHLIST</a>
                <a href="#/cart"><img src={cart} alt="Cart"></img></a>  <a href="#/user"><img src={user} alt="User"></img></a>
            </div>
        </header>
    );
}