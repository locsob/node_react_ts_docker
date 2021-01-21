import React, { FC } from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Hello from "../pages/Hello";

interface OwnProps {}

type Props = OwnProps;

const Routes: FC<Props> = (props) => {
  return <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/hello" component={Hello}/>
  </Switch>;
};

export default Routes;
