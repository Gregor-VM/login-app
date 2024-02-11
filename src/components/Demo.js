import React, { useCallback, useEffect } from 'react'
import { signAsAnonimous } from '../firebase';
import useSetUser from '../hooks/useSetUser';

function Demo() {

    useSetUser();

    const signInAsGuest = useCallback(() => {
        signAsAnonimous();
    }, []);

    useEffect(() => {
        signInAsGuest();
    }, [signInAsGuest]);

    return (
        <div></div>
    );
}

export default Demo
