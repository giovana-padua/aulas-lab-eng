import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            <h1>Página 1</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Ativ1">Ativida 1</Link>
                    </li>
                    <li>
                        <Link to="/Ativ2">Ativida 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home