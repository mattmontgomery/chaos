import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import Container from './Container';
import Wrapper from './Wrapper';

render(
    <Wrapper>
        <Container iterations={10} maxDepth={3} />
    </Wrapper>,
    document.getElementById('root')
);