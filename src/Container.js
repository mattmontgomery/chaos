import React, { PureComponent } from 'react';
import Tile from './Tile';

export default class Container extends PureComponent {
    static defaultProps = {
        depth: 0,
        iterations: 5,
        maxDepth: 3
    }
    renderTile(i) {
        return (
            <Tile depth={this.props.depth} key={i} />
        )
    }
    render() {
        console.log(`depth: ${this.props.depth}`);
        if (this.props.depth >= this.props.maxDepth) {
            return null;
        }
        const tiles = [];
        for (let i = 0; i < this.props.iterations; i++) {
            tiles.push(this.renderTile(i));
        }
        console.log(`tiles`, tiles);
        return (
            <div className="Container">
                {tiles}
            </div>
        )
    }
}