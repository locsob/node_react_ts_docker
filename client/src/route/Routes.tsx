import React, { FC } from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from "../pages/Main";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Hello from "../pages/Hello";
import AnonRoute from "../components/route/AnonRoute";
import PrivateRoute from "../components/route/PrivateRoute";
import LoadImage from "../pages/LoadImage";

interface OwnProps {}

type Props = OwnProps;

const Routes: FC<Props> = (props) => {
  return <Switch>
      <Route exact path="/" component={Main}/>
      <AnonRoute exact path="/login" component={Login} />
      <AnonRoute exact path="/signup" component={Signup}/>
      <PrivateRoute exact path="/hello" component={Hello}/>
      <PrivateRoute exact path="/load-image" component={LoadImage}/>
  </Switch>;
};

export default Routes;
