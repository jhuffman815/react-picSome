import React from "react"
import "./App.css"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Header from "./Header"
import {Switch, Route} from "react-router-dom"


function App() {    
    return (
        <div>
            <Header />

            <Switch>
                <Route exact path="/">
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>

    
    )
}

export default App