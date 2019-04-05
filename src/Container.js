import React, { PureComponent } from 'react';
import Tile from './Tile';

export default class Container extends PureComponent {
    static defaultProps = {
        depth: 0,
        iterations: 5,
        maxDepth: 4
    }
    renderTile(i) {
        return (
            <Tile depth={this.props.depth} key={i} />
        )
    }
    render() {
        if (this.props.depth >= this.props.maxDepth) {
            return null;
        }
        return (
            <div className="Container">
                {(new Array(this.props.iterations)).fill().map((v,i) => this.renderTile(i))}
            </div>
        )
    }
}