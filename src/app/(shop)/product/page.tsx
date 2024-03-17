import React, { Suspense } from 'react';
import ProductPage from './ProductPage';

const page = () => {
    return (
        <Suspense>
            <ProductPage />
        </Suspense>
    )
}

export default page