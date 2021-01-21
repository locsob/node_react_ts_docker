import React, { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import App from "./App";

interface OwnProps {}

type Props = OwnProps;

const AppContext: FC<Props> = (props) => {
  return <HashRouter>
    <App/>
  </HashRouter>;
};

export default AppContext;
