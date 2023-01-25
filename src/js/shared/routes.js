import React from " react";
import {Route, IndexRoute} from "react-router";
import Layout from "./Components/Layout.jsx";
import Index from "./Components/Index.jsx";
import Help from "./Components/Help/Help.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";

const routes = (
  <Route path = "/" component={Layout}>
    <IndexRoute component={Index}/>
    <Route path = "/help" component={Help}/>
    <Route path = "*" component={NotFoundPage}/>
  </Route>
);
console.log(IndexRoute)
export default routes;
