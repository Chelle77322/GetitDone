import React from "react";

import { Route, IndexRoute} from "react-router";

import Layout from "./components/Layout.js";
import Index from "./components/Index.js";
import Help from "./components/Help/Help.js";
import NotFoundPage from "./components/NotFoundPage.js";

const routes = (
  <Route path="/" component={Layout} >
        <IndexRoute component={Index}/>
        <Route path="/help" component={Help}/>
        <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
Footer