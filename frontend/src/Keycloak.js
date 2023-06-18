import Keycloak from "keycloak-js";
const keycloak = new Keycloak(
  {
  url: 'http://localhost:8080/auth',
  realm: 'keycloak-react-auth',
  clientId: 'react',
  }
);

export default keycloak;