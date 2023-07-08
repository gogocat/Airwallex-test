export const safeJsonStringify = (data) => {
    try {
        return JSON.stringify(data);
    } catch(err) {
        console.log(err);
    }
}


export const createValidationInitValues = (obj = {}) => {
    const ret = {};

    Object.entries(obj).forEach(([key, value]) => {
        if (value.type === 'string') {
            ret[key] = '';
        }
    });

    return ret;
}
