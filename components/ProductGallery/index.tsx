import ProductDisplay from '@/components/ProductDisplay'
import { StyledProductGallery } from './StyledProductGallery'
import { supabase } from '@/lib/supabase'
import { useEffect, useState } from 'react'

interface ProductData {
    id: any
    color: any
    price: any
    title: any
    product_images: {
        image_src: any
        image_alt_text: any
    }[]
}

const ProductGallery = () => {
    const [products, setProducts] = useState<ProductData[]>([])

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
