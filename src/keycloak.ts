import Keycloak, { KeycloakError, KeycloakInitOptions, KeycloakPromise } from "keycloak-js";

// TODO: Replace values with env vars for dev and prod environments
const keycloak = new Keycloak({
  url: "http://localhost:8080", 
  realm: "alumni-network",
  clientId: "alumni-network-client",
});

/**
 * Initialize Keycloak and silently checking for an existing login.
 */
export const initializeKeycloak = (): KeycloakPromise<boolean, KeycloakError> => {

  const config: KeycloakInitOptions = {
    checkLoginIframe: false,
    onLoad: "check-sso",
    silentCheckSsoRedirectUri: window.location.origin + "/silent-check-sso.html",
  };

  return keycloak.init(config)
}

export default keycloak