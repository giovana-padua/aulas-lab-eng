import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Página 1</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Ativ01">Atividade 1</Link>
                    </li>

                    <li>
                        <Link to="/Ativ02">Atividade 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home
