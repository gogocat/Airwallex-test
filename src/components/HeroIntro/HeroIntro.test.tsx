import React from 'react';
import {
    render,
    screen,
    act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroIntro from './HeroIntro';
import { postInvite } from 'services/inviteService';

jest.mock('services/inviteService', () => ({ 
    postInvite: jest.fn(),
}));

describe('HeroIntro', () => {
    it('should renders with HeroIntro content', () => {
        const {
            asFragment,
        } = render(<HeroIntro />);
    
        const introTitle = screen.getByText('A better way to enjoy everyday.');

        expect(introTitle).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should trigger invite dialog', async () => {
        const user = userEvent.setup();

        render(<HeroIntro />);
    
        const inivteButton = screen.getByRole('button', { name: 'Request an invite' });

        user.click(inivteButton);

        const dialogHeading = await screen.findByText('Request an invite', { selector: 'h2'});

        expect(dialogHeading).toBeInTheDocument();
    });

    it('should submit invite form', async () => {
        const user = userEvent.setup();

        const mockData = {
            fullName: 'Adam',
            email: 'test@test.com'
        };

        render(<HeroIntro />);
    
        const inivteButton = screen.getByRole('button', { name: 'Request an invite' });

        user.click(inivteButton);
        // wait for dialog shows up 
        await screen.findByText('Request an invite', { selector: 'h2'});

        const fullNameInput = screen.getByLabelText('Full name');
        const emailInput = screen.getByLabelText('Email');
        const confirmEmailInput = screen.getByLabelText('Confirm email');
        const sendButton = screen.getByRole('button', { name: 'Send' });

        await act(async () => {
            await user.type(fullNameInput, mockData.fullName);
            await user.type(emailInput, mockData.email);
            await user.type(confirmEmailInput, mockData.email);
        });

        expect(fullNameInput).toHaveValue(mockData.fullName);
        expect(emailInput).toHaveValue(mockData.email);
        expect(confirmEmailInput).toHaveValue(mockData.email);

        await act(async () => {
            await user.click(sendButton);
        });

        // const sumittingButton = screen.getByRole('button', { name: 'Sending, please wait...' });

        expect(postInvite).toHaveBeenCalledTimes(1);
        expect(postInvite).toHaveBeenCalledWith({
            email: mockData.email,
            name: mockData.fullName
        });

        // const successTitle = await screen.findByText('All done!', { selector: 'h2' });
        // expect(sumittingButton).toBeInTheDocument();
    });
});