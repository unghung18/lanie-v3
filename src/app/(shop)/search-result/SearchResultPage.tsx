"use client"

import React, { useState, useEffect } from 'react';
import '../../../styles/search-result/search-result.scss';
import { getProductsBySearch } from '@/api/LanieApi';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductProps } from '@/types/types';
import ProductCard from '@/components/ProductCard';

const SearchResultPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductProps[]>([])
    const [querySearch, setQuerySearch] = useState<string>("");

    const SearchParams = useSearchParams();
    const router = useRouter();
    const query = SearchParams.get("query");

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuerySearch(event.target.value);
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push(`/search-result?query=${querySearch}`)
    }

    const getSearchProductData = async () => {
        setLoading(true);
        const res = await getProductsBySearch(query);

        setProducts(res.data);
        setLoading(false);
    }

    useEffect(() => {
        getSearchProductData()
    }, [query]);

    return (
        <div className='search-page'>
            <div className='breadcum'>
                <div className='breadcum__container container'>
                    <span>TRANG CHỦ</span>
                    <span>/</span>
                    <span>KẾT QUẢ TÌM KIẾM</span>
                </div>
            </div>
            <div className='search-page__container container'>
                <div className='heading'>Found <span>5</span> Results For <span>{query ? `"${query}"` : `""`}</span></div>
                <div className="input-block">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="search" placeholder='Tìm kiếm.....' onChange={handleChangeInput} />
                        <button className='button'>SEARCH</button>
                    </form>
                </div>
                <div className='list-product-block'>
                    <div className='heading'>Tìm kiếm sản phẩm: <span>{query}</span></div>
                    <div className='list-product-main'>
                        {
                            products.map((item) => (
                                <ProductCard product={item} key={item._id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResultPage;