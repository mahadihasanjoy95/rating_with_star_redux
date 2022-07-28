import React from "react";
import store from "./store";


import {Provider} from "react-redux";
import Count from "./components/Count";
import Control from "./components/Control";
import StarRating from "./components/StarRating";
import Cart from "./components/Cart";
import SubmitButton from "./components/SubmitButton";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Count/>
                <Control/>
                <Cart/>
                <StarRating/>
                <SubmitButton/>
            </div>
        </Provider>
    );
}

export default App;
