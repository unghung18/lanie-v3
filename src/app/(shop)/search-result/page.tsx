import React, { Suspense } from 'react';
import SearchResultPage from './SearchResultPage';

const Page = () => {
    return (
        <Suspense>
            <SearchResultPage />
        </Suspense>
    )
}

export default Page