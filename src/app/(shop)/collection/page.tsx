import React from 'react';
import CollectionPage from './CollectionPage';
import { getCollections } from '@/api/LanieApi';

async function getData() {
    const res = await getCollections();
    return res.data;
}

const Page = async () => {
    const collections = await getData();

    return (
        <>
            <CollectionPage collections={collections} />
        </>
    )
}

export default Page