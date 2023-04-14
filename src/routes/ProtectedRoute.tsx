import { Navigate, Route } from "react-router-dom";
import keycloak from "../keycloak";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  role: string;
  redirectTo?: string;
}

/**
 * Protect routes based on a given role and authenticated status of a Keycloak Session.
 * @description Default redirect is to the base path: "/"
 */
function ProtectedRoute({ children, role, redirectTo = "/" }: Props) {

  if (!keycloak.authenticated) {
    return <Navigate replace to={redirectTo} />;
  }

  if (keycloak.hasRealmRole(role)) {
    return (
      <Route element={children} />
    )
  }

  return <Navigate replace to={redirectTo} />;
}

export default ProtectedRoute;