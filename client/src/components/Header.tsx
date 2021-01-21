import React, { FC } from 'react';
import {Link} from 'react-router-dom';

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = (props) => {

  return <div>
      <nav>
          <ul>
              <li><Link to="/">Main</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/hello">Hello</Link></li>
          </ul>
      </nav>
  </div>;
};

export default Header;
