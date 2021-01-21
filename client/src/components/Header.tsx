import React, { FC } from 'react';
import {Link} from 'react-router-dom';
import Auth from "./Auth";

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = (props) => {

  return <div>
      <Auth/>
      <nav>
          <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/hello">Hello</Link></li>
          </ul>
      </nav>
  </div>;
};

export default Header;
