import { Link } from "react-router-dom";


function HomePage() {
    return ( 
        <div>
            <h1>Ola</h1>
            <Link to="/Barber/Agendar">Agendar horario</Link>
        </div> );
}

export default HomePage;