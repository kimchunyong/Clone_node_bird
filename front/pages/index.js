import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <>
            <Link href="/about"><a>about</a></Link>
            <Link href="/user/create"><a>create</a></Link>
            <div>hello next!</div>
        </>
    )
}

export default Home;