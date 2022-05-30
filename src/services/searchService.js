import * as httpRequest from '~/utils/httpRequest';

const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('/users/search', {
            params: {
                q,
                type,
            },
        });

        return res.data;
    } catch (error) {
        console.log('sth wrong...');
    }
};

export { search };