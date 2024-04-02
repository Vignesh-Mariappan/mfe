import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";

// mount function to start the app
const mount = elem => {
    ReactDOM.render(
        <App />,
        elem
    )
}

// if we are in development & in isolation
// call mount immediately
if(process.env.NODE_ENV === "development") {
    const devMarketingRootElem = document.querySelector("#_marketing-dev-root");
    if(devMarketingRootElem) {
        mount(devMarketingRootElem);
    }
}

// if we are in production 
// we are running through the host (container)
// exported mount from here will be used in the host
export { mount };