import React from 'react';
import {
    render,
    screen,
} from '@testing-library/react';
import App from 'components/App/App';

describe('App', () => {
    it('should renders with HeroIntro content', () => {
        const {
            asFragment,
        } = render(<App />);

        const header = screen.getByText('BROCCOLI & CO.', { selector: 'header h6'});
        const footer = screen.getByText('Made with ♥ in Melbourne.', { selector: 'footer p'});
        const introTitle = screen.getByText('A better way to enjoy everyday.');

        expect(header).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
        expect(introTitle).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});