import Keycloak, { KeycloakError, KeycloakInitOptions, KeycloakProfile, KeycloakPromise } from "keycloak-js";

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
    onLoad: "login-required",
    checkLoginIframeInterval: 5000,
  };

  return keycloak.init(config)
}

/**
 * Get user profile from Keycloak.
 */
export const getUserProfile = async (): Promise<KeycloakProfile> => {
  const userProfile = await keycloak.loadUserProfile()

  if (!userProfile) {
    throw new Error("User profile not found")
  }

  return userProfile
}

export default keycloak