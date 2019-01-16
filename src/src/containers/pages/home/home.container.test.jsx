import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './home.container';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<HomeContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
