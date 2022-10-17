import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Mgo+DSMBaFt/QHNqVVhkW1pFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iSX5QdkRnXn1Xd3FWRA==;Mgo+DSMBPh8sVXJ0S0V+XE9AcVRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdkVgWX5ad3ZcQWZaUw==;ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VjWn9fdHNXT2dbWUY=;NzI5NDg3QDMyMzAyZTMzMmUzMGRPdjB4c0JoNUtzSnRxOXkySlQwc1RjK2JXaURTNFU4ZU5JVE40cUhtYlk9;NzI5NDg4QDMyMzAyZTMzMmUzMGV3OUozR1ZjN3JwdEdwZGgzU2RTVGFQdXRBZGI0ajQyYkxwOGplQzdpREE9;NRAiBiAaIQQuGjN/V0Z+X09EaFtFVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERjWXxecXBSRGlUV0d0;NzI5NDkwQDMyMzAyZTMzMmUzMEJ5YkpGR1FMNFFYL2tOMGx0eGU0VVliNlpYZkN0eG5Nc3h3NHE4MVo2Q1U9;NzI5NDkxQDMyMzAyZTMzMmUzMFE4QVhpeEVpS3J0cHE2UmNTZ0VXK1JSVUt0VWdoZlBWbTNjVVhVMEdESkk9;Mgo+DSMBMAY9C3t2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VjWn9fdHNXT2lYVkY=;NzI5NDkzQDMyMzAyZTMzMmUzMEx4KzUyTUNRdEQrUjAyNlJKU0ZzVUNSZ0kzSVk0YmdvTzhqak1xalJ1bFU9;NzI5NDk0QDMyMzAyZTMzMmUzMEM1Z2J3bmdOWTlvZENTUWx4YUtqY0tkVXdLczlPcEFpckhYYmNzZzhVb2s9;NzI5NDk1QDMyMzAyZTMzMmUzMEJ5YkpGR1FMNFFYL2tOMGx0eGU0VVliNlpYZkN0eG5Nc3h3NHE4MVo2Q1U9"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
