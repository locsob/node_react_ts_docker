import React, {FC, useContext} from 'react';
import {Link} from 'react-router-dom';
import Auth from "./Auth";
import {UserContext} from "../context/user";

interface OwnProps {}

type Props = OwnProps;

const Header: FC<Props> = (props) => {
    const {isLoggedIn} = useContext(UserContext);

    return <div>
      <Auth/>
      <nav>
          <ul>
              <li><Link to="/">Main</Link></li>
              {isLoggedIn && <li><Link to="/hello">Hello</Link></li>}
              {isLoggedIn && <li><Link to="/load-image">Load Image</Link></li>}
          </ul>
      </nav>
    </div>;
};

export default Header;
