import { useEffect, useState } from 'react'
import { ProductGalleryDataProps } from '@/utils/types/storeStateProps'
import { supabase } from '@/lib/supabase'
import ProductDisplay from '@/components/ProductDisplay'

import { StyledProductGallery } from './StyledProductGallery'
import { getProductGalleryData } from '@/lib/db/cms/product-list'

const ProductGallery = () => {
    const [products, setProducts] = useState<ProductGalleryDataProps[]>([])

    const getProductData = async () => {
        const data = await getProductGalleryData()
        setProducts(data as ProductGalleryDataProps[])
    }

    useEffect(() => {
        getProductData()
    }, [])

    return (
        <StyledProductGallery>
            {products?.map((data, index) => (
                <ProductDisplay key={index} data={data} />
            ))}
        </StyledProductGallery>
    )
}

export default ProductGallery
