import React from 'react'
import ProductDisplay from '@/components/ProductDisplay'
import { StyledProductGallery } from './StyledProductGallery'
import { RootState } from '@/lib/redux/store'
import { useSelector } from 'react-redux'

const ProductGallery = () => {
    const data = useSelector((state: RootState) => state.productList)

    return (
        <StyledProductGallery>
            {data?.map((data, index) => {
                return <ProductDisplay key={index} data={data} />
            })}
        </StyledProductGallery>
    )
}

export default ProductGallery
