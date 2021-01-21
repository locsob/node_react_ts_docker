import React, { FC } from 'react';
import Routes from "./route/Routes";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = (props) => {
  return <Routes/>;
};

export default App;
