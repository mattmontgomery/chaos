import React, { PureComponent } from 'react';
import Container from './Container';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default class Tile extends PureComponent {
    renderTile(i) {
        return (
            <div className={["Tile", `Tile-${getRandomInt(3)}`].join(' ')}>
                <Container depth={this.props.depth + 1} />
            </div>
        )
    }
    render() {
        const max = getRandomInt(5);
        console.log(`tile-depth: ${this.props.depth} (max: ${max})`);
        const tiles = [];
        for (let i = 0; i <= max; i++) {
            tiles.push(this.renderTile(i));
        }
        console.log(tiles);
        return <div>{tiles}</div>;
    }
}