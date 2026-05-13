import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Ativ01 from "./Ativ01";
import Ativ02 from "./Ativ02";

function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" elment={<Home/>} />
                <Route path="/ativ01" elment={<Ativ01/>} />
                <Route path="/ativ02" elment={<Ativ02/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MinhasRotas
