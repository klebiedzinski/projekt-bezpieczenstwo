import { useKeycloak } from "@react-keycloak/web";
import axios from "axios";
const Home = ({user}) => {
    const { keycloak } = useKeycloak();
    const test = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api", {
                headers: {
                    "Authorization": "Bearer " + keycloak.token
                }
            });
            console.log(keycloak);
        } catch (error) {
           console.log(error); 
           console.log(keycloak.token);
        }
       
    }
    return ( 
        <div className="home">
        <button onClick={() => test()}>Test API</button>

            {keycloak.authenticated ? "Witaj, "+keycloak.idTokenParsed.preferred_username : <div> Witaj w aplikacji na Bezpieczenstwo, <button onClick={() => keycloak.login()}>zaloguj sie</button></div>}
        </div>
     );
}
 
export default Home;