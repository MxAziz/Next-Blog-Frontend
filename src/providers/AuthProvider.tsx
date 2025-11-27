'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

const AuthProvider = ({ children }:{children: React.ReactNode}) => {
    return (
        // SessionProvider sudhu matro client component e use kora hoi...
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;