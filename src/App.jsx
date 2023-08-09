import React from "react";
import "./App.css";
import "./App.responsive.css";
import "./index.css";
import Header from "./Components/Header";
import Descriptopn from "./Components/Descriptopn";
import Products from "./Components/Products";
function App() {
    return (
        <div>
            <Header />
            <Descriptopn />
            <Products />
        </div>
    );
}
export default App;
