import React from 'react'
import ProductDisplay from '@/components/ProductDisplay'
import { StyledProductGallery } from './StyledProductGallery'

const ProductGallery = () => {
    return (
        <StyledProductGallery>
            <ProductDisplay />
        </StyledProductGallery>
    )
}

export default ProductGallery
