import { Navigate } from "react-router";

function Protected({ isLoged, children }) {
  if (!isLoged) return <Navigate to="/auth" replace />;
  return children;
}

export default Protected;
