export const signIn = (userId, firstName, lastName, fullName) => {
    return {
        type: 'SIGN_IN',
        payload: { userId, firstName, lastName, fullName }
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};
