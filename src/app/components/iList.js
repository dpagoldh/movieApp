import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = {
    transition: 'all 1s ease-out'
};

export class iList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ['Im number 1', 'Im number 2', 'Im number 3'],
            itemNumber: 3
        };
    }

    onAddItem() {
        this.setState({
            itemNumber: this.state.itemNumber + 1,
            items: this.state.items.concat(['Im number '+ (this.state.itemNumber + 1)])
        });
    }

    onDeleteItem(id) {
      const newItems = this.state.items.slice();
      newItems.splice(id, 1);
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <a id ="addItemButton" className="waves-effect waves-light btn" onClick={this.onAddItem.bind(this)}>Add item</a>
                            <p>Click Item to Delete</p>
                                <ul id = "itemList" className="collection">
                                <ReactCSSTransitionGroup
                                transitionName="fade"
                                transitionEnterTimeout={300}
                                transitionLeaveTimeout={300}
                                transitionAppear={true}
                                transitionAppearTimeout={300}>
                                    {this.state.items.map((item, i )=> {
                                      return(
                                        <li key={item} className="collection-item"
                                        onClick={this.onDeleteItem.bind(this, i)}
                                        style={{cursor: 'pointer'}}> {item} </li>
                                      )
                                    })}
                                    </ReactCSSTransitionGroup>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

        );
    }
}
