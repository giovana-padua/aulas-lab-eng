import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home"
import Ativ1 from "./Ativ1"
import Ativ2 from "./Ativ2"

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/ativ1" element={<Ativ1/>} />
                <Route path="/ativ2" element={<Ativ2/>} />
            </Routes>
        </BrowserRouter>
    )
}
