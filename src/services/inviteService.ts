import { inviteAPI } from 'constants/apis';
import { safeJsonStringify } from 'utils';

interface IIviteData {
    name: string,
    email: string
}

export async function postInvite(data: IIviteData) {
    try {
        const response = await fetch(inviteAPI, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
              },
            body: safeJsonStringify(data),
        });
        
        if (response.status !== 200) {
            throw new Error('Registration error');
        }
    
        return response.json();
    } catch(err) {
        throw err;
    }
}
