import React from 'react';
import Link from 'next/link';

import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <AppLayout />
            <Link href="/about"><a>about</a></Link>
            <Link href="/user/create"><a>create</a></Link>
            <div>hello next!</div>
        </>
    )
}

export default Home;