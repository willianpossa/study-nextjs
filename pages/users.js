import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

import axios from 'axios';

const Users = ({ users }) => {
    return (
        <div>
            <Head>
                <title>Usuários</title>
            </Head>
            <ul>
                { users.map(user => (
                    <li key={ user.id }>
                        <Link href={ `/users/${ user.login }` }>
                            <a>{ user.login }</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/">
                <a>Inicio</a>
            </Link>
        </div>
    );
};

Users.getInitialProps = async () => {
    const response = await axios.get('https://api.github.com/orgs/frontendbr/members');

    return {
        users: response.data
    };
}

export default withAnalytics()(Users);