import React, { PureComponent } from 'react';

export default class Wrapper extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            go: false
        };
    }
    go = _ => this.setState({ go: true });
    render() {
        return (
            <div className="Wrapper">
                {this.state.go ? this.props.children : <button onClick={this.go}>{'go'}</button>}
            </div>
        )
    }
}