import React from "react";

import { Route, IndexRoute} from "react-router";

import Layout from "./components/Layout.jsx";
import Index from "./components/Index.jsx";
import Help from "./components/Help/Help.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

const routes = (
  <Route path="/" component={Layout} >
        <IndexRoute component={Index}/>
        <Route path="/help" component={Help}/>
        <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
