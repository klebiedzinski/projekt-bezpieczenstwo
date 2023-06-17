import { Link } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";

const Navbar = () => {
    const { keycloak, initialized } = useKeycloak();
    return ( 
        <nav className="navbar">
            <h1>Projekt Bezpieczenstwo</h1>
            <div className="links">
            <Link to={"/"} >
                Home
            </Link>
            <Link to={"/admin"} >
                Admin
            </Link>
            <Link to={"/products"} >
                Products
            </Link>

            {keycloak.authenticated && <button onClick={() => keycloak.logout()}>Wyloguj się</button>}
            </div>
        </nav>
     );
}
 
export default Navbar;