'use server';

import pg, { Client } from 'pg';

export async function getDbConn() {
    const client = new Client({
            user: 'postgres',
            host: 'localhost',
            port: 5433,
            database: 'search-matrix',
        })
    await client.connect()
    return client;
}
