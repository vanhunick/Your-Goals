import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";


import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NewGoal from "./pages/NewGoal";

const app = document.getElementById('app');



// ReactDOM.render(<Layout data={data}/>, app);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index}></IndexRoute>
      <Route path="login" component={Login}></Route>
      <Route path="NewGoal" component={NewGoal}></Route>
    </Route>
  </Router>,
app);
