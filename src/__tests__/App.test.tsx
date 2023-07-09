import React from 'react';
import {
    render,
    screen
} from '@testing-library/react';
import App from 'components/App/App';

describe('App', () => {
    it('should renders with HeroIntro content', () => {
        const {
            asFragment,
        } = render(<App />);
    
        const introTitle = screen.getByText('A better way to enjoy everyday.');
        expect(introTitle).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});