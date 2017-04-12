import {render} from "react-dom";
import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import {Root} from "./components/Root";
import {iList} from "./components/iList";
import {Home} from "./components/Home";


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={Root} >
                    <IndexRoute component={Home} />
                    <Route path={"iList"} component={iList} />
                    <Route path={"home"} component={Home} />

                </Route>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));
