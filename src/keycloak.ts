import Keycloak, { KeycloakInitOptions } from "keycloak-js";

const keycloak = new Keycloak("/keycloak/keycloak.json");

/**
 * Initialize Keycloak and silently checking for an existing login.
 */
export const initializeKeycloak = async (): Promise<void> => {
  
  const config: KeycloakInitOptions = {
    checkLoginIframe: false,
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
      window.location.origin + "/keycloak/silent-check-sso.html",
  };

  try {
    const initialized = await keycloak.init(config);
    alert(initialized  ? 'authenticated' : 'not authenticated');
  } catch (error) {
    alert('failed to initialize keycloak');
  }
};

export default keycloak;
