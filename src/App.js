import './App.css';
import React from 'react';
import BlockInput from "./components/block_input/block_input";
import Main from "./components/main/main";
import './index';
import Motive from "./components/motive/motive";
import Info from "./components/info/info";
import Aside from "./components/aside/aside";
import Footer from "./components/footer/footer";
import For from "./components/for/for";

function App() {
    return (
        <div>
            <BlockInput />
            <Main />
            <Aside />
            <Motive />
            <For />
            <Info />
            <Footer />
        </div>
    );
}

export default App;
