import React from "react"
import {Link} from "react-router-dom"


function Header() {
    return (
        <header>
            <Link to="/">
                <h2>Pic Some</h2>
            </Link>
            <Link to="/cart">
                <i class="ri-shopping-cart-fill"></i>
            </Link>
        </header>
    )
}

export default Header
