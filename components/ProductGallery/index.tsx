import { useEffect, useState } from 'react'
import { ProductGalleryDataProps } from '@/utils/types/storeStateProps'
import { supabase } from '@/lib/supabase'
import ProductDisplay from '@/components/ProductDisplay'

import { StyledProductGallery } from './StyledProductGallery'

const ProductGallery = () => {
    const [products, setProducts] = useState<ProductGalleryDataProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select(
                        `id, color, price, title,
                        product_images(image_src, image_alt_text)`
                    )
                    .eq(`product_images.image_type`, `main`)
                if (error) {
                    console.error(error)
                    return
                }
                setProducts(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
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
