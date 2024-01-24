import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
    return(
        <div className="App">
            <body className="App-Body">
                <input placeholder="Please enter Message" className="InField" type="text" id="msg" name="msg"></input>
            </body>
        </div>
    );
}

export default App;