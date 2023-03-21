import React from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const locattion = useLocation();
  return <div data-testid="test-display">{locattion.pathname}</div>;
};
export default LocationDisplay;
