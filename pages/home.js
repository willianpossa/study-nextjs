import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';
import styled from 'styled-components';

const Title = styled.h1`
    color: #069;
    font-size: 40px;
`;

const Home = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <img src="/static/panda.jpeg" width="200" />
            <Title>Hello World!</Title>
            <Link href="/users">
                <a>Usuários</a>
            </Link>
        </div>
    );
}

export default withAnalytics()(Home);