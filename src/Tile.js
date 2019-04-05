import React, { PureComponent } from 'react';
import Container from './Container';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default class Tile extends PureComponent {
    renderContainer(i) {
        return (
            <div className={["Tile", `Tile-${getRandomInt(10)}`].join(' ')} key={i}>
                <Container depth={this.props.depth + 1} />
            </div>
        )
    }
    render() {
        const size = getRandomInt(5);
        return (
            <div>
                {(new Array(size)).fill().map((v,i) => this.renderContainer(i))}
            </div>
        );
    }
}