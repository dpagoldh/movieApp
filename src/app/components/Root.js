import React from "react";
import {Link} from "react-router";

export class Root extends React.Component {

      render() {
        return(
    <div>
          <nav>
              <div className="nav-wrapper" id="header">
                  <ul className="left">
                      <li><Link to={"/home"} activeStyle={{color: "#2bbbad"}}>Home</Link></li>
                      <li><Link to={"/ilist"} activeStyle={{color: "#2bbbad"}}>iList</Link></li>

                  </ul>
              </div>
          </nav>

              <div className="row">
                  <div className="col-xs-10 col-xs-offset-1">
                      {this.props.children}
                  </div>
              </div>
    </div>
        )
  }
}
