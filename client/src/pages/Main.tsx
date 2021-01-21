import React, { FC } from 'react';
import Header from "../components/Header";

interface OwnProps {}

type Props = OwnProps;

const Main: FC<Props> = (props) => {
  return <div>
      <Header/>
      <div>Main</div>
  </div>;
};

export default Main;
