import { useLocation } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>You're now registered for Red30 Tech.</p>
      {/* Ensure it renders only when there's state in the location object */}
      {state && (
        <p>We've sent more details to <strong>{state.email}</strong> </p>
      )}
      
    </div>
  );
}
