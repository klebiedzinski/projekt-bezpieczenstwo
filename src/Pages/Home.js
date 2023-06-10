import { useKeycloak } from "@react-keycloak/web";
const Home = ({user}) => {
    const { keycloak, initialized } = useKeycloak();
    console.log(keycloak)
    return ( 
        <div className="home">
            {keycloak.authenticated ? "Witaj, "+keycloak.idTokenParsed.preferred_username : <div> Witaj w aplikacji na Bezpieczenstwo, <button onClick={() => keycloak.login()}>zaloguj sie</button></div>}
        </div>
     );
}
 
export default Home;